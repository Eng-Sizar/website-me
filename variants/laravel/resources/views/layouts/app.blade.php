<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="معرض أعمال حمزة هشام - مبرمج أول ومطور تطبيقات ويب متكامل (Full Stack)">
    <title>حمزة هشام | مبرمج أول ومطور ويب (Full Stack)</title>

    <!-- Google Fonts Arabic (Cairo) & English (Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">

    <!-- Bootstrap 5.3 RTL + SCSS via Laravel Vite -->
    @vite(['resources/scss/main.scss', 'resources/js/app.js'])
</head>
<body class="bg-ink text-light antialiased">
    <!-- Loader -->
    <div id="loader">
        <div class="loader-ring"></div>
        <p class="mt-3 text-cyan-200 fw-bold">جاري التحميل...</p>
    </div>

    <!-- Ambient Background -->
    <div class="ambient-bg">
        <div class="ambient-gradient"></div>
        <div class="mesh-line"></div>
        <div class="float-shape shape-1"></div>
        <div class="float-shape shape-2"></div>
        <div class="float-shape shape-3"></div>
        <div id="particles"></div>
    </div>

    <!-- Navbar -->
    <header id="navbar" class="custom-navbar">
        <nav class="container-xl d-flex align-items-center justify-content-between">
            <a href="#home" class="d-flex align-items-center gap-3 text-decoration-none">
                <span class="brand-logo-badge">HH</span>
                <span class="d-none d-sm-block text-white fw-bold">حمزة هشام</span>
            </a>

            <div class="d-none d-lg-flex align-items-center gap-2 nav-pill-box">
                <a class="nav-link-custom active" href="#home">الرئيسية</a>
                <a class="nav-link-custom" href="#about">نبذة عني</a>
                <a class="nav-link-custom" href="#skills">المهارات</a>
                <a class="nav-link-custom" href="#experience">الخبرة</a>
                <a class="nav-link-custom" href="#projects">المشاريع</a>
                <a class="nav-link-custom" href="#contact">تواصل معي</a>
            </div>

            <a href="#contact" class="btn-glow-primary d-none d-lg-inline-flex">لنبدأ البناء</a>

            <button id="menuToggle" class="btn d-lg-none brand-logo-badge" type="button" aria-expanded="false">
                <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
        </nav>

        <div id="mobileMenu" class="container-xl d-lg-none" style="display: none;">
            <div class="mobile-collapse-menu">
                <a class="mobile-nav-link" href="#home">الرئيسية</a>
                <a class="mobile-nav-link" href="#about">نبذة عني</a>
                <a class="mobile-nav-link" href="#skills">المهارات</a>
                <a class="mobile-nav-link" href="#experience">الخبرة</a>
                <a class="mobile-nav-link" href="#projects">المشاريع</a>
                <a class="mobile-nav-link" href="#contact">تواصل معي</a>
            </div>
        </div>
    </header>

    <main>
        @yield('content')
    </main>

    <!-- FOOTER PARTIAL (KEPT IN ORIGINAL ENGLISH TEXT) -->
    @include('partials.footer')

    <!-- jQuery & Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
