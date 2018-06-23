@extends('layouts.app')

@section('content')
	<profile-form-component 
		:user="{{ auth()->user() }}"
		csrf-token="{{ csrf_token() }}" />
@endsection
