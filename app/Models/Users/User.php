<?php

namespace App\Models\Users;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens,  Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['firstname', 'lastname','email', 'password', "phone", "sex" , "age" , "birthDay" , "country_id" , "town_id", "is_enabled" ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'username'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getUsernameAttribute(){
        return $this->firstname ." ". $this->lastname;
    }


    public function isAdmin(){
        return $this->role->name === "Admin";
    }

    public function isUser(){
        return $this->role->name === "User";
    }

    public function role(){
       return $this->belongsTo(Roles::class , 'role_id' );
    }
}
