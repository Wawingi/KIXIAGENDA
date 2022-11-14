<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ObjectoController extends Controller
{
    public function pegaObjectos($idTipo){
        $objectos = DB::table('objecto')
                //->join('tipo_origem','tipo_origem.id_origem','=','origem.id')
                ->select('id','objecto','id_tipo_objecto')
                ->where('id_tipo_objecto',$idTipo)
                ->get();
        return response()->json($objectos,200);
    }
}
