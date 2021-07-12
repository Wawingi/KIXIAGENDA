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

    public static function getLetra($intevalo_data){
        //dd($intevalo_data);
        //$intevalo_data=88;
        $letra=null;
        if($intevalo_data>=0 And $intevalo_data<=99){
            switch($intevalo_data){
                case $intevalo_data>0 && $intevalo_data<=9:
                    $letra=$intevalo_data;break;
                case $intevalo_data==10||$intevalo_data==36||$intevalo_data==62||$intevalo_data==88:  
                    $letra="A";break; 
                case $intevalo_data==11||$intevalo_data==37||$intevalo_data==63||$intevalo_data==89:
                    $letra="B";break;
                case $intevalo_data==12||$intevalo_data==38||$intevalo_data==64||$intevalo_data==90:
                    $letra="C";break; 
                case $intevalo_data==13||$intevalo_data==39||$intevalo_data==65||$intevalo_data==91:
                    $letra="D";break; 
                case $intevalo_data==14||$intevalo_data==40||$intevalo_data==66||$intevalo_data==92:
                    $letra="E";break; 
                case $intevalo_data==15||$intevalo_data==41||$intevalo_data==67||$intevalo_data==93:
                    $letra="F";break; 
                case $intevalo_data==16||$intevalo_data==42||$intevalo_data==68||$intevalo_data==94:
                    $letra="G";break; 
                case $intevalo_data==17||$intevalo_data==43||$intevalo_data==69||$intevalo_data==95:
                    $letra="H";break; 
                case $intevalo_data==18||$intevalo_data==44||$intevalo_data==70||$intevalo_data==96:
                    $letra="I";break; 
                case $intevalo_data==19||$intevalo_data==45||$intevalo_data==71||$intevalo_data==97:
                    $letra="J";break; 
                case $intevalo_data==20||$intevalo_data==46||$intevalo_data==72||$intevalo_data==98:
                    $letra="K";break; 
                case $intevalo_data==21||$intevalo_data==47||$intevalo_data==73||$intevalo_data==99:
                    $letra="L";break; 
                case $intevalo_data==22||$intevalo_data==48||$intevalo_data==74:
                    $letra="M";break; 
                case $intevalo_data==23||$intevalo_data==49||$intevalo_data==75:
                    $letra="N";break; 
                case $intevalo_data==24||$intevalo_data==50||$intevalo_data==76:
                    $letra="O";break; 
                case $intevalo_data==25||$intevalo_data==51||$intevalo_data==77:
                    $letra="P";break; 
                case $intevalo_data==26||$intevalo_data==52||$intevalo_data==78:
                    $letra="Q";break; 
                case $intevalo_data==27||$intevalo_data==53||$intevalo_data==79:
                    $letra="R";break; 
                case $intevalo_data==28||$intevalo_data==54||$intevalo_data==80:
                    $letra="S";break; 
                case $intevalo_data==29||$intevalo_data==55||$intevalo_data==81:
                    $letra="T";break; 
                case $intevalo_data==30||$intevalo_data==56||$intevalo_data==82:
                    $letra="U";break; 
                case $intevalo_data==31||$intevalo_data==57||$intevalo_data==83:
                    $letra="V";break; 
                case $intevalo_data==32||$intevalo_data==58||$intevalo_data==84:
                    $letra="W";break; 
                case $intevalo_data==33||$intevalo_data==59||$intevalo_data==85:
                    $letra="X";break; 
                case $intevalo_data==34||$intevalo_data==60||$intevalo_data==86:
                    $letra="Y";break; 
                case $intevalo_data==35||$intevalo_data==61||$intevalo_data==87:
                    $letra="Z";break; 
            }
            return $letra;
        }else{
            return $letra="";
        }
    }

    //Retornar objecto actividade
    public static function objectoActividade($codigo_actividade){
        return DB::table('tarefa')
                    ->select('id','codigo','avanco','versao_sistema','id_tipo','data_cumprimento')                
                    ->where('codigo',$codigo_actividade)
                    ->first(); 
    }

    //Gerar codigo da actividade
    public static function generateCodigo($responsavel){
        $ano_actual = date("Y");
        $ano_anterior = $ano_actual-1;
        $data_inicio = strtotime($ano_anterior."-12-31");
        $data_final = strtotime(date('Y-m-d'));

        $intevalo_data=($data_final - $data_inicio)/60/60/24;

        $p1=Tarefa::getLetra($ano_actual % 2000).Tarefa::getLetra(floor($intevalo_data/10)).$intevalo_data%10;
        
        $intervalo_minuto = (date('H')*60)+date('i'); //Hora em minutos
        
        $p21=Tarefa::getLetra(floor($intervalo_minuto/100));
        $p22=$intervalo_minuto%100;
        $p22=$p22>9 ? $p22:'0'.$p22;
        $p2=$p21.$p22;

        //Pegar os prefixos dos username do responsavel
        $nome = explode(".",$responsavel);
        $p3 = strtoupper($nome[0][0].$nome[1][0]);

        $codigoActividade=$p1.$p2.$p3;

        return $codigoActividade;
    }

    public static function getGeralTarefas(){
        return DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->join('users','users.id','=','tarefa.id_user')
                ->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.responsavel','tarefa.data_solicitacao','tarefa.data_cumprimento','tarefa.avanco','tarefa.data_prevista','tipo.tipo','users.foto') 
                ->where(DB::raw('DATE(tarefa.created_at)'),'=',date('Y-m-d'))
                ->orWhere('tarefa.avanco','<',100)
                ->orderBy('tarefa.created_at','DESC')
                ->get();      
    }

    public static function getAllTarefas(){
        $tarefas = DB::table('tarefa')
                    ->select('tarefa.id','tarefa.departamento_origem','tarefa.departamento_destino','tarefa.solicitante','tarefa.responsavel')                
                    ->get()->toArray();            
        return $tarefas;
    }

    public static function getMinhasTarefas($now){
        $prim = DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.responsavel','tarefa.solicitante','tarefa.data_prevista','tarefa.data_solicitacao','tarefa.data_cumprimento','tarefa.avanco','tipo.tipo')
                ->where('tarefa.responsavel','=',Auth::user()->username)  
                ->whereNotNull('tarefa.data_cumprimento')                    
                ->where(DB::raw('DATE(tarefa.data_prevista)'),'<=',$now);
                //->orderBy('tarefa.created_at','DESC');
                
        $seg = DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.responsavel','tarefa.solicitante','tarefa.data_prevista','tarefa.data_solicitacao','tarefa.data_cumprimento','tarefa.avanco','tipo.tipo')
                ->where('tarefa.responsavel','=',Auth::user()->username)                
                ->where(DB::raw('DATE(tarefa.data_prevista)'),'=',$now)
                //->orderBy('tarefa.created_at','ASC')
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

    //Pega tarefa por id
    public static function getTarefaById($tarefa_id){
        return DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->join('origem','origem.id','=','tarefa.id_origem')
                ->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.origem_dado','tarefa.tempo','tarefa.solicitante','tarefa.responsavel','tarefa.data_solicitacao','tarefa.data_prevista','tarefa.departamento_origem','tarefa.departamento_destino','tarefa.descricao','tipo.tipo','origem.titulo as origem')
                ->where('tarefa.id','=',$tarefa_id)
                ->first();
    }
    //Pega tarefa por Codigo
    public static function getTarefaByCodigo($tarefa_id){
        return DB::table('tarefa')
                ->join('tipo', 'tipo.id', '=', 'tarefa.id_tipo')
                ->join('origem','origem.id','=','tarefa.id_origem')
                ->select('tarefa.id','tarefa.codigo','tarefa.titulo','tarefa.origem_dado','tarefa.tempo','tarefa.solicitante','tarefa.responsavel','tarefa.data_solicitacao','tarefa.data_prevista','tarefa.departamento_origem','tarefa.departamento_destino','tarefa.descricao','tarefa.avanco','tipo.tipo','origem.titulo as origem')
                ->where('tarefa.codigo','=',$tarefa_id)
                ->first();
    }
}