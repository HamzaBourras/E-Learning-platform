<?php

namespace App\Http\Controllers;

use App\Http\Requests\AnnouncementRequest;
use App\Models\User;
use App\Models\Sector;
use App\Models\Document;
use Illuminate\Http\Request;
use App\Http\Requests\CourseRequest;
use App\Models\Announcement;
use App\Models\Qcm;

class ProfessorController extends Controller
{
    
    /*************** Course ***************/

    /**** return All courses ****/
    public function indexCourse (int $user_id) {
        // $user_id=3; // à refaire

        $cous = Document::with("sector","user")->where(["user_id"=>$user_id])->get();

        $courses = [];

        foreach ($cous as $cou) {
            $formatCourse = [
                "id" => $cou->id,
                "title" => $cou->title,
                "sector" => $cou->sector->name,
                "file" => $cou->file,
                "username" => $cou->user->username
            ];

            array_push($courses,$formatCourse);
        }

        return response()->json([
            "data" => $courses
        ]);
    }


    /**** store a course ****/

    public function storeCourse (CourseRequest $request, int $user_id) {
        // $user_id = 5;  // à refaire

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

        return response()->json( [
            "message" => "course added succesfully"
        ]);
    }


    /**** edit a course ****/

    public function editCourse (CourseRequest $request, int $user_id, int $id) {

        $sector_id = Sector::where('name',$request->sector)->first()->id;

        $filename =null;

        if($request->hasFile('file')){
            $file = $request->validated(["file"]);
            $filename = $file->store("courses", "public");
        }

        Document::where(["id"=>$id, "user_id"=>$user_id])->update([
            "title" => $request->title,
            "sector_id" => $sector_id,
            "description" => $request->description,
            "file" => $filename
        ]);

        return response()->json( [
            "message" => "course updated succesfully"
        ]);
    }


    /**** delete a course ****/

    public function destroyCourse ( int $user_id, int $id) {
        Document::where(["id"=>$id,"user_id"=>$user_id])->delete();

        return response()->json( [
            "message" => "course deleted succesfully"
        ]);
    }



    /**************** Student ***************/

    /**** return All students for professor ****/

    public function indexStudent (int $user_id) {
        // $user_id = 3; // à refaire

            // selectioné le prof avec ses filières
        $user = User::with("sectors","sectors.departement")->where('id',$user_id)->first();

        $profStudents = [];

        foreach ($user->sectors as $sector) {    // $user->sectors représente les filères du prof
            foreach ($sector->users as $student) {   // $sector->users représente tous les étudiants de chaque filère
                if($student->role->id == 3) {   // vérifer si c'est un étudiant
                    $formatProfStudent = [
                        "id" => $student->id,
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

        return response()->json( [
            "data" => $profStudents
        ]);
    }



    /**************** Announcement ***************/

    /**** return All Announcements ****/

    public function indexAnnouncement (int $user_id) {
        // $user_id = 3; // à refaire

        $allAnnouncements = Announcement::where('user_id',$user_id)->with("sector")->get();

        $announcements = [];

        foreach ($allAnnouncements as $anounc) {
            $formatAnnounce = [
                "id" => $anounc->id,
                "announcementName" => $anounc->announcement,
                "sector" => $anounc->sector->name
            ];

            array_push($announcements,$formatAnnounce);
        }

        return [
            "data" => $announcements
        ];
    }

    /**** store an Announcement ****/

    public function storeAnnouncement (AnnouncementRequest $request, int $user_id) {
        // $user_id = 3;  // à refaire

        $sector_id = Sector::where('name',$request->sector)->first()->id;

        Announcement::create([
            "announcement" => $request->announcementName,
            "sector_id" => $sector_id,
            "user_id" => $user_id
        ]);

        return response()->json( [
            "message" => "Announcement added succesfully"
        ]);
    }

    /**** edit an Announcement ****/

    public function editAnnouncement (AnnouncementRequest $request, int $user_id, int $id) {
        $sector_id = Sector::where('name',$request->sector)->first()->id;

        Announcement::where(["id"=>$id, "user_id"=>$user_id])->update([
            "announcement" => $request->announcementName,
            "sector_id" => $sector_id,
        ]);

        return response()->json( [
            "message" => "Announcement updated succesfully"
        ]);
    }

    /**** delete an Announcement ****/

    public function destroyAnnouncement (int $user_id, int $id) {
        Announcement::where(["id"=>$id, "user_id"=>$user_id])->delete();

        return response()->json( [
            "message" => "Announcement deleted succesfully"
        ]);
    }


    /**************** Quizzes ***************/

    /**** return All Quizzes ****/

    public function indexQuizze (int $user_id) {
            // get all quizzes for professor with question and choices
        $allQuizzes = Qcm::with("questions","questions.choices")->where('user_id',$user_id)->get();

        $professorQuizzes = [];

        foreach($allQuizzes as $quizze) {
            foreach ($quizze->questions as $question) {
                foreach ($question->choices as $choice) {
                    $formatQuizze = [
                        "quizzeName" => $quizze->title,
                        
                    ];
                }
            }
        }

        return response()->json([
            "data" =>$professorQuizzes
        ]);
    }



}
