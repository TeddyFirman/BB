<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthSMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$this->isStudent($request)) {
            return response()->json(['message' => 'Unauthorized. Access denied.'], Response::HTTP_UNAUTHORIZED);
        }
        return $next($request);
    }

    protected function isStudent($request)
    {
        $user = $request->user();

        if ($user && isset($user->peran_id) && $user->peran_id == 0) {
            return true;
        } else {
            return false;
        }
    }
}
