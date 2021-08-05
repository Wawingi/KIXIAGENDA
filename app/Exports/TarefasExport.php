<?php

namespace App\Exports;

use App\Model\Tarefa;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Support\Facades\DB;

class TarefasExport implements FromCollection,WithHeadings
{
    public function headings():array{
        return[
            'acCodigo',
            'acOrigemArquivo', 
            'acTipo', 
            'acOrigem',
            'acOrigemDado',
            'OfCodigo',    
            'Departamento',                                      
            'PraOfCodigo',
            'PraDepartamento',                                    
            'utCodigo',      
            'acTitulo',                                                                              
            'acDescripcao',                                                                                                                                                                                                                                                    
            'acAvanco',                              
            'DataSolicitacao',         
            'DataPrevista',            
            'DataReativacao',          
            'acResponsavel',
            //'acDSOPeriodo' => $tarefa-> 
            //'acDSOFeito' => $tarefa->
            'DataCumprimento',         
            'DataEnvio',               
            'acTempo',
            'utRegisto',       
            'DataRegisto'             
            //'utReclamo' => $tarefa->       
            //'DataReclamo' => $tarefa->
        ];
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $previus = date('Y-m-d',strtotime("-5 days"));

        $tarefas = DB::table('tarefa')
                ->select('tarefa.codigo','tarefa.versao_sistema','tarefa.id_tipo','tarefa.id_origem','tarefa.origem_dado','tarefa.id_dpto_origem','tarefa.departamento_origem','tarefa.id_dpto_destino','tarefa.departamento_destino','tarefa.solicitante','tarefa.titulo','tarefa.descricao','tarefa.avanco','tarefa.data_solicitacao','tarefa.data_prevista','tarefa.data_reactivacao','tarefa.responsavel','tarefa.data_cumprimento','tarefa.data_envio','tarefa.tempo','tarefa.ut_registo','tarefa.created_at')
                //->where(DB::raw('DATE(tarefa.updated_at)'),'=',date('Y-m-d'))
                ->Where(DB::raw('DATE(tarefa.created_at)'),'>',$previus)
                ->orderBy('tarefa.created_at','DESC')
                ->get()->toArray();
        return collect($tarefas);
    }
}
