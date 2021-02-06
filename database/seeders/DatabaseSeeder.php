<?php

namespace Database\Seeders;

use App\Models\Users\Roles;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);


       // \App\Models\Users\User::factory(10)->create();
    }
}
