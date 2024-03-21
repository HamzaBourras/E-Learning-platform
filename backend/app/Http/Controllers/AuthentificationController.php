<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Sector;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\AuthentificationRequest;

class AuthentificationController extends Controller
{

    /************ login ************/

    public function login(AuthentificationRequest $request)
    {

        // vérifier si les informations sont corrects
        if (!Auth::attempt($request->only('username', 'password'))) {
            return response()->json([
                "message" => "Username or Password is invalid"
            ]);
        }

        $user = $request->user();

        $userAuth = [
            "id" => $user->id,
            "firstName" => $user->firstName,
            "lastName" => $user->lastName,
            "username" => $user->username,
            "email" => $user->email,
            "role" => $user->role->name,
            "sectors" => []
        ];

        $sectors = [];

        // if user is a professor
        if ($user->role_id == 2) {
            $allSectors = $user->sectors()->get();
            foreach ($allSectors as $sector) {
                array_push($sectors, $sector->name);
            }
        }
        //if user is a student
        elseif ($user->role_id == 3) {
            $sector = $user->sector()->first();
            array_push($sectors, $sector->name);
        }

        $userAuth['sectors'] = $sectors;  // add sectors in userAuth

        $token = $user->createToken($user->username)->plainTextToken;  // enregistré l'utilisateur dans token

        return response()->json([
            'token' => $token,
            'data' => $userAuth
        ]);


    }

    /******************** logout *****************/

    public function logout()
{
    Auth::user()->tokens->delete();

    return response()->json([
        "message" => "logged out"
    ]);
}
}
