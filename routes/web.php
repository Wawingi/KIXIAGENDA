<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layouts.welcome');
});

Route::prefix('auth')->group(function(){
    Route::get('registarUtilizador', 'UtilizadorController@registarUtilizador');
    
    //Auth::routes(['register' => false]);

    Route::post('login', 'UtilizadorController@logar');
    Route::get('logout', 'UtilizadorController@logout');
    Route::get('pegaUtilizador', 'UtilizadorController@pegaUtilizador');
    Route::get('pegaUtilizadores', 'UtilizadorController@pegaUtilizadores');
    Route::get('pegaTipos', 'TipoController@pegaTipos');
    Route::get('pegaOrigens', 'OrigemController@pegaOrigens');

    Route::post('registarTarefa', 'TarefaController@registarTarefa');
    Route::get('pegaTarefas', 'TarefaController@pegaTarefas');
    Route::get('verActividade/{id}', 'TarefaController@verActividade');
    Route::post('editarTarefa', 'TarefaController@editarTarefa');

    Route::get('pegaAssessores', 'AssessorController@pegaAssessores');
   
});

