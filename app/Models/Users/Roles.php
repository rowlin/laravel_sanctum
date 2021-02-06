<?php

namespace App\Models\Users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    use HasFactory;

    public $timestamp = false;

    public function users(){
        return $this->hasOne('\App\Models\Users\User' , 'role_id' );
    }


}
