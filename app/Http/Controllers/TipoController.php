<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Tipo;
use Illuminate\Support\Facades\DB;
Use Exception;

class TipoController extends Controller
{
    public function pegaTipos(){
        $tipos = DB::table('tipo')->select('id','tipo','tipo_abreviado')->get();
        //dd($tipos);
        return response()->json($tipos,200);
    }

    public function isTipo($id){
        if(Tipo::where('id',$id)->count('id')>0){
            return true; 
        }else{
            return false;
        }
    }

    public function registarTipo(Request $request){
        try{
            //if($this->isTipo($request->id)){
                //return response()->json(401);
            //}else{
                $tipo = new Tipo;
                $tipo->id = $request->id;
                $tipo->tipo = $request->tipo;
                $tipo->tipo_abreviado = $request->tipo_abreviado;

                if($tipo->save()){
                    return response()->json(200);
                }else{
                    return response()->json(401);
                }
            //}
        } catch (Exception $ex) {
            return $ex->getMessage();
        }
    }

    public function registarTipoOrigem(Request $request){
        try{
            if(DB::table('tipo_origem')->insert([ 
                'id_tipo' => $request->id_tipo,
                'id_origem' => $request->id_origem
            ])){
                return response()->json(200);
            }else{
                return response()->json(401);
            }
        } catch (Exception $ex) {
            return $ex->getMessage();
        }
    }
}
