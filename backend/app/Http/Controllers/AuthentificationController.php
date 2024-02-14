<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\AuthentificationRequest;

class AuthentificationController extends Controller
{
    public function login (AuthentificationRequest $request) {
        
        $user = User::where('username',$request->username);
        
        if (password_verify($request->password, $user->password)) {
            $user = Auth::uesr();
            return response()->json([
                "data" => $user
            ]);

        } else {
            return response()->json([
                "data" => "no user found"
            ]);
        }

        
    }
}
