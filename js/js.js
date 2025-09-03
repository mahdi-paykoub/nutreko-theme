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

  var swiper = new Swiper(".mySwiper_2", {
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