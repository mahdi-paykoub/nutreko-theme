var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.4,   // تعداد اسلایدهای قابل مشاهده
  spaceBetween: 15,      // فاصله بین اسلایدها
  loop: true,            // فعال کردن loop بینهایت
  navigation: {          // دکمه‌های بعدی و قبلی
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    576: { slidesPerView: 1.3 },
    768: { slidesPerView: 2.4 },
  },


  pagination: {          // pagination
    el: ".swiper-pagination",
    clickable: true,
  },
});

var mySwiper_2 = new Swiper(".mySwiper_2", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1.4 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
});

const brand_s = new Swiper('.brand_s', {
  slidesPerView: 5,      // تعداد تصاویر در یک ردیف
  spaceBetween: 10,      // فاصله بین تصاویر
  loop: true,            // حرکت بی‌نهایت
  speed: 5000,           // سرعت حرکت (میلی‌ثانیه)
  autoplay: {
    delay: 0,            // بدون توقف
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 },
  },
});

var blog_s = new Swiper(".blog_s", {
  slidesPerView: 3,   // تعداد اسلایدهای قابل مشاهده
  spaceBetween: 20,      // فاصله بین اسلایدها
  loop: true,            // فعال کردن loop بینهایت
  navigation: {          // دکمه‌های بعدی و قبلی
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {          // pagination
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1.3 },
    768: { slidesPerView: 1.9 },
    992: { slidesPerView: 3 },
  },
});

const gallery_s = new Swiper('.gallery_s', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 5 },
  },
});

const topbartext = new Swiper(".topbartext", {
  slidesPerView: 2,    // تعداد اسلاید قابل نمایش
  spaceBetween: 5,       // فاصله بین اسلایدها
  loop: true,            // بی‌نهایت
  allowTouchMove: false, // کاربر نتونه با دست متوقف کنه
  speed: 5000,           // سرعت حرکت کل اسلایدها
  autoplay: {
    delay: 0,            // بدون مکث
    disableOnInteraction: false,
  },
});

const slider_swiper = new Swiper(".slider_swiper", {
  slidesPerView: 1,       // فقط یک اسلاید
  effect: "fade",          // افکت محو شدن
  loop: true,
  speed: 1000, // سرعت تعویض اسلاید بر حسب میلی‌ثانیه (1s)
  // لوپ بی‌نهایت
  autoplay: {
    delay: 5000,           // ۳ ثانیه بین اسلایدها
    disableOnInteraction: false,
  },
  fadeEffect: {
    crossFade: true,       // محو شدن کامل بین اسلایدها
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,       // کاربر می‌تواند روی نقطه کلیک کند
  },
});