import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/main.scss';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typingText, setTypingText] = useState('');
  const particlesRef = useRef(null);

  useEffect(() => {
    // 1. Scroll listener for sticky header
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);

    // 2. Typewriter Effect in Arabic
    const phrases = [
      "مبرمج أول (Senior Programmer)",
      "مطور ويب متكامل (Full Stack Developer)",
      "مهندس برمجيات ونظم رقمية متقدمة"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timerId;

    const tick = () => {
      const current = phrases[phraseIndex];
      setTypingText(current.substring(0, charIndex));

      if (!isDeleting && charIndex < current.length) {
        charIndex++;
        timerId = setTimeout(tick, 75);
      } else if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        timerId = setTimeout(tick, 1300);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        timerId = setTimeout(tick, 35);
      } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timerId = setTimeout(tick, 300);
      }
    };
    tick();

    // 3. jQuery Animation for Background Particles
    if (particlesRef.current) {
      const $container = $(particlesRef.current);
      $container.empty();
      for (let i = 0; i < 35; i++) {
        $('<span class="particle"></span>')
          .css({
            left: `${Math.random() * 100}%`,
            '--duration': `${8 + Math.random() * 9}s`,
            '--delay': `${Math.random() * -12}s`,
            opacity: 0.3 + Math.random() * 0.5
          })
          .appendTo($container);
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="portfolio-react-app" dir="rtl">
      {/* Animated Ambient Background */}
      <div className="ambient-bg">
        <div className="ambient-gradient"></div>
        <div className="mesh-line"></div>
        <div className="float-shape shape-1"></div>
        <div className="float-shape shape-2"></div>
        <div className="float-shape shape-3"></div>
        <div id="particles" ref={particlesRef}></div>
      </div>

      {/* Sticky Navigation */}
      <header id="navbar" className={`custom-navbar ${isScrolled ? 'nav-scrolled' : ''}`}>
        <nav className="container-xl d-flex align-items-center justify-content-between" aria-label="التنقل الرئيسي">
          <a href="#home" className="d-flex align-items-center gap-3 text-decoration-none">
            <span className="brand-logo-badge">HH</span>
            <span className="d-none d-sm-block text-light fw-bold text-uppercase fs-6 tracking-wide">حمزة هشام</span>
          </a>

          <div className="d-none d-lg-flex align-items-center gap-2 nav-pill-box">
            <a className={`nav-link-custom ${activeSection === 'home' ? 'active' : ''}`} href="#home">الرئيسية</a>
            <a className={`nav-link-custom ${activeSection === 'about' ? 'active' : ''}`} href="#about">نبذة عني</a>
            <a className={`nav-link-custom ${activeSection === 'skills' ? 'active' : ''}`} href="#skills">المهارات</a>
            <a className={`nav-link-custom ${activeSection === 'experience' ? 'active' : ''}`} href="#experience">الخبرة</a>
            <a className={`nav-link-custom ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">المشاريع</a>
            <a className={`nav-link-custom ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">تواصل معي</a>
          </div>

          <a href="#contact" className="btn-glow-primary d-none d-lg-inline-flex">
            لنبدأ البناء
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn d-lg-none brand-logo-badge"
            type="button"
            aria-label="تبديل القائمة"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="container-xl d-lg-none">
            <div className="mobile-collapse-menu">
              <a onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link" href="#home">الرئيسية</a>
              <a onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link" href="#about">نبذة عني</a>
              <a onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link" href="#skills">المهارات</a>
              <a onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link" href="#experience">الخبرة</a>
              <a onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link" href="#projects">المشاريع</a>
              <a onClick={() => setMobileMenuOpen(false)} className="mobile-nav-link" href="#contact">تواصل معي</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <section id="home" className="section-shell">
          <div className="container-xl">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div className="hero-status-pill">
                  <span className="status-dot"></span>
                  متاح للمشاريع البرمجية والحلول الابتكارية
                </div>

                <p className="section-kicker">مبرمج أول ومطور تطبيقات ويب متكامل (Full Stack)</p>
                <h1 className="hero-title">
                  حمزة هشام
                  <span className="gradient-highlight">يبني أنظمة رقمية متكاملة باحترافية عالية.</span>
                </h1>

                <div className="typing-container">
                  <span>أنا </span>
                  <span className="typing-highlight">{typingText}</span>
                  <span className="typing-cursor"></span>
                </div>

                <p className="hero-description">
                  بخبرة 3 سنوات متواصلة، أصمم وأطور منصات وتطبيقات ويب سريعة، مستقرة، ومصممة بأعلى معايير الدقة الهندسية والجمالية.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-5">
                  <a href="#projects" className="btn-glow-primary">استعراض المشاريع</a>
                  <a href="#contact" className="btn-glow-secondary">تواصل معي</a>
                </div>

                <dl className="row g-3 max-w-lg mb-0">
                  <div className="col-4">
                    <div className="stat-card">
                      <dt>سنوات الخبرة</dt>
                      <dd>+3</dd>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-card">
                      <dt>المكدس التقني</dt>
                      <dd>شامل</dd>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-card">
                      <dt>التخصص</dt>
                      <dd>Web</dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="col-lg-5">
                <div className="profile-wrapper">
                  <div className="glow-backdrop"></div>
                  <figure className="profile-figure">
                    <img src="/assets/profile.png" alt="حمزة هشام" />
                    <figcaption className="profile-caption">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <p className="fw-bold text-white mb-1 fs-6">بنية برمجية نظيفة. واجهات فائقة الدقة.</p>
                          <p className="text-secondary small mb-0">تطوير واجهات، خوادم، وأداء عالي.</p>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER: KEPT IN ORIGINAL ENGLISH TEXT */}
      <footer className="premium-footer px-3 pb-4 pt-5">
        <div className="container-xl">
          <div className="footer-panel">
            <div className="row g-5">
              <div className="col-lg-5">
                <a href="#home" className="d-inline-flex align-items-center gap-3 text-decoration-none">
                  <span className="brand-logo-badge">HH</span>
                  <div>
                    <strong className="d-block text-white fs-5">Hamza Hesham</strong>
                    <span className="text-secondary small">Senior Programmer &amp; Full Stack Web Developer</span>
                  </div>
                </a>
                <p className="mt-4 text-secondary small lh-lg">
                  Building polished web experiences with clean interfaces, reliable backend logic, and performance-minded engineering.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-4">
                  <span className="footer-chip">3 Years Experience</span>
                  <span className="footer-chip">Full Stack</span>
                  <span className="footer-chip">Modern Web</span>
                </div>
              </div>

              <div className="col-lg-4">
                <h2 className="footer-title">Navigation</h2>
                <div className="row g-2 mt-2">
                  <div className="col-6"><a className="footer-link" href="#home">Home</a></div>
                  <div className="col-6"><a className="footer-link" href="#about">About</a></div>
                  <div className="col-6"><a className="footer-link" href="#skills">Skills</a></div>
                  <div className="col-6"><a className="footer-link" href="#experience">Experience</a></div>
                  <div className="col-6"><a className="footer-link" href="#projects">Projects</a></div>
                  <div className="col-6"><a className="footer-link" href="#contact">Contact</a></div>
                </div>
              </div>

              <div className="col-lg-3">
                <h2 className="footer-title">Connect</h2>
                <div className="d-flex gap-2 mt-3">
                  <a className="footer-social" href="https://wa.me/+201116648302" target="_blank" rel="noopener">WA</a>
                  <a className="footer-social" href="https://t.me/I_X_X_T" target="_blank" rel="noopener">TG</a>
                  <a className="footer-social" href="https://instagram.com/i_x_x_t" target="_blank" rel="noopener">IG</a>
                </div>
                <a href="#contact" className="footer-cta mt-4">Start a Project</a>
              </div>
            </div>

            <div className="footer-bottom mt-5 pt-4 d-flex justify-content-between align-items-center">
              <p className="mb-0 text-secondary small">&copy; {new Date().getFullYear()} Hamza Hesham. All rights reserved.</p>
              <a href="#home" className="footer-top-link">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
