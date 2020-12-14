<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UtilizadorController extends Controller
{
    public function registarUtilizador(){
        $user = new User;
        $user->username = 'dion.andr';
        $user->name = 'Dionísio André';
        $user->departamento = 'Sistemas & Organização';
        $user->email = 'dionisio.andre@kixicredito.com';
        $user->password = Hash::make('123456');
        $user->estado = 1;
        $user->tipo = 2;
        $user->foto = 'dion.andr'.'.jpg';

        if($user->save()){
            dd('AQUI');
        }
    }

    public function logar(Request $request){
        if (Auth::attempt(['username' => $request->username, 'password' => $request->senha],true)) {
            //return response()->json(Auth::user(),200);
            return response()->json(200);
        } else {
            return response()->json(['error'=>'Erro ao logar'],401);
        }
    }

    public function logout(){
        //dd(Auth::user()->name);
        Auth::logout();
    }

    public function pegaUtilizador(){
        $us = new User;
        $us->name = Auth::user()->name;
        $us->username = Auth::user()->username;
        $us->email = Auth::user()->email;
        $us->departamento = Auth::user()->departamento;
        $us->foto = Auth::user()->foto;
        return response()->json($us,200);
    }

    public function pegaUtilizadores(){
        $utilizadores = DB::table('users')->select('id','username')->get();
        return response()->json($utilizadores,200);
    }
}
