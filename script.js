// Smooth scroll for all nav links
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  });
});

// Hamburger / mobile menu toggle
var hamburger = document.getElementById('hamburger');
var mobileMenu = document.getElementById('mobileMenu');
var mobileMenuClose = document.getElementById('mobileMenuClose');

function openMobileMenu() {
  hamburger.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  hamburger.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', function() {
  if (mobileMenu.classList.contains('is-open')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

mobileMenuClose.addEventListener('click', closeMobileMenu);

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    closeMobileMenu();
  }
});

// Scroll gradient — rotates angle and deepens dodger blue tint as you scroll
(function() {
  var html = document.documentElement;
  function updateGradient() {
    var max = document.body.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    html.style.setProperty('--grad-blue', (0.10 + p * 0.28).toFixed(3));
  }
  window.addEventListener('scroll', updateGradient, { passive: true });
  updateGradient();
})();
