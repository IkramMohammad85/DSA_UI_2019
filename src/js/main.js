function ui() {
    // Select UI
    // $.fn.select2.defaults.set("width", "100%");
    // $('.select-ui').each(function(){
    //     var el = $(this);
    //     var selectUI= el.select2({
    //         placeholder: el.data('placeholder')
    //     });

    //     // Update UI Scroll - Open dropdown
    //     selectUI.on("select2:open", function (e) {
    //         var id = $('.select2-results  > .select2-results__options').attr('id');
    //         $('.select2-results').attr({'id':id + '-group'}).queue(function(next){
    //             new SimpleBar($('#' + id + '-group')[0])
    //             next();
    //         });
    //     });
    // });

    // Range UI
    $('.range-ui').each(function(key){
        var el = $(this);
        el.attr({'id':'range-ui-' + key}).queue(function(next){
            $("#range-ui-" + key).ionRangeSlider();
            next();
        });
    });

    // Scroll
    $('.scroll-ui').each(function(key) {
        var el = $(this);
        el.attr({'id':'scroll-ui-' + key}).queue(function(next){
            new SimpleBar($('#' + el.attr('id'))[0])
            next();
        });
    });

    // File Browse UI
    $('.file-ui .file-ui-input').change(function(e){
        if(typeof e.target.files[0] !== 'undefined') {
            var fileName = e.target.files[0].name;
                $(this).siblings('.file-ui-label').text(fileName);
        }
    });

    // Parallax
    // $('[data-paroller-factor]').paroller();

    $('[data-src]').lazy();
}

// Image svg
function imgSVG(){
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
}

function gotoTop() {
    var topTop = $('.toTop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topTop.addClass('active');
        } else {
            topTop.removeClass('active');
        }
    });
    topTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
};

function header() {
    var stick = $('.navbar');
    var waypoint = new Waypoint({
        element: $('.wrap'),
        handler: function (direction) {
            if (direction == 'down') {
                stick.addClass('active');
            } else {
                stick.removeClass('active');
            }
        },
        offset: '-45px'
    })



    var search = $('.navbar-search');
    var stickSocial = $('.sticky__social');

    $(document).on('click', '.navbar-search-show', function(e){
        e.stopPropagation();
        e.preventDefault();
        if(search.hasClass('show')) {
            search.removeClass('show');
        } else {
            search.addClass('show');
        }
    });

    $(document).on('click', '.navbar-search__close', function(e){
        e.stopPropagation();
        e.preventDefault();
        if(search.hasClass('show')) {
            search.removeClass('show');
        } else {
            search.addClass('show');
        }
    })

    $(document).on('click', '.navbar-search__form, .sticky__social__inner .socials', function(e){
        e.stopPropagation();
    })
    
    // Sticky
    $(document).on('click', '.sticky__social__toggle', function(e){
        e.stopPropagation();
        e.preventDefault();
        if(stickSocial.hasClass('show')) {
            stickSocial.removeClass('show');
        } else {
            stickSocial.addClass('show');
        }
    })

    // Document click
    $(document).click(function(event){
        search.removeClass('show');
        stickSocial.removeClass('show');
    });


    $(document).on('click', '.nav-arrow', function(e){
        var el = $(this);
            wrap = el.parent('.nav-item'),
            drop = el.next('.dropdown-menu');

            if(drop.is(':hidden')) {
                $('header .nav-item .dropdown-menu').stop().slideUp(200);
                $('header .nav-item').removeClass('active');

                drop.stop().slideDown(200);
                wrap.addClass('active');
            } else {
                drop.stop().slideUp(200);
                wrap.removeClass('active');
            }
    });
}

function homeBanner(){
    $('.hBanner__slide').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.hBanner__nav',
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
            breakpoint: 576,
            settings: {
                adaptiveHeight: true,
                dots: true,
            }}
        ]
    })

    $('.hBanner__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.hBanner__slide',
        infinite: false,
        focusOnSelect: true,
        prevArrow: '<a class="barrow barrow--prev" href="#"></a>',
        nextArrow: '<a class="barrow barrow--next" href="#"></a>',
        responsive: [
            {
            breakpoint: 1240,
            settings: {
                slidesToShow: 3
            }},
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }},
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }}
        ]
    });
}

function homeEvent(){
    $('.hEvent__slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        focusOnSelect: true,
        prevArrow: '<a class="earrow earrow--prev" href="#"></a>',
        nextArrow: '<a class="earrow earrow--next" href="#"></a>',
        responsive: [
            {
            breakpoint: 1240,
            settings: {
                slidesToShow: 3
            }},
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }},
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }}
        ]
    });
}

function homeAsiapedia(){
    $('.hAsiapedia__slide').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        fade: true,
        swipe: false,
        touchMove: false,
        cssEase: 'linear',
        adaptiveHeight: true,
        responsive: [
            {
            breakpoint: 992,
            settings: {
                dots: true,
                swipe: true,
                touchMove: true,
                // fade: false,
                // adaptiveHeight: false
            }}
        ]
    })
    $(document).on('click', '.hAsiapedia__nav__item', function(){
        var el = $(this);
            if(!el.hasClass('active')) {
                $('.hAsiapedia__nav__item').removeClass('active');
                el.addClass('active');
                var slideIndex = el.index();
                $( '.hAsiapedia__slide' ).slick('slickGoTo',parseInt(slideIndex));
            }
    });

    $(window).on('resize orientationchange', function() {
        $('.hAsiapedia__slide')[0].slick.refresh();
    });
}

function homePartnerships(){
    $('.hPartnerships__slide').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: false,
        focusOnSelect: true,
        arrows: false,
        dots: true,
        responsive: [
            {
            breakpoint: 1240,
            settings: {
                slidesToShow: 5
            }},
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }},
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }},
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }}
        ]
    });
}

function homeNews() {
    if($(window).width() >= 992) {
        $('.hNews__hot.slick-initialized').slick('unslick');
    } else {
        $('.hNews__hot:not(.slick-initialized)').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            // infinite: false,
            // focusOnSelect: true,
            prevArrow: '<a class="earrow earrow--prev" href="#"></a>',
            nextArrow: '<a class="earrow earrow--next" href="#"></a>',
            arrows: true,
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }}
            ]
        });
    }
}

function scrollMobileMenu(){
    // if($(window).width() >= 768) {

    // } else {
    //     new SimpleBar($('#navbarNavDropdown')[0])
    // }
}

function allButton(){
    if($(window).width() >= 768) {
        if($('.heading-wrap').length) {
            $('.heading-wrap').each(function(){
                var el = $(this),
                    content = el.parents('.container'),
                    ssFooter = content.find('.section-mobile-footer');
                    btn = ssFooter.find('.btn');
                    if(content.find('.section-mobile-footer').length){
                        el.append(btn);
                        ssFooter.remove();
                    }
            });
        }
    } else {
        
        if($('.heading-wrap').length) {
            $('.heading-wrap').each(function(){
                var el = $(this),
                    content = el.parents('.container'),
                    btn = el.children('.btn');
                if(!content.find('.section-mobile-footer').length){
                    content.append('<div class="section-mobile-footer"></div>');
                    var ssFooter = content.find('.section-mobile-footer');
                        ssFooter.append(btn);
                }
            });
        }
    }
}

function init(){
    // Base
    ui();
    // Image SVG
    imgSVG();
    // Go to top
    gotoTop();

    header();
    homeBanner();
    homeEvent();
    homeAsiapedia();
    homePartnerships();
    scrollMobileMenu();
    homeNews();
    allButton();

    $(window).on("debouncedresize", function( event ) {
        scrollMobileMenu();
        homeNews();
        allButton();
    });
}

init();

// $('body').imagesLoaded( function() {
    // init();
    // $('body').addClass('loaded');
    // $('.pageLoad').fadeOut();
// })