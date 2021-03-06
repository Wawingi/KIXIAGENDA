<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
Use Exception;

class UtilizadorController extends Controller
{
    public function registarUtilizador(Request $request){
        try{
            $user = new User;
            $user->username = $request->UtCodigo;
            $user->name = $request->name;
            $user->departamento = $request->departamento;
            $user->email = $request->CorreioI;
            $user->password = $request->UtSenha;
            $user->estado = 1;
            $user->tipo = 2;
            $user->foto = $request->Imagen;

            if($user->save()){
                return response()->json(200);
            }else{
                return response()->json(401);
            }
        } catch (Exception $ex) {
            return $ex->getMessage();
        }
    }

    public function logar(Request $request){
        /*if (Auth::attempt(['username' => $request->username, 'password' => $request->senha],true)) {
            return response()->json(200);
        } else {
            return response()->json(['error'=>'Erro ao logar'],401);
        }*/
        $user = User::where('username', $request->username)
                  ->where('password',sha1($request->senha))
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
        $utilizadores = DB::table('users')->select('id','username','foto')->orderBy('username', 'asc')->get();
        return response()->json($utilizadores,200);
    }

    public function pegaUtilizadoresDSO(){
        $utilizadores = DB::table('users')
                        ->select('id','username')
                        ->where('departamento','Sistemas & Organização')
                        ->orderBy('username', 'asc')
                        ->get();
        return response()->json($utilizadores,200);
    }

    public function pegaFoto($username){
        $utilizadores = DB::table('users')->select('foto')->where('username',$username)->value('foto');
        if(is_null($utilizadores))
            $utilizadores=0;

        return response()->json($utilizadores,200);
    }
}