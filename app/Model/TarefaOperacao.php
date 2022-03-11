<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TarefaOperacao extends Model
{
    protected $table="tarefa_operacao";

    public static function getUltimaOperacao($codigo){
        return DB::table('tarefa_operacao')->where('codigo',$codigo)->latest('created_at')->first();
    }
}
