<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Requests\Users\RegisterRequest;
use App\Http\Requests\Users\LoginRequest;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public $user;
    public $msg = [];

    public function __construct(UserService $u){
        $this->user = $u;

    }

    public function logout(){
        $accessToken = $this->user->getToken();
        $this->user->refreshToken($accessToken);
        $accessToken->revoke();
        return ['status' => 200];
    }

    public function register(RegisterRequest  $request){
        $this->user->register($request);
        return "";
    }

    public function login(LoginRequest $request)
    {
        try{
            $token=  $this->user->login($request);
            $this->msg = [
                   "status_code" => 200,
                   "token" => $token["token"],
                   "token_type" => "Bearer",
                ];
        }catch (\Exception $e) {
            $this->msg = [
                   "status_code" => 500,
                   "message" => "Error in Login",
                   "error" => $e,
                ];
        }
        return $this->msg;
}


}
