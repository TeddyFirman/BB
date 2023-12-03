<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subject;
use Inertia\Inertia;

class MateriController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Materi/Materi');
    }

    public function create()
    {
        return Inertia::render('Admin/Materi/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'subject' => 'required|string'
        ]);

        Subject::create([
            'subject' => $request->subject
        ]);

        sleep(2.75);

        return to_route('materi');
    }
}
