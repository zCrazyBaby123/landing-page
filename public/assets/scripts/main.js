document.addEventListener("DOMContentLoaded", function() {
    const acceptCookiesButton = document.getElementById("accept-cookies");
    const cookieBanner = document.querySelector(".cookie-banner");

    // Muestra el banner de cookies con animación
    setTimeout(function() {
        cookieBanner.classList.add("show");
    }, 500); // Aparece 0.5 segundos después de que la página se cargue

    // Cuando el usuario hace clic en "Aceptar"
    if (acceptCookiesButton && cookieBanner) {
        acceptCookiesButton.addEventListener("click", function() {
            // Ocultar el banner de cookies con animación de deslizamiento
            cookieBanner.style.transition = "bottom 0.5s ease"; // Añadimos la animación de deslizamiento
            cookieBanner.style.bottom = "-100px"; // Baja el banner fuera de la vista
        });
    }
});
