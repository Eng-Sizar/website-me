/**
 * ==========================================
 * Portfolio Hamza Hesham - jQuery Interaction Engine
 * التعامل مع التفاعلات وحركة DOM باستخدام jQuery
 * ==========================================
 */

$(document).ready(function ($) {
  'use strict';

  // 1. Page Loader & Initialization
  $(window).on('load', function () {
    setTimeout(function () {
      $('body').addClass('loaded');
      $('#loader').attr('aria-hidden', 'true').fadeOut(450);
    }, 350);
  });

  // Fallback in case load event already fired
  if (document.readyState === 'complete') {
    $('body').addClass('loaded');
    $('#loader').fadeOut(300);
  }

  // 2. Set Current Year in Original English Footer
  $('#year').text(new Date().getFullYear());

  // 3. Arabic Typewriter Effect (تأثير الكتابة التفاعلي للوظائف)
  const typedPhrases = [
    "مبرمج أول (Senior Programmer)",
    "مطور ويب متكامل (Full Stack Developer)",
    "مهندس واجهات برمجية ونظم رقمية",
    "مبتكر حلول سحابية وتطبيقات فائقة الأداء"
  ];
  let currentPhraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const $typingText = $('#typingText');

  function runTypewriter() {
    const currentPhrase = typedPhrases[currentPhraseIdx];
    const displayed = currentPhrase.substring(0, charIdx);
    $typingText.text(displayed);

    if (!isDeleting && charIdx < currentPhrase.length) {
      charIdx++;
      setTimeout(runTypewriter, 75);
      return;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      setTimeout(runTypewriter, 1300);
      return;
    }

    if (isDeleting && charIdx > 0) {
      charIdx--;
      setTimeout(runTypewriter, 35);
      return;
    }

    isDeleting = false;
    currentPhraseIdx = (currentPhraseIdx + 1) % typedPhrases.length;
    setTimeout(runTypewriter, 300);
  }

  if ($typingText.length) {
    runTypewriter();
  }

  // 4. Sticky Header with Scroll Detection
  const $navbar = $('#navbar');
  function handleNavbarScroll() {
    const scrolled = $(window).scrollTop() > 20;
    $navbar.toggleClass('nav-scrolled', scrolled);
  }
  $(window).on('scroll', handleNavbarScroll);
  handleNavbarScroll();

  // 5. Mobile Navigation Toggle (قائمة الهاتف التفاعلية)
  const $menuToggle = $('#menuToggle');
  const $mobileMenu = $('#mobileMenu');

  $menuToggle.on('click', function (e) {
    e.stopPropagation();
    const isVisible = $mobileMenu.is(':visible');
    $mobileMenu.stop(true, true).slideToggle(260);
    $menuToggle.attr('aria-expanded', String(!isVisible));
  });

  // Close mobile menu when clicking outside or clicking any nav link
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#navbar').length && $mobileMenu.is(':visible')) {
      $mobileMenu.slideUp(200);
      $menuToggle.attr('aria-expanded', 'false');
    }
  });

  $('#mobileMenu a').on('click', function () {
    $mobileMenu.slideUp(200);
    $menuToggle.attr('aria-expanded', 'false');
  });

  // 6. Smooth Scrolling for Anchor Links (التمرير السلس)
  $('a[href^="#"]').on('click', function (e) {
    const targetId = $(this).attr('href');
    if (targetId === '#' || targetId === '#!') return;

    const $target = $(targetId);
    if ($target.length) {
      e.preventDefault();
      const offset = $target.offset().top - 90;
      $('html, body').stop().animate({ scrollTop: offset }, 500, 'swing');
    }
  });

  // 7. Active Navigation Link on Scroll (مراقبة القسم النشط)
  const $sections = $('main section[id]');
  const $navLinks = $('.nav-link-custom, .mobile-nav-link');

  function updateActiveNav() {
    const scrollPos = $(window).scrollTop() + 140;

    $sections.each(function () {
      const top = $(this).offset().top;
      const height = $(this).outerHeight();
      const id = $(this).attr('id');

      if (scrollPos >= top && scrollPos < top + height) {
        $navLinks.removeClass('active');
        $(`.nav-link-custom[href="#${id}"], .mobile-nav-link[href="#${id}"]`).addClass('active');
      }
    });
  }
  $(window).on('scroll', updateActiveNav);
  updateActiveNav();

  // 8. Reveal On Scroll Animations (تأثير الظهور عند التمرير)
  const $reveals = $('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    $reveals.each(function () {
      observer.observe(this);
    });
  } else {
    // Fallback if IntersectionObserver not supported
    $reveals.addClass('visible');
  }

  // 9. Ambient Particles Generator (توليد الجزيئات المضيئة في الخلفية)
  const $particlesContainer = $('#particles');
  if ($particlesContainer.length) {
    const count = $(window).width() < 768 ? 24 : 42;
    for (let i = 0; i < count; i++) {
      const $particle = $('<span class="particle"></span>');
      const posX = Math.random() * 100;
      const duration = 9 + Math.random() * 10;
      const delay = Math.random() * -12;
      const opacity = 0.25 + Math.random() * 0.55;

      $particle.css({
        left: posX + '%',
        opacity: opacity,
        '--duration': duration + 's',
        '--delay': delay + 's'
      });

      $particlesContainer.append($particle);
    }
  }

  // 10. Copy Code Snippet in Variants Modal (نسخ أكواد النُسخ المتوافقة)
  $(document).on('click', '.btn-copy-code', function () {
    const targetCodeId = $(this).data('target');
    const codeText = $(targetCodeId).text();
    const $btn = $(this);
    const originalText = $btn.html();

    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeText).then(function () {
        $btn.html('<svg width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg> تم النسخ!');
        setTimeout(function () {
          $btn.html(originalText);
        }, 2200);
      });
    }
  });

  // 11. Interactive Contact Toast notification
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    const $alert = $('#contactAlert');
    $alert.removeClass('d-none').addClass('d-flex');
    $(this)[0].reset();
    setTimeout(function () {
      $alert.fadeOut(400, function () {
        $(this).addClass('d-none').css('display', '');
      });
    }, 4500);
  });
});
