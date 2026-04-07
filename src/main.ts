import { createIcons, icons } from 'lucide';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  createIcons({ icons });

  // Navigation Highlights and Scroll Animations
  const sections = document.querySelectorAll('.page-section');
  const navItems = document.querySelectorAll('.nav-item');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        
        // Highlight logic
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${entry.target.id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
    
    // Also add is-visible immediately for any sections already in viewport
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        section.classList.add('is-visible');
    }
  });
});
