<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($this->isAdmin($request)) {
            return response()->json(['message' => 'Unauthorized. Access denied.'], Response::HTTP_UNAUTHORIZED);
        } else {
            return $next($request);
        }
    }

    protected function isAdmin($request)
    {
        $user = $request->user();

        if ($user && isset($user->role_id)) {
            return $user->role_id == 1;
        } else {
            return false;
        }
    }
}
