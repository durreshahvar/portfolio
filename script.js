// ============================================================
// SHAIK DURRE SHAHVAR — PORTFOLIO — script.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- mobile nav toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- scroll reveal ----
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll(
    '.section-head, .legend-card, .log-entry, .report-card, .cite-list li, .cert-item, .edu-card, .about-photo, .about-copy, .contact-link'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if (prefersReduced) {
    revealTargets.forEach(el => el.classList.add('in-view'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealTargets.forEach(el => io.observe(el));
  }

  // ---- active nav link on scroll ----
  const sections = document.querySelectorAll('main section[id], footer[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' });
    sections.forEach(sec => navObserver.observe(sec));
  }

  // ---- custom cursor (desktop, fine pointer only) ----
  const cursorDot = document.querySelector('.cursor-dot');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (cursorDot && canHover && !prefersReduced) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-hover'));
    });
  }

});
