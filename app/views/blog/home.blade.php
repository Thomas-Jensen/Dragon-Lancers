@extends('layouts.default.default')

@section('content')

<section class="blog-menu-container">

        <h1 class="dl">DRAGON LANCERS</h1>
        <h2 class="ca">CREATIVE AGENCY BLOG</h2>


<a class="php-bg blog-menu" href="blog/php">
    <h2>PHP</h2>
    <div class="php-a animation">
        <p>
           {{{'if ( page == php )'}}} <br>
            {{{'{'}}} <br>
            {{{'echo "<3 PHP";'}}} <br>
            {{{'}'}}}
        </p>
    </div>
</a>



<a class="html-bg blog-menu" href="blog/html">
    <h2>HTML</h2>
    <div class="html-a animation">
        <p>
            {{{'<!doctype html>'}}} <br>
            {{{'<head>'}}} <br>
            {{{'<title>HTML</title>'}}} <br>
            {{{'</head>'}}}
        </p>
    </div>
</a>

<a class="css-bg blog-menu" href="blog/css">
    <h2>CSS</h2>
    <div class="css-a animation">
        <p>
            {{{'.container, section'}}} <br>
            {{{'{'}}} <br>
            {{{'display: flex;'}}} <br>
            {{{'}'}}}
        </p>
    </div>
</a>

<a class="javascript-bg blog-menu" href="blog/js">
    <h2>JS</h2>
    <div class="javascript-a animation">
        <p>
            {{{"$('.js').addClass('a');"}}} <br>
            {{{"$(this).show();"}}} <br>
            {{{"$('.jquery').toggle();"}}} <br>
            {{{"$('.k').remove();"}}} <br>
        </p>
    </div>
</a>

<a class="design-bg blog-menu" href="blog/design">
    <h2>DESIGN</h2>
    <div class="design-a animation">
        <p>
            {{{'" DESIGN IS'}}} <br>
            {{{'THE POWER'}}} <br>
            {{{'THAT CREATES'}}} <br>
            {{{'OPINION "'}}}
        </p>
    </div>
</a>

<a class="seo-bg blog-menu" href="blog/seo">
    <h2>SEO</h2>
    <div class="seo-a animation">
        <p>
            {{{'Optimized content'}}} <br>
            {{{'Organic Traffic'}}} <br>
            {{{'For Humans'}}} <br>
            {{{'Not Machines'}}}
        </p>
    </div>
</a>

<a class="business-bg blog-menu" href="blog/business">
    <h2>BUSINESS</h2>
    <div class="business-a animation">
        <p>
            {{{'INNOVATION'}}} <br>
            {{{'CREATIVE PROCESS'}}} <br>
            {{{'PERFECTIONISM'}}} <br>
            {{{'LEADERSHIP'}}}
        </p>
    </div>
</a>

<a class="news-bg blog-menu" href="blog/news">
    <h2>NEWS</h2>
    <div class="news-a animation">
        <p>
            {{{'Welcome to'}}} <br>
            {{{'Dragon Lancers'}}} <br>
            {{{'Creative Agency'}}} <br>
            {{{'All rights ' .date('Y')}}}
        </p>
    </div>
</a>

    </section>

<section class="blog-container">
    <article class="blog-posts">
        <header class="blog-link">
            <h2 class="css article-category">
                <a href="blog/css">CSS</a>
            </h2>
        </header>
        <div class="css-line article-header">
            <h1 class="css-link article-title">
                <a href="blog/css/css4-new-features?">CSS 4 new features?</a>
            </h1>
        </div>
        <footer class="article-footer">
            <div class="css-link author-link">
                <p> by: <a href="blog/authors/ThomasJensen">Thomas Jensen</a></p>
            </div>
            <div class="date">
                <p>Jan 01, 2015</p>
            </div>
        </footer>
    </article>

    <article class="blog-posts">
        <header class="blog-link">
            <h2 class="news article-category">
                <a href="blog/news">NEWS</a>
            </h2>
        </header>
        <div class="news-line article-header">
            <h1 class="news-link article-title">
                <a href="blog/news/new-app-developer">We are proud to announce we now have a new app developer</a>
            </h1>
        </div>
        <footer class="article-footer">
            <div class="news-link author-link">
                <p> by: <a href="blog/authors/ThomasJensen">Thomas Jensen</a></p>
            </div>
            <div class="date">
                <p>Dec 30, 2014</p>
            </div>
        </footer>
    </article>

    <article class="blog-posts">
        <header class="blog-link">
            <h2 class="seo article-category">
                <a href="blog/seo">SEO</a>
            </h2>
        </header>
        <div class="seo-line article-header">
            <h1 class="seo-link article-title">
                <a href="blog/seo/pagespeed-for-seo">Pagespeed for SEO</a>
            </h1>
        </div>
        <footer class="article-footer">
            <div class="seo-link author-link">
                <p> by: <a href="blog/authors/ThomasJensen">Thomas Jensen</a></p>
            </div>
            <div class="date">
                <p>Dec 28, 2015</p>
            </div>
        </footer>
    </article>

    <article class="blog-posts">
        <header class="blog-link">
            <h2 class="design article-category">
                <a href="blog/design">DESIGN</a>
            </h2>
        </header>
        <div class="design-line article-header">
            <h1 class="design-link article-title">
                <a href="blog/design/how-to-design-a-logo">How to design a logo</a>
            </h1>
        </div>
        <footer class="article-footer">
            <div class="design-link author-link">
                <p> by: <a href="blog/authors/IlonaOlejnik">Ilona Olejnik</a></p>
            </div>
            <div class="date">
                <p>Dec 25, 2014</p>
            </div>
        </footer>
    </article>

    <article class="blog-posts">
        <header class="blog-link">
            <h2 class="javascript article-category">
                <a href="blog/js">JAVASCRIPT</a>
            </h2>
        </header>
        <div class="javascript-line article-header">
            <h1 class="javascript-link article-title">
                <a href="blog/js/why-you-should-not-abandon-jquery">Why you should never abandon using jQuery</a>
            </h1>
        </div>
        <footer class="article-footer">
            <div class="javascript-link author-link">
                <p> by: <a href="blog/authors/ThomasJensen">Thomas Jensen</a></p>
            </div>
            <div class="date">
                <p>Dec 21, 2014</p>
            </div>
        </footer>
    </article>

    <article class="blog-posts">
        <header class="blog-link">
            <h2 class="business article-category">
                <a href="blog/business">BUSINESS</a>
            </h2>
        </header>
        <div class="business-line article-header">
            <h1 class="business-link article-title">
                <a href="blog/business/why-you-should-always-startup-with-a-designer">Why you should always startup with a designer</a>
            </h1>
        </div>
        <footer class="article-footer">
            <div class="business-link author-link">
                <p> by: <a href="blog/authors/ThomasJensen">Thomas Jensen</a></p>
            </div>
            <div class="date">
                <p>Dec 13, 2014</p>
            </div>
        </footer>
    </article>

    <article class="blog-posts">
        <header class="blog-link">
            <h2 class="php article-category">
                <a href="blog/php">PHP</a>
            </h2>
        </header>
        <div class="php-line article-header">
            <h1 class="php-link article-title">
                <a href="blog/php/php56">PHP 5.6 is now out! with lots of goodies</a>
            </h1>
        </div>
        <footer class="article-footer">
            <div class="php-link author-link">
                <p> by: <a href="blog/authors/ThomasJensen">Thomas Jensen</a></p>
            </div>
            <div class="date">
                <p>Dec 7, 2014</p>
            </div>
        </footer>
    </article>

    <article class="blog-posts">
        <header class="blog-link">
            <h2 class="html article-category">
                <a href="blog/html">HTML</a>
            </h2>
        </header>
        <div class="html-line article-header">
            <h1 class="html-link article-title">
                <a href="blog/html/html5">The web standard officially made HTML 5 a complete standard</a>
            </h1>
        </div>
        <footer class="article-footer">
            <div class="html-link author-link">
                <p> by: <a href="blog/authors/ThomasJensen">Thomas Jensen</a></p>
            </div>
            <div class="date">
                <p>Dec 03, 2014</p>
            </div>
        </footer>
    </article>



</section>




@stop