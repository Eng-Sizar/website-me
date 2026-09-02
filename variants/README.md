# دليل نُسخ أطر العمل البرمجية (Framework Variants Integration Guide)
## Hamza Hesham Portfolio - Bootstrap 5.3 RTL + jQuery + SCSS

يحتوي هذا المجلد على نسخ جاهزة ومتوافقة مع أشهر أطر العمل الحديثة، مُهيأة بالكامل لدعم:
- **Bootstrap 5.3 RTL** (أحدث مكونات وإمكانيات Utilities API واتجاه اليمين لليسار)
- **jQuery** (للتعامل المباشر مع التفاعلات وعناصر DOM والمؤثرات البصرية)
- **SCSS Architecture** (تقسيم نظيف يشمل variables, mixins, base, layout, components, footer)
- **محتوى الواجهة باللغة العربية بالكامل**
- **الفوتر بالإنجليزية الأصلية بدون أي تعديل** حسب المتطلبات بدقة.

---

### 1. نسخة Vue.js (Vue 3 + Vite)
- **الموقع:** `variants/vue/`
- **طريقة الدمج:**
  - تم استيراد `bootstrap/dist/js/bootstrap.bundle.min.js` و `jquery` داخل ملف المكون `Portfolio.vue`.
  - معالجة المؤثرات الحركية عبر `onMounted` و `onBeforeUnmount`.
  - يتم تفعيل SCSS عبر `@vitejs/plugin-vue` وحزمة `sass`.
- **أمر التشغيل:**
  ```bash
  cd variants/vue
  npm install
  npm run dev
  ```

---

### 2. نسخة React (React 18 + Vite)
- **الموقع:** `variants/react/`
- **طريقة الدمج:**
  - استيراد `bootstrap.rtl.min.css` و `bootstrap.bundle.min.js` ومكتبة `jquery`.
  - إدارة تأثير الكتابة الآلية وحركة الجزيئات عبر خطافات `useEffect` و `useRef`.
  - ربط ملفات SCSS مباشرة عبر Vite مع دعم hot reloading.
- **أمر التشغيل:**
  ```bash
  cd variants/react
  npm install
  npm run dev
  ```

---

### 3. نسخة Laravel (Blade Templates + Laravel Vite)
- **الموقع:** `variants/laravel/`
- **الملفات:**
  - `resources/views/layouts/app.blade.php`: القالب الأساسي يحتوي على توجيه `@vite(['resources/scss/main.scss', 'resources/js/app.js'])`.
  - `resources/views/portfolio.blade.php`: الصفحة الرئيسية للموقع باللغة العربية وسمات RTL.
  - `resources/views/partials/footer.blade.php`: الفوتر الأصلي باللغة الإنجليزية كما هو مطلوب.
- **طريقة الدمج:**
  - إضافة مدخلات SCSS في `vite.config.js`:
    ```javascript
    laravel({
        input: ['resources/scss/main.scss', 'resources/js/app.js'],
        refresh: true,
    }),
    ```

---

### 4. نسخة Django (Django Templates)
- **الموقع:** `variants/django/`
- **الملفات:**
  - `templates/base.html`: القالب الأساسي مع `{% load static %}` و `dir="rtl"`.
  - `templates/portfolio.html`: صفحة المعرض مع وراثة القالب عبر `{% extends 'base.html' %}`.
  - `templates/includes/footer.html`: الفوتر الأصلي باللغة الإنجليزية.
- **طريقة الدمج:**
  - وضع ملفات الـ SCSS المجمعة داخل مجلد `static/css/main.css`.
  - ربط jQuery و Bootstrap 5.3 RTL عبر CDN أو `static/`.

---

### 5. نسخة .NET (Razor / ASP.NET MVC 5)
- **الموقع:** `variants/dotnet-mvc/`
- **الملفات:**
  - `Views/Shared/_Layout.cshtml`: القالب الحاوي مع `@Styles.Render` و `@Scripts.Render`.
  - `Views/Home/Index.cshtml`: صفحة العرض الأساسية.
  - `App_Start/BundleConfig.cs`: إعدادات الحزم (Bundling & Minification) الخاصة بـ MSBuild/System.Web.Optimization لكل من Bootstrap RTL و jQuery و SCSS المجمعة.

---

### 6. نسخة ASP.NET Core (.NET 8 / 9 Razor Pages & MVC)
- **الموقع:** `variants/aspnet-core/`
- **الملفات:**
  - `Pages/Shared/_Layout.cshtml`: القالب المعتمد على Tag Helpers الحديثة مثل `asp-append-version="true"`.
  - `libman.json`: ملف Library Manager لتنزيل حزم Bootstrap 5.3 RTL و jQuery تلقائياً إلى مجلد `wwwroot/lib/`.
  - `bundleconfig.json`: إعدادات الـ Bundler & Minifier لضغط ملفات SCSS و JS إلى `wwwroot/css/main.min.css`.
