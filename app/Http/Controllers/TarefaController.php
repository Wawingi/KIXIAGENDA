<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Tarefa;
use App\Model\TarefaOperacao;
use App\Model\Estatistica;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Cache;
//Use Exception;

class TarefaController extends Controller
{
    public function generateCodigo(){
        dd(Tarefa::generateCodigo('wawi.anto'));    
    }

    public function registarTarefa(Request $request){
        $tarefa = new Tarefa;  
        $tarefa->versao_sistema = 'KAW100';
        $tarefa->id_tipo = $request->selectedTipo;
        $tarefa->titulo = $request->titulo;
        $tarefa->id_origem = $request->selectedOrigem;
        $tarefa->origem_dado = $request->dado_origem;
        $tarefa->tempo = $request->tempo * 60; //tempo * 60
        //Fatiar o departamento origem
        $dpto_origem = explode("-",$request->departamento_origem);   
        if($dpto_origem[0]==99){
            $tarefa->departamento_origem = $dpto_origem[1].'-'.$dpto_origem[2];
            $tarefa->id_dpto_origem = $dpto_origem[0];
        }else{
            $tarefa->departamento_origem = $dpto_origem[1];
            $tarefa->id_dpto_origem = $dpto_origem[0];
        }

        //Fatiar o departamento destino
        $dpto_destino = explode("-",$request->departamento_destino);
        if($dpto_destino[0]==99){
            $tarefa->departamento_destino = $dpto_destino[1].'-'.$dpto_destino[2]; 
            $tarefa->id_dpto_destino = $dpto_destino[0]; 
        }else{
            $tarefa->departamento_destino = $dpto_destino[1]; 
            $tarefa->id_dpto_destino = $dpto_destino[0]; 
        }
        
        $tarefa->solicitante = $request->selectedSolicitante;
        $tarefa->data_solicitacao = $request->data_solicitacao;
        $tarefa->responsavel = $request->selectedResponsavel;
        $tarefa->data_prevista = $request->data_execucao;
        $tarefa->ut_registo = Auth::user()->username;
        $tarefa->descricao = $request->descricao;     
        $tarefa->data_reactivacao = null;
        //VerificAR SE é actividade feita
        if($request->selectedTipo=='INACFE'){
            $tarefa->data_cumprimento = date('Y-m-d H:i:s');
            $tarefa->avanco = 100;
        }else{ 
            $tarefa->data_cumprimento = null;
            $tarefa->avanco = 00;    
        }
        $tarefa->data_envio = $request->data_solicitacao;
        $tarefa->codigo = Tarefa::generateCodigo($request->selectedResponsavel);
        $tarefa->id_user = Auth::user()->id;

        if($tarefa->save()){
            $id_actividade=DB::table('tarefa')
            ->where('codigo','=',$tarefa->codigo)                
            ->value('id'); 
            return response()->json($id_actividade,200);            
        }
    }

    public function pegaTarefas(){
        $tarefas = Tarefa::getMinhasTarefas($now = date('Y-m-d'));
        return response()->json($tarefas,200);
    }

    public function pegaGeralTarefas(){
        //$expiration = 10; //Segundos
        //$key = 'tarefa_';
        $tarefas = DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->join('users','users.id','=','tarefa.id_user')
                ->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.responsavel','tarefa.data_solicitacao','tarefa.data_cumprimento','tarefa.avanco','tipo.tipo','users.foto')
                ->orderBy('tarefa.created_at','DESC')
                ->get();
        return response()->json($tarefas,200);        
        /*return Cache::remember($key,$expiration, function() use ($tarefas) {
            return response()->json($tarefas,200);
        });*/
    }

    public function pegaTarefasAtrasadas(){
        $tarefas = Tarefa::getTarefasAtrasadas($now = date('Y-m-d'));
        return response()->json($tarefas,200);               
    }

    public function pegaTarefasAgendadas(){
        $tarefas = Tarefa::getTarefasAgendadas($now = date('Y-m-d'));//dd($tarefas);
        return response()->json($tarefas,200);               
    }

    public function contActividades(){
        $estatistica = new Estatistica;     
        $estatistica->qtdTarefasConcluidas = count(Tarefa::getMinhasTarefas($now = date('Y-m-d')));
        $estatistica->qtdTarefasAtrasadas = count(Tarefa::getTarefasAtrasadas($now = date('Y-m-d')));
        $estatistica->qtdTarefasAgendadas = count(Tarefa::getTarefasAgendadas($now = date('Y-m-d'))); 

        return response()->json($estatistica,200);  
    }

    public function verActividade($id){
        $actividade = DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->join('origem','origem.id','=','tarefa.id_origem')
                ->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.origem_dado','tarefa.tempo','tarefa.solicitante','tarefa.responsavel','tarefa.data_solicitacao','tarefa.data_prevista','tarefa.departamento_origem','tarefa.departamento_destino','tarefa.descricao','tipo.tipo','origem.titulo as origem')
                ->where('tarefa.id','=',$id)
                ->first();
        return response()->json($actividade,200);
    }

    public function editarTarefa(Request $request){
        $tarefa = Tarefa::find($request->id);
        $tarefa->id_tipo = $request->selectedTipo;
        $tarefa->titulo = $request->titulo;
        $tarefa->id_origem = $request->selectedOrigem;
        $tarefa->origem_dado = $request->dado_origem;
        $tarefa->tempo = $request->tempo;
        $tarefa->departamento_origem = $request->departamento_origem;
        $tarefa->solicitante = $request->selectedSolicitante;
        $tarefa->data_solicitacao = $request->data_solicitacao;
        $tarefa->departamento_destino = $request->departamento_destino;
        $tarefa->responsavel = $request->selectedResponsavel;
        $tarefa->data_prevista = $request->data_prevista;
        $tarefa->descricao = $request->descricao;

        $tarefa->save();
    }

    public function registarOperacaoTarefa(Request $request){
        $operacao = new TarefaOperacao;
        $operacao->id = $request->tarefa_id;
        $operacao->codigo = $request->codigo;
        $operacao->acOrigemDado = $request->id_origem.' : '.$request->acOrigemDado;
        $operacao->created_at = $request->data_operacao;
        $operacao->utilizador_codigo = $request->utilizador_codigo; 
        $operacao->descricao = $request->descricao_accao;
        $operacao->estado = $request->estado;
        $operacao->avanco = $request->avanco; 
        $operacao->tempo_acao = $request->tempo_acao * 60; //tempo * 60  
        $operacao->utilizador_pergunta = $request->utilizador_pergunta;
        $operacao->utilizador_registo =  Auth::user()->username;
        
        if($operacao->save()){
            //Criar avanço da actividade
                $tarefa = Tarefa::find($request->tarefa_id);
                $tarefa->avanco = $request->avanco;
                $tarefa->save();
            //Actualizar a data de cumprimento caso avanço seja 100%
            if($request->avanco==100){
                $tarefa->data_cumprimento = date('Y-m-d H:i:s');
                $tarefa->save();
            }
            //Caso actividade agendada, então actualiza a data na tarefa
            if($request->estado=='ACRG'){
                $tarefa->data_prevista = $request->data_operacao;
                $tarefa->save();
            }
        };         
    }

    //Converter segundos em hora
    public function secondToHour($accoes){
        foreach($accoes as $accao):
            switch($accao->tempo_acao){
                case 300:$accao->tempo_acao='0:05'; break;                  
                case 600:$accao->tempo_acao='0:10'; break;                  
                case 900:$accao->tempo_acao='0:15'; break;                  
                case 1200:$accao->tempo_acao='0:20'; break;                  
                case 1800:$accao->tempo_acao='0:30'; break;                  
                case 2400:$accao->tempo_acao='0:40'; break;                  
                case 3000:$accao->tempo_acao='0:50'; break;                  
                case 3600:$accao->tempo_acao='1:00'; break;                  
                case 5400:$accao->tempo_acao='1:30'; break;                  
                case 7200:$accao->tempo_acao='2:00'; break;
                case 9000:$accao->tempo_acao='2:30'; break;
                case 10800:$accao->tempo_acao='3:00'; break;
                case 12600:$accao->tempo_acao='3:30'; break;
                case 14400:$accao->tempo_acao='4:00'; break;
                case 16200:$accao->tempo_acao='4:30'; break;
                case 18000:$accao->tempo_acao='5:00'; break;
                case 19800:$accao->tempo_acao='5:30'; break;
                case 21600:$accao->tempo_acao='6:00'; break;
                case 23400:$accao->tempo_acao='6:30'; break;
                case 25200:$accao->tempo_acao='7:00'; break;
            }       
        endforeach;

        return $accoes;
    }

    //Listar as acções de uma tarefa
    public function pegaAccoes($idtarefa){
        $accoes = DB::table('tarefa_operacao')
                ->join('tarefa', 'tarefa_operacao.id', '=', 'tarefa.id')
                ->join('users', 'users.id', '=', 'tarefa.id_user')
                ->select('tarefa_operacao.created_at','tarefa_operacao.descricao','tarefa_operacao.utilizador_codigo','tarefa_operacao.utilizador_pergunta','tarefa_operacao.estado','tarefa_operacao.avanco','tarefa_operacao.tempo_acao','users.name')
                ->where('tarefa.id','=',$idtarefa)
                ->get();
        
        $accoes = $this->secondToHour($accoes);

        return response()->json($accoes,200);
    }

    //API's para disponibilizar tarefas e acções
    //Converter sigla estado para estado
    public function siglaToEstado($operacoes){
        foreach($operacoes as $op):
           
            switch($op->estado){
                case 'ACCO':$op->estado = 'Actividade Concluída'; break;                  
                case 'ACCU':$op->estado = 'Actividade em Curso'; break;                  
                case 'ACRG':$op->estado = 'Actividade Reagendada'; break;                  
                case 'ACRT':$op->estado = 'Actividade Reativada'; break;                  
                case 'CUSS':$op->estado = 'Em Curso Solic. Suporte'; break;                  
                case 'CURS':$op->estado = 'Em Curso Resp. Suporte'; break;               
            }       
        endforeach;
        
        return $operacoes;
    }

    public function getTarefasAPI(){
        $tarefas = DB::table('tarefa')
                //->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                //->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.solicitante','tarefa.responsavel','tarefa.updated_at')
                ->where(DB::raw('DATE(tarefa.updated_at)'),'=',date('Y-m-d'))
                ->orderBy('tarefa.created_at','DESC')
                ->get()->toJson(JSON_PRETTY_PRINT);

        return response($tarefas, 200);
    }

    public function getOperacaoAPI(){
        $operacoes = DB::table('tarefa_operacao')
                //->where(DB::raw('DATE(tarefa.updated_at)'),'=',date('Y-m-d'))
                ->where(DB::raw('DATE(updated_at)'),'=',date('Y-m-d'))
                ->orderBy('updated_at','DESC')
                ->get();
        //$operacoes = $this->siglaToEstado($operacoes)->toJSON();
        return response($operacoes, 200);
    }

    //Registar as tarefas antigas não concluídas no Kixiagenda web
    public function sincronizarTarefas(Request $request){
        try{
            $tarefa = new Tarefa;
            $tarefa->departamento_origem = $request->departamento_origem;
            $tarefa->departamento_destino = $request->departamento_destino;
            $tarefa->solicitante = $request->solicitante;
            $tarefa->responsavel = $request->responsavel;
            $tarefa->ut_registo = $request->ut_registo;
            $tarefa->titulo = $request->titulo;
            $tarefa->descricao = $request->descricao;
            $tarefa->avanco = $request->avanco;
            $tarefa->tempo = $request->tempo;
            $tarefa->id_tipo = $request->id_tipo;
            $tarefa->id_origem = $request->id_origem;
            $tarefa->origem_dado = $request->origem_dado;
            $tarefa->data_solicitacao = $request->data_solicitacao;
            $tarefa->data_prevista = $request->data_prevista;
            $tarefa->data_reactivacao = $request->data_reactivacao;
            $tarefa->data_cumprimento = $request->data_cumprimento;
            $tarefa->data_envio = $request->data_envio;
            $tarefa->codigo = $request->codigo;
            $tarefa->id_dpto_origem = $request->id_dpto_origem;
            $tarefa->id_dpto_destino = $request->id_dpto_destino;
            $tarefa->versao_sistema = $request->versao_sistema;
            $tarefa->id_user = $request->id_user;
            $tarefa->created_at = $request->created_at;
            $tarefa->updated_at = $request->updated_at;

                
            if($tarefa->save()){
                return response()->json(200);
            }else{
                return response()->json(401);
            }
        } catch (Exception $ex) {
            return $ex->getMessage();
        }
    }

}
