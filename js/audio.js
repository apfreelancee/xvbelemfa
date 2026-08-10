// ===== Control de música =====

const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btn-musica');

function actualizarEstado(reproduciendo) {
    btnMusica.classList.toggle('girando', reproduciendo);
    btnMusica.setAttribute('aria-pressed', reproduciendo);
}

function alternarMusica() {
    if (musica.paused) {
        musica.play()
            .then(() => {
                actualizarEstado(true);
            })
            .catch((error) => {
                console.error('No se pudo reproducir la música:', error);
            });
    } else {
        musica.pause();
        actualizarEstado(false);
    }
}

btnMusica.addEventListener('click', alternarMusica);

musica.addEventListener('ended', () => {
    actualizarEstado(false);
});