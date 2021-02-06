<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{

    protected $user;

    public function __construct(UserService $u )
    {
        $this->user = $u;
    }


    public function getAll(){


    }

    public function getById( $id = null){
         $user = $this->user->getById($id);
         return ["user" => $user];
    }

}
