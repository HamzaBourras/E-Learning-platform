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
                "message" => "Username or Password is invalid"
            ]);
        }

        
        $user = $request->user();  

        // $token = $user->createToken('token')->plainTextToken();  // generate Token
        
        $userAuth = [
            "id" => $user->id,
            "firstName" => $user->firstName,
            "lastName" => $user->lastName,
            "username" => $user->username,
            "email" => $user->email,
            "role" => $user->role->name,
            
        ];

        // $cookie = cookie('user',$userAuth,60*24);  // enregistrer user dans cookie

        return response()->json(
            
        )->cookie('user',$userAuth,60*24);


        
    }
}
