@extends('layouts.default.default')

@section('content')


    <section class="error">
        <figure>
            <a href="http://www.dragonlancers.com"><img src="{{ URL::asset('images/build/cute-mr-dragon-error-page123.png') }}" width="100%" alt="Please get a good modern browser..."> </a>
            <figcaption>
                <span>Please update to a good modern browser like these:</span><br>
                <span><a href="https://www.google.com/chrome/browser/">Google Chrome</a><br> <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a></span>
            </figcaption>
        </figure>
    </section>


@stop