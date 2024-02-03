<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Sector;
use Nette\Utils\ArrayHash;
use App\Models\Departement;
use Illuminate\Http\Request;
use App\Http\Requests\ProfessorRequest;
use App\Models\SectorsUsers;

class DirectorController extends Controller
{
    /*********** Professor ***************/

    /**** return All the professors ****/

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
                "name" => $prof->name,
                "email" => $prof->email,
                "password" => $prof->password,
                "bio" => $prof->bio,
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
            "departement_id" => $departement_id,
            "role_id" => 2,
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

        User::where('id', $id)->update([
            "name" => $request->name,
            "email" => $request->email,
            "departement_id" => $departement_id,
            "role_id" => 2,
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
        User::where('id',$id)->delete();
        SectorsUsers::where('users_id',$id)->delete();
    }
}
