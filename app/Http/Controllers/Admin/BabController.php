<?php

namespace App\Http\Controllers\Admin;

use App\Models\Bab;
use App\Models\Subject;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\BabFormRequest;

class BabController extends Controller
{
    public function index()
    {
        $babs = Bab::all();

        return response()->json(['data' => $babs]);
    }

    public function store(BabFormRequest $request)
    {
        $validatedData = $request->validated();

        $materi = Subject::findOrFail($validatedData['subject_id']);

        $bab = $materi->babs()->create([
            'subject_id' => $validatedData['subject_id'],
            'judul' => $validatedData['judul'],
            'pertanyaan' => $validatedData['pertanyaan']
        ]);

        return response()->json(['message' => 'Data berhasil ditambahkan'], 201);
    }

    public function update(BabFormRequest $request, $id)
    {
        $validatedData = $request->validated();

        $bab = Bab::findOrFail($id);

        $bab->subject_id = $validatedData['subject_id'];
        $bab->judul = $validatedData['judul'];
        $bab->pertanyaan = $validatedData['pertanyaan'];
        $bab->save();

        return response()->json(['message' => 'Data berhasil diupdatte']);
    }

    public function destroy($id)
    {
        $bab = Bab::findOrFail($id);

        $bab->delete();

        return response()->json(['message' => 'Data berhasil dihapus'], 200);
    }
}
