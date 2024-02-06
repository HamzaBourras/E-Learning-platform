<?php

use App\Http\Controllers\DirectorController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
//    return  redirect()->route("director.dashboard");
});

Route::prefix("auth/director/")->controller(DirectorController::class)->name("director.")->group(function(){

    //--------- - --- teachers -----------------------
    Route::prefix("professor/")->name("professor.")->group(function(){
        Route::get("index","indexProfessor")->name("indexProfessor");
        Route::post("store","storeProfessor")->name("storeProfessor");
        Route::post("edit/{id}","editProfessor")->where(["id"=>"[0-9]+"])->name("editProfessor");
        Route::delete("destroy/{id}","destroyProfessor")->where(["id"=>"[0-9]+"])->name("destroyProfessor");

    });

});

