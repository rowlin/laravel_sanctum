<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table("users")->insert([
            'firstname' => Str::random(5),
            'lastname' => Str::random(5),
            'email' => "rowlinest90@gmail.com",
            'email_verified_at' => now(),
            'password' => Hash::make("user90"), // password
            'remember_token' => Str::random(10),
            'is_enabled' => true,
            "role_id" => 1,
            "town_id" => 1,
        ]);
    }
}
