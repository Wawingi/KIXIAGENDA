<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTarefaOperacaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarefa_operacao', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('codigo',8);
            $table->string('acOrigemDado');
            $table->string('utilizador_codigo',10);
            $table->longText('descricao');
            $table->string('estado',4);
            $table->smallInteger('avanco');  
            $table->smallInteger('tempo_acao');    
            $table->string('utilizador_pergunta',10)->nullable();
            $table->string('utilizador_registo',10);
            $table->timestamps();
            
            //$table->primary('tarefa_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tarefa_operacao');
    }
}
