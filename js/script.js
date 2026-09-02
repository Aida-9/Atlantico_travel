const botonMenu = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");
        botonMenu.classList.toggle("activo");

    });

}

const idioma = document.querySelector("#idioma");

idioma.addEventListener("change", function () {

    const opcion = idioma.value;

    if (opcion === "gl") {
        document.querySelector(".hero-content h2").textContent =
            "Preparados para a aventura?";
    }

    if (opcion === "es") {
        document.querySelector(".hero-content h2").textContent =
            "¿Preparados para la aventura?";
    }

    if (opcion === "en") {
        document.querySelector(".hero-content h2").textContent =
            "Ready for the adventure?";
    }

});