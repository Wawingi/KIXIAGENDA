<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoOrigemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_origem', function (Blueprint $table) {
            $table->string('id_tipo', 6)->references('id')->on('tipo')->onDelete('cascade');
            $table->string('id_origem', 6)->references('id')->on('origem')->onDelete('cascade');   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tipo_origem');
    }
}
