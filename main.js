const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const background = document.querySelector('#primary-nav-background');

navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');

  if (visibility === 'false') {
    nav.setAttribute('data-visible', 'true');
    navToggle.setAttribute('aria-expanded', 'true');
    background.style.display = 'block';
  } else {
    nav.setAttribute('data-visible', 'false');
    navToggle.setAttribute('aria-expanded', 'false');
    background.style.display = 'none';
  }
})