<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class AssessorController extends Controller
{
    public function pegaAssessores(){
        $assessores = DB::table('assessor')->select('nome','agencia','contacto','username')->get();
        return response()->json($assessores,200);
    }
}
