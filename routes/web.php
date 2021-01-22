<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layouts.welcome');
});
Route::post('login', 'UtilizadorController@logar');

Route::middleware(['auth'])->group(function () {
    Route::prefix('auth')->group(function(){
        Route::get('registarUtilizador', 'UtilizadorController@registarUtilizador');
        
        //Auth::routes(['register' => false]);
       
        Route::get('logout', 'UtilizadorController@logout');
        Route::get('pegaUtilizador', 'UtilizadorController@pegaUtilizador');
        Route::get('pegaUtilizadores', 'UtilizadorController@pegaUtilizadores');
        Route::get('pegaTipos', 'TipoController@pegaTipos');
        Route::get('pegaOrigens', 'OrigemController@pegaOrigens');

        Route::post('registarTarefa', 'TarefaController@registarTarefa');
        Route::get('pegaTarefas', 'TarefaController@pegaTarefas');
        Route::get('pegaGeralTarefas', 'TarefaController@pegaGeralTarefas');
        Route::get('pegaTarefasAtrasadas', 'TarefaController@pegaTarefasAtrasadas');
        Route::get('pegaTarefasAgendadas', 'TarefaController@pegaTarefasAgendadas');
        Route::get('contActividades', 'TarefaController@contActividades');
        Route::get('verActividade/{id}', 'TarefaController@verActividade');
        Route::post('editarTarefa', 'TarefaController@editarTarefa');

        Route::get('pegaAssessores', 'AssessorController@pegaAssessores');

        Route::post('registarOperacao', 'TarefaController@registarOperacaoTarefa');
        Route::get('registarOperacao', 'TarefaController@registarOperacaoTarefa');

        Route::get('pegaAccoes/{idtarefa}','TarefaController@pegaAccoes');

        Route::get('generateCodigo','TarefaController@generateCodigo');
    
    });
});

