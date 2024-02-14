<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\AuthentificationRequest;

class AuthentificationController extends Controller
{
    public function login (AuthentificationRequest $request) {
        
        $validated = $request->validated();
        
        if (Auth::attempt($validated)) {
            $user = Auth::uesr();
            return response()->json([
                "data" => $user
            ]);

        } else {
            return response()->json([
                "data" => "no user founded"
            ]);
        }

        
    }
}
