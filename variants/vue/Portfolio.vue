<template>
  <div class="portfolio-vue-app" dir="rtl">
    <!-- Ambient animated background -->
    <div class="ambient-bg">
      <div class="ambient-gradient"></div>
      <div class="mesh-line"></div>
      <div class="float-shape shape-1"></div>
      <div class="float-shape shape-2"></div>
      <div class="float-shape shape-3"></div>
      <div id="particles" ref="particlesContainer"></div>
    </div>

    <!-- Sticky Navigation -->
    <header id="navbar" class="custom-navbar" :class="{ 'nav-scrolled': isScrolled }">
      <nav class="container-xl d-flex align-items-center justify-content-between" aria-label="التنقل الرئيسي">
        <a href="#home" class="d-flex align-items-center gap-3 text-decoration-none">
          <span class="brand-logo-badge">HH</span>
          <span class="d-none d-sm-block text-light fw-bold text-uppercase fs-6 tracking-wide">حمزة هشام</span>
        </a>

        <div class="d-none d-lg-flex align-items-center gap-2 nav-pill-box">
          <a class="nav-link-custom" :class="{ active: activeSection === 'home' }" href="#home">الرئيسية</a>
          <a class="nav-link-custom" :class="{ active: activeSection === 'about' }" href="#about">نبذة عني</a>
          <a class="nav-link-custom" :class="{ active: activeSection === 'skills' }" href="#skills">المهارات</a>
          <a class="nav-link-custom" :class="{ active: activeSection === 'experience' }" href="#experience">الخبرة</a>
          <a class="nav-link-custom" :class="{ active: activeSection === 'projects' }" href="#projects">المشاريع</a>
          <a class="nav-link-custom" :class="{ active: activeSection === 'contact' }" href="#contact">تواصل معي</a>
        </div>

        <div class="d-flex align-items-center gap-2">
          <a href="#contact" class="btn-glow-primary d-none d-lg-inline-flex">
            لنبدأ البناء
          </a>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="btn d-lg-none brand-logo-badge" type="button" aria-label="تبديل القائمة">
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke-width="2" stroke-linecap="round"/></svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div v-show="mobileMenuOpen" class="container-xl d-lg-none">
        <div class="mobile-collapse-menu">
          <a @click="mobileMenuOpen = false" class="mobile-nav-link" href="#home">الرئيسية</a>
          <a @click="mobileMenuOpen = false" class="mobile-nav-link" href="#about">نبذة عني</a>
          <a @click="mobileMenuOpen = false" class="mobile-nav-link" href="#skills">المهارات</a>
          <a @click="mobileMenuOpen = false" class="mobile-nav-link" href="#experience">الخبرة</a>
          <a @click="mobileMenuOpen = false" class="mobile-nav-link" href="#projects">المشاريع</a>
          <a @click="mobileMenuOpen = false" class="mobile-nav-link" href="#contact">تواصل معي</a>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section id="home" class="section-shell">
        <div class="container-xl">
          <div class="row align-items-center g-5">
            <div class="col-lg-7 reveal">
              <div class="hero-status-pill">
                <span class="status-dot"></span>
                متاح للمشاريع البرمجية وتطوير الحلول المتقدمة
              </div>

              <p class="section-kicker">مبرمج أول ومطور تطبيقات ويب متكامل (Full Stack)</p>
              <h1 class="hero-title">
                حمزة هشام
                <span class="gradient-highlight">يبني أنظمة رقمية وتطبيقات فائقة الإتقان.</span>
              </h1>

              <div class="typing-container">
                <span>أنا </span>
                <span class="typing-highlight">{{ typingOutput }}</span>
                <span class="typing-cursor"></span>
              </div>

              <p class="hero-description">
                بخبرة تزيد عن 3 سنوات من العمل الفعلي المتواصل، أبتكر تطبيقات ويب سريعة، مرنة، ومصممة بأعلى درجات العناية البصرية من الواجهات الأمامية إلى هندسة الخوادم وقواعد البيانات المتينة.
              </p>

              <div class="d-flex flex-wrap gap-3 mb-5">
                <a href="#projects" class="btn-glow-primary">استعراض المشاريع</a>
                <a href="#contact" class="btn-glow-secondary">تواصل معي</a>
              </div>

              <dl class="row g-3 max-w-lg mb-0">
                <div class="col-4">
                  <div class="stat-card">
                    <dt>سنوات الخبرة</dt>
                    <dd>+3</dd>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stat-card">
                    <dt>المكدس التقني</dt>
                    <dd>شامل</dd>
                  </div>
                </div>
                <div class="col-4">
                  <div class="stat-card">
                    <dt>التخصص</dt>
                    <dd>Web</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div class="col-lg-5 reveal">
              <div class="profile-wrapper">
                <div class="glow-backdrop"></div>
                <figure class="profile-figure">
                  <img src="/assets/profile.png" alt="حمزة هشام - مطور ويب" />
                  <figcaption class="profile-caption">
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <p class="fw-bold text-white mb-1 fs-6">بنية برمجية نظيفة. واجهات فائقة الدقة.</p>
                        <p class="text-secondary small mb-0">تطوير شامل وموثوق لكامل طبقات النظام.</p>
                      </div>
                      <span class="caption-badge">
                        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6" stroke-width="2" stroke-linecap="round"/></svg>
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="section-shell">
        <div class="container-xl">
          <div class="row g-5">
            <div class="col-lg-4 reveal">
              <p class="section-kicker">نبذة عني</p>
              <h2 class="section-title">مطور يجمع بين الانضباط الهندسي والذوق البصري الرفيع.</h2>
            </div>
            <div class="col-lg-8 reveal">
              <div class="glass-panel">
                <p class="fs-5 text-light lh-lg mb-4">
                  أنا حمزة هشام، مبرمج أول ومطور تطبيقات ويب شامل (Full Stack)، مكرس لبناء منتجات رقمية عصرية تتسم بالسرعة الفائقة، والتجاوب مع مختلف الشاشات، وسهولة التوسع والصيانة.
                </p>
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="info-tile">
                      <span class="tile-number">01</span>
                      <h3>إتقان الواجهات الأمامية</h3>
                      <p>تصميم متجاوب، حركات تفاعلية سلسة، وهيكلية CSS/SCSS نظيفة ومطابقة لأعلى المعايير العالمية.</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="info-tile">
                      <span class="tile-number">02</span>
                      <h3>هندسة الخوادم وقواعد البيانات</h3>
                      <p>بناء واجهات برمجة التطبيقات (RESTful APIs)، خدمات Node.js وExpress، وحلول إدارة البيانات الآمنة.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER: KEPT IN ORIGINAL ENGLISH TEXT AS SPECIFIED -->
    <footer class="premium-footer px-3 pb-4 pt-5">
      <div class="container-xl">
        <div class="footer-panel">
          <div class="row g-5">
            <div class="col-lg-5">
              <a href="#home" class="d-inline-flex align-items-center gap-3 text-decoration-none">
                <span class="brand-logo-badge">HH</span>
                <div>
                  <strong class="d-block text-white fs-5">Hamza Hesham</strong>
                  <span class="text-secondary small">Senior Programmer &amp; Full Stack Web Developer</span>
                </div>
              </a>
              <p class="mt-4 text-secondary small lh-lg">
                Building polished web experiences with clean interfaces, reliable backend logic, and performance-minded engineering.
              </p>
              <div class="d-flex flex-wrap gap-2 mt-4">
                <span class="footer-chip">3 Years Experience</span>
                <span class="footer-chip">Full Stack</span>
                <span class="footer-chip">Modern Web</span>
              </div>
            </div>

            <div class="col-lg-4">
              <h2 class="footer-title">Navigation</h2>
              <div class="row g-2 mt-2">
                <div class="col-6"><a class="footer-link" href="#home">Home</a></div>
                <div class="col-6"><a class="footer-link" href="#about">About</a></div>
                <div class="col-6"><a class="footer-link" href="#skills">Skills</a></div>
                <div class="col-6"><a class="footer-link" href="#experience">Experience</a></div>
                <div class="col-6"><a class="footer-link" href="#projects">Projects</a></div>
                <div class="col-6"><a class="footer-link" href="#contact">Contact</a></div>
              </div>
            </div>

            <div class="col-lg-3">
              <h2 class="footer-title">Connect</h2>
              <div class="d-flex gap-2 mt-3">
                <a class="footer-social" href="https://wa.me/+201116648302" target="_blank" rel="noopener">WA</a>
                <a class="footer-social" href="https://t.me/I_X_X_T" target="_blank" rel="noopener">TG</a>
                <a class="footer-social" href="https://instagram.com/i_x_x_t" target="_blank" rel="noopener">IG</a>
              </div>
              <a href="#contact" class="footer-cta mt-4">Start a Project</a>
            </div>
          </div>

          <div class="footer-bottom mt-5 pt-4 d-flex justify-content-between align-items-center">
            <p class="mb-0 text-secondary small">&copy; {{ currentYear }} Hamza Hesham. All rights reserved.</p>
            <a href="#home" class="footer-top-link">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const activeSection = ref('home');
const typingOutput = ref('');
const currentYear = new Date().getFullYear();

const phrases = [
  "مبرمج أول (Senior Programmer)",
  "مطور ويب متكامل (Full Stack Developer)",
  "مهندس نظم رقمية وبرمجيات متقدمة"
];
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typewriterTimer = null;

function runTypewriter() {
  const current = phrases[phraseIdx];
  typingOutput.value = current.substring(0, charIdx);

  if (!isDeleting && charIdx < current.length) {
    charIdx++;
    typewriterTimer = setTimeout(runTypewriter, 75);
    return;
  }
  if (!isDeleting && charIdx === current.length) {
    isDeleting = true;
    typewriterTimer = setTimeout(runTypewriter, 1300);
    return;
  }
  if (isDeleting && charIdx > 0) {
    charIdx--;
    typewriterTimer = setTimeout(runTypewriter, 35);
    return;
  }
  isDeleting = false;
  phraseIdx = (phraseIdx + 1) % phrases.length;
  typewriterTimer = setTimeout(runTypewriter, 300);
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  runTypewriter();

  // jQuery integration demonstration for particles & animations
  const $particles = $('#particles');
  if ($particles.length) {
    for (let i = 0; i < 30; i++) {
      $('<span class="particle"></span>')
        .css({
          left: (Math.random() * 100) + '%',
          '--duration': (8 + Math.random() * 9) + 's',
          '--delay': (Math.random() * -12) + 's',
          opacity: 0.3 + Math.random() * 0.5
        })
        .appendTo($particles);
    }
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  if (typewriterTimer) clearTimeout(typewriterTimer);
});
</script>

<style lang="scss">
// Import compiled SCSS partials
@import "../scss/main.scss";
</style>
