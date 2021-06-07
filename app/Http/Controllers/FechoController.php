<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Fecho;
use Illuminate\Support\Facades\DB;

class FechoController extends Controller
{
    public function registarFecho(Request $request){
        if(DB::table('fecho')->update(['estado' => 0])){
            $fecho = new Fecho;
            $fecho->periodo = $request->periodo;
            $fecho->estado = 1;
            $fecho->id_user = $request->utilizador_codigo; 
            $fecho->created_at = $request->data_fecho;
            
            if($fecho->save()){
                echo 'Sucesso';
            };  
        };       
    }

    public function pegaFechos(){
        $fechos = DB::table('fecho')
                ->join('users','users.id','=','fecho.id_user')
                ->select('users.name','fecho.periodo','fecho.estado','fecho.created_at')
                ->where('fecho.estado',1)
                ->get();
        
        foreach($fechos as $f){
            $f->created_at=date('d-m-Y H:i:s',strtotime($f->created_at));
            if($f->periodo==1)
                $f->periodo='Manhã';
            else
                $f->periodo='Tarde';                
        }

        return response()->json($fechos);
    }
}
