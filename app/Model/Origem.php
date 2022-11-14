<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Origem extends Model
{
    protected $table="origem";

    public static function getOrigem($idTipo) {
        return DB::table('origem')
                ->join('tipo_origem','tipo_origem.id_origem','=','origem.id')
                ->select('origem.id','origem.titulo','origem.dado')
                ->where('tipo_origem.id_tipo',$idTipo)
                ->get();
    }
}
