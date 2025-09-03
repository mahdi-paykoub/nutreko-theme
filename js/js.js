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