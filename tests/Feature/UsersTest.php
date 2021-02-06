<?php

namespace Tests\Feature;

use App\Models\Users\User;
use Tests\TestCase;

class UsersTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    /**
     * Test login
     */
    public function testLogin(){
        $response = $this->post('/api/login' , ["username" => 'rowlinest90@gmail.com' , 'password' => "user90"]);
        $response->assertStatus(200);
        $this->assertArrayHasKey('token', $response);


    }

    /**
     * Test Hash
     */
    public function testHash(){
        $user = User::where("email" , "rowlinest90@gmail.com")->first();
        $this->assertTrue(\Illuminate\Support\Facades\Hash::check("user90" , $user->password));
    }

    /**
     * Function to get user without Token
     */
    public function testGetUser(){
        $response = $this->get('/api/admin/user'  );
        $response->assertStatus(302);
    }





}
