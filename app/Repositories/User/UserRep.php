<?php


namespace App\Repositories\User;


use App\Models\Users\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserRep
{
    public $user;

    public function __construct(User $u)
    {
        $this->user = $u;
    }

    public function getById(int $id){
        return $this->user->where("id" , $id)->first();
    }
    public function getByEmail(string  $email){
        return $this->user->where("email" , $email)->first();
    }

    public function getByEmailWithRole(string $email){
        return $this->user->with('role')->where('email' , $email)->first();
    }

    public function refreshToken(int $token_id){
       return  DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $token_id)
            ->update([
                'revoked' => true
            ]);
    }

    public function checkOAUTH(){
        return DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();
    }

    public function getOAUTHToken($client , $request){
        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $request->username,
            'password' => $request->password,
        ];
        $request = Request::create('/oauth/token', 'POST', $data);
        $response =  app()->handle($request);

        if ($response->getStatusCode() != 200) {
            $resp =  [
                'message' => 'Wrong email or password ( status )',
                'type' => "error",
                'status' => 422
            ];
        }else $resp = json_decode($response->getContent());

        return $resp;
    }


    public function register(){
        //TODO
        return [];
    }

    public function getAll(){
        return $this->user->all();
    }

    public function create(array $data){
        return $this->user->create($data);
    }

    public function update(int $id , array  $data){
        return $this->getById($id)->update($data);
    }

    public function delete(int $id){
        return $this->getById($id)->delete($id);
    }

}
