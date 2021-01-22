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
        $user->name = 'Dionisio André';
        $user->departamento = 'Sistemas & Organização';
        $user->email = 'dionisio.andre@kixicredito.com';
        //$user->password = Hash::make('123456');
        $user->password = MD5('123456');
        $user->estado = 1;
        $user->tipo = 2;
        $user->foto = 'dion.andr'.'.jpg';

        if($user->save()){
            dd('AQUI');
        }
    }

    public function logar(Request $request){
        /*if (Auth::attempt(['username' => $request->username, 'password' => $request->senha],true)) {
            return response()->json(200);
        } else {
            return response()->json(['error'=>'Erro ao logar'],401);
        }*/
        $user = User::where('username', $request->username)
                  ->where('password',md5($request->senha))
                  ->first();
        Auth::login($user);
        if (is_object($user))
            return response()->json(200);
        else
            return response()->json(['error'=>'Erro ao logar'],401);
    }

    public function logout(){
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
