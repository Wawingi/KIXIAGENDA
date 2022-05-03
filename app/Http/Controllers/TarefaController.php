<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Tarefa;
use App\Model\TarefaOperacao;
use App\Model\Estatistica;
use App\Model\Helper;
use App\Model\Pesquisa;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Exports\TarefasExport;
use App\Exports\TarefaOperacaoExport;
use Maatwebsite\Excel\Facades\Excel;
use Cache;
use PDF;
Use Exception;

class TarefaController extends Controller
{
    public function registarTarefa(Request $request){
        try{
            $tarefa = new Tarefa;  
            $tarefa->versao_sistema = 'KAW202';
            $tarefa->id_tipo = $request->selectedTipo;
            $tarefa->titulo = $request->titulo;
            $tarefa->id_origem = $request->selectedOrigem;
            $tarefa->origem_dado = $request->dado_origem;
            $tarefa->tempo = $request->tempo * 60; //tempo * 60
            //Fatiar o departamento origem
            $dpto_origem = explode("-",$request->departamento_origem);   
            if($dpto_origem[0]==99||$dpto_origem[0]==26){
                $tarefa->departamento_origem = $dpto_origem[1].'-'.$dpto_origem[2];
                $tarefa->id_dpto_origem = $dpto_origem[0];
            }else{
                $tarefa->departamento_origem = $dpto_origem[1];
                $tarefa->id_dpto_origem = $dpto_origem[0];
            }

            //Fatiar o departamento destino
            $dpto_destino = explode("-",$request->departamento_destino);
            if($dpto_destino[0]==99||$dpto_destino[0]==26){
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
            $tarefa->data_envio = date('Y-m-d H:i:s');
            $tarefa->codigo = Tarefa::generateCodigo(Auth::user()->username);
            $tarefa->id_user = Auth::user()->id;

            if($tarefa->save()){
                //Registar primeira acção da actividade
                $operacao = new TarefaOperacao;
        
                $operacao->id = $tarefa->id;
                $operacao->codigo = $tarefa->codigo;
                $operacao->acOrigemDado = $tarefa->id_origem.' : '.$tarefa->origem_dado;
                $operacao->utilizador_codigo = $tarefa->responsavel;   
                $operacao->descricao = 'Registo de atividade.';  
                
                if($request->selectedTipo!='INACFE'){
                    $operacao->estado = 'ACRD';
                    $operacao->avanco = 0;
                    $operacao->tempo_acao = $tarefa->tempo; 
                }else{
                    $operacao->estado = 'ACCO';
                    $operacao->avanco = 100;
                    $operacao->tempo_acao = 0;
                } 
                
                $operacao->utilizador_pergunta = null;
                $operacao->utilizador_registo =  Auth::user()->username;

                if($operacao->save()){}
                
                return response()->json($tarefa->codigo,200);            
            }
        }catch (Exception $e){
            return response()->json('Verifique os dados informados.',201);
        }
    }

    public function exportarTarefaCSV()
    {
        $now = date('Y-m-d');
        return Excel::download(new TarefasExport, 'tarefas_'.$now.'.xlsx');  
    }
 
    public function exportarOperacaoCSV()
    {
        $now = date('Y-m-d');
        return Excel::download(new TarefaOperacaoExport, 'operacao_'.$now.'.xlsx');  
    }

    public function pegaTarefasConcluidas(){
        $tarefas = Tarefa::getTarefasConcluidas();
        return response()->json($tarefas,200);
    }

    public function pegaTarefas(){
        $tarefas = Tarefa::getMinhasTarefas($now = date('Y-m-d'));
        return response()->json($tarefas,200);
    }

    public function pegaGeralTarefas(){
        $tarefas = Tarefa::getGeralTarefas(); 
        return response()->json($tarefas,200);        
    }

    public function pegaTarefasAtrasadas(){
        $tarefas = Tarefa::getTarefasAtrasadas($now = date('Y-m-d'));
        return response()->json($tarefas,200);               
    }

    public function pegaTarefasAgendadas(){
        $tarefas = Tarefa::getTarefasAgendadas($now = date('Y-m-d'));//dd($tarefas);
        return response()->json($tarefas,200);               
    }

    public function verActividade($id){
        $actividade = Tarefa::getTarefaById($id);
      
        $actividade->user_solicitante = User::getFoto($actividade->solicitante);
        $actividade->user_responsavel = User::getFoto($actividade->responsavel);

        $actividade->solicitante = User::getCurtoNome(User::getPessoa($actividade->solicitante)->name);
        $actividade->responsavel = User::getCurtoNome(User::getPessoa($actividade->responsavel)->name);
       
        return response()->json($actividade,200);
    }

    public function verLastAccao($idtarefa){
        $accao = DB::table('tarefa_operacao')->select('created_at','descricao','estado','avanco','tempo_acao','utilizador_codigo')->where('id',$idtarefa)->latest('created_at')->first();
        $accao->estado = Tarefa::siglaToEstado($accao->estado);
        $accao->tempo_acao = Tarefa::secondToHour($accao->tempo_acao);
        $accao->created_at = date('d-m-Y',strtotime($accao->created_at));
        return response()->json($accao,200);
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
        $tarefa=Tarefa::objectoActividade($request->codigo);
        $operacao = TarefaOperacao::getUltimaOperacao($request->codigo);
        
        //Verificar a data informada de operação nao ser menor que a data da ultima operação
        /*if(date('Y-m-d H:i:s',strtotime($request->data_operacao)) < $operacao->created_at){
            return response()->json('A data hora da operação deve ser superior.',201);
        }*/        

        //Não fazer acção na actividade concluída.
        if($tarefa->avanco==100 && $request->estado!='ACRE'){
            return response()->json('Esta actividade encontra-se concluída.',201);
        }
        //Não concluir actividades de conclusão automaticas
        if($tarefa->id_tipo=='GEREGU' && $tarefa->versao_sistema=='PROARM'){
            return response()->json('Esta actividade não pode ser concluída, ela conclue-se de forma automática.',201);    
        }

        //Não reactivar actividade com mais de 30 dias de cumprimento
        $di = date('Y-m-d',strtotime($tarefa->data_cumprimento));
        $data_inicio = strtotime($di);
        $data_final = strtotime(date('Y-m-d'));
        
        $intevalo_data=($data_final - $data_inicio)/60/60/24;
      
        if($tarefa->avanco<100 && $request->estado=='ACRE' && $intevalo_data>30){
            return response()->json('Esta actividade excedeu o tempo de reactivação ou ainda não foi concluída.',201);    
        }

        //Avanço deve sempre ser maior q a existente excepto reactivada
        if($tarefa->avanco>$request->avanco && $request->estado!='ACRE'){
            return response()->json('A percentagem ['.$request->avanco.'] informada deve ser maior do que a ['.$tarefa->avanco.'] última informada.',201);          
        }

        $operacao = new TarefaOperacao;
        $operacao->id = $request->tarefa_id;
        $operacao->codigo = $request->codigo;
        $operacao->acOrigemDado = $request->id_origem.' : '.$request->acOrigemDado;
        //Se actividade for Reagendada então data registo é data actual senao pega a data da operação
        if($request->estado=='ACRG'){
            $operacao->created_at = date('Y-m-d H:i:s');
            $operacao->descricao = $request->descricao_accao."\r\n\r\n".' ==> Esta actividade esta sendo reagendada para o dia '.date('d-m-Y',strtotime($request->data_operacao));
        }else{
            $operacao->created_at = $request->data_operacao;  
            $operacao->descricao = $request->descricao_accao;  
        }
        $operacao->utilizador_codigo = $request->utilizador_codigo;   
        $operacao->estado = $request->estado;
        $operacao->avanco = $request->avanco; 
        $operacao->tempo_acao = $request->tempo_acao * 60; //tempo * 60  
        $operacao->utilizador_pergunta = $request->utilizador_pergunta;
        $operacao->utilizador_registo =  Auth::user()->username;
         

        if($operacao->save()){
            $tarefa = Tarefa::find($request->tarefa_id);
            //Quando outro user concluir actividade registada então ele passa ser responsavel
            if($tarefa->avanco==0 && $tarefa->responsavel!=$request->utilizador_codigo && $request->avanco==100){
                $tarefa->responsavel = $operacao->utilizador_codigo;
                $tarefa->save();
            }
            //Criar avanço da actividade
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
            //Caso actividade reactivada, então actualiza a data para null
            if($request->estado=='ACRE'){
                $tarefa->data_cumprimento = NULL;
                $tarefa->data_reactivacao = $request->data_operacao;
                $tarefa->data_prevista = $request->data_operacao;
                $tarefa->save();
            }

            return response()->json($operacao,200); 
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
                ->select('tarefa_operacao.created_at','tarefa_operacao.codigo','tarefa_operacao.descricao','tarefa_operacao.utilizador_codigo','tarefa_operacao.utilizador_pergunta','tarefa_operacao.estado','tarefa_operacao.avanco','tarefa_operacao.tempo_acao','users.name')
                ->where('tarefa.id','=',$idtarefa)
                ->orderBy('tarefa_operacao.updated_at','DESC')
                ->get();
        $accoes = $this->secondToHour($accoes);
        
        foreach($accoes as $accao){
            $accao->fotoResp = User::getFoto($accao->utilizador_codigo);
            $accao->fotoSuport = User::getFoto($accao->utilizador_pergunta);
        }

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
        $previus = date('Y-m-d',strtotime("-10 days"));
        $now = date('Y-m-d');

        $tarefas = DB::table('tarefa')
                ->where(DB::raw('DATE(tarefa.created_at)'),'=',$now)
                //->where('tarefa.codigo','MA3655EA')
                ->orWhere(DB::raw('DATE(tarefa.created_at)'),'>',$previus)
                ->orderBy('tarefa.created_at','DESC')
                ->get()->toJson(JSON_PRETTY_PRINT);

        return response($tarefas, 200);
    }

    public function getOperacaoAPI(){
        $previus = date('Y-m-d',strtotime("-5 days"));
        $now = date('Y-m-d');
        
        $operacoes = DB::table('tarefa_operacao')
                ->where(DB::raw('DATE(updated_at)'),'=',date('Y-m-d'))
                ->orWhere(DB::raw('DATE(created_at)'),'>',$previus)
                ->orderBy('updated_at','DESC')
                ->get();
        
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
    
    public function contHoras(){
        $total_accoes= DB::table('tarefa_operacao')
                ->join('tarefa', 'tarefa_operacao.id', '=', 'tarefa.id')
                ->join('users', 'users.id', '=', 'tarefa.id_user')
                ->select('tarefa_operacao.tempo_acao','users.username','tarefa_operacao.created_at')
                ->where(DB::raw('DATE(tarefa_operacao.created_at)'),'=',date('Y-m-d'))
                ->where('tarefa_operacao.utilizador_codigo','=',Auth::user()->username)  
                ->sum('tarefa_operacao.tempo_acao');

        $total_tarefa_feita = DB::table('tarefa')
                        ->join('users', 'users.id', '=', 'tarefa.id_user')
                        ->select('tarefa.tempo','users.username')
                        ->where(DB::raw('DATE(tarefa.created_at)'),'=',date('Y-m-d'))
                        ->where('tarefa.responsavel','=',Auth::user()->username)  
                        ->where('tarefa.id_tipo','=','INACFE')  
                        ->sum('tarefa.tempo'); 
        
        $total_tempo=$total_accoes+$total_tarefa_feita;

        $estatistica = new Estatistica;
        $estatistica->horas_trabalhadas=gmdate("H:i:s",$total_tempo);
        $estatistica->utilizador=Auth::user()->username;
        $estatistica->horas_bruto=$total_tempo;

        return response()->json($estatistica,200); 
    }

    //Auditoria da tarefa pesquisada
    public function savePesquisa($codigo){
        $contPesquisas = DB::table('pesquisas')->where('codigo',$codigo)->count();

        $pesquisa = new Pesquisa;
        $pesquisa->codigo = $codigo;
        $pesquisa->qtd = ++$contPesquisas;
        if($pesquisa->save()){

        }
    }

    public function pesquisarTarefa($codigo){
        $tarefa = DB::table('tarefa')->where('codigo',$codigo)->value('id');
        if($tarefa!=''){
            $this->savePesquisa($codigo);
            return response()->json($tarefa,200);
        } else
            return response()->json('Nenhuma actividade relacionada com código fornecido.',201);
    }
}