<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class TipoObjecto extends Model
{
    protected $table="tipoobjecto";

    public static function getTipoObjecto($idTipo) {
        return DB::table('tipo')
                ->join('tipoobjecto','tipoobjecto.id','=','tipo.id_tipo_objecto')
                ->select('tipo.id','tipoobjecto.id as id_tipo_objecto','tipoobjecto.tipo as tipo_objecto','tipoobjecto.tipo_controlo')
                ->where('tipo.id',$idTipo)
                ->get();
    }
}
