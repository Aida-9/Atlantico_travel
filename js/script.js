const botonMenu = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");
        botonMenu.classList.toggle("activo");

    });

}

const traduccions = {

    gl: {

        inicio: "Inicio",
        sobreNos: "Sobre nós",
        destinos: "Destinos",
        experiencias: "Experiencias",
        ofertas: "Ofertas",
        contacto: "Contacto",

        solicitar: "Solicita información",

        heroSubtitulo:
            "Preparados para a aventura?",

        riasTitulo:
            "Rías Baixas",

        riasTexto:
            "Rías Baixas, un rincón onde o Atlántico abraza a terra galega. Praias de area branca, augas cristalinas, pobos mariñeiros con encanto e unha gastronomía única.",

        costaTitulo:
            "Costa da Morte",

        costaTexto:
            "Unha semana de duración para descubrir a súa beleza natural, a súa historia e a súa cultura.",

        silTitulo:
            "Canóns do Río Sil",

        silTexto:
            "Descubre a beleza natural dos Canóns do Río Sil, un lugar onde a natureza se mostra en todo o seu esplendor.",

        silDuracion:
            "Duración aproximada: 2 horas e cata de viños incluída.",

        exploraDestinos:
            "Explora destinos",

        kayakTitulo:
            "Kayak na Ría de Aldán",

        kayakSubtitulo:
            "Aventura pola ría",

        kayakTexto:
            "A aventura de ir nun kayak río abaixo non se pode perder. Unha experiencia única para grupos.",

        kayakDuracion:
            "Duración: 2,5 horas.",

        exploraExperiencias:
            "Explora experiencias"
    },


    es: {

        inicio: "Inicio",
        sobreNos: "Sobre nosotros",
        destinos: "Destinos",
        experiencias: "Experiencias",
        ofertas: "Ofertas",
        contacto: "Contacto",

        solicitar: "Solicita información",

        heroSubtitulo:
            "¿Preparados para la aventura?",

        riasTitulo:
            "Rías Baixas",

        riasTexto:
            "Rías Baixas, un rincón donde el Atlántico abraza la tierra gallega. Playas de arena blanca, aguas cristalinas, pueblos marineros con encanto y una gastronomía única.",

        costaTitulo:
            "Costa da Morte",

        costaTexto:
            "Una semana de duración para descubrir su belleza natural, su historia y su cultura.",

        silTitulo:
            "Cañones del Río Sil",

        silTexto:
            "Descubre la belleza natural de los Cañones del Río Sil, un lugar donde la naturaleza se muestra en todo su esplendor.",

        silDuracion:
            "Duración aproximada: 2 horas y cata de vinos incluida.",

        exploraDestinos:
            "Explora destinos",

        kayakTitulo:
            "Kayak en la Ría de Aldán",

        kayakSubtitulo:
            "Aventura por la ría",

        kayakTexto:
            "Recorrer la ría en kayak es una aventura que no te puedes perder. Una experiencia única para grupos.",

        kayakDuracion:
            "Duración: 2,5 horas.",

        exploraExperiencias:
            "Explora experiencias"
    },


    en: {

        inicio: "Home",
        sobreNos: "About us",
        destinos: "Destinations",
        experiencias: "Experiences",
        ofertas: "Offers",
        contacto: "Contact",

        solicitar:
            "Request information",

        heroSubtitulo:
            "Ready for the adventure?",

        riasTitulo:
            "Rías Baixas",

        riasTexto:
            "Rías Baixas, where the Atlantic Ocean embraces the Galician coast. White sandy beaches, crystal-clear waters, charming fishing villages and unique gastronomy.",

        costaTitulo:
            "Costa da Morte",

        costaTexto:
            "A week-long experience to discover its natural beauty, history and culture.",

        silTitulo:
            "Sil River Canyons",

        silTexto:
            "Discover the natural beauty of the Sil River Canyons, a place where nature reveals all its splendour.",

        silDuracion:
            "Approximate duration: 2 hours, including a wine tasting.",

        exploraDestinos:
            "Explore destinations",

        kayakTitulo:
            "Kayaking in the Ría de Aldán",

        kayakSubtitulo:
            "Adventure on the estuary",

        kayakTexto:
            "Explore the estuary by kayak and enjoy a unique adventure, perfect for groups.",

        kayakDuracion:
            "Duration: 2.5 hours.",

        exploraExperiencias:
            "Explore experiences"
    }

};
