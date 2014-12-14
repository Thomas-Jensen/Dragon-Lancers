@extends('default.default')

<section class="home" id="home">
    <section class="top">
        <figure class="no-video">
            <h1>Dragon Lancers</h1>
        </figure>
        <video autoplay loop class="landing-video" id="videoElement">

            <source src="{{ URL::asset('assets/movies/Dl-video-landing.mp4')}}" type="video/mp4" media="screen and (min-width:481px)">
            <source src="{{ URL::asset('assets/movies/Dl-video-landing.webm')}}" type="video/webm" media="screen and (min-width:481px)">
        </video>
        <?php include("nav.php"); ?>
    </section>
</section>
<section class="philosophy" id="philosophy">
    <section class="philosophy-left">
        <article>
            <h2>
                We believe in simplicity and <br> innovative progress <br><br>We are passionate about <br> everything we create <br><br>
                We are always seeking a challenge
            </h2>
        </article>
    </section>
    <section class="philosophy-right">
        <section class="philosophy-right-top">
            <h2>Dragon Lancers <br> Creative Agency</h2>
            <figure class="poster-top">
                <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                     width="100%" viewBox="0 0 300 400" enable-background="new 0 0 300 400" xml:space="preserve">
<line display="none" stroke="#000000" stroke-miterlimit="10" x1="19.243" y1="8.243" x2="19.243" y2="392.703"/>
                    <rect x="38.135" y="31.284" fill="none" width="193.081" height="41.216"/>
                    <text transform="matrix(1 0 0 1 38.1353 65.6519)" fill="#E0E0DF" font-family="'Simplifica'" font-size="48">DESIGN</text>
                    <rect x="38.135" y="80.892" fill="none" width="82.432" height="42.567"/>
                    <text transform="matrix(1 0 0 1 38.1353 115.2593)" fill="#E0E0DF" font-family="'Simplifica'" font-size="48">IS</text>
                    <rect x="33.514" y="130.459" fill="none" width="255.405" height="55.406"/>
                    <text transform="matrix(1 0 0 1 33.5137 164.8267)" fill="#E0E0DF" font-family="'Simplifica'" font-size="48">THE POWER</text>
                    <rect x="32.986" y="178.595" fill="none" width="104.73" height="51.351"/>
                    <text transform="matrix(1 0 0 1 32.9863 212.9619)" fill="#E0E0DF" font-family="'Simplifica'" font-size="48">THAT</text>
                    <rect x="104.081" y="182" fill="none" width="137.837" height="61.486"/>
                    <text transform="matrix(1 0 0 1 104.0811 209.6475)" fill="#E0E0DF" font-family="'DXTA_TRIAL'" font-size="36">CREATES</text>
                    <rect x="36.135" y="226.812" fill="none" width="119.595" height="45.946"/>
                    =      <text transform="matrix(1 0 0 1 36.1353 261.1787)" fill="#E0E0DF" font-family="'Simplifica'" font-size="48">OPINION</text>
</svg>
            </figure>
        </section>
        <section class="philosophy-right-bottom">
            <figure>
                <img src="{{ URL::asset('assets/images/build/philosophy-background.png')}}" width="100%" alt="blue triangle">
            </figure>
        </section>

    </section>



</section>


<section class="work" id="work">
    <div class="work-slider">
        <figure>
            <img src="{{ URL::asset('assets/images/build/work-dragon-lancers.jpg')}}" width="100%" alt="our work">
        </figure>
    </div>
    <a class="work-more" href="coming"><h2>SEE MORE</h2></a>
</section>

<section id="skyline-parallax" data-type="background" data-speed="10"><section id="services"></section></section>


<section class="services">
    <figure><a class="print" href="services?s=print">
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" width="9.375em" height="6.250em" style="pointer-events: all;" viewBox="0 0 800 600" enable-background="new 0 0 800 600" xml:space="preserve">
<g id="Layer_2">
    <rect x="125.5" y="158.5" display="none" fill="#F4ECCB" stroke="#000000" stroke-miterlimit="10" width="590" height="300"/>
    <g id="Layer_3" display="none">
    </g>
    <polygon stroke="#000000" stroke-miterlimit="10" points="525.5,51.796 525.5,121.5 587.816,121.5  "/>
</g>
                <g id="Layer_1">
                    <path display="none" fill-rule="evenodd" clip-rule="evenodd" fill="#FEFEFE" d="M301.918,473.723   c-52.628,0-105.256-0.012-157.884,0.053c-1.83,0-2.188-0.359-2.188-2.189c0.056-105.434,0.056-210.87,0-316.303   c-0.001-1.829,0.358-2.188,2.188-2.188c105.434,0.056,210.868,0.056,316.302,0c1.828-0.001,2.189,0.358,2.188,2.188   c-0.057,105.434-0.057,210.87,0,316.303c0.002,1.828-0.358,2.189-2.188,2.189C407.53,473.711,354.724,473.723,301.918,473.723z"/>
                    <g>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACEE" d="M323.868,260.838c-0.046-13.796,2.943-26.867,9.98-38.784    c13.127-22.232,32.595-35.406,58.283-37.87c43.998-4.221,76.309,27.113,82.18,62.112c0.782,4.667,1.324,9.325,0.955,14.058    c-1.266,0.464-2.257-0.299-3.246-0.816c-13.361-6.977-27.681-9.113-42.496-7.909c-8.102,0.658-15.93,2.896-23.319,6.438    c-1.845,0.885-3.616,1.926-5.54,2.649c-0.44,0.118-0.881,0.124-1.325,0.028c-5.33-2.452-10.553-5.131-16.282-6.656    c-19.318-5.145-37.887-3.331-55.728,5.737c-0.87,0.442-1.681,1.014-2.651,1.247C324.371,261.125,324.101,261.046,323.868,260.838z    "/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#EC018B" d="M475.463,260.795c16.153,9.3,27.244,22.859,33.492,40.332    c16.227,45.367-13.812,94.215-61.836,100.377c-16.01,2.055-31.361-0.561-45.658-8.377c-0.381-0.209-0.711-0.508-1.064-0.766    c-0.154-1.271,0.892-1.635,1.682-2.131c13.509-8.494,23.354-20.16,29.628-34.762c3.28-7.637,5.235-15.67,5.479-24.043    c0.063-2.139,0.564-4.223,0.701-6.352c0.072-0.27,0.191-0.518,0.35-0.748c6.186-4.061,11.979-8.596,16.949-14.115    c10.411-11.557,16.818-24.982,18.875-40.438c0.307-2.289,0.631-4.574,0.57-6.899C474.61,262.114,474.548,261.23,475.463,260.795z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDF100" d="M399.607,392.252c-7.795,4.945-16.416,7.807-25.445,9.041    c-17.409,2.377-33.983-0.273-49.458-9.074c-25.679-14.604-40.926-44.107-37.655-73.428c2.738-24.549,14.665-43.425,35.312-56.87    c0.518-0.337,1.005-0.72,1.507-1.082c0.053,0.088,0.126,0.153,0.219,0.196c1.363,2.547,0.697,5.386,1.083,8.073    c3.335,23.245,14.877,41.183,34.443,54.046c0.742,0.488,1.524,0.928,2.069,1.662c0.15,0.234,0.256,0.488,0.327,0.756    c0.792,9.748,1.871,19.42,5.648,28.602c6.175,15.006,16.119,26.83,29.626,35.73C398.213,390.516,399.461,390.852,399.607,392.252z    "/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#ED1D25" d="M399.607,392.252c-8.211-5.1-15.58-11.168-21.55-18.826    c-10.985-14.09-16.514-30.039-16.299-47.941c1.261-0.51,2.246,0.27,3.242,0.775c9.892,5.012,20.292,7.85,31.446,8.27    c12.895,0.484,25.061-1.965,36.63-7.621c1.629-0.797,3.104-2.168,5.156-1.811c0.029,10.664-1.754,21.002-5.952,30.82    c-3.841,8.979-9.106,17.094-16.087,23.959c-4.233,4.164-8.724,8.082-13.945,11.039c-0.682,0.385-1.496,0.629-1.851,1.445    C400.133,392.326,399.87,392.289,399.607,392.252z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#2E3191" d="M475.463,260.795c-0.33,17.683-6.121,33.391-17.287,47.063    c-5.541,6.783-12.014,12.566-19.74,16.832c-1.093-0.762-1.184-1.941-1.213-3.098c-0.348-14.168-5.421-26.777-13.197-38.318    c-5.564-8.258-12.725-15.053-21.227-20.361c-0.98-0.612-2.434-0.9-2.371-2.537c7.867-4.976,16.567-7.745,25.677-9.021    c16.561-2.32,32.395,0.151,47.241,8.109c0.619,0.333,1.279,0.596,1.92,0.891C475.363,260.487,475.428,260.634,475.463,260.795z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#37363A" d="M400.428,260.375c4.306,3.091,8.713,6.017,12.706,9.561    c6.528,5.793,11.716,12.58,15.849,20.193c5.405,9.955,8.771,20.512,8.968,31.949c0.015,0.871,0.317,1.74,0.485,2.611    c-0.036,0.15-0.103,0.287-0.201,0.408c-9.074,4.887-18.551,8.463-28.889,9.701c-15.359,1.84-29.927-0.535-43.764-7.438    c-1.271-0.633-2.549-1.25-3.824-1.877c-0.104-0.141-0.187-0.293-0.246-0.459c-0.818-2.537-0.355-5.145-0.035-7.633    c2.085-16.211,8.494-30.469,19.551-42.611c4.45-4.886,9.395-9.138,14.922-12.73c1.108-0.721,2.187-1.543,3.583-1.66    C399.832,260.386,400.13,260.38,400.428,260.375z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#00A650" d="M399.534,260.391c-4.725,3.304-9.503,6.504-13.745,10.48    c-8.867,8.313-15.272,18.182-19.563,29.512c-3.011,7.951-4.096,16.246-4.714,24.643c-18.941-11.182-30.755-27.596-35.784-48.931    c-1.163-4.934-1.92-9.951-1.642-15.061c7.131-4.734,15.081-7.508,23.384-9.081c17.357-3.288,34.048-1.176,49.824,7.043    C398.072,259.401,398.789,259.924,399.534,260.391z"/>
                    </g>
                    <rect x="305.353" y="456.32" fill-rule="evenodd" clip-rule="evenodd" fill="none" width="255.102" height="171.428"/>
                    <text transform="matrix(1 0 0 1 305.3525 498.3203)" font-family="'NixieOne'" font-size="60">PRINT</text>
                    <text transform="matrix(1 0 0 1 477.1436 332.0205)" display="none" font-family="'BrushScriptMT'" font-size="48">DESIGN</text>
                </g>
                <g id="Layer_4">
                    <path display="none" d="M187.709,63.703v472.949c0,18.053,14.782,32.789,32.768,32.789h340.047   c17.985,0,32.769-14.736,32.769-32.789V63.703c0-18.03-14.783-32.766-32.769-32.766l-340.047,0   C202.491,30.937,187.709,45.674,187.709,63.703z M570.312,55.532v491.776H207.047l0-491.776H570.312z"/>
                    <polygon fill="none" stroke="#000000" stroke-width="10" stroke-miterlimit="10" points="528.163,55 195,55 195,553 586,553    586,116.5  "/>
                </g>
</svg>
        </a></figure>
    <figure><a class="web" href="services?s=web">
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" width="9.375em" height="6.250em" style="pointer-events: all;" viewBox="0 0 800 600" enable-background="new 0 0 800 600" xml:space="preserve">
<g id="Layer_1">
    <path d="M643.4,48.397H170.452c-18.053,0-32.79,14.782-32.79,32.768v340.047c0,17.985,14.737,32.769,32.79,32.769H643.4   c18.029,0,32.766-14.783,32.766-32.769V81.165C676.166,63.179,661.43,48.397,643.4,48.397z M651.571,431H159.796V67.735h491.775   V431z"/>
    <polygon points="348.019,464.399 286.14,527.271 532.169,527.271 470.266,464.399  "/>
    <rect x="342.868" y="358.733" fill="none" width="192.857" height="78.571"/>
    <text transform="matrix(1 0 0 1 342.8682 400.7334)" font-family="'NixieOne'" font-size="60">WEB</text>
</g>
                <g id="Layer_2">
                    <g>
                        <path display="none" fill-rule="evenodd" clip-rule="evenodd" fill="#FEFEFE" d="M320.648,212.98    c0-29.792,0.016-59.583-0.043-89.374c-0.004-1.728,0.233-2.227,2.146-2.225c59.786,0.069,119.572,0.069,179.358,0.001    c2.013-0.002,2.284,0.587,2.283,2.387c-0.047,59.685-0.048,119.369,0.003,179.053c0.001,1.827-0.31,2.377-2.297,2.374    c-59.786-0.065-119.573-0.066-179.358,0.006c-1.943,0.002-2.135-0.54-2.132-2.237C320.664,272.969,320.648,242.975,320.648,212.98    z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FE0000" d="M357.396,187.564c-4.283-29.115,15.313-56.651,43.525-63.281    c31.285-7.353,63.351,13.702,68.771,45.44c1.072,6.272,1.304,12.493,0.215,18.76c-1.393,0.54-2.57-0.219-3.8-0.636    c-15.925-5.401-31.378-4.392-46.354,3.363c-1.894,0.98-3.481,2.488-5.555,3.146c-0.338,0.058-0.671,0.031-0.998-0.07    c-7.478-4.896-15.46-8.492-24.402-9.786c-9.431-1.364-18.626-0.563-27.627,2.563C359.958,187.483,358.774,188.304,357.396,187.564    z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#0000FE" d="M470.268,188.799c22.387,10.054,35.84,33.474,33.204,57.875    c-3.075,28.48-25.416,47.665-49.209,50.645c-13.859,1.736-26.635-1.121-38.431-8.521c-0.931-0.585-1.989-1.039-2.565-2.076    c0.194-1.388,1.411-1.896,2.314-2.66c13.253-11.207,20.456-25.351,20.84-42.821c0.064-3.034-0.12-6.062-0.149-9.094    c0.492-1.256,1.665-1.703,2.731-2.269c15.467-8.21,25.341-20.779,29.527-37.807C468.825,190.867,468.627,189.321,470.268,188.799z    "/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#00FE00" d="M412.704,286.737c-6.807,5.509-14.784,8.418-23.268,9.713    c-31.301,4.778-59.363-15.011-65.443-45.938c-5.023-25.556,9.52-52.968,33.174-62.532c1.064,0.51,1.231,1.538,1.445,2.528    c3.867,17.999,14.064,31.146,30.355,39.627c0.54,0.281,1.074,0.575,1.479,1.052c0.176,0.268,0.29,0.559,0.356,0.872    c-1.056,10.359-0.352,20.486,3.761,30.217c3.591,8.495,8.861,15.73,15.841,21.739    C411.317,284.799,412.459,285.389,412.704,286.737z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#00FEFE" d="M412.704,286.737c-16.712-13.003-24.246-30.126-22.943-51.195    c0.073-1.203,0.409-2.388,0.623-3.58c1.08-0.865,2.174-0.279,3.169,0.094c13.422,5.03,26.831,5.039,40.249,0.004    c0.665-0.249,1.359-0.428,2.082-0.443c0.357,0.001,0.664,0.13,0.916,0.383c2.3,22.603-5.238,40.977-23.532,54.724    c-0.001-0.001-0.28,0.093-0.28,0.093L412.704,286.737z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FEFE00" d="M390.131,231.387c-17.558-8.059-27.97-21.817-32.271-40.451    c-0.228-0.986-0.461-1.971-0.691-2.957c0.028-0.164,0.104-0.304,0.227-0.416c8.714-3.438,17.726-5.161,27.099-4.377    c10.62,0.888,20.412,4.146,28.956,10.709c0.47,1.371-0.762,1.754-1.467,2.317c-10.624,8.491-17.494,19.317-20.424,32.619    C391.342,229.824,391.158,230.844,390.131,231.387z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FE00FE" d="M470.268,188.799c-1.534,5.122-2.67,10.358-5.035,15.228    c-5.682,11.703-14.23,20.553-25.799,26.497c-0.894,0.46-1.756,0.983-2.634,1.476c-0.097-0.084-0.198-0.166-0.299-0.247    c-0.848-0.969-0.941-2.213-1.192-3.388c-2.735-12.854-9.334-23.364-19.283-31.846c-0.837-0.713-1.861-1.287-1.89-2.588    c16.412-11.26,34.028-13.023,52.668-6.664c1.05,0.358,2.069,0.809,3.104,1.216C470.119,188.496,470.24,188.602,470.268,188.799z"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FEFEFE" d="M414.136,193.931c6.769,5.564,12.677,11.859,16.675,19.757    c2.889,5.707,5.116,11.627,5.69,18.065c-13.607,6.153-27.459,6.474-41.521,1.731c-1.529-0.516-3.063-1.016-4.597-1.522    c-0.085-0.191-0.169-0.383-0.253-0.575c2.017-9.638,5.668-18.526,11.854-26.299c3.359-4.221,7.48-7.629,11.465-11.192    C413.679,193.907,413.907,193.918,414.136,193.931z"/>
                    </g>
                </g>
</svg>
        </a></figure>
    <figure><a class="apps" href="services?s=apps">
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" width="9.375em" height="6.250em" style="pointer-events: all;" viewBox="0 0 800 600" enable-background="new 0 0 800 600" xml:space="preserve">
<g id="Layer_1">
    <path d="M520.188,42.727H303.688c-20.711,0-37.442,16.794-37.442,37.505v439.583c0,20.648,16.731,37.459,37.442,37.459h216.501   c20.663,0,37.457-16.795,37.457-37.459V80.232C557.631,59.521,540.852,42.727,520.188,42.727z M532.56,502.429H291.331V93.245   H532.56V502.429z M463.129,70.771H362.744V59.829h100.401v10.942H463.129z M505.074,66.776c0,5.297-4.313,9.579-9.594,9.579   c-5.296,0-9.594-4.297-9.594-9.579c0-5.28,4.298-9.579,9.594-9.579C500.762,57.182,505.074,61.479,505.074,66.776z    M457.626,532.326h-91.409v-12.133h91.409V532.326z"/>
</g>
                <g id="Layer_3">
                    <path fill="#2DDFE8" d="M367,172.882c0,6.14-4.978,11.118-11.118,11.118h-40.765c-6.14,0-11.118-4.978-11.118-11.118v-37.765   c0-6.14,4.978-11.118,11.118-11.118h40.765c6.14,0,11.118,4.978,11.118,11.118V172.882z"/>
                    <path fill="#EACA2A" d="M443,249.883c0,6.14-4.978,11.117-11.117,11.117h-40.766c-6.14,0-11.117-4.978-11.117-11.117v-37.765   c0-6.14,4.978-11.118,11.117-11.118h40.766c6.14,0,11.117,4.978,11.117,11.118V249.883z"/>
                    <path fill="#E8922D" d="M518,249.883c0,6.14-4.978,11.117-11.117,11.117h-40.766c-6.14,0-11.117-4.978-11.117-11.117v-37.765   c0-6.14,4.978-11.118,11.117-11.118h40.766c6.14,0,11.117,4.978,11.117,11.118V249.883z"/>
                    <path fill="#A9EA2A" d="M518,172.883c0,6.14-4.978,11.117-11.117,11.117h-40.766c-6.14,0-11.117-4.978-11.117-11.117v-37.765   c0-6.14,4.978-11.118,11.117-11.118h40.766c6.14,0,11.117,4.978,11.117,11.118V172.883z"/>
                    <path fill="#2AEA77" d="M443,172.883c0,6.14-4.978,11.117-11.117,11.117h-40.766c-6.14,0-11.117-4.978-11.117-11.117v-37.765   c0-6.14,4.978-11.118,11.117-11.118h40.766c6.14,0,11.117,4.978,11.117,11.118V172.883z"/>
                    <path fill="#EDED29" d="M367,249.883c0,6.14-4.978,11.117-11.117,11.117h-40.766c-6.14,0-11.117-4.978-11.117-11.117v-37.765   c0-6.14,4.978-11.118,11.117-11.118h40.766c6.14,0,11.117,4.978,11.117,11.118V249.883z"/>
                    <path fill="#EA772A" d="M367,322.883c0,6.14-4.978,11.117-11.117,11.117h-40.766c-6.14,0-11.117-4.978-11.117-11.117v-37.765   c0-6.14,4.978-11.118,11.117-11.118h40.766c6.14,0,11.117,4.978,11.117,11.118V322.883z"/>
                    <path fill="#8AF9F9" d="M357,167.132c0,4.345-3.522,7.868-7.868,7.868h-28.264c-4.346,0-7.868-3.522-7.868-7.868v-27.265   c0-4.345,3.522-7.868,7.868-7.868h28.264c4.346,0,7.868,3.522,7.868,7.868V167.132z"/>
                    <path fill="#73FFAC" d="M434,168.133c0,4.345-3.522,7.867-7.868,7.867h-28.264c-4.346,0-7.868-3.522-7.868-7.867v-27.265   c0-4.345,3.522-7.868,7.868-7.868h28.264c4.346,0,7.868,3.522,7.868,7.868V168.133z"/>
                    <path fill="#D2F973" d="M509,168.133c0,4.345-3.522,7.867-7.868,7.867h-28.264c-4.346,0-7.868-3.522-7.868-7.867v-27.265   c0-4.345,3.522-7.868,7.868-7.868h28.264c4.346,0,7.868,3.522,7.868,7.868V168.133z"/>
                    <path fill="#FCF870" d="M358,244.133c0,4.345-3.522,7.867-7.868,7.867h-28.264c-4.346,0-7.868-3.522-7.868-7.867v-27.265   c0-4.345,3.522-7.868,7.868-7.868h28.264c4.346,0,7.868,3.522,7.868,7.868V244.133z"/>
                    <path fill="#FFE473" d="M434,244.133c0,4.345-3.522,7.867-7.868,7.867h-28.264c-4.346,0-7.868-3.522-7.868-7.867v-27.265   c0-4.345,3.522-7.868,7.868-7.868h28.264c4.346,0,7.868,3.522,7.868,7.868V244.133z"/>
                    <path fill="#F9A450" d="M509,244.133c0,4.345-3.522,7.867-7.868,7.867h-28.264c-4.346,0-7.868-3.522-7.868-7.867v-27.265   c0-4.345,3.522-7.868,7.868-7.868h28.264c4.346,0,7.868,3.522,7.868,7.868V244.133z"/>
                    <path fill="#FC9B59" d="M357,318.133c0,4.345-3.522,7.867-7.868,7.867h-28.264c-4.346,0-7.868-3.522-7.868-7.867v-27.265   c0-4.345,3.522-7.868,7.868-7.868h28.264c4.346,0,7.868,3.522,7.868,7.868V318.133z"/>
                </g>
                <g id="Layer_2">
                    <rect x="335.745" y="421.816" fill="none" width="175.51" height="84.694"/>
                    <text transform="matrix(1 0 0 1 335.7451 463.8164)" font-family="'NixieOne'" font-size="60">APPS</text>
                </g>
                <g id="Layer_4">
                </g>
</svg>
        </a></figure>
    <figure><a class="subs" href="services?s=subs">
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" x="0px" y="0px" width="9.375em" height="6.250em" style="pointer-events: all;" viewBox="0 0 800 600" enable-background="new 0 0 800 600" xml:space="preserve">
<g id="Layer_1" display="none">
    <path display="inline" fill="#F2811C" d="M610,339c0,6.627-5.373,12-12,12H449c-6.627,0-12-5.373-12-12V200c0-6.627,5.373-12,12-12   h149c6.627,0,12,5.373,12,12V339z"/>
    <path display="inline" fill="#FFA052" d="M595,326.176c0,5.426-4.398,9.824-9.824,9.824H462.824c-5.426,0-9.824-4.398-9.824-9.824   V212.824c0-5.426,4.398-9.824,9.824-9.824h122.352c5.426,0,9.824,4.398,9.824,9.824V326.176z"/>
    <g display="inline">
        <path d="M482.533,220.368v18.841c43.74,0,79.337,35.634,79.337,79.424h18.892C580.762,264.465,536.691,220.368,482.533,220.368z"/>
        <path d="M482.509,253.747v18.835c12.266,0,23.792,4.798,32.478,13.489c8.673,8.666,13.462,20.249,13.462,32.561h18.919    C547.367,282.851,518.267,253.747,482.509,253.747z"/>
        <path d="M495.578,292.423c-7.216,0-13.081,5.877-13.081,13.051c0,7.215,5.865,13.039,13.081,13.039    c7.241,0,13.102-5.824,13.102-13.039C508.673,298.312,502.819,292.423,495.578,292.423z"/>
    </g>
</g>
                <g id="Layer_2" display="none">
                    <g id="_x34_91._Back" display="inline">
                        <g>
                            <path d="M67.46,236.496v56.005c0,15.461,19.573,27.997,43.715,27.997h174.868v55.998c0,15.462,13.838,19.139,30.902,8.2     l172.223-110.298c8.535-5.469,8.535-14.327,0-19.795L316.945,144.304c-17.056-10.937-30.902-7.261-30.902,8.202v55.992H111.175     C87.033,208.498,67.46,221.032,67.46,236.496z M89.81,226.816l211.049,0l0-68.338L475.779,264.5l-174.92,103.264v-67.986H89.81     V226.816z"/>
                        </g>
                    </g>
                    <rect x="99.667" y="242.459" display="inline" fill="none" width="355.103" height="54.082"/>
                    <text transform="matrix(1 0 0 1 99.667 284.459)" display="inline" font-family="'NixieOne'" font-size="60">SUBSCRIBE</text>
                    <rect x="157.755" y="453.266" display="inline" fill="none" width="21.429" height="9.184"/>
                </g>
                <g id="Layer_3">
                    <path fill="#020202" d="M240.184,532.044c-5.468,0-13.088-4.364-13.088-9.745l0-422.877c0-5.375,7.613-9.749,13.087-9.749h42.457   v20.612c0,5.383,4.44,9.746,9.924,9.746c5.48,0,9.918-4.363,9.918-9.746V89.673h57.029v20.612c0,5.383,4.438,9.746,9.92,9.746   c5.483,0,9.922-4.363,9.922-9.746V89.673h49.591v20.612c0,5.383,4.439,9.746,9.923,9.746c5.48,0,9.92-4.363,9.92-9.746V89.673   h54.554v20.612c0,5.383,4.439,9.746,9.912,9.746c5.483,0,9.927-4.363,9.927-9.746V89.673h47.42c5.466,0,13.072,4.373,13.072,9.749   v72.696l1.973-1.932l19.364-22.134v-43.453c0-21.497-17.802-38.989-39.677-38.989H523.18V42.052c0-5.383-4.438-9.751-9.927-9.751   c-5.473,0-9.912,4.363-9.912,9.751v23.557h-54.566V42.052c0-5.383-4.438-9.751-9.921-9.751s-9.919,4.363-9.919,9.751v23.557   h-49.593V42.052c0-5.383-4.438-9.751-9.921-9.751c-5.481,0-9.921,4.363-9.921,9.751v23.557h-57.028V42.052   c0-5.383-4.439-9.751-9.919-9.751c-5.485,0-9.923,4.363-9.923,9.751v23.557h-37.19c-21.874,0-39.678,17.493-39.678,38.989v409.407   c0,21.498,17.804,38.994,39.678,38.994h319.868c21.874,0,39.679-17.496,39.679-38.994l0.022-371.131l-21.337,19.925l-0.023,351.217   l0.013,8.282c0,5.371-7.61,9.744-13.075,9.744"/>
                    <path fill="#00ACEE" d="M529.028,170.818H279.41c-6.459,0-11.702,3.861-11.702,8.634s5.243,8.633,11.702,8.633h249.618   c6.459,0,11.702-3.861,11.702-8.633S535.487,170.818,529.028,170.818z"/>
                    <path fill="#00ACEE" d="M529.028,240.432H279.41c-6.459,0-11.702,3.866-11.702,8.634c0,4.774,5.243,8.635,11.702,8.635h249.618   c6.459,0,11.702-3.86,11.702-8.635C540.73,244.298,535.487,240.432,529.028,240.432z"/>
                    <path fill="#00ACEE" d="M531.362,305.691H281.742c-6.459,0-11.7,3.864-11.7,8.632c0,4.775,5.241,8.636,11.7,8.636h249.621   c6.459,0,11.701-3.86,11.701-8.636C543.063,309.556,537.821,305.691,531.362,305.691z"/>
                    <rect x="234.113" y="415.132" fill="none" width="494.898" height="58.164"/>
                    <text transform="matrix(1 0 0 1 234.1128 457.1318)" font-family="'NixieOne'" font-size="60">SUBSCRIBE</text>
                </g>
</svg>
        </a></figure>
</section>
<section id="top-metro" data-type="background" data-speed="10"></section>

<section class="team" id="team">
    <section class="team-small-screens">
        <article class="qualities-small">
            <h2>LEADERSHIP</h2>
            <h2>INNOVATION</h2>
            <h2>CREATIVE PROCESS</h2>
            <h2>PERFECTIONISM</h2>
            <h2>TECHNOLOGY</h2>

        </article>
    </section>
    <section class="team-small-screens">
        <figure class="us-small">
            <img src="{{ URL::asset('assets/images/build/Ilona-Olejnik.png')}}" width="100%" alt="Ilona Olejnik">
            <span class="title-start-i">GRAPHIC</span><span class="title-end">DESIGNER</span>
        </figure>
    </section>
    <section class="team-small-screens">
        <article>
            <h2>Ilona Olejnik</h2>
            <p>
                Creative Thinker<br>
                Latest Trends<br>
                Pixel Perfection
            </p>
        </article>
    </section>
    <section class="team-small-screens">
        <figure class="us-small">

            <img src="{{ URL::asset('assets/images/build/Thomas-Jensen.png')}}" width="100%" alt="Thomas Jensen">
            <span class="title-start">WEB</span><span class="title-end">DEVELOPER</span>
        </figure>
    </section>
    <section class="team-small-screens">
        <article>
            <h2>Thomas Jensen</h2>
            <p>
                Solution Thinker<br>
                Modern Coding<br>
                Coding Perfection
            </p>
        </article>
    </section>

    <section class="box-row between">
        <div class="about-emptybox left"></div>
        <div class="about-emptybox right"></div>
    </section>

    <section class="box-row center">
        <article class="box-holder between">
            <figure class="us about-box thomas left">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="450" y2="0"></line>
                    <line class="left" x1="0" y1="230" x2="0" y2="-460"></line>
                    <line class="bottom" x1="150" y1="150" x2="-300" y2="150"></line>
                    <line class="right" x1="150" y1="0" x2="150" y2="1380"></line>
                </svg>
                <img src="{{ URL::asset('assets/images/build/Thomas-Jensen.png')}}" width="100%" alt="Thomas Jensen">
                <span class="title-start">WEB</span><span class="title-end">DEVELOPER</span>
            </figure>
            <figure class="us about-box ilona right">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="450" y2="0"></line>
                    <line class="left" x1="0" y1="230" x2="0" y2="-460"></line>
                    <line class="bottom" x1="150" y1="150" x2="-300" y2="150"></line>
                    <line class="right" x1="150" y1="0" x2="150" y2="1380"></line>
                </svg>

                <img src="{{ URL::asset('assets/images/build/Ilona-Olejnik.png')}}" width="100%" alt="Ilona Olejnik">
                <span class="title-start-i">GRAPHIC</span><span class="title-end">DESIGNER</span>
            </figure>
    </section>

    <section class="box-row between">
        <div class="about-box 1 left">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <line class="top" x1="0" y1="0" x2="450" y2="0"></line>
                <line class="left" x1="0" y1="230" x2="0" y2="-460"></line>
                <line class="bottom" x1="150" y1="150" x2="-300" y2="150"></line>
                <line class="right" x1="150" y1="0" x2="150" y2="1380"></line>
            </svg>
            <span class="dl-text title1">LEADERSHIP</span>
                    <span class="dl-texthover text1">
                        <article>
                            "Modern methods, well organized, strong leadership are key traits with us"
                        </article>
                    </span>
            <span class="ilona-text">From: Poland</span>
            <span class="thomas-text">From: Denmark</span>
        </div>
        <div class="about-box 2 center">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <line class="top" x1="0" y1="0" x2="450" y2="0"></line>
                <line class="left" x1="0" y1="230" x2="0" y2="-460"></line>
                <line class="bottom" x1="150" y1="150" x2="-300" y2="150"></line>
                <line class="right" x1="150" y1="0" x2="150" y2="1380"></line>
            </svg>
            <span class="dl-text title2">INNOVATION</span>
                       <span class="dl-texthover text2">
                        <article>
                            "We strongly believe that, to be competitive you must embrace innovation"
                        </article>
                    </span>
            <span class="ilona-text">Ilona Olejnik</span>
            <span class="thomas-text">Thomas Jensen</span>
        </div>
        <div class="about-box 3 right">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <line class="top" x1="0" y1="0" x2="450" y2="0"></line>
                <line class="left" x1="0" y1="230" x2="0" y2="-460"></line>
                <line class="bottom" x1="150" y1="150" x2="-300" y2="150"></line>
                <line class="right" x1="150" y1="0" x2="150" y2="1380"></line>
            </svg>
            <span class="dl-text title3">CREATIVE PROCESS</span>
                       <span class="dl-texthover text3">
                        <article>
                            "The creative process is not always the same, with us you get a customized process"
                        </article>
                    </span>
            <span class="ilona-text">Creative Thinker</span>
            <span class="thomas-text">Solution Thinker</span>
        </div>
    </section>

    <section class="box-row center">
        <article class="box-holder between">
            <div class="about-box 4 left">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="450" y2="0"></line>
                    <line class="left" x1="0" y1="230" x2="0" y2="-460"></line>
                    <line class="bottom" x1="150" y1="150" x2="-300" y2="150"></line>
                    <line class="right" x1="150" y1="0" x2="150" y2="1380"></line>
                </svg>
                <span class="dl-text title4">PERFECTIONISM</span>
                   <span class="dl-texthover text4">
                        <article>
                            "We strive to make every single thing we touch perfect in every way, it is our passion"
                        </article>
                    </span>
                <span class="ilona-text">Pixel Perfection</span>
                <span class="thomas-text">Coding Perfection</span>
            </div>
            <div class="about-box 5 right">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <line class="top" x1="0" y1="0" x2="450" y2="0"></line>
                    <line class="left" x1="0" y1="230" x2="0" y2="-460"></line>
                    <line class="bottom" x1="150" y1="150" x2="-300" y2="150"></line>
                    <line class="right" x1="150" y1="0" x2="150" y2="1380"></line>
                </svg>
                <span class="dl-text title5">TECHNOLOGY</span>
                       <span class="dl-texthover text5">
                        <article>
                            "We are always at the forefront of development, and always learning"
                        </article>
                    </span>
                <span class="ilona-text">Latest Trends</span>
                <span class="thomas-text">Modern Coding</span>
            </div>
        </article>
    </section>


    <section class="box-row between">
        <div class="about-emptybox left"></div>
        <div class="about-emptybox center"></div>
        <div class="about-emptybox right"></div>
    </section>
</section>

<section class="departure">
    <figure class="end"><img src="{{ URL::asset('assets/images/build/Untitssadadaddled-3.png')}}" width="100%" alt="contact us">
        <section id="bottom-metro" data-type="background" data-speed="10"></section>
    </figure>
    <video autoplay loop class="contact-video" id="videoElement1">
        <source src="{{ URL::asset('assets/movies/NycTrafficPhotojpeg.mp4')}}" type="video/mp4">
        <source src="{{ URL::asset('assets/movies/NycTrafficH264.ogv')}}" type="video/ogg">
    </video>
    <figure class="no-video-contact">
        <img src="{{ URL::asset('assets/images/build/trial3.jpg')}}" width="100%" alt="contact metro">
    </figure>

    <section class="contact" id="contact">
        {{ Form::open(array('action' => 'EmailController@contact', 'class' => 'contact-form')) }}

        {{ Form::text('name', null, array('placeholder' => 'Name:', 'class' => 'name', 'required')) }}
        {{ Form::email('email', null, array('placeholder' => 'Email:', 'class' => 'email', 'required')) }}
        {{ Form::textarea('messages', null, array('placeholder' => 'Message:', 'class' => 'message', 'required')) }}

        {{ Form::submit('submit', array('class' => 'submit', 'value' => 'SEND')) }}
        {{ Form::close() }}
    </section>

</section>




@stop