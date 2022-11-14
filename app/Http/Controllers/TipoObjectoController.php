<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TipoObjectoController extends Controller
{
    public function pegaTipoObjectos(){
        $tipoObjectos = DB::table('tipoobjecto')
                ->select('id','tipo')
                ->get();
        return response()->json($tipoObjectos,200);
    }
}
