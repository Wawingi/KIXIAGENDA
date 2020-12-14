<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Tipo;
use Illuminate\Support\Facades\DB;

class TipoController extends Controller
{
    public function pegaTipos(){
        $tipos = DB::table('tipo')->select('id','tipo')->get();
        //dd($tipos);
        return response()->json($tipos,200);
    }
}
