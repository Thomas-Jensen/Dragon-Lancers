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
    <script  type="text/javascript" src="{{ asset('assets/js/build/production.min.js') }}"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/picturefill/2.0.0/picturefill.min.js" async=""></script>
    <script>
        if (!Modernizr.flexbox) {
            window.location.href = "http://dragonlancers.com/browser";
        }
    </script>
    <a href="https://plus.google.com/111624196448495342344" rel="publisher" style="display: none;">Google+</a>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-54943135-1', 'auto');
        ga('require', 'displayfeatures');
        ga('send', 'pageview');

    </script>
</head>
<body>
    <section class="container">

        @include('nav')

        @yield('content')

        @include('footer')

    </section>
</body>
</html>