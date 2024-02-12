<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartementRequest;
use App\Models\User;
use App\Models\Sector;
use Nette\Utils\ArrayHash;
use App\Models\Departement;
use Illuminate\Http\Request;
use App\Http\Requests\ProfessorRequest;
use App\Http\Requests\StudentRequest;
use App\Models\SectorsUsers;

class DirectorController extends Controller
{
    /*********** Professor ***************/

    /**** return All professors ****/

    public function indexProfessor()
    {
        $profs =  User::with("sectors", "departement")->where('role_id', 2)->get();

        $professors = [];
        // dd($profs[0]->departement->name);

        foreach ($profs as $prof) {

            // stocker tous les filières du professeurs dans un array
            $profSectors = [];
            foreach ($prof->sectors as $sect) {
                array_push($profSectors, $sect->name);
            }

            // représenter le prof sous la format
            $formatProfessor = [
                "id" => $prof->id,
                "name" => $prof->name,
                "email" => $prof->email,
                "password" => $prof->password,
                "department" => $prof->departement->name,
                "sectors" => $profSectors
            ];

            // stocker tous les professeurs dans un array
            array_push($professors, $formatProfessor);
        }

        return response()->json([
            "data" => $professors
        ]);
    }


    /**** store a professor ****/

    public function storeProfessor(ProfessorRequest $request)
    {
        // selectioné l'id du departement
        $departement_id = Departement::where('name', $request->department)->first()->id;

        User::create([
            "name" => $request->name,
            "email" => $request->email,
            "role_id" => 2,
            "departement_id" => $departement_id,
            "password" => $request->email
        ]);

        // selectioné l'id du professor crée
        $professorCreeId = User::orderBy('id', 'desc')->where('role_id', 2)->first();

        // enregistré les ids des sectors selectioné
        $sectors_id = [];
        array_push($sectors_id, Sector::whereIn('name', $request->sectors)->pluck('id')->toArray());
        $sectors_id = $sectors_id[0];  // ici parsque $sectors_id c'est un tableau à l'interieur d'un tableau

        // inserer les ids des sectors et du professor dans la table de relation many to many
        foreach ($sectors_id as $sector_id) {
            SectorsUsers::create([
                "users_id" => $professorCreeId,
                "sectors_id" => $sector_id
            ]);
        }

        return response()->json([
            "status" => 200,
            "message" => "Professor added successfully"
        ]);
    }

    /**** edit a professor ****/

    public function editProfessor(ProfessorRequest $request, int $id)
    {
        // selectioné l'id du departement
        $departement_id = Departement::where('name', $request->department)->first()->id;

        User::where(['id'=>$id,"role_id"=>2])->update([
            "name"=> $request->name,
            "email" => $request->email,
            "departement_id" => $departement_id,
            "password" => $request->email
        ]);

        // enregistré les ids des sectors selectioné
        $sectors_id = [];
        array_push($sectors_id, Sector::whereIn('name', $request->sectors)->pluck('id')->toArray());
        $sectors_id = $sectors_id[0];  // ici parsque $sectors_id c'est un tableau à l'interieur d'un tableau

        // inserer les ids des sectors et du professor dans la table de relation many to many
        foreach ($sectors_id as $sector_id) {
            SectorsUsers::where('users_id',$id)->update([
                "sectors_id" => $sector_id
            ]);
        }

        return response()->json([
            "status" => 200,
            "message" => "Professor updated successfully"
        ]);

    }


    /**** delete a professor ****/

    public function destroyProfessor (int $id) {
        User::where(['id'=>$id,"role_id"=>2])->delete();

        return response()->json([
            "status" => 200,
            "message" => "Professor deleted successfully"
        ]);
    }



    /**************************************************************************** */

    /*********** Student ***************/

    /**** return All students ****/

    public function indexStudent () {
        $studs = User::with("sector","sector.departement")->where('role_id',3)->get();

        $students = [];

        foreach ($studs as $stud) {
            $formatStudent = [
                "id" => $stud->id,
                "name" => $stud->name,
                "email" => $stud->email,
                "password" => $stud->password,
                "department" => $stud->sector->departement->name,
                "sector" => $stud->sector->name
            ];

            array_push($students,$formatStudent);
        }
        return response()->json([
            "data" => $students
        ]);
    }

    /**** store a student ****/

    public function storeStudent (StudentRequest $request) {
        $sector_id = Sector::where('name',$request->sector)->first()->id;

        User::create([
            "name" => $request->name,
            "email" => $request->email,
            "role_id" => 3,
            "sector_id" => $sector_id,
            "password" => $request->email
        ]);

        return response()->json([
            "status" => 200,
            "message" => "Student added successfully"
        ]);
    }

    /**** edit a student ****/

    public function editStudent (StudentRequest $request, int $id) {
        $sector_id = Sector::where('name',$request->sector)->first()->id;

        User::where(['id'=>$id,"role_id"=>3])->update([
            "name" => $request->name,
            "email" => $request->email,
            "sector_id" => $sector_id,
            "password" => $request->email
        ]);

        return response()->json([
            "status" => 200,
            "message" => "Student updated successfully"
        ]);
    }

    /**** delete a student ****/

    public function destroyStudent (int $id) {
        User::where(["id"=>$id, "role_id"=>3])->delete();

        return response()->json([
            "status" => 200,
            "message" => "Student deleted successfully"
        ]);
    }



    /**************************************************************************** */

    /*********** Departement ***************/

    /**** return All departement ****/

    public function indexDepartment () {
        $departements = Departement::all(['id','name as department']);

        return response()->json([
            "data" => $departements
        ]);
    }

    /**** store a departement ****/

    public function storeDepartment (DepartementRequest $request) {
        Departement::create([
            "name" => $request->department
        ]);

        return response()->json([
            "status" => 200,
            "message" => "Department added successfully"
        ]);
    }

    /**** edit a departement ****/

    public function editDepartment (DepartementRequest $request, int $id) {
        Departement::where('id',$id)->update([
            "name" => $request->department
        ]);

        return response()->json([
            "status" => 200,
            "message" => "Department updated successfully"
        ]);
    }

    /**** delete a departement ****/

    public function destroyDepartment ( int $id) {
        Departement::where('id',$id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Department deleted successfully"
        ]);
    }



    /**************************************************************************** */

    /*********** Sector ***************/

    /**** return All departement ****/

    public function indexSector () {
        $sects = Sector::with("departement")->get();

        $sectors = [];

        foreach($sects as $sect) {
            $formatSect = [
                "id" => $sect->id,
                "department" => $sect->departement->name,
                "sector" => $sect->name
            ];

            array_push($sectors,$formatSect);
        }

        return response()->json([
            "data" => $sectors
        ]);
    }

    /**** store a departement ****/

    public function storeSector (DepartementRequest $request) {
        $departement_id = Departement::where('name',$request->department)->first()->id;
        
        Sector::create([
            "name" => $request->sector,
            "departement_id" => $departement_id
        ]);

        return response()->json([
            "status" => 200,
            "message" => "Sector added successfully"
        ]);
    }

    /**** edit a departement ****/

    public function editSector (DepartementRequest $request, int $id) {
        $departement_id = Departement::where('name',$request->department)->first()->id;

        Sector::where('id',$id)->update([
            "name" => $request->sector,
            "departement_id" => $departement_id
        ]);

        return response()->json([
            "status" => 200,
            "message" => "Sector updated successfully"
        ]);
    }

    /**** delete a departement ****/

    public function destroySector ( int $id) {
        Sector::where('id',$id)->delete();

        return response()->json([
            "status" => 200,
            "message" => "Sector deleted successfully"
        ]);
    }

}

    
