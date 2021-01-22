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
            $table->string('codigo',8);
            $table->string('ut_registo',15);
            $table->string('titulo',100);
            $table->longText('descricao');
            $table->decimal('avanco',10,4);                 
            $table->smallInteger('tempo');      
            $table->primary('id');
            $table->string('id_tipo', 6)->references('id')->on('tipo')->onDelete('cascade');
            $table->string('id_origem', 6)->references('id')->on('origem')->onDelete('cascade');
            $table->string('origem_dado',100);
            $table->foreign('id_tipo')->references('id')->on('tipo')->onDelete('cascade');
            $table->foreign('id_origem')->references('id')->on('origem')->onDelete('cascade');
            $table->timestamp('data_solicitacao', 0);
            $table->timestamp('data_prevista', 0);
            $table->timestamp('data_reactivacao', 0)->nullable();
            $table->timestamp('data_cumprimento', 0)->nullable();
            $table->timestamp('data_envio', 0);
            $table->timestamps();
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
