// ===== AOS (Animate On Scroll) =====
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// ===== Smooth Scroll para enlaces de navegación =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Toggle menú móvil =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Navbar efecto scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  }
});

// ===== Contadores animados para estadísticas =====
const stats = document.querySelectorAll('.stat-circle .number');

stats.forEach(stat => {
  const target = +stat.getAttribute('data-target');
  let count = 0;

  const increment = target / 50;

  const updateCounter = () => {
    count += increment;
    if (count >= target) {
      stat.textContent = target + '%';
    } else {
      stat.textContent = Math.floor(count) + '%';
      requestAnimationFrame(updateCounter);
    }
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(stat);
});

// ===== Efecto parallax sutil en Hero =====
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// ===== Mensaje de bienvenida en consola =====
console.log('%c🍎 NutriVida - Alimentación Saludable', 'font-size: 20px; color: #60a5fa; font-weight: bold;');
console.log('%cGracias por visitar nuestro proyecto de feria científica!', 'font-size: 14px; color: #cbd5e1;');
