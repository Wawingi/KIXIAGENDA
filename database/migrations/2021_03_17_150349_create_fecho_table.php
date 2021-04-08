<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFechoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fecho', function (Blueprint $table) {
            $table->uuid('id');
            $table->smallInteger('periodo');    
            $table->smallInteger('estado');   
            $table->primary('id');
            $table->uuid('id_user',36);
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade'); 
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
        Schema::dropIfExists('fecho');
    }
}
