const botonMenu = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");
        botonMenu.classList.toggle("activo");

    });

}

document.addEventListener("DOMContentLoaded", function () {

    const selectorIdioma = document.querySelector("#idioma");

    const traduccions = {
        gl: {
            "Inicio": "Inicio",
            "Sobre nós": "Sobre nós",
            "Destinos": "Destinos",
            "Experiencias": "Experiencias",
            "Ofertas": "Ofertas",
            "Contacto": "Contacto",
            "Solicita información": "Solicita información",
            "Preparados para a aventura?": "Preparados para a aventura?"
        },
      es: {
            "Inicio": "Inicio",
            "Sobre nós": "Sobre nosotros",
            "Destinos": "Destinos",
            "Experiencias": "Experiencias",
            "Ofertas": "Ofertas",
            "Contacto": "Contacto",
            "Solicita información": "Solicita información",
            "Preparados para a aventura?": "¿Preparados para la aventura?"
        },
    en: {
            "Inicio": "Home",
            "Sobre nós": "About us",
            "Destinos": "Destinations",
            "Experiencias": "Experiences",
            "Ofertas": "Offers",
            "Contacto": "Contact",
            "Solicita información": "Request information",
            "Preparados para a aventura?": "Ready for the adventure?"
        }

    };
    function cambiarIdioma(idioma) {

        const elementos = document.querySelectorAll(
            "a, h1, h2, h3, p, button"
        );

        elementos.forEach(function (elemento) {

            const texto = elemento.textContent.trim();

            for (const idiomaBase in traduccions) {

                if (traduccions[idiomaBase][texto]) {

                    elemento.textContent =
                        traduccions[idioma][texto];

                    break;
                }

            }

        });

document.documentElement.lang = idioma;

        localStorage.setItem(
            "idiomaAtlanticoTravel",
            idioma
        );
    }


    if (selectorIdioma) {

        const idiomaGardado =
            localStorage.getItem(
                "idiomaAtlanticoTravel"
            ) || "gl";

        selectorIdioma.value = idiomaGardado;

        cambiarIdioma(idiomaGardado);


        selectorIdioma.addEventListener(
            "change",
            function () {

                cambiarIdioma(
                    selectorIdioma.value
                );

            }
        );
    }
