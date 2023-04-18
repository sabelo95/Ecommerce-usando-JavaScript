// Parallax effect
const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  parallax.querySelector('.parallax-bg').style.transform = `translateY(${offset * 0.5}px)`;
});
