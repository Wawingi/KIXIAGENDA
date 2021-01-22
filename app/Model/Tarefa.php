<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Uuid;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;


class Tarefa extends Model
{
    use Uuid;
    protected $table="tarefa";

    protected $keyType = 'string';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    public static function generateCodigo($solicitante,$responsavel){
        //Pegar o prefixo do username do solicitante
        $p1 = $solicitante[0];
        
        //Pegar os prefixos dos username do responsavel
        $p3 = $responsavel[0].$responsavel[5];

        //Pegar dia actual
        $dia = date('d');

        $time = explode(":",date('H:i:s'));
        $time1 = $time[0]; 
        $middle = $solicitante[6];
        $time3 = $time[2];
        
        $time = $time1[1].$middle.$time3[1];

        $codigoActividade = $p1.$dia.$time.$p3; 
        return $codigoActividade;
    }

    public static function getMinhasTarefas($now){
        $prim = DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.responsavel','tarefa.solicitante','tarefa.data_prevista','tarefa.data_solicitacao','tarefa.data_cumprimento','tarefa.avanco','tipo.tipo')
                ->where('tarefa.responsavel','=',Auth::user()->username)  
                ->whereNotNull('tarefa.data_cumprimento')                    
                ->where(DB::raw('DATE(tarefa.data_prevista)'),'<=',$now);
                
        $seg = DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.responsavel','tarefa.solicitante','tarefa.data_prevista','tarefa.data_solicitacao','tarefa.data_cumprimento','tarefa.avanco','tipo.tipo')
                ->where('tarefa.responsavel','=',Auth::user()->username)                
                ->where(DB::raw('DATE(tarefa.data_prevista)'),'=',$now)
                ->orderBy('tarefa.created_at','DESC')
                ->union($prim)
                ->get();           
                
        return $seg;
    }

    public static function getTarefasAtrasadas($now){
        return DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->select('tarefa.id','tarefa.codigo','tarefa.solicitante','tarefa.titulo','tarefa.responsavel','tarefa.data_solicitacao','tarefa.data_prevista','tarefa.data_cumprimento','tarefa.avanco','tipo.tipo')
                ->where('tarefa.avanco','<',100)
                ->whereNull('tarefa.data_cumprimento')
                ->where('tarefa.data_prevista','<',$now)
                ->where('tarefa.responsavel','=',Auth::user()->username)
                ->orderBy('tarefa.created_at','DESC')
                ->get();              
    }

    public static function getTarefasAgendadas($now){
        return DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->select('tarefa.id','tarefa.codigo','tarefa.solicitante','tarefa.titulo','tarefa.responsavel','tarefa.data_solicitacao','tarefa.data_prevista','tarefa.data_cumprimento','tarefa.avanco','tipo.tipo')
                ->where('tarefa.avanco','<',100)
                ->whereNull('tarefa.data_cumprimento')
                ->where(DB::raw('DATE(tarefa.data_prevista)'),'>',$now)
                ->where('tarefa.responsavel','=',Auth::user()->username)
                ->orderBy('tarefa.created_at','DESC')
                ->get();             
    }

}
