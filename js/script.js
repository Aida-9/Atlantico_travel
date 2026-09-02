const botonMenu = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");
        botonMenu.classList.toggle("activo");

    });

}



const selectorIdioma = document.querySelector("#idioma");


if (selectorIdioma) {

    selectorIdioma.addEventListener("change", function () {

        const idioma = selectorIdioma.value;


        /* MENÚ */

        const enlacesMenu = document.querySelectorAll(".menu a");

        if (idioma === "gl") {

            enlacesMenu[0].textContent = "Inicio";
            enlacesMenu[1].textContent = "Sobre nós";
            enlacesMenu[2].textContent = "Destinos";
            enlacesMenu[3].textContent = "Experiencias";
            enlacesMenu[4].textContent = "Ofertas";
            enlacesMenu[5].textContent = "Contacto";

        }


        if (idioma === "es") {

            enlacesMenu[0].textContent = "Inicio";
            enlacesMenu[1].textContent = "Sobre nosotros";
            enlacesMenu[2].textContent = "Destinos";
            enlacesMenu[3].textContent = "Experiencias";
            enlacesMenu[4].textContent = "Ofertas";
            enlacesMenu[5].textContent = "Contacto";

        }


        if (idioma === "en") {

            enlacesMenu[0].textContent = "Home";
            enlacesMenu[1].textContent = "About us";
            enlacesMenu[2].textContent = "Destinations";
            enlacesMenu[3].textContent = "Experiences";
            enlacesMenu[4].textContent = "Offers";
            enlacesMenu[5].textContent = "Contact";

        }



        /* HERO */

        const tituloHero =
            document.querySelector(".hero-content h2");

        const botonHero =
            document.querySelector(".hero-cta");

        const botonNav =
            document.querySelector(".nav-cta");


        if (idioma === "gl") {

            tituloHero.textContent =
                "Preparados para a aventura?";

            botonHero.textContent =
                "Solicita información";

            botonNav.textContent =
                "Solicita información";

        }


        if (idioma === "es") {

            tituloHero.textContent =
                "¿Preparados para la aventura?";

            botonHero.textContent =
                "Solicita información";

            botonNav.textContent =
                "Solicita información";

        }


        if (idioma === "en") {

            tituloHero.textContent =
                "Ready for the adventure?";

            botonHero.textContent =
                "Request information";

            botonNav.textContent =
                "Request information";

        }



        /* DESTINOS */

        const titulosDestinos =
            document.querySelectorAll(
                ".destino-card h3"
            );

        const botonesDestinos =
            document.querySelectorAll(
                ".destino-card .boton-card"
            );


        if (idioma === "gl") {

            if (titulosDestinos[2]) {
                titulosDestinos[2].textContent =
                    "Canóns do Río Sil";
            }

            botonesDestinos.forEach(function (boton) {
                boton.textContent =
                    "Explora destinos";
            });

        }


        if (idioma === "es") {

            if (titulosDestinos[2]) {
                titulosDestinos[2].textContent =
                    "Cañones del Río Sil";
            }

            botonesDestinos.forEach(function (boton) {
                boton.textContent =
                    "Explora destinos";
            });

        }


        if (idioma === "en") {

            if (titulosDestinos[2]) {
                titulosDestinos[2].textContent =
                    "Sil River Canyons";
            }

            botonesDestinos.forEach(function (boton) {
                boton.textContent =
                    "Explore destinations";
            });

        }



        /* EXPERIENCIAS */

        const botonesExperiencias =
            document.querySelectorAll(
                ".experiencia-card .boton-card"
            );


        botonesExperiencias.forEach(function (boton) {

            if (idioma === "gl") {

                boton.textContent =
                    "Explora experiencias";

            }

            if (idioma === "es") {

                boton.textContent =
                    "Explora experiencias";

            }

            if (idioma === "en") {

                boton.textContent =
                    "Explore experiences";

            }

        });



        /* FOOTER */

        const lema =
            document.querySelector(
                ".footer-marca p"
            );

        const tituloContacto =
            document.querySelector(
                ".footer-contacto h2"
            );

        const tituloRedes =
            document.querySelector(
                ".footer-redes h2"
            );


        if (idioma === "gl") {

            if (lema) {
                lema.textContent =
                    "Galicia para vivila.";
            }

            if (tituloContacto) {
                tituloContacto.textContent =
                    "Contacta con nós";
            }

            if (tituloRedes) {
                tituloRedes.textContent =
                    "Síguenos";
            }

        }


        if (idioma === "es") {

            if (lema) {
                lema.textContent =
                    "Galicia para vivirla.";
            }

            if (tituloContacto) {
                tituloContacto.textContent =
                    "Contacta con nosotros";
            }

            if (tituloRedes) {
                tituloRedes.textContent =
                    "Síguenos";
            }

        }


        if (idioma === "en") {

            if (lema) {
                lema.textContent =
                    "Galicia, made to be experienced.";
            }

            if (tituloContacto) {
                tituloContacto.textContent =
                    "Contact us";
            }

            if (tituloRedes) {
                tituloRedes.textContent =
                    "Follow us";
            }

        }


        /* CAMBIAMOS O LANG DO HTML */

        document.documentElement.lang = idioma;

    });

}