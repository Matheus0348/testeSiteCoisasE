document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) toggle.addEventListener('click', () => menu.classList.toggle('open'));

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) link.classList.add('active');
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.category;
      document.querySelectorAll('[data-product-category]').forEach(card => {
        card.style.display = (cat === 'todos' || card.dataset.productCategory === cat) ? '' : 'none';
      });
    });
  });

  const form = document.querySelector('#contactForm');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mensagem enviada! Em breve a Coisas & Tal entra em contato.');
    form.reset();
  });
});
