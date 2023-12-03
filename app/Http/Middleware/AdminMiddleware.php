<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        // if(!Auth::user()->role_asa == '1'){
        //     // return redirect('/dashboard')->with('status', 'Akses ditolak anda bukan Admin');
        //     return response()->json(['success' => false, 'message' => 'role anda bukan admin']);
        // }

        // return $next($request);

        if (!auth()->check() || !auth()->user()->hasRole($role)) {
            // Redirect or abort if user is not authenticated or doesn't have the role
            abort(403, 'Unauthorized action.');
        }

        return $next($request);


        return response()->json(['message' => 'Unauthorized. Access denied.'], 401);
    }
}
