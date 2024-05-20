<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function register(Request $req)
    {
        try {
            $req->validate([
                'first_name' => 'required|max:10|min:3',
                'last_name' => 'required|max:10|min:3',
                'email' => 'required|max:30|min:10|email',
                'password' => 'required|max:40|min:6',
            ]);

            if (User::checkemail($req->email)) {
                return response()->json(['message' => 'Email Already Exists'], 400);
            }

            $user = User::register(
                $req->first_name,
                $req->last_name,
                $req->email,
                $req->password,
            );
            $token = $user->createtoken('token', ['*'], now()->addHours(6))->plainTextToken;

            return response()->json(['message' => 'User Added Successfully', 'token' => $token], 201);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }

    public function login(Request $req)
    {
        try {
            $req->validate([
                'email' => 'required|max:30|min:10|email',
                'password' => 'required|max:40|min:6',
            ]);
            $user = User::checkemail($req->email);
            if (!$user || !User::checkpass($req->password, $user->password)) {
                return response()->json(['message' => 'Invalid Email or Password'], 400);
            }

            $user->tokens->each->delete();
            $token = $user->createtoken('token', ['*'], now()->addHours(6))->plainTextToken;

            return response()->json(['message' => 'Loggedin Successfully', 'token' => $token], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }
}
