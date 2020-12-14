<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Origem;
use Illuminate\Support\Facades\DB;


class OrigemController extends Controller
{
    public function pegaOrigens(){
        $tipos = DB::table('origem')->select('id','titulo')->get();
        return response()->json($tipos,200);
    }
}
