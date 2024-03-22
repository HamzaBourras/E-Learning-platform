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
use App\Models\Note;

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
        $submittedQuizzesIds = Note::where("user_id", $user_id)->pluck("qcm_id")->toArray();
        
        $studentQuizzes = [];

        foreach ($allStudentQuiz->sector->qcms as $quizze) {
            if(!in_array($quizze->id, $submittedQuizzesIds)) {
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
                        "isCorrect" => false
                    ];
                    array_push($formatQuestion['answers'], $formatAnswer);  // add the answer in the table of answers of question
                }
                array_push($formatQuizze['questions'], $formatQuestion);  // add the question in the table of questions 
            }
            array_push($studentQuizzes, $formatQuizze);  // add quizze in the table of professor quizzes
        
            }    
        }

        return response()->json([
            "data" => $studentQuizzes
        ]);
    }


    /**** calcul note for a qcm ****/
    public function storeQuizNote(QcmRequest $request, int $user_id, int $quiz_id)
    {
        $studentQuiz = $request->all();
        $dataBaseQuiz = Qcm::with("questions.choices")->where("id", $quiz_id)->first();

        $studentNote = 0;
        $allQuestions = [];
        $reponsesCommuns = [];

        // reformater les reponses des étudiants
        foreach ($studentQuiz['questions'] as $studQuestion) {
                $sFormatQues = [
                    "questionId" => $studQuestion['id'],
                    "questionNote" => $studQuestion['note'],
                    "answers" => []
                ];
            foreach ($studQuestion['answers'] as $studAnswers) {
                $sFormatAnsw = [
                    "answersId" => $studAnswers['id'],
                    "answerIsCorrect" => $studAnswers['isCorrect'],
                ];

                array_push($sFormatQues['answers'], $sFormatAnsw);
            }
            
            $allQuestions[] = $sFormatQues;
        }

        // reformater les reponses qui est dans la base de données
        foreach ($dataBaseQuiz['questions'] as $dataBaseQuestion) {
                $dFormatQues = [
                    "questionId" => $dataBaseQuestion['id'],
                    "questionNote" => $dataBaseQuestion['note'],
                    "answers" => []
                ];
            foreach ($dataBaseQuestion['choices'] as $dataBaseAnswers) {
                $dFormatAnsw = [
                    "answersId" => $dataBaseAnswers['id'],
                    "answerIsCorrect" => $dataBaseAnswers['tr_fl']
                ];

                array_push($dFormatQues['answers'], $dFormatAnsw);
            }
            
            $allQuestions[] = $dFormatQues;
        }

        // selectioner les reponses corrects des étudiants
        for($i = 0; $i < count($allQuestions); $i++) {
            for($j = $i+1; $j < count($allQuestions); $j++) {
                if($allQuestions[$i] == $allQuestions[$j]) {
                    $reponsesCommuns[] = $allQuestions[$i];
                    break;
                }
            }
        }

        // calculer la note d'étudiant
        foreach ($reponsesCommuns as $reponse) {
            $studentNote += $reponse['questionNote'];
        }

        // inserer la note dans la base de données
        Note::create([
            "user_id" => $user_id,
            "qcm_id" => $quiz_id,
            "note" => $studentNote
        ]);

        return response()->json([
            "message" => "quiz submitted successfully"
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
        $taskSub = Submission::where(["user_id" => $user_id, "task_id" => $id])->first();

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
        $filename = null;

        if ($request->hasFile('file')) {
            $file = $request->validated(["file"]);
            $filename = $file->store("submissions", "public");
        }

        Submission::create([
            "task_id" => $id,
            "user_id" => $user_id,
            "file" => $filename
        ]);

        return response()->json([
            "message" => "submission added successfully"
        ]);
    }


    /**** edit a submission for a task ****/
    public function editSubmission(SubmissionRequest $request, int $user_id, int $id, int $submission_id)
    {
        $filename = null;

        /** Tester sur le document **/
        $oldFile = Submission::where('id', $id)->first();

        // si le professeur a choisi un noveau document
        if ($request->hasFile('file')) {
            // supprimer l'ancien document du dossier storage/course
            $oldFilename = $oldFile->file;
            Storage::delete("public/" . $oldFilename);

            $file = $request->validated(["file"]);
            $filename = $file->store("courses", "public");
        }
        // si l'ancien document est le meme qu'au noveau c'est à dire le professeur n'a pas choisir un autre document
        else {
            $filename = $oldFile->file;
        }

        Submission::where(["user_id" => $user_id, "task_id" => $id, "id" => $submission_id])->update([
            "file" => $filename
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



    /*********** return all grades of the students ***********/
    /**** return all grades ****/
    public function indexGrade (int $student_id) {
        $allGrades = Note::with("qcm")->where("user_id",$student_id)->get();

        $studentGrades = [];

        foreach($allGrades as $grade) {
            $formatGrade = [
                "quizName" => strtoupper($grade->qcm->title),
                "grade" => $grade->note
            ];
            array_push($studentGrades, $formatGrade);
        }


        return response()->json([
            "data" => $studentGrades
        ]);
    }



}
