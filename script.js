const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
const header = document.querySelector('header');
let lastScrollTop = 0;

// ====== Mostrar/Ocultar header al hacer scroll ======
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = '-100px'; // Oculta al bajar
  } else {
    header.style.top = '0'; // Muestra al subir
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ====== Tabs ======
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.target;
    contents.forEach(content => {
      content.classList.remove('active');
      if (content.id === target) content.classList.add('active');
    });

    // Cierra el menú cuando se elige un tab (mobile)
    nav.classList.remove('show');
  });
});

// ====== MENÚ DESPLEGABLE MÓVIL ======
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

// Mostrar / ocultar menú al tocar el botón
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
