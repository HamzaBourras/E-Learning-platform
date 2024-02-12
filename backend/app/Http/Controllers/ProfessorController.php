<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseRequest;
use App\Models\Document;
use App\Models\Sector;
use Illuminate\Http\Request;

class ProfessorController extends Controller
{
    
    /*********** Course ***************/

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





}
