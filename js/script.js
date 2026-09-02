const botonMenu = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");
        botonMenu.classList.toggle("activo");

    });

}
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

        "Solicita información":
            "Solicita información",

        "Preparados para a aventura?":
            "¿Preparados para la aventura?",

        "Rías Baixas":
            "Rías Baixas",

        "Costa da Morte":
            "Costa da Morte",

        "Canóns do Sil":
            "Cañones del Sil",

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

        "Teléfono":
            "Teléfono",

        "Correo":
            "Correo",

        "Localización":
            "Localización",

        "Síguenos":
            "Síguenos",

        "Aviso legal":
            "Aviso legal",

        "Privacidade":
            "Privacidad",

        "Cookies":
            "Cookies"
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

        "Rías Baixas":
            "Rías Baixas",

        "Costa da Morte":
            "Costa da Morte",

        "Canóns do Sil":
            "Sil Canyons",

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

        "Teléfono":
            "Phone",

        "Correo":
            "Email",

        "Localización":
            "Location",

        "Síguenos":
            "Follow us",

        "Aviso legal":
            "Legal notice",

        "Privacidade":
            "Privacy",

        "Cookies":
            "Cookies"
    }

};


const textosOrixinais = [];


function buscarTextos(elemento) {

    elemento.childNodes.forEach(function (nodo) {

        if (nodo.nodeType === 3) {

            const texto = nodo.nodeValue.trim();

            if (texto !== "") {

                textosOrixinais.push({
                    nodo: nodo,
                    texto: texto
                });

            }

        }


        if (nodo.nodeType === 1) {

            if (
                nodo.tagName !== "SCRIPT" &&
                nodo.tagName !== "STYLE" &&
                nodo.tagName !== "SELECT"
            ) {

                buscarTextos(nodo);

            }

        }

    });

}


buscarTextos(document.body);


function cambiarIdioma(idioma) {

    textosOrixinais.forEach(function (elemento) {

        const textoGalego = elemento.texto;


        if (idioma === "gl") {

            elemento.nodo.nodeValue =
                textoGalego;

        }


        else if (
            traduccions[idioma] &&
            traduccions[idioma][textoGalego]
        ) {

            elemento.nodo.nodeValue =
                traduccions[idioma][textoGalego];

        }


        else {

            elemento.nodo.nodeValue =
                textoGalego;

        }

    });


    document.documentElement.lang = idioma;

}


if (selectorIdioma) {

    selectorIdioma.addEventListener(
        "change",
        function () {

            cambiarIdioma(
                selectorIdioma.value
            );

        }
    );

}