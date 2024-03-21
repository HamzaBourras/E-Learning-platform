<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\AuthentificationController;
use App\Http\Controllers\StudentController;

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


/********************** Authentification **********************/

Route::post("/login", [AuthentificationController::class, "login"])->name("login");
Route::post("/logout", [AuthentificationController::class, "logout"])->name("logout")->middleware("auth.token");



/********************** Director management *************************/

Route::prefix("auth/director/")->middleware("auth.token")->controller(DirectorController::class)->name("director.")->group(function () {

    //--------- - --- professor -----------------------
    Route::prefix("professor/")->name("professor.")->group(function () {
        Route::get("index", "indexProfessor")->name("indexProfessor");
        Route::post("store", "storeProfessor")->name("storeProfessor");
        Route::put("edit/{id}", "editProfessor")->where(["id" => "[0-9]+"])->name("editProfessor");
        Route::delete("destroy/{id}", "destroyProfessor")->where(["id" => "[0-9]+"])->name("destroyProfessor");
    });

    //--------- - --- student -----------------------
    Route::prefix("student/")->name("student.")->group(function () {
        Route::get("index", "indexStudent")->name("indexStudent");
        Route::post("store", "storeStudent")->name("storeStudent");
        Route::put("edit/{id}", "editStudent")->where(["id" => "[0-9]+"])->name("editStudent");
        Route::delete("destroy/{id}", "destroyStudent")->where(["id" => "[0-9]+"])->name("destroyStudent");
    });

    //--------- - --- departement -----------------------
    Route::prefix("department/")->name("department.")->group(function () {
        Route::get("index", "indexDepartment")->name("indexDepartment");
        Route::post("store", "storeDepartment")->name("storeDepartment");
        Route::put("edit/{id}", "editDepartment")->where(["id" => "[0-9]+"])->name("editDepartment");
        Route::delete("destroy/{id}", "destroyDepartment")->where(["id" => "[0-9]+"])->name("destroyDepartment");
    });

    //--------- - --- sector -----------------------
    Route::prefix("sector/")->name("sector.")->group(function () {
        Route::get("index", "indexSector")->name("indexSector");
        Route::post("store", "storeSector")->name("storeSector");
        Route::put("edit/{id}", "editSector")->where(["id" => "[0-9]+"])->name("editSector");
        Route::delete("destroy/{id}", "destroySector")->where(["id" => "[0-9]+"])->name("destroySector");
    });
});




/********************** Professor management *************************/

Route::prefix("auth/professor/")->controller(ProfessorController::class)->name("professor.")->group(function () {

    //--------- - --- courses -----------------------
    Route::prefix("courses/")->name("courses.")->group(function () {
        Route::get("index/{user_id}", "indexCourse")->where(["user_id" => "[0-9]+"])->name("indexCourse");
        Route::post("store/{user_id}", "storeCourse")->where(["user_id" => "[0-9]+"])->name("storeCourse");
        Route::put("edit/{user_id}/{id}", "editCourse")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->where(["id" => "[0-9]+"])->name("editCourse");
        Route::delete("destroy/{user_id}/{id}", "destroyCourse")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->name("destroyCourse");
    });

    //--------- - --- students -----------------------
    Route::prefix("students/")->name("students.")->group(function () {
        Route::get("index/{user_id}", "indexStudent")->where(["user_id" => "[0-9]+"])->name("indexStudent");
    });


    //--------- - --- Announcements -----------------------
    Route::prefix("announcements/")->name("announcements.")->group(function () {
        Route::get("index/{user_id}", "indexAnnouncement")->where(["user_id" => "[0-9]+"])->name("indexAnnouncement");
        Route::post("store/{user_id}", "storeAnnouncement")->where(["user_id" => "[0-9]+"])->name("storeAnnouncement");
        Route::put("edit/{user_id}/{id}", "editAnnouncement")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->name("editAnnouncement");
        Route::delete("destroy/{user_id}/{id}", "destroyAnnouncement")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->where(["id" => "[0-9]+"])->name("destroyAnnouncement");
    });

    //--------- - --- Tasks -----------------------
    Route::prefix("tasks/")->name("tasks.")->group(function () {
        Route::get("index/{user_id}", "indexTask")->where(["user_id" => "[0-9]+"])->name("indexTask");
        Route::post("store/{user_id}", "storeTask")->where(["user_id" => "[0-9]+"])->name("storeTask");
        Route::put("edit/{user_id}/{id}", "editTask")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->name("editTask");
        Route::delete("destroy/{user_id}/{id}", "destroyTask")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->name("destroyTask");
        Route::get("show/{id}", "showTaskSubmissions")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->name("showTaskSubmissions");
    });


    //--------- - --- Quizzes -----------------------
    Route::prefix("quizzes/")->name("quizzes.")->group(function () {
        Route::get("index/{user_id}", "indexQuizze")->where(["user_id" => "[0-9]+"])->name("indexQuizze");
        Route::post("store/{user_id}", "storeQuizze")->where(["user_id" => "[0-9]+"])->name("storeQuizze");
        Route::put("edit/{user_id}/{id}", "editQuizze")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->name("editQuizze");
        Route::delete("destroy/{user_id}/{id}", "destroyQuizze")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->name("destroyQuizze");
    });
});



/********************** Student management *************************/

Route::prefix("auth/student")->controller(StudentController::class)->name("student.")->group(function () {

    //--------------- professors -----------------------
    Route::prefix("professors/")->name("professor.")->group(function () {
        Route::get("index/{user_id}", "indexProfessor")->where(["user_id" => "[0-9]+"])->name("indexProfessor");
    });

    //--------------- coursess -----------------------
    Route::prefix("courses/")->name("course.")->group(function () {
        Route::get("index/{user_id}", "indexCourse")->where(["user_id" => "[0-9]+"])->name("indexCourse");
    });

    //--------------- quizzes -----------------------
    Route::prefix("quizzes/")->name("quize")->group(function () {
        Route::get("index/{user_id}", "indexQuiz")->where(["user_id" => "[0-9]+"])->name("indexQuiz");
        Route::post("store/{user_id}/{quiz_id}", "storeQuizNote")->where(["user_id" => "[0-9]+", "quiz_id" => "[0-9]+"])->name("storeQuizNote");
    });

    //--------------- Submissions -----------------------
    Route::prefix("submissions/")->name("submission")->group(function () {
        Route::get("indexTasks/{user_id}", "indexStudentTasks")->where(["user_id" => "[0-9]+"])->name("indexStudentTasks");
        Route::get("index/{user_id}/{id}", "indexSubmission")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->name("indexSubmission");
        Route::post("store/{user_id}/{id}", "storeSubmission")->where(["user_id" => "[0-9]+", "id" => "[0-9]+"])->name("storeSubmission");
        Route::put("edit/{user_id}/{id}/{submission_id}", "editSubmission")->where(["user_id" => "[0-9]+", "id" => "[0-9]+", "submission_id" => "[0-9]+"])->name("editSubmission");
        Route::delete("destroy/{user_id}/{id}/{submission_id}", "destroySubmission")->where(["user_id" => "[0-9]+", "id" => "[0-9]+", "submission_id" => "[0-9]+"])->name("destroySubmission");
    });


    //--------------- Grades -----------------------
    Route::get("grades/index/{student_id}", "indexGrade")->where(["student_id" => "[0-9]+"])->name("indexGrade");
});
