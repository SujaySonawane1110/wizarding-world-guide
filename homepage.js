/* ============================================================
   WIZPEDIA HOMEPAGE — Scroll-Driven Animations Engine
   GSAP + ScrollTrigger powered scrollytelling
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // ─── AMBIENT PARTICLES (CSS-only, lightweight) ───
  createAmbientParticles();

  // ─── HERO ENTRANCE ANIMATIONS ───
  initHeroAnimations();

  // ─── DISCOVER SECTION — Horizontal Scroll ───
  initDiscoverScroll();

  // ─── CATEGORIES — Staggered Card Reveal ───
  initCategoryCards();

  // ─── WHY SECTION — Pinned Slide Show ───
  initWhySlides();

  // ─── ABOUT SECTION — Reveal ───
  initAboutReveal();

  // ─── OWL FLIGHT TRANSITIONS ───
  initOwlFlights();

  // ─── LOOP-BACK SCROLL ───
  initLoopBack();

  // ─── GENERIC SCROLL REVEALS ───
  initScrollReveals();
});

/* ============================================================
   AMBIENT PARTICLES — Lightweight CSS-driven floating dots
   ============================================================ */
function createAmbientParticles() {
  const container = document.getElementById('heroAmbient');
  if (!container) return;

  const count = 25;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('ambient-particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = 60 + Math.random() * 40 + '%';
    particle.style.width = (1.5 + Math.random() * 3) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (8 + Math.random() * 15) + 's';
    particle.style.animationDelay = (Math.random() * 12) + 's';
    particle.style.opacity = 0.2 + Math.random() * 0.5;
    container.appendChild(particle);
  }
}

/* ============================================================
   HERO ENTRANCE
   ============================================================ */
function initHeroAnimations() {
  const tl = gsap.timeline({ delay: 0.3 });

  tl.to('.hero-content h1', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
  .to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.6')
  .to('.cta-btn', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5')
  .to('#scrollIndicator', {
    opacity: 0.7,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.3');

  // Hero parallax on scroll
  gsap.to('.hero-bg img', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Fade out hero content on scroll
  gsap.to('.hero-content', {
    opacity: 0,
    y: -60,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: '60% top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Hide scroll indicator
  gsap.to('#scrollIndicator', {
    opacity: 0,
    scrollTrigger: {
      trigger: '#hero',
      start: '15% top',
      end: '25% top',
      scrub: true
    }
  });

  // CTA smooth scroll
  const ctaBtn = document.getElementById('ctaBtn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: { y: '#discover', offsetY: 0 },
        duration: 1.5,
        ease: 'power2.inOut'
      });
    });
  }
}

/* ============================================================
   DISCOVER — Horizontal Scroll (Pinned)
   ============================================================ */
function initDiscoverScroll() {
  const track = document.getElementById('discoverTrack');
  const section = document.querySelector('.discover-section');
  if (!track || !section) return;

  // Animate heading
  gsap.to('.discover-section h2', {
    opacity: 1,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.discover-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Calculate how much we need to scroll horizontally
  // We want to show all cards including the last ones
  const getScrollAmount = () => {
    const trackWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    return -(trackWidth - viewportWidth + 80); // 80px padding buffer
  };

  const discoverTween = gsap.to(track, {
    x: getScrollAmount,
    ease: 'none',
    scrollTrigger: {
      trigger: '.discover-section',
      start: 'top top',
      end: () => '+=' + (Math.abs(getScrollAmount()) + 400),
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1
    }
  });

  // Refresh on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
}

/* ============================================================
   CATEGORIES — Staggered Card Entrance
   ============================================================ */
function initCategoryCards() {
  const cards = document.querySelectorAll('.category-card');

  cards.forEach((card, i) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: i * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });
}

/* ============================================================
   WHY SECTION — Pinned Slide Show
   ============================================================ */
function initWhySlides() {
  const slides = document.querySelectorAll('.why-slide');
  const dots = document.querySelectorAll('.why-dot');
  const section = document.querySelector('.why-section');
  if (!slides.length || !section) return;

  // Animate heading
  gsap.to('.why-section h2', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.why-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });

  // Set first slide as active
  gsap.set(slides[0], { opacity: 1, x: 0 });

  // Create the main timeline
  const whyTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.why-section',
      start: 'top top',
      end: () => '+=' + (slides.length * 600),
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.min(
          Math.floor(progress * slides.length),
          slides.length - 1
        );
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === activeIndex);
        });
      }
    }
  });

  // Animate through each slide
  slides.forEach((slide, i) => {
    if (i === 0) return; // First slide already visible

    // Exit current slide
    whyTl.to(slides[i - 1], {
      opacity: 0,
      x: -100,
      duration: 0.5,
      ease: 'power2.in'
    });

    // Enter next slide
    whyTl.fromTo(slide, {
      opacity: 0,
      x: 100
    }, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.2');

    // Hold for reading time
    whyTl.to({}, { duration: 0.3 });
  });
}

/* ============================================================
   ABOUT — Reveal
   ============================================================ */
function initAboutReveal() {
  const aboutCard = document.getElementById('aboutCard');
  if (!aboutCard) return;

  gsap.to(aboutCard, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: aboutCard,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  });
}

/* ============================================================
   OWL FLIGHT TRANSITIONS
   Hedwig flies across the screen between sections
   ============================================================ */
function initOwlFlights() {
  const owl = document.getElementById('owlFlyer');
  if (!owl) return;

  // Define flight trigger points (between major sections)
  const flightTriggers = [
    { trigger: '#discover', label: 'hero-to-discover' },
    { trigger: '#categories', label: 'discover-to-categories' },
    { trigger: '#why', label: 'categories-to-why' }
  ];

  flightTriggers.forEach((flight, i) => {
    const direction = i % 2 === 0 ? 1 : -1; // Alternate left-to-right / right-to-left
    const startX = direction === 1 ? -150 : window.innerWidth + 150;
    const endX = direction === 1 ? window.innerWidth + 150 : -150;
    const startY = 100 + (i * 50);
    const midY = startY - 80; // Arc upward in the middle

    ScrollTrigger.create({
      trigger: flight.trigger,
      start: 'top 90%',
      onEnter: () => {
        // Reset owl position
        gsap.set(owl, {
          x: startX,
          y: startY,
          opacity: 0,
          scaleX: direction,
          rotation: 0
        });

        // Create flight animation
        const flightTl = gsap.timeline();

        flightTl
          .to(owl, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
          .to(owl, {
            x: (startX + endX) / 2,
            y: midY,
            rotation: direction * -5,
            duration: 1,
            ease: 'power1.inOut'
          }, 0)
          .to(owl, {
            x: endX,
            y: startY + 20,
            rotation: direction * 3,
            duration: 1,
            ease: 'power1.inOut'
          })
          .to(owl, {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in'
          }, '-=0.5');
      },
      once: false
    });
  });
}

/* ============================================================
   LOOP-BACK — Smooth scroll to top
   ============================================================ */
function initLoopBack() {
  const loopText = document.getElementById('loopText');

  if (loopText) {
    gsap.to(loopText, {
      opacity: 0.6,
      duration: 0.8,
      scrollTrigger: {
        trigger: '#loop-back',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  ScrollTrigger.create({
    trigger: '#loop-back',
    start: 'top 30%',
    onEnter: () => {
      // Small delay for the "magic never ends" text to be visible
      gsap.delayedCall(0.5, () => {
        gsap.to(window, {
          scrollTo: { y: 0, autoKill: false },
          duration: 2.5,
          ease: 'power2.inOut',
          onComplete: () => {
            // Re-trigger hero entrance after loop
            gsap.fromTo('.hero-content h1', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
            gsap.fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 });
            gsap.fromTo('.cta-btn', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.3 });
            gsap.to('#scrollIndicator', { opacity: 0.7, duration: 0.8, delay: 0.5 });
          }
        });
      });
    },
    once: false
  });
}

/* ============================================================
   GENERIC SCROLL REVEALS
   ============================================================ */
function initScrollReveals() {
  document.querySelectorAll('.reveal-up').forEach((el) => {
    gsap.fromTo(el, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });
}
