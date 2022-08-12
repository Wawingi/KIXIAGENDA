<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Helper extends Model
{
    //Contar a quantidade de dias passadas de actividade de 2ª a 6ª
    public static function contIntervaloDias($dataInicio){
        $start = $dataInicio;
        $now = date('Y-m-d l');
        $cont1=0;
        $cont2=0;

        do{
            $dia = $start;
            $dia = explode(" ",$dia);

            if($dia[1]=='Saturday'||$dia[1]=='Sunday'){
                ++$cont1;
            }else{
                ++$cont2;
            }
            $next = date('Y-m-d l', strtotime('+1 day', strtotime($start)));
            
            $start = $next;
        }while($start!=$now);

        return $cont2;
    }

    //Pega tempo de segundos para formato visual Acção
    public static function setTempoVisualAccao($accao){
        switch($accao->tempo_acao){
            case 0: $accao->tempo_acao = '0:00';break;
            case 300: $accao->tempo_acao = '0:05';break;
            case 600: $accao->tempo_acao = '0:10';break;
            case 900: $accao->tempo_acao = '0:15'; break;                  
            case 1200: $accao->tempo_acao = '0:20'; break;                  
            case 1800: $accao->tempo_acao = '0:30'; break;                  
            case 2400: $accao->tempo_acao = '0:40'; break;                  
            case 3000: $accao->tempo_acao = '0:50'; break;                  
            case 3600: $accao->tempo_acao = '1:00'; break;                  
            case 5400: $accao->tempo_acao = '1:30'; break;                  
            case 7200: $accao->tempo_acao = '2:00'; break;
            case 9000: $accao->tempo_acao = '2:30'; break;
            case 10800: $accao->tempo_acao = '3:00'; break;
            case 12600: $accao->tempo_acao = '3:30'; break;
            case 14400: $accao->tempo_acao = '4:00'; break;
            case 16200: $accao->tempo_acao = '4:30'; break;
            case 18000: $accao->tempo_acao = '5:00'; break;
            case 19800: $accao->tempo_acao = '5:30'; break;
            case 21600: $accao->tempo_acao = '6:00'; break;
            case 23400: $accao->tempo_acao = '6:30'; break;
            case 25200: $accao->tempo_acao = '7:00'; break;                    
        }
        return $accao;
    }

    //Pega tempo de segundos para formato visual
    public static function setTempoVisual($tarefa){
        switch($tarefa->tempo){
            case 300: $tarefa->tempo = '0:05';break;
            case 600: $tarefa->tempo = '0:10';break;
            case 900: $tarefa->tempo = '0:15'; break;                  
            case 1200: $tarefa->tempo = '0:20'; break;                  
            case 1800: $tarefa->tempo = '0:30'; break;                  
            case 2400: $tarefa->tempo = '0:40'; break;                  
            case 3000: $tarefa->tempo = '0:50'; break;                  
            case 3600: $tarefa->tempo = '1:00'; break;                  
            case 5400: $tarefa->tempo = '1:30'; break;                  
            case 7200: $tarefa->tempo = '2:00'; break;
            case 9000: $tarefa->tempo = '2:30'; break;
            case 10800: $tarefa->tempo = '3:00'; break;
            case 12600: $tarefa->tempo = '3:30'; break;
            case 14400: $tarefa->tempo = '4:00'; break;
            case 16200: $tarefa->tempo = '4:30'; break;
            case 18000: $tarefa->tempo = '5:00'; break;
            case 19800: $tarefa->tempo = '5:30'; break;
            case 21600: $tarefa->tempo = '6:00'; break;
            case 23400: $tarefa->tempo = '6:30'; break;
            case 25200: $tarefa->tempo = '7:00'; break;                    
        }
        return $tarefa;
    }

    //Pega o estado em extensao completa
    public static function getEstado($estado){
        switch($estado){
            case 'ACRD':
                    return 'Registada';break;
            case 'ACRG':
                    return 'Reagendada';break;
            case 'ACCO':
                    return 'Concluída';break;
            case 'ACCU':
                    return 'Em Curso';break;
            case 'ACRE':
                    return 'Reativada';break;
            case 'CUSS':
                    return 'Em Curso Solic. Suporte';break;
            case 'CURS':
                    return 'Em Curso Resp. Suporte';break;
        }
    }

    //Pega 1º e Last nome apenas
    public static function getShortName($nome){
        $nome = explode(" ",$nome);
        return $nome[0]." ".$nome[count($nome)-1];
    }   
}
