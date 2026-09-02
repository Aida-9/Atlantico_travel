const botonMenu = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");
        botonMenu.classList.toggle("activo");

    });

}

const selectorIdioma = document.querySelector("#idioma");

    const traduccions = {

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


    /* Collemos os elementos que queremos poder traducir */

    const elementos = document.querySelectorAll(
        "a, h1, h2, h3, p, button"
    );


    /* Gardamos automaticamente o texto galego orixinal */

    elementos.forEach(function (elemento) {

        elemento.dataset.textoOriginal =
            elemento.textContent.trim();

    });


    function cambiarIdioma(idioma) {

        elementos.forEach(function (elemento) {

            const textoOriginal =
                elemento.dataset.textoOriginal;


            /* GALEGO */

            if (idioma === "gl") {

                elemento.textContent =
                    textoOriginal;

            }


            /* CASTELÁN OU INGLÉS */

            else if (
                traduccions[idioma] &&
                traduccions[idioma][textoOriginal]
            ) {

                elemento.textContent =
                    traduccions[idioma][textoOriginal];

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


        selectorIdioma.value =
            idiomaGardado;


        cambiarIdioma(
            idiomaGardado
        );


        selectorIdioma.addEventListener(
            "change",
            function () {

                cambiarIdioma(
                    selectorIdioma.value
                );

            }
        );

    }

});