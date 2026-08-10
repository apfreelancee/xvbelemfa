document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll(".animar");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                // 🔥 CLAVE: dejar de observarlo para que no vuelva a animarse
                observer.unobserve(entry.target);
            }

        });
    }, {
        threshold: 0.25
    });

    elementos.forEach(el => observer.observe(el));

});