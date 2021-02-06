<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name' => 'Admin',
            'sysname' => 'Admin',
            'is_enabled' => 0
        ]);

        DB::table('roles')->insert([
            'name' => 'Country admin',
            'sysname' => 'CountryAdmin',
            'is_enabled' => 0
        ]);

        DB::table('roles')->insert([
            'name' => 'User',
            'sysname' => 'User',
            'is_enabled' => 0
        ]);

    }
}
