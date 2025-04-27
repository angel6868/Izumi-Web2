// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // OFF-CANVAS
  const menuToggle = document.getElementById('menu-toggle');
  const overlay    = document.getElementById('mobile-menu');
  const asideMenu  = document.getElementById('mobile-aside');
  const menuClose  = document.getElementById('menu-close');

  menuToggle.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => asideMenu.classList.remove('translate-x-full'));
  });

  function cerrarMenu() {
    asideMenu.classList.add('translate-x-full');
    asideMenu.addEventListener('transitionend', () => {
      overlay.classList.add('hidden');
    }, { once: true });
  }

  menuClose.addEventListener('click', cerrarMenu);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) cerrarMenu();
  });

  // PALETA DE COLORES
  const themeToggle = document.getElementById('theme-toggle');
  const themeMenu   = document.getElementById('theme-menu');
  const themeBtns   = themeMenu.querySelectorAll('button[data-theme]');

  themeToggle.addEventListener('click', () => {
    themeMenu.classList.toggle('hidden');
  });
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setTheme(btn.dataset.theme);
      themeMenu.classList.add('hidden');
    });
  });

  function setTheme(theme) {
    const root = document.documentElement;
    if (theme === 'violet') {
      root.style.setProperty('--accent', '#7c3aed');
      root.style.setProperty('--accent-hover', '#6d28d9');
      root.style.setProperty('--accent-start', '#a78bfa');
      root.style.setProperty('--accent-end', '#8b5cf6');
    } else if (theme === 'sky') {
      root.style.setProperty('--accent', '#0284c7');
      root.style.setProperty('--accent-hover', '#0369a1');
      root.style.setProperty('--accent-start', '#38bdf8');
      root.style.setProperty('--accent-end', '#0ea5e9');
    } else if (theme === 'emerald') {
      root.style.setProperty('--accent', '#059669');
      root.style.setProperty('--accent-hover', '#047857');
      root.style.setProperty('--accent-start', '#34d399');
      root.style.setProperty('--accent-end', '#10b981');
    } else if (theme === 'rose') {
      root.style.setProperty('--accent', '#e11d48');
      root.style.setProperty('--accent-hover', '#be123c');
      root.style.setProperty('--accent-start', '#fb7185');
      root.style.setProperty('--accent-end', '#f43f5e');
    } else if (theme === 'amber') {
      root.style.setProperty('--accent', '#d97706');
      root.style.setProperty('--accent-hover', '#b45309');
      root.style.setProperty('--accent-start', '#fbbf24');
      root.style.setProperty('--accent-end', '#f59e0b');
    }
  }

const colorThemes = {
  violet: '#8b5cf6',   // morado
  sky: '#0ea5e9',      // azul
  emerald: '#10b981',  // verde
  rose: '#f43f5e',     // rojo
  amber: '#f59e0b'     // amarillo
};

const gradientSections = document.querySelectorAll('.bg-gradient-to-b');

document.querySelectorAll('[data-theme]').forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.getAttribute('data-theme');
    const color = colorThemes[theme];

    // Cambiar color principal
    document.documentElement.style.setProperty('--accent', color);

    // Cambiar gradientes
    gradientSections.forEach(section => {
      section.style.backgroundImage = `linear-gradient(to bottom, ${color}, black)`;
    }
  }

// Script para cambiar el gradiente
  document.addEventListener("DOMContentLoaded", function() {
    const themeButtons = document.querySelectorAll('[data-theme]');
    const body = document.body;

    themeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        
        // Aplica el gradiente de acuerdo al tema
        switch(theme) {
          case 'violet':
            body.style.background = 'linear-gradient(to top, #6b46c1, #9f7aea)';
            break;
          case 'sky':
            body.style.background = 'linear-gradient(to top, #0ea5e9, #38bdf8)';
            break;
          case 'emerald':
            body.style.background = 'linear-gradient(to top, #10b981, #34d399)';
            break;
          case 'rose':
            body.style.background = 'linear-gradient(to top, #f43f5e, #f87171)';
            break;
          case 'amber':
            body.style.background = 'linear-gradient(to top, #f59e0b, #fbbf24)';
            break;
        }
      });
    });
  });