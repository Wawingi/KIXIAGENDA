<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
//use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Uuid;
use GoldSpecDigital\LaravelEloquentUUID\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
    use Uuid;
    use Notifiable;

    protected $table='users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

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

    public static function getUser($username){
        return DB::table('users')
        ->where('username','=',$username)                
        ->value('id');         
    }

    public static function getPessoa($username){
        return DB::table('users')
        ->where('username','=',$username)                
        ->first();         
    }
    
    public static function getCurtoNome($name){
        $nomes = explode(' ', $name);
        return $nomes[0].' '.$nomes[count($nomes)-1];
    }

    public static function getFoto($username){
        $foto = DB::table('users')->select('foto')->where('username',$username)->value('foto');
        if(is_null($foto))
            return 'default.jpg';

        return $foto;
    }

    public static function getUsersDpto($departamento){
        $users = DB::table('users')->select('username','name')->where('estado',1)->where('departamento',$departamento)->get();
        return $users;
    }
}
