<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StudentController extends Controller
{

    /************ return all professors of the student ******************/
    public function indexProfessor(int $user_id)
    {
        $studentProf = User::with("sector.user")->where('id', $user_id)->first();  //all professor for student

        $allProfessors = $studentProf->sector->user->sortByDesc('id');

        $studProfessors = [];

        foreach ($allProfessors as $prof) {
            $formatProfessor = [
                "id" => $prof->id,
                "username" => $prof->username,
                "firstname" => $prof->firstName,
                "lastname" => $prof->lastName,
                "email" => $prof->email
            ];

            array_push($studProfessors, $formatProfessor);
        }

        return response()->json([
            "data" => $studProfessors
        ]);
    }


    /************ return all courses of the student ******************/
    public function indexCourse(int $user_id)
    {
        $studentCour = User::with("sector.documents")->where('id', $user_id)->first();

        $latestCourses = $studentCour->sector->documents->sortByDesc('id');

        $studCourses = [];

        foreach ($latestCourses as $cour) {
            $formatCourse = [
                "id" => $cour->id,
                "courseName" => $cour->title,
                "file" => $cour->file ? Storage::url($cour->file) : null,
            ];

            array_push($studCourses, $formatCourse);
        }

        return response()->json([
            "data" => $studCourses
        ]);
    }

    /************ return all quizzes of the student ******************/
    public function indexQuiz(int $user_id)
    {
        $allStudentQuiz = User::with("sector.qcms.questions.choices",)->where('id', $user_id)->first();  // all quizzes of the student

        $studentQuizzes = [];

        foreach ($allStudentQuiz->sector->qcms as $quizze) {
            //refactor quizze
            $formatQuizze = [
                "id" => $quizze->id,
                "quizName" => $quizze->title,
                "sector" => $allStudentQuiz->sector->name,
                "questions" => []
            ];

            foreach ($quizze->questions as $question) {
                //refactor each question
                $formatQuestion = [
                    "id" => $question->id,
                    "question" => $question->text,
                    "answers" => []
                ];

                foreach ($question->choices as $choice) {
                    //refactor each answer for the question
                    $formatAnswer = [
                        "id" => $choice->id,
                        "answer" => $choice->text,
                        "isCorrect" =>  $choice->tr_fl
                    ];
                    array_push($formatQuestion['answers'], $formatAnswer);  // add the answer in the table of answers of question
                }
                array_push($formatQuizze['questions'], $formatQuestion);  // add the question in the table of questions 
            }
            array_push($studentQuizzes, $formatQuizze);  // add quizze in the table of professor quizzes
        }

        return response()->json([
            "data" => $studentQuizzes
        ]);
    }


    /************ Submissions ******************/

    /**** return all tasks for the student ****/
    public function indexStudentTasks(int $user_id)
    {
        $currentDate = Carbon::now();
        
        $studentTasks = User::with("sector.tasks")->where('id',$user_id)->whereDate('deadline', '>', $currentDate)->get();

        return response()->json([
            "data" => $studentTasks
        ]);
    }
}
