/**
 * Template Name: Folio - v3.0.0
 * Template URL: https://bootstrapmade.com/folio-bootstrap-portfolio-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function ($) {
    "use strict";

    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#main-nav').outerHeight() - 1;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if (window.matchMedia("(max-width:991px)").matches) {
                    $('.nav-menu').hide();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // ========================================================================= //
    //  //NAVBAR SHOW - HIDE
    // ========================================================================= //

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (!$('.subpage-nav').length) {
            if (scroll > 200) {
                $("#main-nav").slideDown(700);
            } else {
                $("#main-nav").slideUp(700);
            }
        }
    });

    // ========================================================================= //
    //  // RESPONSIVE MENU
    // ========================================================================= //

    $('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });

    // ========================================================================= //
    //  Typed Js
    // ========================================================================= //

    var typed = $(".typed");

    $(function () {
        var strings = $('.typed-items').text();
        strings = strings.split(',');
        strings = strings.map(i => 'a ' + i);
        strings.push($('.typed-items').data('typed-person'));


        typed.typed({
            strings: strings,
            typeSpeed: 100,
            loop: true,
        });
    });


})(jQuery);