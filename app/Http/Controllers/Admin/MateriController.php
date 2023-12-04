<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subject;
use Inertia\Inertia;
use Mockery\Matcher\Subset;

class MateriController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Materi/Index', [
            'subject' => Subject::all()
        ]);
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

        sleep(3);

        return to_route('materi');
    }

    public function edit($id)
    {
        return Inertia::render('Admin/Materi/Edit', [
            'subject' => Subject::find($id)
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'subject' => 'required|string'
        ]);

        $subject = Subject::find($id);

        $subject->update([
            'subject' => $request->subject
        ]);

        sleep(3);

        return to_route('materi');
    }
}
