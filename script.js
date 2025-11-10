const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = '-100px'; // Oculta al bajar
  } else {
    header.style.top = '0'; // Muestra al subir
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.target;
    contents.forEach(content => {
      content.classList.remove('active');
      if (content.id === target) content.classList.add('active');
    });
    // ====== MENÚ DESPLEGABLE MÓVIL ======
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

// Mostrar / ocultar menú al tocar el botón
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Ocultar menú automáticamente al seleccionar un tab
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});
  });
});
