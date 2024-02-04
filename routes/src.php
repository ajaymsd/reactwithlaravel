<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register src routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "src" middleware group. Make something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/{any}', function () {
    return view('home');
})->where('any', '.*');

