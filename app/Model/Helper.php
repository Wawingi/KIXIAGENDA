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
}
