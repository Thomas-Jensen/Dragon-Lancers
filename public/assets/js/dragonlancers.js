/**
 * Created by ThomasJensen on 23/12/14.
 */
$(document).ready(function(){
    $('.menu-button').click(function(event){
        event.stopPropagation();
        $('.bar-1').toggleClass('cross-icon1');
        $('.bar-2').toggleClass('cross-icon2');
        $('.bar-3').toggleClass('cross-icon3');
        $('.menu').removeClass('animate fadeOut');
        $('.menu').toggleClass('animate fadeIn');
        $('.menu').toggle();
    });

    $(document).click(function(event) {


        if(!$(event.target).closest('.menu').length) { //checks if clicked element is ancestor
            if($('.menu').is(":visible")) {
                $('.menu').removeClass('animate fadeIn');
                $('.menu').addClass('animate fadeOut');
                $('.bar-1').removeClass('cross-icon1');
                $('.bar-2').removeClass('cross-icon2');
                $('.bar-3').removeClass('cross-icon3');
                $('.menu').hide();
            }
        }
    })

    $('.menu-button').hover(function() {
        $('.bar1').addClass('menu-hover');
        $('.bar2').toggleClass('menu-hover');
        $('.bar3').toggleClass('menu-hover');
    });

    $('.menu-button').hover(function(){
        $('.bar-1').toggleClass('menu-hover');
        $('.bar-2').toggleClass('menu-hover');
        $('.bar-3').toggleClass('menu-hover');
    });


    $('.thomas').hover(function() {
        $('.dl-text').toggle();
        $('.thomas-text').toggle();
        $(this).toggleClass('active');
    })

    $('.ilona').hover(function() {
        $('.dl-text').toggle();
        $('.ilona-text').toggle();
        $(this).toggleClass('active');
        $('.1').focus();

    })

    $('.1').hover(function(){
        $('.title1').toggle();
        $('.1').toggleClass('team-spanHover');
        $('.text1').toggle();
        $('.text1').toggleClass('team-headerHover');

    })

    $('.2').hover(function(){
        $('.title2').toggle();
        $('.2').toggleClass('team-spanHover');
        $('.text2').toggle();
        $('.text2').toggleClass('team-headerHover');

    })

    $('.3').hover(function(){
        $('.title3').toggle();
        $('.3').toggleClass('team-spanHover');
        $('.text3').toggle();
        $('.text3').toggleClass('team-headerHover');

    })

    $('.4').hover(function(){
        $('.title4').toggle();
        $('.4').toggleClass('team-spanHover');
        $('.text4').toggle();
        $('.text4').toggleClass('team-headerHover');

    })

    $('.5').hover(function(){
        $('.title5').toggle();
        $('.5').toggleClass('team-spanHover');
        $('.text5').toggle();
        $('.text5').toggleClass('team-headerHover');

    })

    $.fn.is_on_screen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };

    if( $('.home').length > 0 ) { // if target element exists in DOM
        if( $('.home').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.home-link').addClass('active'); // log info
        } else {
            $('.home-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.home').length > 0 ) { // if target element exists in DOM
            if( $('.home').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.home-link').addClass('active'); // log info
            } else {
                $('.home-link').removeClass('active'); // log info
            }
        }
    });


    if( $('#videoElement').length > 0 ) { // if target element exists in DOM
        if( $('#videoElement').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('#videoElement')[0].play(); // log info
        } else {
            $('#videoElement')[0].pause(); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('#videoElement').length > 0 ) { // if target element exists in DOM
            if( $('#videoElement').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('#videoElement')[0].play(); // log info
            } else {
                $('#videoElement')[0].pause(); // log info
            }
        }
    });


    if( $('#videoElement1').length > 0 ) { // if target element exists in DOM
        if( $('#videoElement1').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('#videoElement1')[0].play(); // log info
        } else {
            $('#videoElement1')[0].pause(); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('#videoElement1').length > 0 ) { // if target element exists in DOM
            if( $('#videoElement1').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('#videoElement1')[0].play(); // log info
            } else {
                $('#videoElement1')[0].pause(); // log info
            }
        }
    });


    if( $('.philosophy').length > 0 ) { // if target element exists in DOM
        if( $('.philosophy').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.philosophy-link').addClass('active'); // log info
        } else {
            $('.philosophy-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.philosophy').length > 0 ) { // if target element exists in DOM
            if( $('.philosophy').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.philosophy-link').addClass('active'); // log info
            } else {
                $('.philosophy-link').removeClass('active'); // log info
            }
        }
    });



    if( $('.services').length > 0 ) { // if target element exists in DOM
        if( $('.services').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.services-link').addClass('active'); // log info
        } else {
            $('.services-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.services').length > 0 ) { // if target element exists in DOM
            if( $('.services').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.services-link').addClass('active'); // log info
            } else {
                $('.services-link').removeClass('active'); // log info
            }
        }
    });




    if( $('.work').length > 0 ) { // if target element exists in DOM
        if( $('.work').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.work-link').addClass('active'); // log info
        } else {
            $('.work-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.work').length > 0 ) { // if target element exists in DOM
            if( $('.work').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.work-link').addClass('active'); // log info
            } else {
                $('.work-link').removeClass('active'); // log info
            }
        }
    });


    if( $('.philosophy-right-top h2').length > 0 ) { // if target element exists in DOM
        if( $('.philosophy-right-top h2').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.philosophy-right-top h2').addClass('animate fadeIn'); // log info
        } else {
            $('.philosophy-right-top h2').removeClass('animate fadeIn'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.philosophy-right-top h2').length > 0 ) { // if target element exists in DOM
            if( $('.philosophy-right-top h2').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.philosophy-right-top h2').addClass('animate fadeIn'); // log info
            } else {
                $('.philosophy-right-top h2').removeClass('animate fadeIn'); // log info
            }
        }
    });


    if( $('.philosophy-left article h2').length > 0 ) { // if target element exists in DOM
        if( $('.philosophy-left article h2').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.philosophy-left article h2').addClass('animate fadeIn'); // log info
        } else {
            $('.philosophy-left article h2').removeClass('animate fadeIn'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.philosophy-left article h2').length > 0 ) { // if target element exists in DOM
            if( $('.philosophy-left article h2').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.philosophy-left article h2').addClass('animate fadeIn'); // log info
            } else {
                $('.philosophy-left article h2').removeClass('animate fadeIn'); // log info
            }
        }
    });


    if( $('.work-more').length > 0 ) { // if target element exists in DOM
        if( $('.work-more').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.work-more').addClass('animate fadeInUp'); // log info
        } else {
            $('.work-more').removeClass('animate fadeInUp'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.work-more').length > 0 ) { // if target element exists in DOM
            if( $('.work-more').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.work-more').addClass('animate fadeInUp'); // log info
            } else {
                $('.work-more').removeClass('animate fadeInUp'); // log info
            }
        }
    });


    if( $('.print').length > 0 ) { // if target element exists in DOM
        if( $('.print').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.print').addClass('animate fadeInLeft'); // add animate class
            $('.web').addClass('animate fadeInLeft'); // add animate class
            $('.apps').addClass('animate fadeInRight'); // add animate class
            $('.subs').addClass('animate fadeInRight'); // add animate class
        } else {
            $('.print').removeClass('animate fadeInLeft'); // remove animate class
            $('.web').removeClass('animate fadeInLeft'); // remove animate class
            $('.apps').removeClass('animate fadeInRight'); // remove animate class
            $('.subs').removeClass('animate fadeInRight'); // remove animate class
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.print').length > 0 ) { // if target element exists in DOM
            if( $('.print').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.print').addClass('animate fadeInLeft'); // add animate class
                $('.web').addClass('animate fadeInLeft'); // add animate class
                $('.apps').addClass('animate fadeInRight'); // add animate class
                $('.subs').addClass('animate fadeInRight'); // add animate class

            } else {
                $('.print').removeClass('animate fadeInLeft'); // remove animate class
                $('.web').removeClass('animate fadeInLeft'); // remove animate class
                $('.apps').removeClass('animate fadeInRight'); // remove animate class
                $('.subs').removeClass('animate fadeInRight'); // remove animate class
            }
        }
    });

    if( $('.qualities-small').length > 0 ) { // if target element exists in DOM
        if( $('.qualities-small').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.qualities-small').addClass('animate fadeIn'); // log info
        } else {
            $('.qualities-small').removeClass('animate fadeIn'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.qualities-small').length > 0 ) { // if target element exists in DOM
            if( $('.qualities-small').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.qualities-small').addClass('animate fadeIn'); // log info
            } else {
                $('.qualities-small').removeClass('animate fadeIn'); // log info
            }
        }
    });


    if( $('.team').length > 0 ) { // if target element exists in DOM
        if( $('.team').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.team-link').addClass('active'); // log info
            $('.left').addClass('animate fadeIn'); // add animate class
            $('.center').addClass('animate fadeIn'); // add animate class
            $('.right').addClass('animate fadeIn'); // add animate class
        } else {
            $('.team-link').removeClass('active'); // log info
            $('.left').removeClass('animate fadeIn'); // add animate class
            $('.center').removeClass('animate fadeIn'); // add animate class
            $('.right').removeClass('animate fadeIn'); // add animate class
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.team').length > 0 ) { // if target element exists in DOM
            if( $('.team').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.team-link').addClass('active'); // log info
                $('.left').addClass('animate fadeIn'); // add animate class
                $('.center').addClass('animate fadeIn'); // add animate class
                $('.right').addClass('animate fadeIn'); // add animate class
            } else {
                $('.team-link').removeClass('active'); // log info
                $('.left').removeClass('animate fadeIn'); // add animate class
                $('.center').removeClass('animate fadeIn'); // add animate class
                $('.right').removeClass('animate fadeIn'); // add animate class
            }
        }
    });




    if( $('.submit').length > 0 ) { // if target element exists in DOM
        if( $('.submit').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.submit').addClass('animate fadeIn'); // log info
            $('.name').addClass('animate fadeInLeft'); // log info
            $('.email').addClass('animate fadeInLeft'); // log info
            $('.message').addClass('animate fadeInLeft'); // log info

        } else {
            $('.submit').removeClass('animate fadeIn'); // log info
            $('.name').removeClass('animate fadeInLeft'); // log info
            $('.email').removeClass('animate fadeInLeft'); // log info
            $('.message').removeClass('animate fadeInLeft'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.submit').length > 0 ) { // if target element exists in DOM
            if( $('.submit').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.submit').addClass('animate fadeIn'); // log info
                $('.name').addClass('animate fadeInLeft'); // log info
                $('.email').addClass('animate fadeInLeft'); // log info
                $('.message').addClass('animate fadeInLeft'); // log info
            } else {
                $('.submit').removeClass('animate fadeIn'); // log info
                $('.name').removeClass('animate fadeInLeft'); // log info
                $('.email').removeClass('animate fadeInLeft'); // log info
                $('.message').removeClass('animate fadeInLeft'); // log info
            }
        }
    });



    if( $('.contact').length > 0 ) { // if target element exists in DOM
        if( $('.contact').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.contact-link').addClass('active'); // log info
        } else {
            $('.contact-link').removeClass('active'); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.contact').length > 0 ) { // if target element exists in DOM
            if( $('.contact').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.contact-link').addClass('active'); // log info
            } else {
                $('.contact-link').removeClass('active'); // log info
            }
        }
    });

    function checkPosition() {
        if (window.matchMedia('(max-width: 480px)').matches) {
            $('.philosophy-right-top').prepend('<img src="/img/POSTER-LANDING%20PAGE.png">');
        } else {
            $('.philosophy-right-top').prepend('')
        }
    }

    if( $('.videoElement').length > 0 ) { // if target element exists in DOM
        if( $('.videoElement').is_on_screen() ) { // if target element is visible on screen after DOM loaded
            $('.videoElement')[0].play(); // log info
        } else {
            $('.videoElement')[0].pause(); // log info
        }
    }
    $(window).scroll(function(){ // bind window scroll event
        if( $('.videoElement').length > 0 ) { // if target element exists in DOM
            if( $('.videoElement').is_on_screen() ) { // if target element is visible on screen after DOM loaded
                $('.videoElement')[0].play(); // log info
            } else {
                $('.videoElement')[0].pause(); // log info
            }
        }
    });

    $('.services-print').click(function() {
        $('.service-txt-print').show();
        $('.service-txt-web').hide();
        $('.service-txt-apps').hide();
        $('.service-txt-subs').hide();
        $('.service-img-print').show();
        $('.service-img-web').hide();
        $('.service-img-apps').hide();
        $('.service-img-subs').hide();
        $('.services-print').addClass('active-svg');
        $('.services-web').removeClass('active-svg');
        $('.services-apps').removeClass('active-svg');
        $('.services-subs').removeClass('active-svg');

    })

    $('.services-web').click(function() {
        $('.service-txt-web').show();
        $('.service-txt-print').hide();
        $('.service-txt-apps').hide();
        $('.service-txt-subs').hide();
        $('.service-img-print').hide();
        $('.service-img-web').show();
        $('.service-img-apps').hide();
        $('.service-img-subs').hide();
        $('.services-web').addClass('active-svg');
        $('.services-print').removeClass('active-svg');
        $('.services-apps').removeClass('active-svg');
        $('.services-subs').removeClass('active-svg');
    })

    $('.services-apps').click(function() {
        $('.service-txt-apps').show();
        $('.service-txt-print').hide();
        $('.service-txt-web').hide();
        $('.service-txt-subs').hide();
        $('.service-img-print').hide();
        $('.service-img-web').hide();
        $('.service-img-apps').show();
        $('.service-img-subs').hide();
        $('.services-apps').addClass('active-svg');
        $('.services-print').removeClass('active-svg');
        $('.services-web').removeClass('active-svg');
        $('.services-subs').removeClass('active-svg');
    })

    $('.services-subs').click(function() {
        $('.service-txt-subs').show();
        $('.service-txt-print').hide();
        $('.service-txt-web').hide();
        $('.service-txt-apps').hide();
        $('.service-img-print').hide();
        $('.service-img-web').hide();
        $('.service-img-apps').hide();
        $('.service-img-subs').show();
        $('.services-subs').addClass('active-svg');
        $('.services-print').removeClass('active-svg');
        $('.services-apps').removeClass('active-svg');
        $('.services-web').removeClass('active-svg');
    })

    $('.service-contact').click(function() {
        $(this).toggleClass('clicked');
    });

    $('.print').hover(function(){
        $('.print').toggleClass('active-svg-text');

    });
    $('.web').hover(function(){
        $('.web').toggleClass('active-svg-text');

    });
    $('.apps').hover(function(){
        $('.apps').toggleClass('active-svg-text2');

    });
    $('.subs').hover(function(){
        $('.subs').toggleClass('active-svg-text3');

    });

    $('.php-a').hide();
    $('.php-bg').hover(function()
        {
            $('.php-a').toggleClass('animate fadeIn');
            $('.php-a').toggle();
        }
    );

    $('.html-a').hide();
    $('.html-bg').hover(function()
        {
            $('.html-a').toggleClass('animate fadeIn');
            $('.html-a').toggle();
        }
    );

    $('.css-a').hide();
    $('.css-bg').hover(function()
        {
            $('.css-a').toggleClass('animate fadeIn');
            $('.css-a').toggle();
        }
    );

    $('.javascript-a').hide();
    $('.javascript-bg').hover(function()
        {
            $('.javascript-a').toggleClass('animate fadeIn');
            $('.javascript-a').toggle();
            $('this').innerHTML('js');
        }
    );

    $('.design-a').hide();
    $('.design-bg').hover(function()
        {
            $('.design-a').toggleClass('animate fadeIn');
            $('.design-a').toggle();
        }
    );

    $('.seo-a').hide();
    $('.seo-bg').hover(function()
        {
            $('.seo-a').toggleClass('animate fadeIn');
            $('.seo-a').toggle();
        }
    );

    $('.business-a').hide();
    $('.business-bg').hover(function()
        {
            $('.business-a').toggleClass('animate fadeIn');
            $('.business-a').toggle();
        }
    );

    $('.news-a').hide();
    $('.news-bg').hover(function()
        {
            $('.news-a').toggleClass('animate fadeIn');
            $('.news-a').toggle();
        }
    );







});