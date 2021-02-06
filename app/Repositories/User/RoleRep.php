<?php


namespace App\Repositories\User;

use App\Models\Users\Roles;
class RoleRep
{

    public $role;

    public function __construct( Roles $r){
        $this->role = $r;
    }

    public function getById(int $id){
        return $this->role->where("id" , $id)->first();
    }

    public function getAll(){
        return $this->role->all();
    }

}
