<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Model\Tarefa;
use App\Model\Helper;
use App\Model\Pesquisa;
use App\User;

class RelatorioController extends Controller
{
    //Gerar PDF da acção ou relatorio com 10 acçõs
    public function gerarAccaoGeralPdf($codigo){
        $tarefa = Tarefa::getTarefaByCodigo($codigo);
        
        $dataSolicitacao = date('Y-m-d l',strtotime($tarefa->data_solicitacao));

        //Contar tempo decorrido de uma actividade
        $tempo_ocorrido = Helper::contIntervaloDias($dataSolicitacao);

        $tarefa = Helper::setTempoVisual($tarefa);
        $solicitantePessoa = User::getPessoa($tarefa->solicitante);
        $solicitante = User::getCurtoNome($solicitantePessoa->name);
        $responsavelPessoa = User::getPessoa($tarefa->responsavel);
        $responsavel = User::getCurtoNome($responsavelPessoa->name);
   
        if(is_null($solicitantePessoa->foto)){
            $imageSolicitante = base64_encode(file_get_contents(public_path('/images/users/default.jpg')));
        }else{
            $imageSolicitante = base64_encode(file_get_contents(public_path('/images/users/'.$solicitantePessoa->foto)));
        }

        if(is_null($responsavelPessoa->foto)){
            $imageResponsavel = base64_encode(file_get_contents(public_path('/images/users/default.jpg')));
        }else{
            $imageResponsavel = base64_encode(file_get_contents(public_path('/images/users/'.$responsavelPessoa->foto)));
        }              

        //Cont Acções de uma actividade
        $contAccoes = DB::table('tarefa_operacao')
                ->where('codigo','=',$codigo)
                ->count();

        //Pega as ultimas 10 actividades
        $accoes = DB::table('tarefa_operacao')
                ->where('codigo','=',$codigo)
                ->orderBy('updated_at','DESC')
                ->take(10)
                ->get();
        
        $restantesAccoes = $contAccoes-count($accoes);

        //Variavel para armazenar total de hopras de uma acção  
        $total_tempo_actividade=0;

        foreach($accoes as $accao):
            $user = User::getPessoa($accao->utilizador_codigo);
            $total_tempo_actividade = $total_tempo_actividade+$accao->tempo_acao;

            $accao->utilizador_codigo = User::getCurtoNome($user->name);
            $accao->id = base64_encode(file_get_contents(public_path('/images/users/'.$user->foto)));
            $accao->seta = base64_encode(file_get_contents(public_path('/images/seta.png')));
            $accao = Helper::setTempoVisualAccao($accao);
            $accao->estado = Helper::getEstado($accao->estado);
        endforeach;

        //Converte segundos para hora
        $total_tempo_actividade = gmdate("H:i:s",$total_tempo_actividade);

        //Montar assunto
        $assunto = 'Relatório de Actividade : '.$tarefa->tipo.' : '.$tarefa->titulo;
    
        return view('layouts.pdfAccaoGeral',compact('assunto','tarefa','imageSolicitante','imageResponsavel','solicitante','responsavel','accoes','contAccoes','restantesAccoes','tempo_ocorrido','total_tempo_actividade'));
    }

    //Gerar relatorio da Acção
    public function gerarAccaoPdf($codigo,$data){
        $accao= DB::table('tarefa_operacao')
                ->join('tarefa', 'tarefa_operacao.id', '=', 'tarefa.id')
                ->join('users', 'users.id', '=', 'tarefa.id_user')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->select('tarefa.created_at','tarefa_operacao.codigo','tarefa_operacao.utilizador_codigo','tarefa_operacao.utilizador_pergunta','tarefa_operacao.estado','tarefa_operacao.avanco','tarefa_operacao.acOrigemDado','tarefa_operacao.descricao','tarefa.titulo','tarefa.descricao as tarefa_descricao','tipo.tipo_abreviado','users.name')
                ->where('tarefa_operacao.codigo','=',$codigo)
                ->where('tarefa_operacao.created_at','=',$data)
                ->first();

        //Pega as ultimas 10 actividades
        $accoes = DB::table('tarefa_operacao')
                ->select('avanco','estado','created_at','utilizador_codigo','descricao','tempo_acao')
                ->where('codigo','=',$codigo)
                ->orderBy('updated_at','DESC')
                ->take(10)
                ->get();
        
            $total_tempo_actividade=0;
            $contAccoes=DB::table('tarefa_operacao')->where('codigo','=',$codigo)->count();

            foreach($accoes as $acc):
                $user = User::getPessoa($acc->utilizador_codigo);
                $acc->utilizador_codigo = User::getCurtoNome($user->name);
                $acc->id = base64_encode(file_get_contents(public_path('/images/users/'.$user->foto)));
                $acc->estado = Helper::getEstado($acc->estado);
                $total_tempo_actividade = $total_tempo_actividade+$acc->tempo_acao;
            endforeach;
            
            //Converte segundos para hora
            $total_tempo_actividade = gmdate("h:i:s",$total_tempo_actividade);

        $utilizador_suporte='';
        
        //Verificar se existe utilizador suporte
        if(!is_null($accao->utilizador_pergunta)){
            $utilizador_suporte = User::getPessoa($accao->utilizador_pergunta);
            $utilizador_suporte=$utilizador_suporte->name;
            $utilizador_suporte=Helper::getShortName($utilizador_suporte);
        } 
        
        $utilizador_responsavel = User::getPessoa($accao->utilizador_codigo);
        $utilizador_responsavel=$utilizador_responsavel->name;
        $utilizador_responsavel=Helper::getShortName($utilizador_responsavel);

        //Montar assunto
        $assunto=Helper::getEstado($accao->estado).' ('.$accao->avanco.' %) : '.$accao->tipo_abreviado.' : '.$accao->titulo;
        
        return view('layouts.pdfAccao',compact('accao','utilizador_suporte','utilizador_responsavel','assunto','accoes','contAccoes','total_tempo_actividade'));
    }

    //Abrir relatorio de uma acção apartir da tabela de listagem, onde o topo é a linha selecionada
    public function gerarRelatorioAccao($codigo,$avanco){
        $accao= DB::table('tarefa_operacao')
                ->join('tarefa', 'tarefa_operacao.id', '=', 'tarefa.id')
                ->join('users', 'users.id', '=', 'tarefa.id_user')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->select('tarefa.created_at','tarefa_operacao.codigo','tarefa_operacao.utilizador_codigo','tarefa_operacao.utilizador_pergunta','tarefa_operacao.estado','tarefa_operacao.avanco','tarefa_operacao.acOrigemDado','tarefa.titulo','tarefa.descricao as tarefa_descricao','tipo.tipo_abreviado','users.name')
                ->where('tarefa_operacao.codigo','=',$codigo)
                ->first();
                
        //Pega as ultimas 10 actividades
        $accoes = DB::table('tarefa_operacao')
                ->select('avanco','estado','created_at','utilizador_codigo','descricao','tempo_acao')
                ->where('codigo','=',$codigo)
                ->where('avanco','<=',$avanco)
                ->orderBy('updated_at','DESC')
                ->take(10)
                ->get();

            $accao->avanco = $accoes[0]->avanco;
            $accao->estado = $accoes[0]->estado;
        
            $total_tempo_actividade=0;
            $contAccoes=count($accoes);

            foreach($accoes as $acc):
                $user = User::getPessoa($accao->utilizador_codigo);
                $acc->utilizador_codigo = User::getCurtoNome($user->name);
                $acc->id = base64_encode(file_get_contents(public_path('/images/users/'.$user->foto)));
                $acc->estado = Helper::getEstado($acc->estado);
                $total_tempo_actividade = $total_tempo_actividade+$acc->tempo_acao;
            endforeach;
           
            //Converte segundos para hora
            $total_tempo_actividade = gmdate("H:i:s",$total_tempo_actividade);
           
        $utilizador_suporte='';
        
        //Verificar se existe utilizador suporte
        if(!is_null($accao->utilizador_pergunta)){
            $utilizador_suporte = User::getPessoa($accao->utilizador_pergunta);
            $utilizador_suporte=$utilizador_suporte->name;
            $utilizador_suporte=Helper::getShortName($utilizador_suporte);
        } 
        
        $utilizador_responsavel = User::getPessoa($accao->utilizador_codigo);
        $utilizador_responsavel=$utilizador_responsavel->name;
        $utilizador_responsavel=Helper::getShortName($utilizador_responsavel);

        //Montar assunto
        $assunto=Helper::getEstado($accao->estado).' ('.$accao->avanco.' %) : '.$accao->tipo_abreviado.' : '.$accao->titulo;
        
        return view('layouts.pdfAccao',compact('accao','utilizador_suporte','utilizador_responsavel','assunto','accoes','contAccoes','total_tempo_actividade'));
    }

    //Gerar relatório da actividade
    public function gerarTarefaPdf($codigo){
        $tarefa = Tarefa::getTarefaByCodigo($codigo);
               
        $tarefa = Helper::setTempoVisual($tarefa);
        $solicitantePessoa = User::getPessoa($tarefa->solicitante);
        $solicitante = $solicitantePessoa->name;
        $responsavelPessoa = User::getPessoa($tarefa->responsavel);
        $responsavel = $responsavelPessoa->name;
   
        if(is_null($solicitantePessoa->foto)){
            $imageSolicitante = base64_encode(file_get_contents(public_path('/images/users/default.jpg')));
        }else{
            $imageSolicitante = base64_encode(file_get_contents(public_path('/images/users/'.$solicitantePessoa->foto)));
        }

        if(is_null($responsavelPessoa->foto)){
            $imageResponsavel = base64_encode(file_get_contents(public_path('/images/users/default.jpg')));
        }else{
            $imageResponsavel = base64_encode(file_get_contents(public_path('/images/users/'.$responsavelPessoa->foto)));
        }       

        return View('layouts.pdfTarefa',compact('tarefa','solicitante','responsavel','imageSolicitante','imageResponsavel'));
    }

    //lista de pesquisas efectuadas
    public function listarPesquisas(){
        $pesquisas = DB::table('pesquisas')
                    ->join('tarefa','tarefa.codigo','=','pesquisas.codigo')
                    ->select('tarefa.id as id_tarefa','pesquisas.codigo','tarefa.titulo','tarefa.responsavel','pesquisas.qtd','pesquisas.created_at')
                    ->where('pesquisas.responsavel',Auth::user()->username)
                    ->orderBy('pesquisas.created_at','DESC')
                    ->take(25)
                    ->get();

        return response()->json($pesquisas,200);    
    }
}
