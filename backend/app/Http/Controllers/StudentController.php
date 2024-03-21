<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Qcm;
use App\Models\User;
use App\Models\Submission;
use Illuminate\Http\Request;
use App\Http\Requests\QcmRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\SubmissionRequest;

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


    /*************** Quizzes ***************/

    /**** return all quizzes of the student ****/
    public function indexQuiz(int $user_id)
    {
        $allStudentQuiz = User::with("sector.qcms.questions.choices",)->where('id', $user_id)->first();  // all quizzes of the student

        $studentQuizzes = [];

        foreach ($allStudentQuiz->sector->qcms as $quizze) {
            //refactor quizze
            $formatQuizze = [
                "id" => $quizze->id,
                "quizName" => $quizze->title,
                "noteTotale" => $quizze->noteTotale,
                "sector" => $allStudentQuiz->sector->name,
                "questions" => []
            ];

            foreach ($quizze->questions as $question) {
                //refactor each question
                $formatQuestion = [
                    "id" => $question->id,
                    "question" => $question->text,
                    "note" => $question->note,
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
        $currentD = Carbon::now();
        $currentDate = date('Y-m-d H:i:s', strtotime($currentD));

        $studentTa = User::with(['sector.tasks' => function ($query) use ($currentDate) {
            $query->where('deadline', '>=', $currentDate);
        }])
            ->where('id', $user_id)
            ->first();

        $studentTasks = [];

        foreach ($studentTa->sector->tasks as $task) {
            $formatTask = [
                "id" => $task->id,
                "taskName" => $task->taskName,
                "description" => $task->description,
                "deadline" => $task->deadline
            ];

            array_push($studentTasks, $formatTask);
        }

        return response()->json([
            "data" => $studentTasks
        ]);
    }


    /**** return the submissions for a task ****/
    public function indexSubmission(int $user_id, int $id)
    {
        $taskSub = Submission::where(["user_id" => $user_id, "id" => $id])->first();

        $taskSubmission = [
            "id" => $taskSub->id,
            "file" => $taskSub->file ? Storage::url($taskSub->file) : null
        ];

        return response()->json([
            "data" => $taskSubmission
        ]);
    }


    /**** store a submission for a task ****/
    public function storeSubmission(SubmissionRequest $request, int $user_id, int $id)
    {
        Submission::create([
            "task_id" => $id,
            "user_id" => $user_id,
            "file" => $request->file
        ]);

        return response()->json([
            "message" => "submission added successfully"
        ]);
    }


    /**** edit a submission for a task ****/
    public function editSubmission(SubmissionRequest $request, int $user_id, int $id, int $submission_id)
    {
        Submission::where(["user_id" => $user_id, "task_id" => $id, "id" => $submission_id])->update([
            "file" => $request->file
        ]);

        return response()->json([
            "message" => "submission updated successfully"
        ]);
    }


    /**** destroy a submission for a task ****/
    public function destroySubmission(SubmissionRequest $request, int $user_id, int $id, int $submission_id)
    {
        Submission::where(["user_id" => $user_id, "task_id" => $id, "id" => $submission_id])->delete();

        return response()->json([
            "message" => "submission deleted successfully"
        ]);
    }
}
