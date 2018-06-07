<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;
use DB;

class MessageController extends Controller
{
    public function index(Request $request)
    {    	
    	$userId = auth()->id();
        $contactId = $request->contact_id;

    	return Message::select(
			'id', 
			DB::raw("IF(`from_id`=$userId, TRUE, FALSE) as written_by_me"),
			'created_at', 
			'content'
		)->where(function ($query) use ($userId, $contactId) {
            $query->where('from_id', $userId)->where('to_id', $contactId);
        })->orWhere(function ($query) use ($userId, $contactId) {
            $query->where('from_id', $contactId)->where('to_id', $userId);
        })->get();        
    }

    public function store(Request $request)
    {
    	$message = new Message();
    	$message->from_id = auth()->id();
    	$message->to_id = $request->to_id;
    	$message->content = $request->content;
    	$saved = $message->save();

    	$data = [];
    	$data['success'] = $saved;
    	return $data;
    }
}
