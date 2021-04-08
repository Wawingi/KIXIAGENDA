<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('getTarefasAPI','TarefaController@getTarefasAPI');
Route::get('getOperacaoAPI','TarefaController@getOperacaoAPI');
Route::get('getKixiagendaUtilizadoresAPI', 'UtilizadorController@pegaUtilizadores');
Route::get('getKixiagendaTipoAPI', 'TipoController@pegaTipos');
Route::get('getKixiagendaOrigemAPI', 'OrigemController@pegaOrigensAPI');

Route::post('registarUtilizadorAPI', 'UtilizadorController@registarUtilizador');
Route::post('registarTipoAPI', 'TipoController@registarTipo');
Route::post('registarOrigemAPI', 'OrigemController@registarOrigem');
Route::post('registarTipoOrigem', 'TipoController@registarTipoOrigem');
