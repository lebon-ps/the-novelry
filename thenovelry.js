<!-- All Carousel Global Code -->  

<!-- Hero Quote Carousel -->   

const heroQuoteSwiper = new Swiper(".hero-quote-carousel", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  speed: 300,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },

  navigation: {
    nextEl: "#hero-quote-carousel_button-next",
    prevEl: "#hero-quote-carousel_button-prev"
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },

  scrollbar: {
    el: "#hero-quote-carousel_scrollbar",
    draggable: true
  }
});

// Autoplay only when in viewport
const heroSwiperEl = document.querySelector(".hero-quote-carousel");

if (heroSwiperEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroQuoteSwiper.autoplay.start();
        } else {
          heroQuoteSwiper.autoplay.stop();
        }
      });
    },
    {
      threshold: 0.3 // start autoplay when 30% of the slider is visible
    }
  );

  observer.observe(heroSwiperEl);

  // Optional: stop autoplay immediately if off-screen on load
  const rect = heroSwiperEl.getBoundingClientRect();
  const inView =
    rect.top < window.innerHeight * (1 - 0.3) && rect.bottom > window.innerHeight * 0.3;
  if (!inView) heroQuoteSwiper.autoplay.stop();
}

<!-- Editor Carousel (Team Preview) --> 
  
const teamprevSwiperWide = new Swiper(".team-prev_swiper-wide", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 24,
  threshold: 20,
  centeredSlides: false,
  speed: 300,

  // Autoplay config
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },

  // Avoid getting stuck at the end without duplicating slides
  rewind: true,

  // Keep mousewheel but avoid a “stuck” interacted state
  mousewheel: {
    forceToAxis: true,
    releaseOnEdges: true
  },

  // Responsive breakpoints
  breakpoints: {
    320:  { slidesPerView: 1 },
    580:  { slidesPerView: 2 },
    992:  { slidesPerView: 3 },
    1200: { slidesPerView: 4 }
  },

  // Navigation arrows
  navigation: {
    nextEl: "#team-prev_swiper-wide_button-next",
    prevEl: "#team-prev_swiper-wide_button-prev"
  },

  // Scrollbar
  scrollbar: {
    el: "#team-prev_swiper-wide_scrollbar",
    draggable: true
  }
});

// Autoplay only when in viewport
const teamSwiperEl = document.querySelector(".team-prev_swiper-wide");

if (teamSwiperEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          teamprevSwiperWide.autoplay.start();
        } else {
          teamprevSwiperWide.autoplay.stop();
        }
      });
    },
    {
      threshold: 0.3 // start when 30% visible
    }
  );

  observer.observe(teamSwiperEl);

  // Optional: ensure it's not running if initially off-screen
  // (useful if the page is long and the slider starts below the fold)
  if (!teamSwiperEl.getBoundingClientRect) {
    // older environments safety check
  } else {
    const r = teamSwiperEl.getBoundingClientRect();
    const inView =
      r.top < window.innerHeight * (1 - 0.3) && r.bottom > window.innerHeight * 0.3;
    if (!inView) teamprevSwiperWide.autoplay.stop();
  }
}

<!-- Testimonial Carousel --> 

const threeColTestimonialSwiper = new Swiper(".testimonial-slider_swiper", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 32,
  threshold: 20,
  centeredSlides: false,
  speed: 300,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },

  rewind: true,

  mousewheel: {
    forceToAxis: true,
    releaseOnEdges: true
  },

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    1200: {
      slidesPerView: 3
    }
  },

  navigation: {
    nextEl: "#three-col_testimonial-swiper_button-next",
    prevEl: "#three-col_testimonial-swiper_button-prev"
  },

  scrollbar: {
    el: "#three-col_testimonial-swiper_scrollbar",
    draggable: true
  }
});

// Autoplay only when in viewport
const swiperEl = document.querySelector(".testimonial-slider_swiper");

if (swiperEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          threeColTestimonialSwiper.autoplay.start();
        } else {
          threeColTestimonialSwiper.autoplay.stop();
        }
      });
    },
    {
      threshold: 0.3 // start autoplay when 30% of the slider is visible
    }
  );

  observer.observe(swiperEl);
}
