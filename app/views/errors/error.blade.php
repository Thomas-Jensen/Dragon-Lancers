@extends('layouts.default.default')

@section('content')


    <section class="error">
        <figure>
            <a href="http://www.dragonlancers.com"><img src="/img/cute-mr-dragon-error-page123.png" width="100%" alt="page not found..."> </a>
            <figcaption><span>Error code: {{ $code }} - {{ $message }} - The error has been logged</span></figcaption>
        </figure>
    </section>


@stop