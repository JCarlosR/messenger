@extends('layouts.app')

@section('content')
	<messenger-component :user-id="{{ auth()->id() }}" />
@endsection
