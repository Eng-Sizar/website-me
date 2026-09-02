{{-- 
  FOOTER COMPONENT:
  Per project requirements, the Footer MUST remain in its original English language and structure.
--}}
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
            <a class="footer-social" href="https://wa.me/+201116648302" target="_blank" rel="noopener">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 3A8.87 8.87 0 0 0 4.4 16.37L3.2 21l4.74-1.12A8.87 8.87 0 1 0 12.04 3Zm4.96 12.52c-.21.6-1.2 1.12-1.68 1.2-.45.07-1.02.1-1.64-.1-.38-.12-.87-.28-1.5-.55-2.63-1.14-4.35-3.8-4.48-3.98-.13-.17-1.07-1.42-1.07-2.72 0-1.3.68-1.93.92-2.2.24-.26.53-.33.7-.33h.5c.16 0 .38-.06.6.46.21.52.73 1.78.8 1.91.06.13.1.29.02.46-.08.17-.13.28-.26.43-.13.15-.27.34-.39.46-.13.13-.26.27-.11.53.15.26.66 1.09 1.42 1.76.98.87 1.8 1.14 2.06 1.27.26.13.42.11.57-.06.15-.17.66-.77.84-1.03.17-.26.35-.22.59-.13.24.09 1.52.72 1.78.85.26.13.44.2.5.31.07.12.07.67-.14 1.27Z"/></svg>
            </a>
            <a class="footer-social" href="https://t.me/I_X_X_T" target="_blank" rel="noopener">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.7 4.3 18.5 19.6c-.24 1.08-.88 1.35-1.78.84l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.98.48l.35-5 9.1-8.23c.4-.35-.09-.55-.61-.2L6.04 13.28 1.2 11.76c-1.05-.33-1.07-1.05.22-1.55L20.35 2.9c.88-.33 1.65.2 1.36 1.4Z"/></svg>
            </a>
            <a class="footer-social" href="https://instagram.com/i_x_x_t" target="_blank" rel="noopener">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.6 2.8h8.8a4.8 4.8 0 0 1 4.8 4.8v8.8a4.8 4.8 0 0 1-4.8 4.8H7.6a4.8 4.8 0 0 1-4.8-4.8V7.6a4.8 4.8 0 0 1 4.8-4.8Zm4.4 4.45A4.75 4.75 0 1 0 12 16.75a4.75 4.75 0 0 0 0-9.5Zm0 1.8A2.95 2.95 0 1 1 12 14.95a2.95 2.95 0 0 1 0-5.9Zm5.03-2.05a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z"/></svg>
            </a>
          </div>
          <a href="#contact" class="footer-cta mt-4">Start a Project</a>
        </div>
      </div>

      <div class="footer-bottom mt-5 pt-4 d-flex justify-content-between align-items-center">
        <p class="mb-0 text-secondary small">&copy; {{ date('Y') }} Hamza Hesham. All rights reserved.</p>
        <a href="#home" class="footer-top-link">Back to top</a>
      </div>
    </div>
  </div>
</footer>
