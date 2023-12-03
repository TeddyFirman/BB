<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        if (!$this->isAdmin($request)) {
            abort(Response::HTTP_UNAUTHORIZED);
        }

        return $next($request);
    }

    protected function isAdmin($request)
    {
        return $request->user()->role->name == 'admin';
    }
}
