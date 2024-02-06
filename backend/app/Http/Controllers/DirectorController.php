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
                "departement" => $prof->departement->name,
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
        $departement_id = Departement::where('name', $request->departement)->first()->id;

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
    }

    /**** edit a professor ****/

    public function editProfessor(ProfessorRequest $request, int $id)
    {
        // selectioné l'id du departement
        $departement_id = Departement::where('name', $request->departement)->first()->id;

        User::where(['id'=>$id,"role_id"=>2])->update([
            "name" => $request->name,
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

    }


    /**** delete a professor ****/

    public function destroyProfessor (int $id) {
        User::where(['id'=>$id,"role_id"=>2])->delete();
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
                "departement" => $stud->sector->departement->name,
                "sector" => $stud->sector->name
            ];

            array_push($students,$formatStudent);
        }
        return [
            "data" => $students
        ];
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
    }

    /**** delete a student ****/

    public function destroyStudent (int $id) {
        User::where(["id"=>$id, "role_id"=>3])->delete();
    }



    /**************************************************************************** */

    /*********** Departement ***************/

    /**** return All departement ****/

    public function indexDepartement () {
        $departements = Departement::all(['id','name as departement']);

        return [
            "data" => $departements
        ];
    }

    /**** store a departement ****/

    public function storeDepartement (DepartementRequest $request) {
        Departement::create([
            "name" => $request->departement
        ]);
    }

    /**** edit a departement ****/

    public function editDepartement (DepartementRequest $request, int $id) {
        Departement::where('id',$id)->update([
            "name" => $request->departement
        ]);
    }

    /**** delete a departement ****/

    public function destroyDepartement ( int $id) {
        Departement::where('id',$id)->delete();
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
                "departement" => $sect->departement->name,
                "sector" => $sect->name
            ];

            array_push($sectors,$formatSect);
        }

        return [
            "data" => $sectors
        ];
    }

    /**** store a departement ****/

    public function storeSector (DepartementRequest $request) {
        $departement_id = Departement::where('name',$request->departement)->first()->id;
        
        Sector::create([
            "name" => $request->sector,
            "departement_id" => $departement_id
        ]);
    }

    /**** edit a departement ****/

    public function editSector (DepartementRequest $request, int $id) {
        $departement_id = Departement::where('name',$request->departement)->first()->id;

        Sector::where('id',$id)->update([
            "name" => $request->sector,
            "departement_id" => $departement_id
        ]);
    }

    /**** delete a departement ****/

    public function destroySector ( int $id) {
        Sector::where('id',$id)->delete();
    }

}

    
