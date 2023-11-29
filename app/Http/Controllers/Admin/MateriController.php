<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MateriController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminMateri');
    }

    public function create()
    {
        return Inertia::render('AdminMateriCreate');
    }

    public function store(Request $request)
    {
        $request->validate([
            'subject' => 'required'
        ]);

        $subject = new Subject();
        $subject->subject = $request->input('subject');
        $subject->save();

        return response()->json(['message' => 'Data berhasil disimpan'], 200);
    }
}
