<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\QnABab;
use App\Models\Question;
use Illuminate\Http\Request;

class AddQNAController extends Controller
{
    public function index(Request $request)
    {
        try {
            $questions = Question::all();

            if(count($questions) > 0){
                $data = [];
                $counter = 0;

                foreach ($questions as $question) {
                    $qnaBab =  QnABab::where(['bab_id' => $request->bab_id,'question_id' => $question->id])->get();

                    if(count($qnaBab) == 0){
                        $data[$counter]['id'] = $question->id;
                        $data[$counter]['questions'] = $question->question;
                        $counter++;
                    }
                }

                return response()->json(['success' => true, 'msg' => 'Data pertanyaan:', 'data' => $data]);

            } else{
                return response()->json(['success' => false, 'msg' => 'Pertanyaan belum ditambahkan']);
            }

        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    public function store(Request $request)
    {
        try {
            if(isset($request->questions_ids)){
                foreach ($request->questions_ids as $qid) {
                    QnABab::insert([
                        'bab_id' => $request->bab_id,
                        'question_id' => $qid,
                    ]);
                }
            }
            return response()->json(['success' => true, 'msg' => 'Pertanyaan berhasil ditambahkan']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    public function indexx(Request $request, $id)
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

            return response()->json(['success' => true, 'msg' => 'Pertanyaan dihapus']);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }
}
