<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Estatistica extends Model
{       
    protected $qtdTarefasTotal;
    protected $qtdTarefasConcluidas;
    protected $qtdTarefasNaoConcluidas;
    protected $qtdTarefasAtrasadas;
    protected $qtdAccoes;

    public static function contTarefasHoje(){
        return DB::table('tarefa') 
                ->where(DB::raw('DATE(created_at)'),'=',date('Y-m-d'))
                ->count();      
    }
    public static function contTarefasRegularizadasHoje(){
        return DB::table('tarefa') 
                ->where(DB::raw('DATE(created_at)'),'=',date('Y-m-d'))
                ->where('avanco','=',100)
                ->count();      
    }
    public static function contTarefasNaoRegularizadasHoje(){
        return DB::table('tarefa') 
                ->where(DB::raw('DATE(created_at)'),'=',date('Y-m-d'))
                ->where('avanco','<',100)
                ->count();      
    }
    public static function contTarefasAtrasadas(){
        return DB::table('tarefa') 
                ->where(DB::raw('DATE(data_prevista)'),'<',date('Y-m-d'))
                ->where('avanco','<',100)
                ->count();      
    }
    public static function contAccoesRegularizadasHoje(){
        return DB::table('tarefa_operacao') 
                ->where(DB::raw('DATE(created_at)'),'=',date('Y-m-d'))
                ->count();      
    }
}
