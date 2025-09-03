var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.4,   // تعداد اسلایدهای قابل مشاهده
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
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
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
});

const gallery_s = new Swiper('.gallery_s', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
});