// Simple JavaScript for mobile navigation and other interactions
document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileClose = document.querySelector('.mobile-nav-close');
  const body = document.body;

  if (mobileToggle && mobileOverlay) {
    // Open mobile menu
    mobileToggle.addEventListener('click', function() {
      mobileOverlay.classList.add('active');
      body.style.overflow = 'hidden'; // Prevent background scrolling
      mobileOverlay.setAttribute('aria-hidden', 'false');
    });

    // Close mobile menu
    if (mobileClose) {
      mobileClose.addEventListener('click', function() {
        closeMenu();
      });
    }

    // Close menu when clicking outside
    mobileOverlay.addEventListener('click', function(e) {
      if (e.target === mobileOverlay) {
        closeMenu();
      }
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileOverlay.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });

    // Close menu function
    function closeMenu() {
      mobileOverlay.classList.remove('active');
      body.style.overflow = '';
      mobileOverlay.setAttribute('aria-hidden', 'true');
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Make SVG diagrams responsive
  const svgContainers = document.querySelectorAll('.svg-container');
  svgContainers.forEach(container => {
    const svg = container.querySelector('svg');
    if (svg && svg.getAttribute('viewBox')) {
      svg.style.width = '100%';
      svg.style.height = 'auto';
    }
  });
});
