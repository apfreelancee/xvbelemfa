const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btn-musica');

function actualizarEstado(reproduciendo) {
    btnMusica.classList.toggle('girando', reproduciendo);
    btnMusica.setAttribute('aria-pressed', reproduciendo);
}

function reproducirMusica() {
    musica.play()
        .then(() => {
            actualizarEstado(true);
        })
        .catch((error) => {
            console.log('Autoplay bloqueado por el navegador:', error);
        });
}

function alternarMusica() {
    if (musica.paused) {
        reproducirMusica();
    } else {
        musica.pause();
        actualizarEstado(false);
    }
}

// Botón de música
btnMusica.addEventListener('click', alternarMusica);

// Intentar reproducir automáticamente al cargar
window.addEventListener('load', () => {
    reproducirMusica();
});

// Si el navegador bloquea el autoplay,
// iniciar la música con la primera interacción
document.addEventListener('click', () => {
    if (musica.paused) {
        reproducirMusica();
    }
}, { once: true });

musica.addEventListener('ended', () => {
    actualizarEstado(false);
});