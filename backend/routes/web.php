<?php

use App\Http\Controllers\AuthentificationController;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\ProfessorController;
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

    /********************** Authentification **********************/

Route::post("/login",[AuthentificationController::class,"login"])->name("login");



    /********************** Director Management *************************/
Route::prefix("auth/director/")->controller(DirectorController::class)->name("director.")->group(function(){

    //--------- - --- professor -----------------------
    Route::prefix("professor/")->name("professor.")->group(function(){
        Route::get("index","indexProfessor")->name("indexProfessor");
        Route::post("store","storeProfessor")->name("storeProfessor");
        Route::get("edit/","editProfessor")->where(["id"=>"[0-9]+"])->name("editProfessor");
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
    Route::prefix("department/")->name("department.")->group(function () {
        Route::get("index","indexDepartment")->name("indexDepartment");
        Route::post("store","storeDepartment")->name("storeDepartment");
        Route::put("edit/{id}","editDepartment")->where(["id"=>"[0-9]+"])->name("editDepartment");
        Route::delete("destroy/{id}","destroyDepartment")->where(["id"=>"[0-9]+"])->name("destroyDepartment");
    });

    //--------- - --- sector -----------------------
    Route::prefix("sector/")->name("sector.")->group(function () {
        Route::get("index","indexSector")->name("indexSector");
        Route::post("store","storeSector")->name("storeSector");
        Route::put("edit/{id}","editSector")->where(["id"=>"[0-9]+"])->name("editSector");
        Route::delete("destroy/{id}","destroySector")->where(["id"=>"[0-9]+"])->name("destroySector");
    });


});



    /********************** Professor Management *************************/
Route::prefix("auth/professor/")->controller(ProfessorController::class)->name("professor.")->group(function () {

    //--------- - --- courses -----------------------
    Route::prefix("course/")->name("course.")->group(function () {
        Route::get("index","indexCourse")->name("indexCourse");
        Route::post("store","storeCourse")->name("storeCourse");
        Route::put("edit/{id}","editCourse")->where(["id"=>"[0-9]+"])->name("editCourse");
        Route::delete("destroy/{id}","destroyCourse")->where(["id"=>"[0_9]+"])->name("destroyCourse");
        
    });


    //--------- - --- students -----------------------
    Route::prefix("student/")->name("student.")->group(function () {
        Route::get("index","indexStudent")->name("indexStudent");

    });


    //--------- - --- Announcements -----------------------
    Route::prefix("announcement/")->name("announcement.")->group(function () {
        Route::get("index","indexAnnouncement")->name("indexAnnouncement");
        Route::post("store","storeAnnouncement")->name("storeAnnouncement");
        Route::put("edit/{id}","editAnnouncement")->where(["id"=>"[0-9]+"])->name("editAnnouncement");
        Route::delete("destroy/{id}","destroyAnnouncement")->where(["id"=>"[0-9]+"])->name("destroyAnnouncement");
    });


    //--------- - --- Quizzes -----------------------
    

});



        /********** Test ************/
Route::get('createLogin', function () {
    return view('createLogin');
});


