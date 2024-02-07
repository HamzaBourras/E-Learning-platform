<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DirectorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix("auth/director/")->controller(DirectorController::class)->name("director.")->group(function(){

    //--------- - --- professor -----------------------
    Route::prefix("professor/")->name("professor.")->group(function(){
        Route::get("index","indexProfessor")->name("indexProfessor");
        Route::post("store","storeProfessor")->name("storeProfessor");
        Route::put("edit/{id}","editProfessor")->where(["id"=>"[0-9]+"])->name("editProfessor");
        Route::delete("destroy/{id}","destroyProfessor")->where(["id"=>"[0-9]+"])->name("destroyProfessor");

    });

    //--------- - --- student -----------------------
    Route::prefix("student/")->name("student.")->group(function () {
        Route::get("index","indexStudent")->name("indexStudent");
        Route::post("store","storeStudent")->name("storeStudent");
        Route::put("edit/{id}","editStudent")->where(["id"=>"[0-9]+"])->name("editStudent");
        Route::delete("destroy/{id}","destroyStudent")->where(["id"=>"[0-9]+"])->name("destroyStudent");
    });

    //--------- - --- departement -----------------------
    Route::prefix("departement/")->name("departement.")->group(function () {
        Route::get("index","indexDepartement")->name("indexDepartement");
        Route::post("store","storeDepartement")->name("storeDepartement");
        Route::put("edit/{id}","editDepartement")->where(["id"=>"[0-9]+"])->name("editDepartement");
        Route::delete("destroy/{id}","destroyDepartement")->where(["id"=>"[0-9]+"])->name("destroyDepartement");
    });

    //--------- - --- sector -----------------------
    Route::prefix("sector/")->name("sector.")->group(function () {
        Route::get("index","indexSector")->name("indexSector");
        Route::post("store","storeSector")->name("storeSector");
        Route::put("edit/{id}","editSector")->where(["id"=>"[0-9]+"])->name("editSector");
        Route::delete("destroy/{id}","destroySector")->where(["id"=>"[0-9]+"])->name("destroySector");
    });

});


