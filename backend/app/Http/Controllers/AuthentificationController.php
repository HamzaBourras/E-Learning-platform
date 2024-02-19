<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\AuthentificationRequest;

class AuthentificationController extends Controller
{
    public function login (AuthentificationRequest $request) {

            // vérifier si les informations sont corrects
        if(!Auth::attempt($request->only('username','password'))){
            return response()->json([
                "message" => "user invalid"
            ]);
        }

        
        $user = $request->user();  

        // $token = $user->createToken('token')->plainTextToken();  // generate Token
        // $cookie = cookie('jwt',$token,60*24);  // enregistrer token dans cookie

        $userAuth = [
            "id" => $user->id,
            "firstName" => $user->firstName,
            "lastName" => $user->lastName,
            "username" => $user->username,
            "email" => $user->email,
            "role" => $user->role->name,

        ];

        return response()->json($userAuth);


        
    }
}
