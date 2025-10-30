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
  },

  // Responsive breakpoints (always 1 slide)
  breakpoints: {
    320:  { slidesPerView: 1 },
    580:  { slidesPerView: 1 },
    768:  { slidesPerView: 1 },
    992:  { slidesPerView: 1 },
    1200: { slidesPerView: 1 }
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
    { threshold: 0.3 }
  );

  observer.observe(heroSwiperEl);

  // Stop autoplay immediately if off-screen on load
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
let teamSwiperEl = document.querySelector(".team-prev_swiper-wide");

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

<!-- Success Stories Carousel --> 

const successSwiper = new Swiper(".success-stories_swiper", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  centeredSlides: false,
  speed: 300,

  // Autoplay settings
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },

  // Prevents autoplay from stopping at the end
  rewind: true,

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: "#success-stories_button-next",
    prevEl: "#success-stories_button-prev"
  },

  // Scrollbar
  scrollbar: {
    el: "#success-stories_scrollbar",
    draggable: true
  }
});

// Autoplay only when in viewport
const successSwiperEl = document.querySelector(".success-stories_swiper");

if (successSwiperEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          successSwiper.autoplay.start();
        } else {
          successSwiper.autoplay.stop();
        }
      });
    },
    {
      threshold: 0.3 // start when 30% visible
    }
  );

  observer.observe(successSwiperEl);

  // Stop autoplay on load if it's initially off-screen
  const rect = successSwiperEl.getBoundingClientRect();
  const inView =
    rect.top < window.innerHeight * (1 - 0.3) && rect.bottom > window.innerHeight * 0.3;
  if (!inView) successSwiper.autoplay.stop();
}

<!-- Agency Signings Carousel --> 

const submissionsSwiper = new Swiper(".submissions_swiper", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  centeredSlides: false,
  speed: 300,

  // Autoplay configuration
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },

  // Allow continuous autoplay without loop duplication
  rewind: true,

  // Keep mousewheel active without stalling autoplay
  mousewheel: {
    forceToAxis: true,
    releaseOnEdges: true
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: "#submissions_button-next",
    prevEl: "#submissions_button-prev"
  },

  // Scrollbar
  scrollbar: {
    el: "#submissions_scrollbar",
    draggable: true
  }
});

// Autoplay only when in viewport
const submissionsSwiperEl = document.querySelector(".submissions_swiper");

if (submissionsSwiperEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          submissionsSwiper.autoplay.start();
        } else {
          submissionsSwiper.autoplay.stop();
        }
      });
    },
    {
      threshold: 0.3 // start autoplay when 30% visible
    }
  );

  observer.observe(submissionsSwiperEl);

  // Stop autoplay on load if it's initially off-screen
  const rect = submissionsSwiperEl.getBoundingClientRect();
  const inView =
    rect.top < window.innerHeight * (1 - 0.3) && rect.bottom > window.innerHeight * 0.3;
  if (!inView) submissionsSwiper.autoplay.stop();
}

<!-- Editor Carousel 2 (Team Preview) --> 

// Move the editor controls into the slider container
$("#editor-slider").append($("#editor-controls"));

const editorSwiper = new Swiper(".editor-slider_swiper", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 32,
  threshold: 20,
  centeredSlides: false,
  speed: 300,

  // Autoplay configuration
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },

  // Allow continuous autoplay without loop duplication
  rewind: true,

  // Mousewheel settings that won’t block autoplay
  mousewheel: {
    forceToAxis: true,
    releaseOnEdges: true
  },

  // Responsive breakpoints
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

  // Navigation arrows
  navigation: {
    nextEl: "#editor-slider_button-next",
    prevEl: "#editor-slider_button-prev"
  },

  // Scrollbar
  scrollbar: {
    el: "#editor-slider_scrollbar",
    draggable: true
  }
});

// Autoplay only when in viewport
const editorSwiperEl = document.querySelector(".editor-slider_swiper");

if (editorSwiperEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          editorSwiper.autoplay.start();
        } else {
          editorSwiper.autoplay.stop();
        }
      });
    },
    {
      threshold: 0.3 // start autoplay when 30% visible
    }
  );

  observer.observe(editorSwiperEl);

  // Stop autoplay on load if it's initially off-screen
  const rect = editorSwiperEl.getBoundingClientRect();
  const inView =
    rect.top < window.innerHeight * (1 - 0.3) && rect.bottom > window.innerHeight * 0.3;
  if (!inView) editorSwiper.autoplay.stop();
}

<!-- Upcoming Events --> 

const eventsSwiper = new Swiper(".events_swiper", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 16,
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
    320:  { slidesPerView: 1, spaceBetween: 16 },
    480:  { slidesPerView: 2, spaceBetween: 16 },
    992:  { slidesPerView: 2, spaceBetween: 24 },
    1200: { slidesPerView: 2, spaceBetween: 32 }
  },

  navigation: {
    nextEl: "#events_button-next",
    prevEl: "#events_button-prev"
  },

  scrollbar: {
    el: "#events_scrollbar",
    draggable: true
  }
});

<!-- Past Events --> 

const pasteventsSwiper = new Swiper(".past-events_swiper", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 16,
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
    320:  { slidesPerView: 1, spaceBetween: 16 },
    480:  { slidesPerView: 2, spaceBetween: 16 },
    992:  { slidesPerView: 2, spaceBetween: 24 },
    1200: { slidesPerView: 2, spaceBetween: 32 }
  },

  navigation: {
    nextEl: "#past-events_button-next",
    prevEl: "#past-events_button-prev"
  },

  scrollbar: {
    el: "#past-events_scrollbar",
    draggable: true
  }
});

// AUTOPLAY ON SECTION INTERSECTION
function enableAutoplayOnView(swiperInstance, selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          swiperInstance.autoplay.start();
        } else {
          swiperInstance.autoplay.stop();
        }
      });
    },
    { threshold: 0.3 } // starts autoplay when 30% visible
  );

  observer.observe(el);

  // Stop autoplay initially if off-screen
  const rect = el.getBoundingClientRect();
  const inView =
    rect.top < window.innerHeight * (1 - 0.3) && rect.bottom > window.innerHeight * 0.3;
  if (!inView) swiperInstance.autoplay.stop();
}

// Apply to both
enableAutoplayOnView(eventsSwiper, ".events_swiper");
enableAutoplayOnView(pasteventsSwiper, ".past-events_swiper");

<!-- Novels Carousel --> 

const novelsSwiper = new Swiper(".swiper-novels", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 24,
  threshold: 20,
  centeredSlides: false,
  speed: 300,

  // Autoplay configuration
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },

  // Allow continuous autoplay without duplicating slides
  rewind: true,

  // Mousewheel configuration
  mousewheel: {
    forceToAxis: true,
    releaseOnEdges: true
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    580: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 3
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: "#novels_button-next",
    prevEl: "#novels_button-prev"
  },

  // Scrollbar
  scrollbar: {
    el: "#novels_scrollbar",
    draggable: true
  }
});

// Autoplay only when in viewport
const novelsSwiperEl = document.querySelector(".swiper-novels");

if (novelsSwiperEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          novelsSwiper.autoplay.start();
        } else {
          novelsSwiper.autoplay.stop();
        }
      });
    },
    {
      threshold: 0.3 // start autoplay when 30% visible
    }
  );

  observer.observe(novelsSwiperEl);

  // Stop autoplay on load if it's initially off-screen
  const rect = novelsSwiperEl.getBoundingClientRect();
  const inView =
    rect.top < window.innerHeight * (1 - 0.3) && rect.bottom > window.innerHeight * 0.3;
  if (!inView) novelsSwiper.autoplay.stop();
}

<!-- Student Reviews -->

const reviewsSwiper = new Swiper(".reviews_swiper", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 16,
  threshold: 20,
  centeredSlides: false,
  speed: 300,

  // Autoplay configuration
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },

  // Enable seamless autoplay without duplicating slides
  rewind: true,

  // Mousewheel configuration
  mousewheel: {
    forceToAxis: true,
    releaseOnEdges: true
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: "#reviews_button-next",
    prevEl: "#reviews_button-prev"
  },

  // Scrollbar
  scrollbar: {
    el: "#reviews_scrollbar",
    draggable: true
  }
});

// Autoplay only when in viewport
const reviewsSwiperEl = document.querySelector(".reviews_swiper");

if (reviewsSwiperEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reviewsSwiper.autoplay.start();
        } else {
          reviewsSwiper.autoplay.stop();
        }
      });
    },
    {
      threshold: 0.3 // start autoplay when 30% visible
    }
  );

  observer.observe(reviewsSwiperEl);

  // Stop autoplay on load if it's initially off-screen
  const rect = reviewsSwiperEl.getBoundingClientRect();
  const inView =
    rect.top < window.innerHeight * (1 - 0.3) && rect.bottom > window.innerHeight * 0.3;
  if (!inView) reviewsSwiper.autoplay.stop();
}
	

  <!-- Team Swiper 2 -->

  const teamSwiperWide = new Swiper(".team_swiper-wide", {
  direction: "horizontal",
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 24,
  threshold: 20,
  centeredSlides: false,
  speed: 300,

  // Autoplay configuration
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },

  // Enable seamless autoplay without duplicating slides
  rewind: true,

  // Mousewheel settings
  mousewheel: {
    forceToAxis: true,
    releaseOnEdges: true
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    580: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: "#team_swiper-wide_button-next",
    prevEl: "#team_swiper-wide_button-prev"
  },

  // Scrollbar
  scrollbar: {
    el: "#team_swiper-wide_scrollbar",
    draggable: true
  }
});

// Autoplay only when in viewport
let teamSwiperWideEl = document.querySelector(".team_swiper-wide");

if (teamSwiperWideEl) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          teamSwiperWide.autoplay.start();
        } else {
          teamSwiperWide.autoplay.stop();
        }
      });
    },
    {
      threshold: 0.3 // start autoplay when 30% visible
    }
  );

  observer.observe(teamSwiperWideEl);

  // Stop autoplay initially if off-screen
  const rect = teamSwiperWideEl.getBoundingClientRect();
  const inView =
    rect.top < window.innerHeight * (1 - 0.3) && rect.bottom > window.innerHeight * 0.3;
  if (!inView) teamSwiperWide.autoplay.stop();
}
