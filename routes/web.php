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
        Route::get('pegaUtilizadoresDSO', 'UtilizadorController@pegaUtilizadoresDSO');
        Route::get('pegaFoto/{username}', 'UtilizadorController@pegaFoto');
        Route::get('pegaUtilizadorByUser/{username}', 'UtilizadorController@pegaUtilizadorByUser');

        Route::get('pegaTipos', 'TipoController@pegaTipos');
        Route::get('pegaOrigem_TipoObjecto/{idTipo}', 'TipoController@pegaDependentesTipo');
        Route::get('pegaOrigensAll', 'OrigemController@pegaOrigensAPI');

        Route::post('registarTarefa', 'TarefaController@registarTarefa');
        Route::get('pegaTarefasConcluidas', 'TarefaController@pegaTarefasConcluidas');
        Route::get('pegaTarefas', 'TarefaController@pegaTarefas');
        Route::get('pegaGeralTarefas', 'TarefaController@pegaGeralTarefas');
        Route::get('pegaTarefasAtrasadas', 'TarefaController@pegaTarefasAtrasadas');
        Route::get('pegaTarefasAgendadas', 'TarefaController@pegaTarefasAgendadas');
       
        Route::get('verActividade/{id}', 'TarefaController@verActividade');
        Route::post('editarTarefa', 'TarefaController@editarTarefa');
        Route::post('registarOperacao', 'TarefaController@registarOperacaoTarefa');
        Route::get('registarOperacao', 'TarefaController@registarOperacaoTarefa');
        Route::get('pegaAccoes/{idtarefa}','TarefaController@pegaAccoes');
        Route::get('generateCodigo','TarefaController@generateCodigo');
        Route::get('exportarTarefaCSV','TarefaController@exportarTarefaCSV');
        Route::get('exportarOperacaoCSV','TarefaController@exportarOperacaoCSV');
       
        Route::get('contHoras','TarefaController@contHoras');
        Route::get('verLastAccao/{idtarefa}','TarefaController@verLastAccao');
        Route::get('pesquisarTarefa/{codigo}','TarefaController@pesquisarTarefa');

        Route::get('pegaAssessores', 'AssessorController@pegaAssessores');

        Route::post('registarFecho', 'FechoController@registarFecho');
        Route::get('pegaFechos', 'FechoController@pegaFechos'); 

        //Rotas para a construção de gráfico
        Route::get('contActividades', 'EstatisticaController@contActividades');
        Route::get('graficoTarefasRegularizadas','EstatisticaController@graficoTarefasRegularizadas');

        //Rotas geração de relatorios
        Route::get('gerarAccaoGeralPdf/{codigo}','RelatorioController@gerarAccaoGeralPdf');
        Route::get('gerarAccaoPdf/{codigo}/{data}','RelatorioController@gerarAccaoPdf');
        Route::get('gerarTarefaPdf/{codigo}','RelatorioController@gerarTarefaPdf');
        Route::get('listarPesquisas','RelatorioController@listarPesquisas');
        Route::get('gerarRelatorioAccao/{codigo}/{avanco}','RelatorioController@gerarRelatorioAccao');

        //Rotas para Tipo Objecto
        Route::get('getTipoObjectos','TipoObjectoController@pegaTipoObjectos');
        Route::get('getObjectos/{idTipo}','ObjectoController@pegaObjectos');
    });
});