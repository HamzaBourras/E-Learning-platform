<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /************ return all professors of the student ******************/

    public function indexProfessor(int $user_id)
    {
        $student = User::with("sector.user")->where('id', $user_id)->first();

        $allProfessors = $student->sector->user->sortByDesc('id');

        $studProfessors = [];

        foreach ($allProfessors as $prof) {
            $formatProfessor = [
                "id" => $prof->id,
                "username" => $prof->username,
                "email" => $prof->email
            ];

            array_push($studProfessors, $formatProfessor);
        }

        return response()->json([
            "data" => $studProfessors
        ]);
    }

    /************ return latest 4 courses of the student ******************/
    public function indexCourse(int $user_id)
    {
        $student = User::with("sector.documents")->where('id', $user_id)->first();

        $latestCourses = $student->sector->documents->sortByDesc('id')->take(4);

        $studCourses = [];

        foreach ($latestCourses as $cour) {
            $formatCourse = [
                "id" => $cour->id,
                "courseName" => $cour->title
            ];

            array_push($studCourses, $formatCourse);
        }

        return response()->json([
            "data" => $studCourses
        ]);
    }
}
