<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Conversation;

class ConversationController extends Controller
{
    public function index()
    {
    	return Conversation::where('user_id', auth()->id())->get();
    }
}
