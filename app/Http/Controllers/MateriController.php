<?php

namespace App\Http\Controllers;

use App\Http\Requests\MateriFormRequest;
use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MateriController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminMateri');
    }

    public function indexx()
    {
        $materis = Subject::all();

        return response()->json(['data' => $materis]);
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

        Subject::create([
            'subject' => $request->subject
        ]);

        return response()->json(['message' => 'Data berhasil disimpan'], 201);
    }

    public function update(MateriFormRequest $request, $id)
    {
        $validatedData = $request->validated();

        $materi = Subject::findOrFail($id);

        $materi->subject = $validatedData['subject'];
        $materi->save();

        return response()->json(['message' => 'Data berhasil diupdate'], 200);
    }

    public function destroy($id)
    {
        $materi = Subject::findOrFail($id);

        $materi->delete();

        return response()->json(['message' => 'Data berhasil dihapus'],200);
    }
}
