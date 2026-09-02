@extends('layouts.app')

@section('content')
<!-- Hero Section -->
<section id="home" class="section-shell">
  <div class="container-xl">
    <div class="row align-items-center g-5">
      <div class="col-lg-7 reveal">
        <div class="hero-status-pill">
          <span class="status-dot"></span>
          متاح للمشاريع البرمجية المتميزة
        </div>

        <p class="section-kicker">مبرمج أول ومطور تطبيقات ويب متكامل (Full Stack)</p>
        <h1 class="hero-title">
          حمزة هشام
          <span class="gradient-highlight">يبني أنظمة رقمية وتطبيقات فائقة الإتقان.</span>
        </h1>

        <div class="typing-container">
          <span>أنا </span>
          <span id="typingText" class="typing-highlight"></span>
          <span class="typing-cursor"></span>
        </div>

        <p class="hero-description">
          بخبرة 3 سنوات من العمل الفعلي المتواصل، أبتكر تطبيقات ويب سريعة، مرنة، ومصممة بأعلى درجات العناية البصرية تشمل الواجهات الأمامية وهندسة الخوادم وقواعد البيانات.
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
            <img src="{{ asset('assets/profile.png') }}" alt="حمزة هشام" />
            <figcaption class="profile-caption">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p class="fw-bold text-white mb-1 fs-6">بنية برمجية نظيفة. واجهات فائقة الدقة.</p>
                  <p class="text-secondary small mb-0">تطوير شامل وموثوق لكامل طبقات النظام.</p>
                </div>
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
                <p>بناء واجهات برمجة التطبيقات (APIs)، خدمات Node.js وExpress، وحلول إدارة البيانات الآمنة.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
@endsection
