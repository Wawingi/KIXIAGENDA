<?php

namespace App\Exports;

use App\Model\Tarefa;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Support\Facades\DB;

class TarefaOperacaoExport implements FromCollection,WithHeadings
{
    public function headings():array{
        return[
            'acCodigo',
            'DataOperacao',                                
            'acOrigemDado',
            'utCodigo',
            'Descricao',
            'acEstado',
            'acAvanco',
            'DataEnvio',
            'acTempo',
            'utRegisto',
            'DataRegisto',
            'utPergunta'            
        ];
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $previus = date('Y-m-d',strtotime("-5 days"));

        $operacoes = DB::table('tarefa_operacao')
                ->select('codigo','created_at','acOrigemDado','utilizador_codigo','descricao','estado','avanco','created_at as data_envio','tempo_acao','utilizador_registo','created_at as data_registo','utilizador_pergunta')
                ->Where(DB::raw('DATE(created_at)'),'>',$previus)
                ->orderBy('created_at','DESC')
                ->get()->toArray();
        return collect($operacoes);
    }
}
