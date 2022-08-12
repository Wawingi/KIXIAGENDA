<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Estatistica;
use App\Model\Helper;
use App\User;

class EstatisticaController extends Controller
{
    //Mostrar numerário de actividades
    public function contActividades(){        
        $estatistica = new Estatistica;   
          
        $estatistica->qtdTarefasTotal = Estatistica::contTarefasHoje();
        $estatistica->qtdTarefasConcluidas = Estatistica::contTarefasRegularizadasHoje();
        $estatistica->qtdTarefasNaoConcluidas = Estatistica::contTarefasNaoRegularizadasHoje();
        $estatistica->qtdTarefasAtrasadas = count(Estatistica::contTarefasAtrasadas());
        $estatistica->qtdAccoes = count(Estatistica::contAccoesRegularizadasHoje()); 
     
        return response()->json($estatistica,200);  
    }

    public function graficoTarefasRegularizadas(){
        $users = User::getUsersDpto("Sistemas & Organização");
        $accoes = Estatistica::tarefasRegularizadas();
        $atrasadas = Estatistica::contTarefasAtrasadas();
        
        $utilizadores = array();
        $contAccoes = array();
        $contAtrasadas = array();
        $qtde=0; 
        
        //Construir array das actividades de hoje de um utilizador
        foreach($users as $user){
            foreach($accoes as $accao){                
                if($user->username==$accao->utilizador_codigo){
                    $qtde = $qtde+$accao->tempo_acao;
                }
            }
            
            array_push($utilizadores,$user->name); 
            //array_push($contAccoes,gmdate("H:i",$qtde)); 
            array_push($contAccoes,$qtde/60); 
            $qtde=0;    
        }

        //Construir array das actividades atrasadas de um utilizador
        foreach($users as $user){
            foreach($atrasadas as $atrasada){                
                if($user->username==$atrasada->responsavel){
                    $qtde++;
                }
            }
            array_push($contAtrasadas,$qtde); 
            $qtde=0;    
        }

        return response()->json(['users'=>$utilizadores, 'accoes'=>$contAccoes, 'atrasadas'=>$contAtrasadas],200);
    }
}
