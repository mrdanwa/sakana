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

  // end home slider

  // hamburger menu
  $(".nav-button-holder").on("click", function (e) {
    e.preventDefault();

    if ($(this).is(".inactive")) {
      $(this).toggleClass("inactive active");
      $("body").addClass("has-active-menu");
      $(".nav-button").addClass("active").attr("aria-expanded", "true");
      $(".mask-nav-2, #header-2").addClass("is-active");
    } else if ($(this).is(".active")) {
      $(this).toggleClass("inactive active");
      $("body").removeClass("has-active-menu");
      $(".nav-button").removeClass("active").attr("aria-expanded", "false");
      $(".mask-nav-2, #header-2").removeClass("is-active");
    }
  });

  // end hamburger menu

  // gallery lightbox

  $(".gallery-post a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // sticky nav + scroll-up button (single scroll handler)
  var $stickyTargets = $(".navbar-1, #header-2, #header-3, #header-4, .header6");
  var $headerWrap5 = $(".headerWrap-5");
  var $scrollup = $(".scrollup");
  $scrollup.hide();

  $(window).on("scroll", function () {
    var y = $(window).scrollTop();
    if (y > 50) {
      $stickyTargets.addClass("nav-bkg1");
      $headerWrap5.addClass("navbar-fixed-top nav-bkg1");
    } else {
      $stickyTargets.removeClass("nav-bkg1");
      $headerWrap5.removeClass("navbar-fixed-top nav-bkg1");
    }
    if (y > 400) {
      $scrollup.fadeIn();
    } else {
      $scrollup.fadeOut();
    }
  });

  $("a.scrolltop[href^='#']").on("click", function (e) {
    e.preventDefault();
    $("html, body").stop().animate({ scrollTop: 0 }, 1000, "easeOutExpo");
  });
})(jQuery);

// Custom scripts

// Popup promo modal (home page only) — shown on every visit, closed via the ×,
// a backdrop click, or Escape.
const modalElm = document.getElementById("modal");
const btnCloseModal = document.getElementById("close-modal");

if (modalElm) {
  const dismissModal = function () {
    modalElm.classList.remove("open");
  };

  // show on every page open (small delay so it doesn't fight the loader fade)
  setTimeout(function () {
    modalElm.classList.add("open");
  }, 800);

  if (btnCloseModal) btnCloseModal.addEventListener("click", dismissModal);
  // close on backdrop click
  modalElm.addEventListener("click", function (e) {
    if (e.target === modalElm) dismissModal();
  });
  // close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalElm.classList.contains("open")) dismissModal();
  });
}

// Loader overlay (home page only) — brief anti-FOUC curtain that fades out on
// load, capped at 1.2s so a slow image never holds the page hostage.
document.addEventListener("DOMContentLoaded", function () {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  if (!loaderWrapper) return;

  const hide = function () {
    loaderWrapper.classList.add("is-hidden");
  };
  const safety = setTimeout(hide, 1200);
  window.addEventListener("load", function () {
    clearTimeout(safety);
    hide();
  });
});
