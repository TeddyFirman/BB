<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MateriFormRequest;
use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MateriController extends Controller
{
    public function view()
    {
        return Inertia::render('Admin/Materi/Index');
    }

    public function index()
    {
        $materials = Subject::all();

        return response()->json(['data' => $materials], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'subject' => 'required'
        ]);

        Subject::create([
            'subject' => $request->subject
        ]);

        return to_route('admin.materi');
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

        return response()->json(['message' => 'Data berhasil dihapus'], 200);
    }
}
