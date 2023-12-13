<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi Kesalahan',
                'data' => $validator->errors()
            ]);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        $success['token'] = $user->createToken('auth_token')->plainTextToken;
        $success['name'] = $user->name;

        return response()->json([
            'success' => true,
            'message' => 'Selamat, Registrasi Anda Berhasil',
            'data' => $success
        ]);
    }

    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $auth = Auth::user();
            $success['token'] = $auth->createToken('auth_token')->plainTextToken;
            $success['name'] = $auth->name;
            // $success['role'] = $auth->role_id;

            if ($auth->hasRole('admin')) {
                $success['role'] = 'admin';
                $message = 'Login Berhasil sebagai admin';
            } elseif ($auth->hasRole('user')) {
                $success['role'] = 'user';
                $message = 'Login Berhasil sebagai pengguna biasa';
            } else {
                $success['role'] = 'Anda siapa?';
                $message = 'Anda tidak memiliki peran yang valid';
            }

            return response()->json(['success' => true, 'message' => $message, 'data' => $success]);
        } else {
            return response()->json(['success' => false, 'message' => 'Periksa Email & Kata Sandi']);
        }
    }


    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(['success' => true, 'message' => 'Logout Berhasil']);
    }
}
