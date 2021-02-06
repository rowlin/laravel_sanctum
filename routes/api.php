<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
    /*Login*/
    Route::post('api/register', 'API\AuthController@register');
    Route::post('api/login', 'API\AuthController@login')->name('login');
    Route::post('api/logout', 'Api\AuthController@logout')->name('logout');

Route::group(['middleware' =>[ 'auth:sanctum'] , 'prefix' => '/api/admin'], function () {
    Route::get('/users' , "Admin\UserController@getAll");
    Route::get('/user/{id?}' ,"Admin\UserController@getById" );
    Route::post('/user/{id}', "Admin\UserController@update");
    Route::delete('/user/{id}', "Admin\UserController@delete");

});
