/*
 * Dina - Restaurant, Bar, Cafe, Food HTML Template
 *
 * Author: https://matchthemes.com
 *
 */

// Template scripts

(function ($) {
  "use strict";

  // home slider
  $(".home-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "fadeOut",
    dots: false,
    nav: true,
    navText: "",
  });

  //end home slider

  //hamburger menu
  $(".nav-button-holder").on("click", function (e) {
    e.preventDefault();

    if ($(this).is(".inactive")) {
      $(this).toggleClass("inactive active");
      $("body").addClass("has-active-menu");
      $(".nav-button").addClass("active");
      $(".mask-nav-2, #header-2").addClass("is-active");
    } else if ($(this).is(".active")) {
      $(this).toggleClass("inactive active");
      $("body").removeClass("has-active-menu");
      $(".nav-button").removeClass("active");
      $(".mask-nav-2, #header-2").removeClass("is-active");
    }
  });

  // end hamburger menu

  //sticky menu
  $(window).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
      $(".navbar-1, #header-2, #header-3, #header-4, .header6").addClass(
        "nav-bkg1"
      );
      $(".headerWrap-5").addClass("navbar-fixed-top nav-bkg1");
    } else {
      $(".navbar-1, #header-2, #header-3, #header-4, .header6").removeClass(
        "nav-bkg1"
      );
      $(".headerWrap-5").removeClass("navbar-fixed-top nav-bkg1");
    }
  });

  //gallery lightbox

  $(".gallery-post a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //scroll up button

  $(".scrollup").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 400) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $("a.scrolltop[href^='#']").on("click", function (e) {
    e.preventDefault();
    $("html, body").stop().animate({ scrollTop: 0 }, 1000, "easeOutExpo");
  });
})(jQuery);

// Custom scripts

// Popup promo modal (home page only) — opens on load, closed via the × button.
const btnCloseModal = document.getElementById("close-modal");
const modalElm = document.getElementById("modal");

if (btnCloseModal && modalElm) {
  btnCloseModal.addEventListener("click", function () {
    modalElm.classList.remove("open");
  });
}

// Loader script
document.addEventListener("DOMContentLoaded", function () {
  const loaderWrapper = document.querySelector(".loader-wrapper");

  // The loader only exists on the home page.
  if (!loaderWrapper) return;

  // Hide loader after 3.5 seconds, regardless of page load completion
  const timeoutId = setTimeout(() => {
    loaderWrapper.style.display = "none";
  }, 3500);

  // If the page loads before 3.5 seconds, hide it immediately
  window.onload = function () {
    clearTimeout(timeoutId);
    loaderWrapper.style.display = "none";
  };
});
