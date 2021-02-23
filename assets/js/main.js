/**
* Template Name: Folio - v2.0.1
* Template URL: https://bootstrapmade.com/folio-bootstrap-portfolio-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
      menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });

  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var path = window.location.pathname;
    var page = path.split("/").pop();
    //if (page.equals("index.html")) {
      if (scroll > 200) {
        $("#main-nav, #main-nav-subpage").slideDown(700);
        $("#main-nav-subpage").removeClass('subpage-nav');
      } else {
        $("#main-nav").slideUp(700);
        $("#main-nav-subpage").hide();
        $("#main-nav-subpage").addClass('subpage-nav');
      }
    //}
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    var strings = $('.typed-items').text();
    strings = $('.typed-items').data('typed-person') + ',' + strings;
    strings = strings.split(',');

    typed.typed({
      strings: strings,
      typeSpeed: 100,
      loop: true,
    });
  });

  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //

  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 4
      }
    }
  });

});

  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    $('#portfolio-flters2 li').on('click', function() {
      $("#portfolio-flters2 li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });


  // Button floating back to top ==============================
  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}