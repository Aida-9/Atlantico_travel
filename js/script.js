const botonMenu = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");
        botonMenu.classList.toggle("activo");

    });

}

 const idioma = document.querySelector("#idioma");




    const traduccions = {

        es: {

            "Inicio":
                "Inicio",

            "Sobre nós":
                "Sobre nosotros",

            "Destinos":
                "Destinos",

            "Experiencias":
                "Experiencias",

            "Ofertas":
                "Ofertas",

            "Contacto":
                "Contacto",

            "Solicita información":
                "Solicita información",

            "Preparados para a aventura?":
                "¿Preparados para la aventura?",

            "Atlántico Travel · Viaxes con alma":
                "Atlántico Travel · Viajes con alma",

            "Rías Baixas":
                "Rías Baixas",

            "Costa da Morte":
                "Costa da Morte",

            "Canóns do Río Sil":
                "Cañones del Río Sil",

            "Explora destinos":
                "Explora destinos",

            "Kayak pola ría":
                "Kayak por la ría",

            "Ruta a cabalo":
                "Ruta a caballo",

            "Explora experiencias":
                "Explora experiencias",

            "Galicia para vivila.":
                "Galicia para vivirla.",

            "Contacta con nós":
                "Contacta con nosotros",

            "Teléfono:":
                "Teléfono:",

            "Correo:":
                "Correo:",

            "Localización:":
                "Localización:",

            "Síguenos":
                "Síguenos",

            "Aviso legal":
                "Aviso legal",

            "Política de privacidade":
                "Política de privacidad",

            "Política de cookies":
                "Política de cookies"
        },


        en: {

            "Inicio":
                "Home",

            "Sobre nós":
                "About us",

            "Destinos":
                "Destinations",

            "Experiencias":
                "Experiences",

            "Ofertas":
                "Offers",

            "Contacto":
                "Contact",

            "Solicita información":
                "Request information",

            "Preparados para a aventura?":
                "Ready for the adventure?",

            "Atlántico Travel · Viaxes con alma":
                "Atlántico Travel · Travel with soul",

            "Rías Baixas":
                "Rías Baixas",

            "Costa da Morte":
                "Costa da Morte",

            "Canóns do Río Sil":
                "Sil River Canyons",

            "Explora destinos":
                "Explore destinations",

            "Kayak pola ría":
                "Kayaking in the estuary",

            "Ruta a cabalo":
                "Horse riding",

            "Explora experiencias":
                "Explore experiences",

            "Galicia para vivila.":
                "Galicia, made to be experienced.",

            "Contacta con nós":
                "Contact us",

            "Teléfono:":
                "Phone:",

            "Correo:":
                "Email:",

            "Localización:":
                "Location:",

            "Síguenos":
                "Follow us",

            "Aviso legal":
                "Legal notice",

            "Política de privacidade":
                "Privacy policy",

            "Política de cookies":
                "Cookie policy"
        }

    };


  
    const elementos = document.querySelectorAll(
        "a, h1, h2, h3, h4, p, button"
    );


    /* Gardamos o texto orixinal en galego */

    elementos.forEach(function (elemento) {

        elemento.dataset.textoOriginal =
            elemento.textContent.trim();

    });


    function cambiarIdioma(opcion) {

        elementos.forEach(function (elemento) {

            const textoOriginal =
                elemento.dataset.textoOriginal;


            /* GALEGO */

            if (opcion === "gl") {

                elemento.textContent =
                    textoOriginal;

            }


            /* CASTELÁN OU INGLÉS */

            else if (
                traduccions[opcion] &&
                traduccions[opcion][textoOriginal]
            ) {

                elemento.textContent =
                    traduccions[opcion][textoOriginal];

            }

        });


        /* Cambiamos tamén o idioma do documento */

        document.documentElement.lang = opcion;

    }

    if (idioma) {

        idioma.addEventListener("change", function () {

            cambiarIdioma(idioma.value);

        });

    }

});