<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Description" content="A creative agency located in Esbjerg, Denmark, experience all the advantages of freelancers, yet retain all the benefits of a creative agency as well. ">
    <link rel="icon" type="image/png" href="{{ asset('assets/images/build/dl-favicon-flame.png') }}">
    <title>Dragon Lancers | Creative Agency</title>
    <link href="{{ asset('assets/css/build/main.css') }}" type="text/css" rel="stylesheet">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="{{ URL::asset('assets/js/build/production.js') }}"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/picturefill/2.0.0/picturefill.min.js"></script>
    <script>
        if (!Modernizr.flexbox) {
            window.location.href = "http://dragonlancers.com/browser";
        }
        $(function(){
            $.stellar({
                horizontalScrolling: false,
                verticalOffset: 40
            });
        });
        smoothScroll.init(
                {
                    speed: 1000,
                    easing: 'easeInOutCubic'
                }
        );
    </script>

    <a href="https://plus.google.com/111624196448495342344" rel="publisher" style="display: none;">Google+</a>
</head>
<body>
    <section class="container">

        @include('layouts.default.nav')

        @yield('content')

        @include('layouts.default.footer')

    </section>

    <script src="{{ URL::asset('assets/js/build/social.min.js') }}" async="async"></script>

</body>
</html>