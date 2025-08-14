const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

btn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
