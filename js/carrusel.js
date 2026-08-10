const slides = document.querySelectorAll('.carrusel-rasgado__slide');
const dotsWrap = document.getElementById('dots');
let actual = 0;
let auto;

slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.className = 'carrusel-rasgado__dot' + (i === 0 ? ' activo' : '');
  b.addEventListener('click', () => ir(i));
  dotsWrap.appendChild(b);
});
const dots = document.querySelectorAll('.carrusel-rasgado__dot');

function ir(i){
  slides[actual].classList.remove('activo');
  dots[actual].classList.remove('activo');
  actual = (i + slides.length) % slides.length;
  slides[actual].classList.add('activo');
  dots[actual].classList.add('activo');
}
function mover(dir){ ir(actual + dir); reiniciarAuto(); }
function reiniciarAuto(){
  clearInterval(auto);
  auto = setInterval(() => ir(actual + 1), 4500);
}
reiniciarAuto();