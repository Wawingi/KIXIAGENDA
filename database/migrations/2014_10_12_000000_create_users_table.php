<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id');
            $table->string('username',10);
            $table->string('name',50);
            $table->string('departamento',50);
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->smallInteger('estado');
            $table->smallInteger('tipo');
            $table->string('foto',15);
            $table->rememberToken();
            $table->timestamps();

            $table->primary('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
