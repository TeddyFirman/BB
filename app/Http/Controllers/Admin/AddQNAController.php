<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Bab;
use Illuminate\Http\Request;
use App\Models\Question;
use App\Models\QnABab;
use App\Models\Subject;
use Inertia\Inertia;

class AddQNAController extends Controller
{
    public function view()
    {
        return Inertia::render('Admin/Quiz/Index');
    }

    public function quizDashboard()
    {
        try {
            $subjects = Subject::all();
            $babs = Bab::with('subject')->get();

            $data = [
                'materi' => $subjects,
                'sub-materi' => $babs,
            ];

            return response()->json(['success' => true, 'data' => $data], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    public function index(Request $request)
    {
        try {
            $questions = Question::all();
            // $babs = Bab::all();


            if (count($questions) > 0) {
                $data = [];
                $counter = 0;

                foreach ($questions as $question) {
                    $qnaBab = QnABab::where(['bab_id' => $request->bab_id, 'question_id' => $question->id])->get();

                    if (count($qnaBab) == 0) {
                        $data[$counter]['id'] = $question->id;
                        $data[$counter]['questions'] = $question->question;
                        // $data[$counter]['babs'] = Bab::all();
                        $counter++;
                    }
                }

                return response()->json(['success' => true, 'msg' => 'Data Pertanyaan:', 'data' => $data]);
            } else {
                return response()->json(['success' => false, 'msg' => 'Pertanyaan Belum Ditambahkan']);
            }
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    public function store(Request $request)
    {
        try {
            if (isset($request->question_id)) {
                foreach ($request->question_id as $qid) {
                    QnABab::insert([
                        'bab_id' => $request->bab_id,
                        'question_id' => $qid,
                    ]);
                }
            }
            return response()->json(['success' => true, 'msg' => 'Pertanyaan Berhasil Ditambahkan']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    public function indexQnA(Request $request, $id)
    {
        try {
            $detailPertanyaan = QnABab::where('bab_id', $id)->with('question')->get();

            return response()->json(['success' => true, 'data' => $detailPertanyaan]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    public function destroy($id)
    {
        try {
            QnABab::where('id', $id)->delete();

            return response()->json(['success' => true, 'msg' => 'Pertanyaan Berhasil Dihapus']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }
}
