<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Tarefa;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TarefaController extends Controller
{
    public function registarTarefa(Request $request){
        $tarefa = new Tarefa;  
        $tarefa->id_tipo = $request->selectedTipo;
        $tarefa->titulo = $request->titulo;
        $tarefa->id_origem = $request->selectedOrigem;
        $tarefa->origem_dado = $request->dado_origem;
        $tarefa->tempo = $request->tempo * 60; //tempo * 60
        $tarefa->departamento_origem = $request->departamento_origem;
        $tarefa->solicitante = $request->selectedSolicitante;
        $tarefa->data_solicitacao = $request->data_solicitacao;
        $tarefa->departamento_destino = $request->departamento_destino;
        $tarefa->responsavel = $request->selectedResponsavel;
        $tarefa->data_prevista = $request->data_execucao;
        $tarefa->ut_registo = Auth::user()->username;
        $tarefa->descricao = $request->descricao;
        $tarefa->avanco = 00;       
        $tarefa->data_reactivacao = null;
        $tarefa->data_cumprimento = null;
        $tarefa->data_envio = $request->data_solicitacao;
        
        if($tarefa->save()){
           
        }
    }

    public function pegaTarefas(){
        $tarefas = DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->select('tarefa.id','tarefa.titulo','tarefa.solicitante','tarefa.data_solicitacao','tarefa.data_cumprimento','tarefa.avanco','tipo.tipo')
                ->orderBy('tarefa.created_at','DESC')
                ->get();
        return response()->json($tarefas,200);
    }

    public function verActividade($id){
        $actividade = DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->join('origem','origem.id','=','tarefa.id_origem')
                ->select('tarefa.id','tarefa.titulo','tarefa.origem_dado','tarefa.tempo','tarefa.solicitante','tarefa.responsavel','tarefa.data_solicitacao','tarefa.data_prevista','tarefa.departamento_origem','tarefa.departamento_destino','tarefa.descricao','tipo.tipo','origem.titulo as origem')
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
}
