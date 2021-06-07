<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTarefaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarefa', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('departamento_origem',50);
            $table->string('departamento_destino',50);
            $table->string('solicitante',15);
            $table->string('responsavel',15);
            $table->string('ut_registo',15);
            $table->string('titulo',100);
            $table->longText('descricao');
            $table->smallInteger('avanco');   
            $table->smallInteger('tempo');  
            $table->string('id_tipo', 6);
            $table->string('id_origem', 6);
            $table->string('origem_dado',100);
            $table->timestamp('data_solicitacao', 0);
            $table->timestamp('data_prevista', 0);
            $table->timestamp('data_reactivacao', 0)->nullable();
            $table->timestamp('data_cumprimento', 0)->nullable();
            $table->timestamp('data_envio', 0);    
            $table->string('codigo',8);
            $table->smallInteger('id_dpto_origem');     
            $table->smallInteger('id_dpto_destino'); 
            $table->string('versao_sistema',6);      
            $table->uuid('id_user',36);      
            $table->timestamps();
                   
            $table->primary('id');
            $table->foreign('id_tipo')->references('id')->on('tipo')->onDelete('cascade');
            $table->foreign('id_origem')->references('id')->on('origem')->onDelete('cascade');
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tarefa');
    }
}
