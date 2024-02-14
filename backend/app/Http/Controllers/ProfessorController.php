<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Sector;
use App\Models\Document;
use Illuminate\Http\Request;
use App\Http\Requests\CourseRequest;

class ProfessorController extends Controller
{
    
    /*************** Course ***************/

    /**** return All courses ****/
    public function indexCourse () {
        $user_id=3; // à refaire

        $cous = Document::with("sector","user")->where(["user_id"=>$user_id])->get();

        $courses = [];

        foreach ($cous as $cou) {
            $formatCourse = [
                "id" => $cou->id,
                "title" => $cou->title,
                "sector" => $cou->sector->name,
                "file" => $cou->file,
                "username" => $cou->user->name
            ];

            array_push($courses,$formatCourse);
        }

        return response()->json([
            "data" => $courses
        ]);
    }


    /**** store a course ****/

    public function storeCourse (CourseRequest $request) {
        $user_id = 5;  // à refaire

        $sector_id = Sector::where('name',$request->sector)->first()->id;

        $filename =null;

        if($request->hasFile('file')){
            $file = $request->validated(["file"]);
            $filename = $file->store("courses", "public");
        }
        

        Document::create([
            "title" => $request->title,
            "sector_id" => $sector_id,
            "user_id" => $user_id,
            "description" => $request->description,
            "file" => $filename
        ]);
    }


    /**** edit a course ****/

    public function editCourse (CourseRequest $request, int $id) {

        $sector_id = Sector::where('name',$request->sector)->first()->id;

        $filename =null;

        if($request->hasFile('file')){
            $file = $request->validated(["file"]);
            $filename = $file->store("courses", "public");
        }

        Document::where(["id"=>$id])->update([
            "title" => $request->title,
            "sector_id" => $sector_id,
            "description" => $request->description,
            "file" => $filename
        ]);
    }


    /**** delete a course ****/

    public function destroyCourse (int $id) {
        Document::where(["id"=>$id])->delete();
    }



    /**************** Student ***************/

    /**** return All students for professor ****/

    public function indexStudent () {
        $user_id = 3; // à refaire

            // selectioné le prof avec ses filières
        $user = User::with("sectors","sectors.departement")->where('id',$user_id)->first();

        $profStudents = [];

        foreach ($user->sectors as $sector) {    // $user->sectors représente les filères du prof
            foreach ($sector->users as $student) {   // $sector->users représente tous les étudiants de chaque filère
                if($student->role->id == 3) {   // vérifer si c'est un étudiant
                    $formatProfStudent = [
                        "username" => $student->username,
                        "firstName" => $student->firstName,
                        "lastName" => $student->lastName,
                        "sector" => $sector->name,
                        "department" => $sector->departement->name,
                        "email" => $student->email
                    ];

                    array_push($profStudents,$formatProfStudent);
                }

            }
        }

        return [
            "data" => $profStudents
        ];
    }



    

    



}
