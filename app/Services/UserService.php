<?php


namespace App\Services;


use App\Repositories\User\RoleRep;
use App\Repositories\User\UserRep;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public $user;
    public $role;
    public $msg = [];


    public function __construct(UserRep $u ,RoleRep $r)
    {
        $this->user = $u;
        $this->role = $r;
    }


    public function getById(int $id = null){
        if($id!= null)  $user = $this->user->getById($id);
        else $user = auth()->user();
        return ($user!= null) ?  $user :  new \Exception("User Not SET");
    }

    public function getByEmail( string $email){
        return $this->user->getByEmail($email);
    }

    public function login($data){

        $user = $this->user->getByEmailWithRole($data->username);

        if (!$user) {
            return [
                'message' => 'User not found',
                'type' => "error",
                'status' => 422];
        }

        if (!Hash::check(trim($data->password), $user->password)) {
            return [
                'message' => 'Wrong email or password',
                'type' => "error",
                'status' => 422
            ];
        };

        if($user->is_enabled === false){
            return [
                'message' => 'Oops : That user not enabled ( ',
                'type' => "error",
                'status' => 301
            ];
        }

        return ["token" => $user->createToken("authToken")->plainTextToken];

    }

    public function getToken(){
        return  auth()->user()->token();
    }

    public function refreshToken($token){
        return $this->user->refreshToken($token->id);
    }

    public function register($data){
        return $this->user->register($data);
    }

    public function getAll(){
        return $this->user->getAll();
    }

    public function create($data){
        return $this->user->create($data);
    }

    public function update($id , $data){
        return $this->user->update($id,  $data);
    }

    public function delete($id){
        return $this->user->delete($id);
    }




}
