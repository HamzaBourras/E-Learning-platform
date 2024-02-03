<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DirectorController extends Controller
{
    public function index () {
        return User::All();
    }
}
