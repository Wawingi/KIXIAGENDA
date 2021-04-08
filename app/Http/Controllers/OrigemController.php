<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Origem;
use Illuminate\Support\Facades\DB;
Use Exception;

class OrigemController extends Controller
{
    public function pegaOrigens($idTipo){
        $tipos = DB::table('origem')
                ->join('tipo_origem','tipo_origem.id_origem','=','origem.id')
                ->select('origem.id','origem.titulo','origem.dado')
                ->where('tipo_origem.id_tipo',$idTipo)
                ->get();
        return response()->json($tipos,200);
    }
    
    public function pegaOrigensAPI(){
        $tipos = DB::table('origem')
                ->get();
        return response()->json($tipos,200);
    }

    public function registarOrigem(Request $request){
        try{
            //if($this->isTipo($request->id)){
                //return response()->json(401);
            //}else{
                $origem = new Origem;
                $origem->id = $request->id;
                $origem->titulo = $request->titulo;
                $origem->descricao = $request->descricao;
                $origem->dado = $request->dado;

                if($origem->save()){
                    return response()->json(200);
                }else{
                    return response()->json(401);
                }
            //}
        } catch (Exception $ex) {
            return $ex->getMessage();
        }
    }
}
