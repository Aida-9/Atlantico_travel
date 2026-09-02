/* =========================================================
   ATLÁNTICO TRAVEL
   SCRIPT PRINCIPAL
========================================================= */


/* =========================================================
   1. MENÚ HAMBURGUESA
========================================================= */

const botonMenu = document.querySelector("header .menu-toggle");
const menu = document.querySelector("header .menu");

if (botonMenu && menu) {

    botonMenu.addEventListener("click", function () {

        menu.classList.toggle("activo");
        botonMenu.classList.toggle("activo");

    });

}


/* =========================================================
   2. TRADUCIÓNS
========================================================= */

const traduccions = {


    /* =====================================================
       GALEGO
    ===================================================== */

    gl: {

        /* ---------- NAVEGACIÓN ---------- */

        inicio: "Inicio",
        sobreNos: "Sobre nós",
        destinos: "Destinos",
        experiencias: "Experiencias",
        ofertas: "Ofertas",
        contacto: "Contacto",
        solicitar: "Solicita información",


        /* ---------- TEXTOS XERAIS ---------- */

        porPersoa: "/ persoa",
        duracion: "Duración",
        prezo: "Prezo",
        localizacion: "Localización",
        desde: "Desde",
        zona: "Zona",

        detalleExperiencia: "Experiencia",
        detalleDestino: "Destino",
        detalleInformacion: "Información",
        detalleInclueTitulo: "Que inclúe?",
        detalleInformacionPractica: "Información práctica",
        detalleParaQuen: "Para quen?",


        /* =================================================
           INDEX
        ================================================= */

        heroSubtitulo: "Preparados para a aventura?",

        riasTitulo: "Rías Baixas",

        riasTexto:
            "Rías Baixas, un rincón onde o Atlántico abraza a terra galega. Praias de area branca, augas cristalinas, pobos mariñeiros con encanto e unha gastronomía única.",

        costaTitulo: "Costa da Morte",

        costaTexto:
            "Unha semana de duración para descubrir a súa beleza natural, a súa historia e a súa cultura.",

        silTitulo: "Canóns do Río Sil",

        silTexto:
            "Descubre a beleza natural dos Canóns do Río Sil, un lugar onde a natureza se mostra en todo o seu esplendor.",

        silDuracion:
            "Duración aproximada: 2 horas e cata de viños incluída.",

        exploraDestinos: "Explora destinos",

        kayakTitulo: "Kayak na Ría de Aldán",
        kayakSubtitulo: "Aventura pola ría",

        kayakTexto:
            "A aventura de ir nun kayak río abaixo non se pode perder. Unha experiencia única para grupos.",

        kayakDuracion:
            "Duración: 2,5 horas.",

        cabaloTitulo: "Ruta Cabalar",
        cabaloSubtitulo: "Senderismo a trote",

        cabaloTexto:
            "Ir en cabalo pola Costa da Morte permite descubrir sitios que te levan a desconectar.",

        cabaloDuracion:
            "Duración: 3 horas con comida incluída.",

        groveTitulo:
            "O Grove, paraíso gastronómico",

        groveSubtitulo:
            "Gastronomía con vistas",

        groveTexto:
            "Deleitarse nunha terraza coa gastronomía de Galicia non se pode perder. Unha experiencia única que inclúe comida e bebida nunha cea para ver o solpor.",

        exploraExperiencias:
            "Explora experiencias",

        fraseMarca:
            "Atlántico Travel · Viaxes con alma",


        /* =================================================
           SOBRE NÓS
        ================================================= */

        sobreNosSubtitulo:
            "Galicia non só se visita. Vívese.",

        sobreNosTexto1:
            "Atlántico Travel nace en 2026 para crear unha forma diferente de descubrir Galicia. Deseñamos viaxes e experiencias personalizadas que conectan persoas, natureza, cultura, gastronomía e aventura.",

        sobreNosTexto2:
            "Desde navegar polas nosas rías, facer kayak ou percorrer montes a cabalo, ata descubrir a Costa da Morte, brindar cun Albariño ou gozar dunha mariscada fronte ao Atlántico.",

        valoresTitulo:
            "Os nosos valores",

        valoresLista:
            "Confianza · Cercanía · Autenticidade · Calidade · Personalización · Respecto pola nosa terra",

        valoresTexto:
            "Apostamos por un turismo próximo e responsable, colaborando co territorio e creando experiencias adaptadas a cada viaxeiro.",

        valoresFrase:
            "Non vendemos destinos. Creamos recordos.",


        /* =================================================
           DESTINOS
        ================================================= */

        destinosTitulo:
            "Destinos",

        destinosIntroTexto:
            "Cada viaxe, unha historia por descubrir.",

        costaTextoDestinos:
            "Descobre a Galicia máis salvaxe, entre cantís, faros e praias onde os pobos mariñeiros conservan a súa esencia máis auténtica.",

        costaDuracion:
            "3 días / 2 noites",

        destinosFrase:
            "\"Onde cada camiño deixa un recordo.\"",


        /* =================================================
           EXPERIENCIAS
        ================================================= */

        experienciasTitulo:
            "Experiencias",

        experienciasIntroTexto:
            "Experiencias que conectan coa nosa terra",

        kayakUllaTitulo:
            "Kayak no río Ulla",

        kayakUllaTexto:
            "Descubre Galicia desde a auga, remando entre montes, natureza e paisaxes únicas nunha experiencia chea de aventura e tranquilidade.",

        kayakUllaDuracion:
            "2 horas e media",

        rutaCabalarTitulo:
            "Ruta cabalar",

        rutaCabalarTexto:
            "Percorre bosques e sendeiros galegos a cabalo, conectando coa natureza nunha experiencia tranquila, divertida e diferente.",

        rutaCabalarDuracion:
            "2 horas",

        experienciasFrase:
            "“Galicia, unha experiencia para sentir.”",


        /* =================================================
           OFERTAS
        ================================================= */

        ofertasTitulo:
            "Ofertas",

        ofertasIntroTexto:
            "Oferta para navegar polos Cañóns do río Sil",

        ofertaSilTitulo:
            "Oferta para navegar polos Cañóns do río Sil.",

        ofertaSilTexto:
            "Descubre a Ribeira Sacra desde a auga navegando entre impresionantes paredes rochosas, viñedos en pendente e paisaxes únicas. Unha experiencia tranquila e espectacular para gozar dunha das vistas máis fermosas de Galicia.",

        ofertaSilDuracion:
            "1,5 horas",

        ofertasFrase:
            "\"Viaxa · Descobre · Sente\"",


        /* =================================================
           DETALLE KAYAK
        ================================================= */

        detalleKayakTitulo:
            "Kayak na Ría de Aldán",

        detalleKayakSubtitulo:
            "Descubre a costa galega desde unha perspectiva diferente.",

        detalleKayakPresentacionTitulo:
            "Navega pola Ría de Aldán",

        detalleKayakPresentacion1:
            "Descubre unha das rías máis especiais de Galicia navegando en kayak polas tranquilas augas da Ría de Aldán.",

        detalleKayakPresentacion2:
            "Unha experiencia para gozar do mar, descubrir pequenas calas e contemplar a costa galega desde unha perspectiva diferente.",

        detalleKayakDuracion:
            "2,5 horas",

        detalleKayakInclue1:
            "Kayak e remo",

        detalleKayakInclue2:
            "Chaleco salvavidas",

        detalleKayakInclue3:
            "Instrucións antes da saída",

        detalleKayakInclue4:
            "Material necesario para a actividade",

        detalleKayakAventuraTitulo:
            "Unha aventura sobre o mar",

        detalleKayakAventura1:
            "Navega por augas tranquilas e descubre pequenas calas e recunchos da costa aos que só se pode chegar desde o mar.",

        detalleKayakAventura2:
            "Unha forma diferente de conectar coa natureza e gozar da paisaxe mariña galega.",

        detalleKayakPublico:
            "Parellas, amigos e grupos",

        detalleKayakCtaTitulo:
            "Preparado para vivir a aventura?",

        detalleKayakCtaTexto:
            "Cóntanos que estás buscando e axudarémosche a preparar a túa experiencia.",


        /* =================================================
           DETALLE RUTA CABALAR
        ================================================= */

        detalleCabaloTitulo:
            "Ruta Cabalar",

        detalleCabaloSubtitulo:
            "Descubre Galicia ao ritmo da natureza.",

        detalleCabaloPresentacionTitulo:
            "Galicia a cabalo",

        detalleCabaloPresentacion1:
            "Descubre algunhas das paisaxes máis especiais de Galicia nunha ruta a cabalo rodeada de natureza e tranquilidade.",

        detalleCabaloPresentacion2:
            "Unha experiencia diferente para desconectar, gozar do entorno e percorrer camiños e paisaxes galegas dunha maneira única.",

        detalleCabaloDuracion:
            "3 horas",

        detalleCabaloInclue1:
            "Cabalo adaptado ao nivel",

        detalleCabaloInclue2:
            "Casco de protección",

        detalleCabaloInclue3:
            "Acompañamento durante a ruta",

        detalleCabaloInclue4:
            "Comida incluída",

        detalleCabaloDescubreTitulo:
            "Natureza a outro ritmo",

        detalleCabaloDescubre1:
            "Percorre camiños rodeados de natureza e descubre paisaxes da Costa da Morte desde unha perspectiva completamente diferente.",

        detalleCabaloDescubre2:
            "A ruta permite gozar da tranquilidade do entorno e achegarse á paisaxe galega nunha experiencia pensada para desconectar e vivir o momento.",

        detalleCabaloPublico:
            "Parellas, amigos e grupos",

        detalleCabaloCtaTitulo:
            "Preparado para vivir a experiencia?",

        detalleCabaloCtaTexto:
            "Cóntanos que estás buscando e axudarémosche a preparar a túa experiencia.",


        /* =================================================
           DETALLE COSTA DA MORTE
        ================================================= */

        detalleCostaTitulo:
            "Costa da Morte",

        detalleCostaSubtitulo:
            "Natureza salvaxe, mar e tradición no corazón da costa galega.",

        detalleCostaPresentacionTitulo:
            "Descubre a Costa da Morte",

        detalleCostaPresentacion1:
            "O Atlántico, os faros, as praias e as vilas mariñeiras converten a Costa da Morte nun dos destinos máis especiais de Galicia.",

        detalleCostaPresentacion2:
            "Descubre paisaxes únicas, tradicións e recunchos cheos de historia nunha ruta pensada para coñecer unha Galicia auténtica e inesquecible.",

        detalleCostaInclue1:
            "Ruta pola Costa da Morte",

        detalleCostaInclue2:
            "Visita a faros e miradoiros",

        detalleCostaInclue3:
            "Recomendacións gastronómicas",

        detalleCostaInclue4:
            "Ruta adaptada ao grupo",

        detalleCostaHistoriaTitulo:
            "Unha costa chea de historia",

        detalleCostaHistoria1:
            "Percorre algúns dos lugares máis emblemáticos da Costa da Morte, entre faros, praias, acantilados e pequenas vilas mariñeiras.",

        detalleCostaHistoria2:
            "Cada ruta pode adaptarse ao ritmo e ás preferencias das persoas que realizan a viaxe para descubrir esta parte de Galicia dunha maneira diferente.",

        detalleCostaDuracion:
            "Día completo",

        detalleCostaPublico:
            "Parellas, familias e grupos",

        detalleCostaCtaTitulo:
            "Preparado para descubrir Galicia?",

        detalleCostaCtaTexto:
            "Cóntanos que estás buscando e crearemos unha experiencia para ti.",


        /* =================================================
           DETALLE RÍAS BAIXAS
        ================================================= */

        detalleRiasTitulo:
            "Rías Baixas",

        detalleRiasSubtitulo:
            "Galicia para saboreala, descubrila e vivila.",

        detalleRiasPresentacionTitulo:
            "Descubre as Rías Baixas",

        detalleRiasPresentacion1:
            "Mar, natureza, vilas mariñeiras e unha gastronomía que converten cada visita nunha experiencia diferente.",

        detalleRiasPresentacion2:
            "Descubre algúns dos lugares máis especiais das Rías Baixas e vive Galicia dunha maneira próxima e personalizada.",

        detalleRiasInclue1:
            "Ruta personalizada",

        detalleRiasInclue2:
            "Visita a lugares seleccionados",

        detalleRiasInclue3:
            "Recomendacións gastronómicas",

        detalleRiasInclue4:
            "Asesoramento durante a experiencia",

        detalleRiasSentidosTitulo:
            "Un destino para todos os sentidos",

        detalleRiasSentidos1:
            "Percorre vilas mariñeiras, descubre praias e miradoiros e achégate á cultura e á gastronomía das Rías Baixas.",

        detalleRiasSentidos2:
            "Cada proposta pode adaptarse ao ritmo e ás preferencias das persoas que realizan a viaxe.",

        detalleRiasDuracion:
            "Día completo",

        detalleRiasPublico:
            "Parellas, familias e grupos",

        detalleRiasCtaTitulo:
            "Preparado para descubrir Galicia?",

        detalleRiasCtaTexto:
            "Cóntanos que estás buscando e crearemos unha experiencia para ti.",


        /* =================================================
           CONTACTO
        ================================================= */

        contactoDatosPersoais:
            "Datos persoais",

        contactoNome:
            "Nome *",

        contactoNomePlaceholder:
            "O teu nome",

        contactoApelidos:
            "Apelidos *",

        contactoApelidosPlaceholder:
            "Os teus apelidos",

        contactoEmail:
            "Correo electrónico *",

        contactoEmailPlaceholder:
            "exemplo@correo.com",

        contactoInfoViaxe:
            "Información sobre a viaxe ou experiencia",

        contactoTipoExperiencia:
            "Tipo de experiencia *",

        contactoSelecciona:
            "Selecciona unha opción",

        contactoOpcionDestino:
            "Destino",

        contactoOpcionExperiencia:
            "Experiencia",

        contactoOpcionOferta:
            "Oferta",

        contactoOpcionPersonalizable:
            "Personalizable",

        contactoMensaxe:
            "Mensaxe ou petición: *",

        contactoMensaxePlaceholder:
            "Pregúntanos dúbidas, cantas persoas ides ser...",

        contactoMaximoCaracteres:
            "Máximo 1000 caracteres.",

        contactoTelefono:
            "Teléfono *",

        contactoTelefonoAxuda:
            "Introduce un número de teléfono de 9 cifras.",

        contactoViaxeSonado:
            "Describe o teu viaxe soñado.",

        contactoViaxePersonalizada:
            "Describe brevemente o tipo de experiencia ou destino (personalizable):",

        contactoViaxePlaceholder:
            "Cóntanos que tipo de viaxe ou experiencia estás buscando...",

        contactoAcepto:
            "Lin e acepto a",

        contactoCamposObrigatorios:
            "* Campos obrigatorios",

        contactoEnviar:
            "Enviar",

        contactoTlf:
            "Tlf.:",


        /* =================================================
           VALIDACIÓN
        ================================================= */

        validacionTitulo:
            "Solicitude enviada",

        validacionGracias:
            "Grazas por enviar a súa solicitude. Contactaremos convosco en breve.",

        validacionAgora:
            "Que acontece agora?",

        validacionExplicacion:
            "O noso equipo revisará a información que nos enviou e responderemos a través do correo electrónico ou teléfono indicado por vostede no formulario.",

        volverInicio:
            "Volver á páxina principal",

        verExperiencias:
            "Ver experiencias",


        /* =================================================
           POLÍTICA DE PRIVACIDADE
        ================================================= */

        privacidadeTitulo:
            "Política de privacidade",

        privacidadeIntroducion:
            "En Atlántico Travel respectamos a túa privacidade e tratamos os teus datos persoais de maneira responsable, transparente e segura.",

        privacidadeResponsableTitulo:
            "1. Responsable do tratamento",

        privacidadeNomeComercial:
            "Nome comercial:",

        privacidadeTitular:
            "Titular ou razón social:",

        privacidadeDomicilio:
            "Domicilio:",

        privacidadeCorreo:
            "Correo electrónico:",

        privacidadeTelefono:
            "Teléfono:",

        privacidadeDatosTitulo:
            "2. Que datos persoais podemos recoller?",

        privacidadeDatosIntro:
            "Dependendo da forma na que interactúes con Atlántico Travel, poderemos tratar os seguintes datos:",

        privacidadeDato1:
            "Nome e apelidos.",

        privacidadeDato2:
            "Correo electrónico.",

        privacidadeDato3:
            "Número de teléfono.",

        privacidadeDato4:
            "Información facilitada voluntariamente a través dos formularios de contacto.",

        privacidadeDato5:
            "Información relacionada coa viaxe, destino ou experiencia solicitada.",

        privacidadeDato6:
            "Datos necesarios para xestionar unha reserva ou contratación.",

        privacidadeDato7:
            "Información técnica necesaria para o correcto funcionamento e seguridade da web.",

        privacidadeFinalidadesTitulo:
            "3. Para que utilizamos os teus datos?",

        privacidadeFinalidadesIntro:
            "Os datos persoais facilitados polo usuario poderán utilizarse para as seguintes finalidades:",

        privacidadeFinalidade1:
            "Atender solicitudes de información.",

        privacidadeFinalidade2:
            "Responder consultas sobre destinos, experiencias e ofertas.",

        privacidadeFinalidade3:
            "Elaborar propostas de viaxes ou experiencias personalizadas.",

        privacidadeFinalidade4:
            "Xestionar reservas ou contratacións.",

        privacidadeFinalidade5:
            "Contactar co cliente para ofrecer información relacionada coa súa solicitude.",

        privacidadeFinalidade6:
            "Xestionar posibles incidencias relacionadas cos servizos contratados.",

        privacidadeFinalidade7:
            "Cumprir obrigas legais, fiscais ou administrativas cando corresponda.",

        privacidadeBaseLegalTitulo:
            "4. Base legal para o tratamento",

        privacidadeBaseLegal1:
            "A base legal para tratar os datos persoais dependerá da relación establecida co usuario.",

        privacidadeBaseLegal2:
            "Cando o usuario envíe voluntariamente unha consulta ou solicitude de información, os datos serán tratados para poder responder e atender esa petición.",

        privacidadeBaseLegal3:
            "No caso de producirse unha contratación ou reserva, o tratamento dos datos poderá resultar necesario para xestionar e executar correctamente o servizo solicitado.",

        privacidadeBaseLegal4:
            "En determinados casos, o tratamento tamén poderá resultar necesario para cumprir obrigas legais aplicables a Atlántico Travel.",

        privacidadeConservacionTitulo:
            "5. Durante canto tempo conservamos os datos?",

        privacidadeConservacion1:
            "Os datos persoais conservaranse durante o tempo necesario para atender a finalidade para a que foron recollidos.",

        privacidadeConservacion2:
            "Cando deixen de ser necesarios, poderán conservarse debidamente bloqueados durante os prazos establecidos pola normativa para atender posibles responsabilidades legais.",

        privacidadeDestinatariosTitulo:
            "6. Con quen podemos compartir os datos?",

        privacidadeDestinatarios1:
            "Atlántico Travel non venderá nin cederá os teus datos persoais a terceiros con fins comerciais.",

        privacidadeDestinatarios2:
            "Non obstante, determinados provedores poderán acceder aos datos cando sexa necesario para prestar os servizos correspondentes.",

        privacidadeDestinatarios3:
            "Entre estes provedores poden atoparse:",

        privacidadeDestinatarios4:
            "Só se facilitarán os datos necesarios para prestar correctamente o servizo correspondente.",

        privacidadeProveedor1:
            "Provedores de aloxamento web.",

        privacidadeProveedor2:
            "Servizos informáticos.",

        privacidadeProveedor3:
            "Provedores de correo electrónico.",

        privacidadeProveedor4:
            "Plataformas de xestión de reservas.",

        privacidadeProveedor5:
            "Empresas ou profesionais encargados de prestar determinadas experiencias turísticas.",

        privacidadeProveedor6:
            "Aloxamentos, transportistas ou outros provedores necesarios para organizar a viaxe solicitada.",

        privacidadeTransferenciasTitulo:
            "7. Transferencias internacionais de datos",

        privacidadeTransferencias1:
            "No caso de empregar provedores tecnolóxicos situados fóra do Espazo Económico Europeo, Atlántico Travel adoptará as garantías necesarias esixidas pola normativa de protección de datos.",

        privacidadeTransferencias2:
            "Esta sección deberá revisarse cando se coñezan as ferramentas definitivas empregadas na web.",

        privacidadeTransferenciasPendente:
            "[PENDENTE DE REVISAR: hosting, analítica, mapas, formularios, redes sociais ou outros servizos externos]",

        privacidadeDereitosTitulo:
            "8. Cales son os teus dereitos?",

        privacidadeDereitosIntro:
            "O usuario poderá exercer, cando corresponda, os seguintes dereitos relacionados cos seus datos persoais:",

        privacidadeDereito1:
            "Acceso: coñecer que datos persoais tratamos.",

        privacidadeDereito2:
            "Rectificación: solicitar a corrección de datos incorrectos ou incompletos.",

        privacidadeDereito3:
            "Supresión: solicitar a eliminación dos datos cando corresponda.",

        privacidadeDereito4:
            "Oposición: opoñerse ao tratamento dos datos en determinados casos.",

        privacidadeDereito5:
            "Limitación: solicitar a limitación do tratamento.",

        privacidadeDereito6:
            "Portabilidade: recibir os datos persoais nun formato estruturado, cando este dereito resulte aplicable.",

        privacidadeDereito7:
            "Retirada do consentimento: retirar o consentimento prestado cando o tratamento se basee nel.",

        privacidadeExercerTitulo:
            "9. Como exercer os teus dereitos?",

        privacidadeExercer1:
            "Para exercer calquera dos dereitos indicados anteriormente, podes poñerte en contacto con Atlántico Travel a través do seguinte correo electrónico:",

        privacidadeExercer2:
            "A solicitude deberá permitir identificar correctamente á persoa que exerce o dereito e indicar claramente que dereito desexa exercer.",

        privacidadeReclamacionTitulo:
            "10. Dereito a presentar unha reclamación",

        privacidadeReclamacionTexto:
            "Se consideras que o tratamento dos teus datos persoais non se realizou conforme á normativa aplicable, podes presentar unha reclamación ante a autoridade de protección de datos competente.",

        privacidadeSeguridadeTitulo:
            "11. Seguridade dos datos",

        privacidadeSeguridade1:
            "Atlántico Travel adoptará as medidas técnicas e organizativas adecuadas para protexer os datos persoais fronte á perda, destrución, alteración, acceso non autorizado ou utilización indebida.",

        privacidadeSeguridade2:
            "Estas medidas adaptaranse ao tipo de información tratada, aos servizos utilizados e aos riscos existentes.",

        privacidadeMenoresTitulo:
            "12. Datos de menores",

        privacidadeMenores1:
            "Os formularios deste sitio web non están deseñados especificamente para recoller datos persoais de menores sen a intervención dos seus pais, nais ou representantes legais.",

        privacidadeMenores2:
            "No caso de que unha viaxe ou experiencia inclúa menores, os datos necesarios serán facilitados e xestionados polo seu representante legal cando corresponda.",

        privacidadeFormulariosTitulo:
            "13. Formularios de contacto",

        privacidadeFormularios1:
            "Cando o usuario complete un formulario de contacto, deberá facilitar unicamente os datos necesarios para realizar a súa consulta ou solicitude.",

        privacidadeFormularios2:
            "Recoméndase non introducir información especialmente sensible nos campos de texto libre salvo que sexa imprescindible para xestionar o servizo solicitado.",

        privacidadeCambiosTitulo:
            "14. Cambios na Política de Privacidade",

        privacidadeCambios1:
            "Atlántico Travel poderá modificar esta Política de Privacidade cando resulte necesario para adaptala aos cambios nos servizos ofrecidos, nas ferramentas utilizadas ou na normativa aplicable.",

        privacidadeCambios2:
            "Recoméndase revisar periodicamente esta páxina para coñecer a versión máis recente.",

        privacidadeInfoTitulo:
            "15. Información adicional",

        privacidadeInfoTexto:
            "Para obter máis información sobre o funcionamento deste sitio web podes consultar:",


        /* =================================================
           COOKIES
        ================================================= */

        cookiesTitulo:
            "Política de cookies",

        cookiesIntroducion:
            "Nesta páxina explicámosche que son as cookies, para que se utilizan e como podes xestionar as túas preferencias.",

        cookiesQueSonTitulo:
            "1. Que son as cookies?",

        cookiesQueSon1:
            "As cookies son pequenos ficheiros que poden almacenarse no dispositivo do usuario cando visita unha páxina web.",

        cookiesQueSon2:
            "Estes ficheiros permiten lembrar determinada información relacionada coa navegación e poden empregarse para garantir o correcto funcionamento da web, recordar preferencias ou analizar o uso do sitio.",

        cookiesTiposTitulo:
            "2. Que tipos de cookies utilizamos?",

        cookiesTecnicasTitulo:
            "Cookies técnicas ou necesarias",

        cookiesTecnicas1:
            "Son aquelas necesarias para permitir o correcto funcionamento, seguridade e navegación polo sitio web.",

        cookiesTecnicas2:
            "Estas cookies non se empregan con fins publicitarios nin para analizar o comportamento do usuario.",

        cookiesAnaliseTitulo:
            "Cookies de análise ou medición",

        cookiesAnalise1:
            "Atlántico Travel utiliza Google Analytics 4 como ferramenta de análise e medición.",

        cookiesAnalise2:
            "Google Analytics permite obter información estatística sobre como interactúan os usuarios coa web, por exemplo, o número de visitas, as páxinas consultadas ou a forma na que os visitantes navegan polo sitio.",

        cookiesAnalise3:
            "Esta información axúdanos a comprender o funcionamento da web e a mellorar os seus contidos, estrutura e experiencia de usuario.",

        cookiesAnalise4:
            "As cookies de Google Analytics que requiran consentimento non serán activadas ata que o usuario as acepte.",

        cookiesPropiasTerceirosTitulo:
            "3. Cookies propias e de terceiros",

        cookiesPropiasTerceirosIntro:
            "Segundo quen sexa responsable da cookie, estas poden clasificarse como propias ou de terceiros.",

        cookiesPropiasTitulo:
            "Cookies propias",

        cookiesPropiasTexto:
            "Son aquelas enviadas desde o dominio de Atlántico Travel e utilizadas para garantir o correcto funcionamento da web.",

        cookiesGoogleTitulo:
            "Cookies relacionadas con Google Analytics",

        cookiesGoogle1:
            "Atlántico Travel utiliza Google Analytics 4, un servizo proporcionado por Google.",

        cookiesGoogle2:
            "As etiquetas de Google Analytics utilizan cookies propias para distinguir usuarios e sesións e obter estatísticas sobre o uso do sitio web.",

        cookiesUtilizadasTitulo:
            "4. Cookies utilizadas en Atlántico Travel",

        cookiesTablaCookie:
            "Cookie",

        cookiesTablaProvedor:
            "Provedor",

        cookiesTablaFinalidade:
            "Finalidade",

        cookiesTablaTipo:
            "Tipo",

        cookiesTablaDuracion:
            "Duración",

        cookiesGaFinalidade:
            "Utilízase para distinguir usuarios.",

        cookiesTipoAnalitica:
            "Analítica",

        cookiesDousAnos:
            "2 anos",

        cookiesGaContainerFinalidade:
            "Utilízase para manter o estado da sesión do usuario.",

        cookiesNomeCookie:
            "O nome exacto da segunda cookie dependerá do identificador da propiedade de Google Analytics configurada en Atlántico Travel.",

        cookiesAnalyticsTitulo:
            "5. Google Analytics 4",

        cookiesAnalytics1:
            "Este sitio web utiliza Google Analytics 4 para medir e analizar de forma estatística a utilización da web.",

        cookiesAnalytics2:
            "A información obtida mediante esta ferramenta pode axudarnos a coñecer aspectos como:",

        cookiesAnalyticsDato1:
            "Número de visitantes.",

        cookiesAnalyticsDato2:
            "Páxinas máis consultadas.",

        cookiesAnalyticsDato3:
            "Duración das visitas.",

        cookiesAnalyticsDato4:
            "Dispositivo ou navegador utilizado.",

        cookiesAnalyticsDato5:
            "Forma xeral na que os usuarios navegan pola web.",

        cookiesAnalyticsConsentimento:
            "O uso de Google Analytics estará condicionado ás preferencias de consentimento seleccionadas polo usuario.",

        cookiesConsentimentoTitulo:
            "6. Consentimento para o uso de cookies",

        cookiesConsentimento1:
            "Ao acceder por primeira vez ao sitio web, mostrarase un panel de configuración de cookies.",

        cookiesConsentimento2:
            "Desde este panel o usuario poderá:",

        cookiesConsentimentoOpcion1:
            "Aceptar as cookies de análise.",

        cookiesConsentimentoOpcion2:
            "Rexeitar as cookies de análise.",

        cookiesConsentimentoOpcion3:
            "Configurar as súas preferencias.",

        cookiesConsentimento3:
            "A elección do usuario deberá respectarse e as cookies de análise non deberán activarse antes de obter o consentimento correspondente.",

        cookiesXestionConsentimentoTitulo:
            "7. Xestión do consentimento",

        cookiesXestionConsentimento1:
            "Atlántico Travel poderá utilizar Google Consent Mode para comunicar a Google Analytics as preferencias seleccionadas polo usuario.",

        cookiesXestionConsentimento2:
            "Cando o usuario non autorice as cookies de análise, o almacenamento relacionado con Analytics permanecerá desactivado segundo a configuración implementada na web.",

        cookiesXestionConsentimento3:
            "Cando o usuario acepte as cookies de análise, poderá activarse o almacenamento necesario para Google Analytics.",

        cookiesConfiguracionTitulo:
            "8. Como cambiar a configuración das cookies?",

        cookiesConfiguracion1:
            "O usuario poderá modificar posteriormente as súas preferencias relacionadas co uso de cookies.",

        cookiesConfiguracion2:
            "Para iso poderá utilizar o panel de configuración dispoñible no sitio web.",

        configurarCookies:
            "Configurar cookies",

        cookiesNavegadorTitulo:
            "9. Eliminar ou bloquear cookies desde o navegador",

        cookiesNavegador1:
            "Ademais do panel de configuración de Atlántico Travel, o usuario pode permitir, bloquear ou eliminar cookies desde a configuración do seu navegador.",

        cookiesNavegador2:
            "Estas opcións adoitan atoparse nos apartados de privacidade, seguridade ou configuración.",

        cookiesNavegador3:
            "O bloqueo de determinadas cookies técnicas poderá afectar ao correcto funcionamento dalgunhas partes do sitio web.",

        cookiesGoogleDatosTitulo:
            "10. Tratamento de datos por Google",

        cookiesGoogleDatos1:
            "Google Analytics é un servizo proporcionado por Google. O uso desta ferramenta pode implicar o tratamento de determinada información técnica relacionada coa utilización do sitio web.",

        cookiesGoogleDatos2:
            "Atlántico Travel revisará a configuración de Google Analytics e aplicará as medidas de privacidade e consentimento que correspondan.",

        cookiesActualizacionTitulo:
            "11. Actualización da Política de Cookies",

        cookiesActualizacion1:
            "Atlántico Travel poderá modificar esta Política de Cookies cando cambien as ferramentas utilizadas, a configuración de Google Analytics ou a normativa aplicable.",

        cookiesActualizacion2:
            "Recoméndase consultar periodicamente esta páxina para coñecer a versión máis recente.",

        cookiesContactoTitulo:
            "12. Contacto",

        cookiesContactoTexto:
            "Para calquera dúbida relacionada co uso de cookies neste sitio web podes poñerte en contacto con Atlántico Travel.",

        cookiesCorreoElectronico:
            "Correo electrónico:",

        cookiesInfoTitulo:
            "13. Información adicional",

        cookiesInfoTexto:
            "Podes consultar máis información relacionada coa privacidade e o funcionamento do sitio web en:",


        /* =================================================
           AVISO LEGAL
        ================================================= */

        avisoLegalTitulo:
            "Aviso legal",

        avisoLegalIntroducion:
            "Información legal relativa ao uso do sitio web de Atlántico Travel.",

        avisoDatosTitulo:
            "1. Datos identificativos",

        avisoDatosIntro:
            "En cumprimento da normativa aplicable aos servizos da sociedade da información, infórmase de que este sitio web pertence a:",

        avisoNomeComercial:
            "Nome comercial:",

        avisoTitular:
            "Titular ou razón social:",

        avisoDomicilio:
            "Domicilio:",

        avisoCorreo:
            "Correo electrónico:",

        avisoTelefono:
            "Teléfono:",

        avisoSitioWeb:
            "Sitio web:",

        avisoObxectoTitulo:
            "2. Obxecto do sitio web",

        avisoObxecto1:
            "Atlántico Travel é unha axencia orientada á promoción de destinos, viaxes e experiencias turísticas, especialmente vinculadas con Galicia.",

        avisoObxecto2:
            "A través deste sitio web preséntase información sobre destinos, actividades, experiencias, ofertas e outros servizos relacionados co turismo.",

        avisoObxecto3:
            "O usuario tamén poderá solicitar información mediante os medios de contacto habilitados na web.",

        avisoCondicionsTitulo:
            "3. Condicións de acceso e uso",

        avisoCondicions1:
            "O acceso a este sitio web implica a aceptación das presentes condicións de uso.",

        avisoCondicions2:
            "O usuario comprométese a facer un uso adecuado dos contidos e servizos ofrecidos e a non empregalos para actividades ilícitas, fraudulentas ou que poidan provocar danos a Atlántico Travel ou a terceiros.",

        avisoInformacionTitulo:
            "4. Información sobre destinos, experiencias e prezos",

        avisoInformacion1:
            "Atlántico Travel procura que a información publicada sobre destinos, experiencias, duracións, prezos e dispoñibilidade sexa clara e estea actualizada.",

        avisoInformacion2:
            "Non obstante, determinados prezos, horarios ou condicións poderán variar segundo a tempada, dispoñibilidade, número de participantes ou condicións establecidas polos provedores dos servizos turísticos.",

        avisoInformacion3:
            "Antes de realizar unha contratación definitiva, facilitaranse ao cliente as condicións concretas correspondentes ao servizo solicitado.",

        avisoPropiedadeTitulo:
            "5. Propiedade intelectual e industrial",

        avisoPropiedade1:
            "Os textos, deseños, logotipos, elementos gráficos, fotografías, vídeos e demais contidos propios presentes neste sitio web están protexidos pola normativa de propiedade intelectual e industrial.",

        avisoPropiedade2:
            "Non está permitida a súa reprodución, distribución, transformación ou utilización con fins comerciais sen autorización previa do seu titular, salvo nos supostos permitidos pola lexislación.",

        avisoPropiedade3:
            "As fotografías ou recursos pertencentes a terceiros conservarán os dereitos correspondentes aos seus respectivos titulares.",

        avisoResponsabilidadeTitulo:
            "6. Responsabilidade",

        avisoResponsabilidade1:
            "Atlántico Travel adopta medidas razoables para manter o correcto funcionamento e seguridade deste sitio web.",

        avisoResponsabilidade2:
            "Con todo, non pode garantir a ausencia absoluta de interrupcións, erros técnicos ou incidencias derivadas de causas alleas ao seu control.",

        avisoLigazonsTitulo:
            "7. Ligazóns externas",

        avisoLigazons1:
            "Este sitio web poderá incluír ligazóns a páxinas, plataformas ou servizos de terceiros.",

        avisoLigazons2:
            "Atlántico Travel non controla necesariamente os contidos, condicións ou políticas de privacidade destes sitios externos.",

        avisoLigazons3:
            "Recoméndase revisar as condicións legais de cada servizo antes da súa utilización.",

        avisoProteccionTitulo:
            "8. Protección de datos persoais",

        avisoProteccion1:
            "O tratamento dos datos persoais obtidos mediante este sitio web realizarase de acordo coa normativa aplicable en materia de protección de datos.",

        avisoProteccion2:
            "Pode consultar información máis detallada na nosa",

        avisoCookiesTitulo:
            "9. Cookies",

        avisoCookies1:
            "Este sitio web poderá empregar cookies técnicas e, cando corresponda, outras categorías de cookies.",

        avisoCookies2:
            "Pode consultar toda a información na nosa",

        avisoModificacionsTitulo:
            "10. Modificacións",

        avisoModificacionsTexto:
            "Atlántico Travel poderá modificar este Aviso Legal cando resulte necesario para adaptalo a cambios no sitio web, nos servizos ofrecidos ou na normativa aplicable.",

        avisoLexislacionTitulo:
            "11. Lexislación aplicable",

        avisoLexislacionTexto:
            "As presentes condicións rexeranse pola lexislación española aplicable.",


        /* ---------- FOOTER ---------- */

        lema:
            "Galicia para vivila.",

        contactar:
            "Contacta con nós",

        footerTelefono:
            "Teléfono:",

        footerCorreo:
            "Correo:",

        footerLocalizacion:
            "Localización:",

        siguenos:
            "Síguenos",

        avisoLegal:
            "Aviso legal",

        privacidade:
            "Política de privacidade",

        cookies:
            "Política de cookies",

        ultimaActualizacion:
            "Última actualización:",

        dereitosReservados:
            "© 2026 Atlántico Travel. Todos os dereitos reservados."

    },



    /* =====================================================
       CASTELÁN
    ===================================================== */

    es: {

        /* ---------- NAVEGACIÓN ---------- */

        inicio: "Inicio",
        sobreNos: "Sobre nosotros",
        destinos: "Destinos",
        experiencias: "Experiencias",
        ofertas: "Ofertas",
        contacto: "Contacto",
        solicitar: "Solicita información",

        porPersoa: "/ persona",
        duracion: "Duración",
        prezo: "Precio",
        localizacion: "Localización",
        desde: "Desde",
        zona: "Zona",

        detalleExperiencia: "Experiencia",
        detalleDestino: "Destino",
        detalleInformacion: "Información",
        detalleInclueTitulo: "¿Qué incluye?",
        detalleInformacionPractica: "Información práctica",
        detalleParaQuen: "¿Para quién?",


        /* ---------- INDEX ---------- */

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

        cabaloTitulo:
            "Ruta a caballo",

        cabaloSubtitulo:
            "Senderismo a caballo",

        cabaloTexto:
            "Recorrer a caballo la Costa da Morte permite descubrir lugares perfectos para desconectar.",

        cabaloDuracion:
            "Duración: 3 horas con comida incluida.",

        groveTitulo:
            "O Grove, paraíso gastronómico",

        groveSubtitulo:
            "Gastronomía con vistas",

        groveTexto:
            "Disfrutar de la gastronomía gallega en una terraza es una experiencia que no te puedes perder. Incluye comida y bebida durante una cena para contemplar la puesta de sol.",

        exploraExperiencias:
            "Explora experiencias",

        fraseMarca:
            "Atlántico Travel · Viajes con alma",


        /* ---------- SOBRE NOSOTROS ---------- */

        sobreNosSubtitulo:
            "Galicia no solo se visita. Se vive.",

        sobreNosTexto1:
            "Atlántico Travel nace en 2026 para crear una forma diferente de descubrir Galicia. Diseñamos viajes y experiencias personalizadas que conectan personas, naturaleza, cultura, gastronomía y aventura.",

        sobreNosTexto2:
            "Desde navegar por nuestras rías, hacer kayak o recorrer montes a caballo, hasta descubrir la Costa da Morte, brindar con un Albariño o disfrutar de una mariscada frente al Atlántico.",

        valoresTitulo:
            "Nuestros valores",

        valoresLista:
            "Confianza · Cercanía · Autenticidad · Calidad · Personalización · Respeto por nuestra tierra",

        valoresTexto:
            "Apostamos por un turismo cercano y responsable, colaborando con el territorio y creando experiencias adaptadas a cada viajero.",

        valoresFrase:
            "No vendemos destinos. Creamos recuerdos.",


        /* ---------- DESTINOS ---------- */

        destinosTitulo:
            "Destinos",

        destinosIntroTexto:
            "Cada viaje, una historia por descubrir.",

        costaTextoDestinos:
            "Descubre la Galicia más salvaje, entre acantilados, faros y playas donde los pueblos marineros conservan su esencia más auténtica.",

        costaDuracion:
            "3 días / 2 noches",

        destinosFrase:
            "\"Donde cada camino deja un recuerdo.\"",


        /* ---------- EXPERIENCIAS ---------- */

        experienciasTitulo:
            "Experiencias",

        experienciasIntroTexto:
            "Experiencias que conectan con nuestra tierra",

        kayakUllaTitulo:
            "Kayak en el río Ulla",

        kayakUllaTexto:
            "Descubre Galicia desde el agua, remando entre montes, naturaleza y paisajes únicos en una experiencia llena de aventura y tranquilidad.",

        kayakUllaDuracion:
            "2 horas y media",

        rutaCabalarTitulo:
            "Ruta a caballo",

        rutaCabalarTexto:
            "Recorre bosques y senderos gallegos a caballo, conectando con la naturaleza en una experiencia tranquila, divertida y diferente.",

        rutaCabalarDuracion:
            "2 horas",

        experienciasFrase:
            "“Galicia, una experiencia para sentir.”",


        /* ---------- OFERTAS ---------- */

        ofertasTitulo:
            "Ofertas",

        ofertasIntroTexto:
            "Oferta para navegar por los Cañones del río Sil",

        ofertaSilTitulo:
            "Oferta para navegar por los Cañones del río Sil.",

        ofertaSilTexto:
            "Descubre la Ribeira Sacra desde el agua navegando entre impresionantes paredes rocosas, viñedos en pendiente y paisajes únicos. Una experiencia tranquila y espectacular para disfrutar de una de las vistas más hermosas de Galicia.",

        ofertaSilDuracion:
            "1,5 horas",

        ofertasFrase:
            "\"Viaja · Descubre · Siente\"",


        /* ---------- DETALLE KAYAK ---------- */

        detalleKayakTitulo:
            "Kayak en la Ría de Aldán",

        detalleKayakSubtitulo:
            "Descubre la costa gallega desde una perspectiva diferente.",

        detalleKayakPresentacionTitulo:
            "Navega por la Ría de Aldán",

        detalleKayakPresentacion1:
            "Descubre una de las rías más especiales de Galicia navegando en kayak por las tranquilas aguas de la Ría de Aldán.",

        detalleKayakPresentacion2:
            "Una experiencia para disfrutar del mar, descubrir pequeñas calas y contemplar la costa gallega desde una perspectiva diferente.",

        detalleKayakDuracion:
            "2,5 horas",

        detalleKayakInclue1:
            "Kayak y remo",

        detalleKayakInclue2:
            "Chaleco salvavidas",

        detalleKayakInclue3:
            "Instrucciones antes de la salida",

        detalleKayakInclue4:
            "Material necesario para la actividad",

        detalleKayakAventuraTitulo:
            "Una aventura sobre el mar",

        detalleKayakAventura1:
            "Navega por aguas tranquilas y descubre pequeñas calas y rincones de la costa a los que solo se puede llegar desde el mar.",

        detalleKayakAventura2:
            "Una forma diferente de conectar con la naturaleza y disfrutar del paisaje marino gallego.",

        detalleKayakPublico:
            "Parejas, amigos y grupos",

        detalleKayakCtaTitulo:
            "¿Preparado para vivir la aventura?",

        detalleKayakCtaTexto:
            "Cuéntanos qué estás buscando y te ayudaremos a preparar tu experiencia.",


        /* ---------- DETALLE CABALLO ---------- */

        detalleCabaloTitulo:
            "Ruta a caballo",

        detalleCabaloSubtitulo:
            "Descubre Galicia al ritmo de la naturaleza.",

        detalleCabaloPresentacionTitulo:
            "Galicia a caballo",

        detalleCabaloPresentacion1:
            "Descubre algunos de los paisajes más especiales de Galicia en una ruta a caballo rodeada de naturaleza y tranquilidad.",

        detalleCabaloPresentacion2:
            "Una experiencia diferente para desconectar, disfrutar del entorno y recorrer caminos y paisajes gallegos de una forma única.",

        detalleCabaloDuracion:
            "3 horas",

        detalleCabaloInclue1:
            "Caballo adaptado al nivel",

        detalleCabaloInclue2:
            "Casco de protección",

        detalleCabaloInclue3:
            "Acompañamiento durante la ruta",

        detalleCabaloInclue4:
            "Comida incluida",

        detalleCabaloDescubreTitulo:
            "Naturaleza a otro ritmo",

        detalleCabaloDescubre1:
            "Recorre caminos rodeados de naturaleza y descubre paisajes de la Costa da Morte desde una perspectiva completamente diferente.",

        detalleCabaloDescubre2:
            "La ruta permite disfrutar de la tranquilidad del entorno y acercarse al paisaje gallego en una experiencia pensada para desconectar y vivir el momento.",

        detalleCabaloPublico:
            "Parejas, amigos y grupos",

        detalleCabaloCtaTitulo:
            "¿Preparado para vivir la experiencia?",

        detalleCabaloCtaTexto:
            "Cuéntanos qué estás buscando y te ayudaremos a preparar tu experiencia.",


        /* ---------- COSTA DA MORTE ---------- */

        detalleCostaTitulo:
            "Costa da Morte",

        detalleCostaSubtitulo:
            "Naturaleza salvaje, mar y tradición en el corazón de la costa gallega.",

        detalleCostaPresentacionTitulo:
            "Descubre la Costa da Morte",

        detalleCostaPresentacion1:
            "El Atlántico, los faros, las playas y las villas marineras convierten la Costa da Morte en uno de los destinos más especiales de Galicia.",

        detalleCostaPresentacion2:
            "Descubre paisajes únicos, tradiciones y rincones llenos de historia en una ruta pensada para conocer una Galicia auténtica e inolvidable.",

        detalleCostaInclue1:
            "Ruta por la Costa da Morte",

        detalleCostaInclue2:
            "Visita a faros y miradores",

        detalleCostaInclue3:
            "Recomendaciones gastronómicas",

        detalleCostaInclue4:
            "Ruta adaptada al grupo",

        detalleCostaHistoriaTitulo:
            "Una costa llena de historia",

        detalleCostaHistoria1:
            "Recorre algunos de los lugares más emblemáticos de la Costa da Morte, entre faros, playas, acantilados y pequeñas villas marineras.",

        detalleCostaHistoria2:
            "Cada ruta puede adaptarse al ritmo y a las preferencias de las personas que realizan el viaje para descubrir esta parte de Galicia de una manera diferente.",

        detalleCostaDuracion:
            "Día completo",

        detalleCostaPublico:
            "Parejas, familias y grupos",

        detalleCostaCtaTitulo:
            "¿Preparado para descubrir Galicia?",

        detalleCostaCtaTexto:
            "Cuéntanos qué estás buscando y crearemos una experiencia para ti.",


        /* ---------- RÍAS BAIXAS ---------- */

        detalleRiasTitulo:
            "Rías Baixas",

        detalleRiasSubtitulo:
            "Galicia para saborearla, descubrirla y vivirla.",

        detalleRiasPresentacionTitulo:
            "Descubre las Rías Baixas",

        detalleRiasPresentacion1:
            "Mar, naturaleza, villas marineras y una gastronomía que convierten cada visita en una experiencia diferente.",

        detalleRiasPresentacion2:
            "Descubre algunos de los lugares más especiales de las Rías Baixas y vive Galicia de una manera cercana y personalizada.",

        detalleRiasInclue1:
            "Ruta personalizada",

        detalleRiasInclue2:
            "Visita a lugares seleccionados",

        detalleRiasInclue3:
            "Recomendaciones gastronómicas",

        detalleRiasInclue4:
            "Asesoramiento durante la experiencia",

        detalleRiasSentidosTitulo:
            "Un destino para todos los sentidos",

        detalleRiasSentidos1:
            "Recorre villas marineras, descubre playas y miradores y acércate a la cultura y a la gastronomía de las Rías Baixas.",

        detalleRiasSentidos2:
            "Cada propuesta puede adaptarse al ritmo y a las preferencias de las personas que realizan el viaje.",

        detalleRiasDuracion:
            "Día completo",

        detalleRiasPublico:
            "Parejas, familias y grupos",

        detalleRiasCtaTitulo:
            "¿Preparado para descubrir Galicia?",

        detalleRiasCtaTexto:
            "Cuéntanos qué estás buscando y crearemos una experiencia para ti.",


        /* ---------- CONTACTO ---------- */

        contactoDatosPersoais:
            "Datos personales",

        contactoNome:
            "Nombre *",

        contactoNomePlaceholder:
            "Tu nombre",

        contactoApelidos:
            "Apellidos *",

        contactoApelidosPlaceholder:
            "Tus apellidos",

        contactoEmail:
            "Correo electrónico *",

        contactoEmailPlaceholder:
            "ejemplo@correo.com",

        contactoInfoViaxe:
            "Información sobre el viaje o experiencia",

        contactoTipoExperiencia:
            "Tipo de experiencia *",

        contactoSelecciona:
            "Selecciona una opción",

        contactoOpcionDestino:
            "Destino",

        contactoOpcionExperiencia:
            "Experiencia",

        contactoOpcionOferta:
            "Oferta",

        contactoOpcionPersonalizable:
            "Personalizable",

        contactoMensaxe:
            "Mensaje o petición: *",

        contactoMensaxePlaceholder:
            "Pregúntanos tus dudas, cuántas personas vais a ser...",

        contactoMaximoCaracteres:
            "Máximo 1000 caracteres.",

        contactoTelefono:
            "Teléfono *",

        contactoTelefonoAxuda:
            "Introduce un número de teléfono de 9 cifras.",

        contactoViaxeSonado:
            "Describe tu viaje soñado.",

        contactoViaxePersonalizada:
            "Describe brevemente el tipo de experiencia o destino (personalizable):",

        contactoViaxePlaceholder:
            "Cuéntanos qué tipo de viaje o experiencia estás buscando...",

        contactoAcepto:
            "He leído y acepto la",

        contactoCamposObrigatorios:
            "* Campos obligatorios",

        contactoEnviar:
            "Enviar",

        contactoTlf:
            "Tlf.:",


        /* ---------- VALIDACIÓN ---------- */

        validacionTitulo:
            "Solicitud enviada",

        validacionGracias:
            "Gracias por enviar su solicitud. Contactaremos con usted en breve.",

        validacionAgora:
            "¿Qué ocurre ahora?",

        validacionExplicacion:
            "Nuestro equipo revisará la información que nos ha enviado y responderemos a través del correo electrónico o teléfono indicado en el formulario.",

        volverInicio:
            "Volver a la página principal",

        verExperiencias:
            "Ver experiencias",


        /* ---------- PRIVACIDAD ---------- */

        privacidadeTitulo:
            "Política de privacidad",

        privacidadeIntroducion:
            "En Atlántico Travel respetamos tu privacidad y tratamos tus datos personales de manera responsable, transparente y segura.",

        privacidadeResponsableTitulo:
            "1. Responsable del tratamiento",

        privacidadeNomeComercial:
            "Nombre comercial:",

        privacidadeTitular:
            "Titular o razón social:",

        privacidadeDomicilio:
            "Domicilio:",

        privacidadeCorreo:
            "Correo electrónico:",

        privacidadeTelefono:
            "Teléfono:",

        privacidadeDatosTitulo:
            "2. ¿Qué datos personales podemos recoger?",

        privacidadeDatosIntro:
            "Dependiendo de la forma en la que interactúes con Atlántico Travel, podremos tratar los siguientes datos:",

        privacidadeDato1:
            "Nombre y apellidos.",

        privacidadeDato2:
            "Correo electrónico.",

        privacidadeDato3:
            "Número de teléfono.",

        privacidadeDato4:
            "Información facilitada voluntariamente a través de los formularios de contacto.",

        privacidadeDato5:
            "Información relacionada con el viaje, destino o experiencia solicitada.",

        privacidadeDato6:
            "Datos necesarios para gestionar una reserva o contratación.",

        privacidadeDato7:
            "Información técnica necesaria para el correcto funcionamiento y seguridad de la web.",

        privacidadeFinalidadesTitulo:
            "3. ¿Para qué utilizamos tus datos?",

        privacidadeFinalidadesIntro:
            "Los datos personales facilitados por el usuario podrán utilizarse para las siguientes finalidades:",

        privacidadeFinalidade1:
            "Atender solicitudes de información.",

        privacidadeFinalidade2:
            "Responder consultas sobre destinos, experiencias y ofertas.",

        privacidadeFinalidade3:
            "Elaborar propuestas de viajes o experiencias personalizadas.",

        privacidadeFinalidade4:
            "Gestionar reservas o contrataciones.",

        privacidadeFinalidade5:
            "Contactar con el cliente para ofrecer información relacionada con su solicitud.",

        privacidadeFinalidade6:
            "Gestionar posibles incidencias relacionadas con los servicios contratados.",

        privacidadeFinalidade7:
            "Cumplir obligaciones legales, fiscales o administrativas cuando corresponda.",

        privacidadeBaseLegalTitulo:
            "4. Base legal para el tratamiento",

        privacidadeBaseLegal1:
            "La base legal para tratar los datos personales dependerá de la relación establecida con el usuario.",

        privacidadeBaseLegal2:
            "Cuando el usuario envíe voluntariamente una consulta o solicitud de información, los datos serán tratados para poder responder y atender dicha petición.",

        privacidadeBaseLegal3:
            "En caso de producirse una contratación o reserva, el tratamiento de los datos podrá resultar necesario para gestionar y ejecutar correctamente el servicio solicitado.",

        privacidadeBaseLegal4:
            "En determinados casos, el tratamiento también podrá resultar necesario para cumplir obligaciones legales aplicables a Atlántico Travel.",

        privacidadeConservacionTitulo:
            "5. ¿Durante cuánto tiempo conservamos los datos?",

        privacidadeConservacion1:
            "Los datos personales se conservarán durante el tiempo necesario para atender la finalidad para la que fueron recogidos.",

        privacidadeConservacion2:
            "Cuando dejen de ser necesarios, podrán conservarse debidamente bloqueados durante los plazos establecidos por la normativa para atender posibles responsabilidades legales.",

        privacidadeDestinatariosTitulo:
            "6. ¿Con quién podemos compartir los datos?",

        privacidadeDestinatarios1:
            "Atlántico Travel no venderá ni cederá tus datos personales a terceros con fines comerciales.",

        privacidadeDestinatarios2:
            "No obstante, determinados proveedores podrán acceder a los datos cuando sea necesario para prestar los servicios correspondientes.",

        privacidadeDestinatarios3:
            "Entre estos proveedores pueden encontrarse:",

        privacidadeDestinatarios4:
            "Solo se facilitarán los datos necesarios para prestar correctamente el servicio correspondiente.",

        privacidadeProveedor1:
            "Proveedores de alojamiento web.",

        privacidadeProveedor2:
            "Servicios informáticos.",

        privacidadeProveedor3:
            "Proveedores de correo electrónico.",

        privacidadeProveedor4:
            "Plataformas de gestión de reservas.",

        privacidadeProveedor5:
            "Empresas o profesionales encargados de prestar determinadas experiencias turísticas.",

        privacidadeProveedor6:
            "Alojamientos, transportistas u otros proveedores necesarios para organizar el viaje solicitado.",

        privacidadeTransferenciasTitulo:
            "7. Transferencias internacionales de datos",

        privacidadeTransferencias1:
            "En caso de utilizar proveedores tecnológicos situados fuera del Espacio Económico Europeo, Atlántico Travel adoptará las garantías necesarias exigidas por la normativa de protección de datos.",

        privacidadeTransferencias2:
            "Esta sección deberá revisarse cuando se conozcan las herramientas definitivas utilizadas en la web.",

        privacidadeTransferenciasPendente:
            "[PENDIENTE DE REVISAR: hosting, analítica, mapas, formularios, redes sociales u otros servicios externos]",

        privacidadeDereitosTitulo:
            "8. ¿Cuáles son tus derechos?",

        privacidadeDereitosIntro:
            "El usuario podrá ejercer, cuando corresponda, los siguientes derechos relacionados con sus datos personales:",

        privacidadeDereito1:
            "Acceso: conocer qué datos personales tratamos.",

        privacidadeDereito2:
            "Rectificación: solicitar la corrección de datos incorrectos o incompletos.",

        privacidadeDereito3:
            "Supresión: solicitar la eliminación de los datos cuando corresponda.",

        privacidadeDereito4:
            "Oposición: oponerse al tratamiento de los datos en determinados casos.",

        privacidadeDereito5:
            "Limitación: solicitar la limitación del tratamiento.",

        privacidadeDereito6:
            "Portabilidad: recibir los datos personales en un formato estructurado, cuando este derecho resulte aplicable.",

        privacidadeDereito7:
            "Retirada del consentimiento: retirar el consentimiento prestado cuando el tratamiento se base en él.",

        privacidadeExercerTitulo:
            "9. ¿Cómo ejercer tus derechos?",

        privacidadeExercer1:
            "Para ejercer cualquiera de los derechos indicados anteriormente, puedes ponerte en contacto con Atlántico Travel a través del siguiente correo electrónico:",

        privacidadeExercer2:
            "La solicitud deberá permitir identificar correctamente a la persona que ejerce el derecho e indicar claramente qué derecho desea ejercer.",

        privacidadeReclamacionTitulo:
            "10. Derecho a presentar una reclamación",

        privacidadeReclamacionTexto:
            "Si consideras que el tratamiento de tus datos personales no se ha realizado conforme a la normativa aplicable, puedes presentar una reclamación ante la autoridad de protección de datos competente.",

        privacidadeSeguridadeTitulo:
            "11. Seguridad de los datos",

        privacidadeSeguridade1:
            "Atlántico Travel adoptará las medidas técnicas y organizativas adecuadas para proteger los datos personales frente a la pérdida, destrucción, alteración, acceso no autorizado o utilización indebida.",

        privacidadeSeguridade2:
            "Estas medidas se adaptarán al tipo de información tratada, a los servicios utilizados y a los riesgos existentes.",

        privacidadeMenoresTitulo:
            "12. Datos de menores",

        privacidadeMenores1:
            "Los formularios de este sitio web no están diseñados específicamente para recoger datos personales de menores sin la intervención de sus padres, madres o representantes legales.",

        privacidadeMenores2:
            "En caso de que un viaje o experiencia incluya menores, los datos necesarios serán facilitados y gestionados por su representante legal cuando corresponda.",

        privacidadeFormulariosTitulo:
            "13. Formularios de contacto",

        privacidadeFormularios1:
            "Cuando el usuario complete un formulario de contacto, deberá facilitar únicamente los datos necesarios para realizar su consulta o solicitud.",

        privacidadeFormularios2:
            "Se recomienda no introducir información especialmente sensible en los campos de texto libre salvo que sea imprescindible para gestionar el servicio solicitado.",

        privacidadeCambiosTitulo:
            "14. Cambios en la Política de Privacidad",

        privacidadeCambios1:
            "Atlántico Travel podrá modificar esta Política de Privacidad cuando resulte necesario para adaptarla a los cambios en los servicios ofrecidos, en las herramientas utilizadas o en la normativa aplicable.",

        privacidadeCambios2:
            "Se recomienda revisar periódicamente esta página para conocer la versión más reciente.",

        privacidadeInfoTitulo:
            "15. Información adicional",

        privacidadeInfoTexto:
            "Para obtener más información sobre el funcionamiento de este sitio web puedes consultar:",


        /* ---------- COOKIES ---------- */

        cookiesTitulo:
            "Política de cookies",

        cookiesIntroducion:
            "En esta página te explicamos qué son las cookies, para qué se utilizan y cómo puedes gestionar tus preferencias.",

        cookiesQueSonTitulo:
            "1. ¿Qué son las cookies?",

        cookiesQueSon1:
            "Las cookies son pequeños archivos que pueden almacenarse en el dispositivo del usuario cuando visita una página web.",

        cookiesQueSon2:
            "Estos archivos permiten recordar determinada información relacionada con la navegación y pueden utilizarse para garantizar el correcto funcionamiento de la web, recordar preferencias o analizar el uso del sitio.",

        cookiesTiposTitulo:
            "2. ¿Qué tipos de cookies utilizamos?",

        cookiesTecnicasTitulo:
            "Cookies técnicas o necesarias",

        cookiesTecnicas1:
            "Son aquellas necesarias para permitir el correcto funcionamiento, seguridad y navegación por el sitio web.",

        cookiesTecnicas2:
            "Estas cookies no se utilizan con fines publicitarios ni para analizar el comportamiento del usuario.",

        cookiesAnaliseTitulo:
            "Cookies de análisis o medición",

        cookiesAnalise1:
            "Atlántico Travel utiliza Google Analytics 4 como herramienta de análisis y medición.",

        cookiesAnalise2:
            "Google Analytics permite obtener información estadística sobre cómo interactúan los usuarios con la web, por ejemplo, el número de visitas, las páginas consultadas o la forma en la que los visitantes navegan por el sitio.",

        cookiesAnalise3:
            "Esta información nos ayuda a comprender el funcionamiento de la web y a mejorar sus contenidos, estructura y experiencia de usuario.",

        cookiesAnalise4:
            "Las cookies de Google Analytics que requieran consentimiento no serán activadas hasta que el usuario las acepte.",

        cookiesPropiasTerceirosTitulo:
            "3. Cookies propias y de terceros",

        cookiesPropiasTerceirosIntro:
            "Según quién sea responsable de la cookie, estas pueden clasificarse como propias o de terceros.",

        cookiesPropiasTitulo:
            "Cookies propias",

        cookiesPropiasTexto:
            "Son aquellas enviadas desde el dominio de Atlántico Travel y utilizadas para garantizar el correcto funcionamiento de la web.",

        cookiesGoogleTitulo:
            "Cookies relacionadas con Google Analytics",

        cookiesGoogle1:
            "Atlántico Travel utiliza Google Analytics 4, un servicio proporcionado por Google.",

        cookiesGoogle2:
            "Las etiquetas de Google Analytics utilizan cookies propias para distinguir usuarios y sesiones y obtener estadísticas sobre el uso del sitio web.",

        cookiesUtilizadasTitulo:
            "4. Cookies utilizadas en Atlántico Travel",

        cookiesTablaCookie:
            "Cookie",

        cookiesTablaProvedor:
            "Proveedor",

        cookiesTablaFinalidade:
            "Finalidad",

        cookiesTablaTipo:
            "Tipo",

        cookiesTablaDuracion:
            "Duración",

        cookiesGaFinalidade:
            "Se utiliza para distinguir usuarios.",

        cookiesTipoAnalitica:
            "Analítica",

        cookiesDousAnos:
            "2 años",

        cookiesGaContainerFinalidade:
            "Se utiliza para mantener el estado de la sesión del usuario.",

        cookiesNomeCookie:
            "El nombre exacto de la segunda cookie dependerá del identificador de la propiedad de Google Analytics configurada en Atlántico Travel.",

        cookiesAnalyticsTitulo:
            "5. Google Analytics 4",

        cookiesAnalytics1:
            "Este sitio web utiliza Google Analytics 4 para medir y analizar de forma estadística la utilización de la web.",

        cookiesAnalytics2:
            "La información obtenida mediante esta herramienta puede ayudarnos a conocer aspectos como:",

        cookiesAnalyticsDato1:
            "Número de visitantes.",

        cookiesAnalyticsDato2:
            "Páginas más consultadas.",

        cookiesAnalyticsDato3:
            "Duración de las visitas.",

        cookiesAnalyticsDato4:
            "Dispositivo o navegador utilizado.",

        cookiesAnalyticsDato5:
            "Forma general en la que los usuarios navegan por la web.",

        cookiesAnalyticsConsentimento:
            "El uso de Google Analytics estará condicionado a las preferencias de consentimiento seleccionadas por el usuario.",

        cookiesConsentimentoTitulo:
            "6. Consentimiento para el uso de cookies",

        cookiesConsentimento1:
            "Al acceder por primera vez al sitio web, se mostrará un panel de configuración de cookies.",

        cookiesConsentimento2:
            "Desde este panel el usuario podrá:",

        cookiesConsentimentoOpcion1:
            "Aceptar las cookies de análisis.",

        cookiesConsentimentoOpcion2:
            "Rechazar las cookies de análisis.",

        cookiesConsentimentoOpcion3:
            "Configurar sus preferencias.",

        cookiesConsentimento3:
            "La elección del usuario deberá respetarse y las cookies de análisis no deberán activarse antes de obtener el consentimiento correspondiente.",

        cookiesXestionConsentimentoTitulo:
            "7. Gestión del consentimiento",

        cookiesXestionConsentimento1:
            "Atlántico Travel podrá utilizar Google Consent Mode para comunicar a Google Analytics las preferencias seleccionadas por el usuario.",

        cookiesXestionConsentimento2:
            "Cuando el usuario no autorice las cookies de análisis, el almacenamiento relacionado con Analytics permanecerá desactivado según la configuración implementada en la web.",

        cookiesXestionConsentimento3:
            "Cuando el usuario acepte las cookies de análisis, podrá activarse el almacenamiento necesario para Google Analytics.",

        cookiesConfiguracionTitulo:
            "8. ¿Cómo cambiar la configuración de las cookies?",

        cookiesConfiguracion1:
            "El usuario podrá modificar posteriormente sus preferencias relacionadas con el uso de cookies.",

        cookiesConfiguracion2:
            "Para ello podrá utilizar el panel de configuración disponible en el sitio web.",

        configurarCookies:
            "Configurar cookies",

        cookiesNavegadorTitulo:
            "9. Eliminar o bloquear cookies desde el navegador",

        cookiesNavegador1:
            "Además del panel de configuración de Atlántico Travel, el usuario puede permitir, bloquear o eliminar cookies desde la configuración de su navegador.",

        cookiesNavegador2:
            "Estas opciones suelen encontrarse en los apartados de privacidad, seguridad o configuración.",

        cookiesNavegador3:
            "El bloqueo de determinadas cookies técnicas podrá afectar al correcto funcionamiento de algunas partes del sitio web.",

        cookiesGoogleDatosTitulo:
            "10. Tratamiento de datos por Google",

        cookiesGoogleDatos1:
            "Google Analytics es un servicio proporcionado por Google. El uso de esta herramienta puede implicar el tratamiento de determinada información técnica relacionada con la utilización del sitio web.",

        cookiesGoogleDatos2:
            "Atlántico Travel revisará la configuración de Google Analytics y aplicará las medidas de privacidad y consentimiento que correspondan.",

        cookiesActualizacionTitulo:
            "11. Actualización de la Política de Cookies",

        cookiesActualizacion1:
            "Atlántico Travel podrá modificar esta Política de Cookies cuando cambien las herramientas utilizadas, la configuración de Google Analytics o la normativa aplicable.",

        cookiesActualizacion2:
            "Se recomienda consultar periódicamente esta página para conocer la versión más reciente.",

        cookiesContactoTitulo:
            "12. Contacto",

        cookiesContactoTexto:
            "Para cualquier duda relacionada con el uso de cookies en este sitio web puedes ponerte en contacto con Atlántico Travel.",

        cookiesCorreoElectronico:
            "Correo electrónico:",

        cookiesInfoTitulo:
            "13. Información adicional",

        cookiesInfoTexto:
            "Puedes consultar más información relacionada con la privacidad y el funcionamiento del sitio web en:",


        /* ---------- AVISO LEGAL ---------- */

        avisoLegalTitulo:
            "Aviso legal",

        avisoLegalIntroducion:
            "Información legal relativa al uso del sitio web de Atlántico Travel.",

        avisoDatosTitulo:
            "1. Datos identificativos",

        avisoDatosIntro:
            "En cumplimiento de la normativa aplicable a los servicios de la sociedad de la información, se informa de que este sitio web pertenece a:",

        avisoNomeComercial:
            "Nombre comercial:",

        avisoTitular:
            "Titular o razón social:",

        avisoDomicilio:
            "Domicilio:",

        avisoCorreo:
            "Correo electrónico:",

        avisoTelefono:
            "Teléfono:",

        avisoSitioWeb:
            "Sitio web:",

        avisoObxectoTitulo:
            "2. Objeto del sitio web",

        avisoObxecto1:
            "Atlántico Travel es una agencia orientada a la promoción de destinos, viajes y experiencias turísticas, especialmente vinculadas con Galicia.",

        avisoObxecto2:
            "A través de este sitio web se presenta información sobre destinos, actividades, experiencias, ofertas y otros servicios relacionados con el turismo.",

        avisoObxecto3:
            "El usuario también podrá solicitar información mediante los medios de contacto habilitados en la web.",

        avisoCondicionsTitulo:
            "3. Condiciones de acceso y uso",

        avisoCondicions1:
            "El acceso a este sitio web implica la aceptación de las presentes condiciones de uso.",

        avisoCondicions2:
            "El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos y a no utilizarlos para actividades ilícitas, fraudulentas o que puedan provocar daños a Atlántico Travel o a terceros.",

        avisoInformacionTitulo:
            "4. Información sobre destinos, experiencias y precios",

        avisoInformacion1:
            "Atlántico Travel procura que la información publicada sobre destinos, experiencias, duraciones, precios y disponibilidad sea clara y esté actualizada.",

        avisoInformacion2:
            "No obstante, determinados precios, horarios o condiciones podrán variar según la temporada, disponibilidad, número de participantes o condiciones establecidas por los proveedores de los servicios turísticos.",

        avisoInformacion3:
            "Antes de realizar una contratación definitiva, se facilitarán al cliente las condiciones concretas correspondientes al servicio solicitado.",

        avisoPropiedadeTitulo:
            "5. Propiedad intelectual e industrial",

        avisoPropiedade1:
            "Los textos, diseños, logotipos, elementos gráficos, fotografías, vídeos y demás contenidos propios presentes en este sitio web están protegidos por la normativa de propiedad intelectual e industrial.",

        avisoPropiedade2:
            "No está permitida su reproducción, distribución, transformación o utilización con fines comerciales sin autorización previa de su titular, salvo en los supuestos permitidos por la legislación.",

        avisoPropiedade3:
            "Las fotografías o recursos pertenecientes a terceros conservarán los derechos correspondientes a sus respectivos titulares.",

        avisoResponsabilidadeTitulo:
            "6. Responsabilidad",

        avisoResponsabilidade1:
            "Atlántico Travel adopta medidas razonables para mantener el correcto funcionamiento y seguridad de este sitio web.",

        avisoResponsabilidade2:
            "Sin embargo, no puede garantizar la ausencia absoluta de interrupciones, errores técnicos o incidencias derivadas de causas ajenas a su control.",

        avisoLigazonsTitulo:
            "7. Enlaces externos",

        avisoLigazons1:
            "Este sitio web podrá incluir enlaces a páginas, plataformas o servicios de terceros.",

        avisoLigazons2:
            "Atlántico Travel no controla necesariamente los contenidos, condiciones o políticas de privacidad de estos sitios externos.",

        avisoLigazons3:
            "Se recomienda revisar las condiciones legales de cada servicio antes de su utilización.",

        avisoProteccionTitulo:
            "8. Protección de datos personales",

        avisoProteccion1:
            "El tratamiento de los datos personales obtenidos mediante este sitio web se realizará de acuerdo con la normativa aplicable en materia de protección de datos.",

        avisoProteccion2:
            "Puede consultar información más detallada en nuestra",

        avisoCookiesTitulo:
            "9. Cookies",

        avisoCookies1:
            "Este sitio web podrá utilizar cookies técnicas y, cuando corresponda, otras categorías de cookies.",

        avisoCookies2:
            "Puede consultar toda la información en nuestra",

        avisoModificacionsTitulo:
            "10. Modificaciones",

        avisoModificacionsTexto:
            "Atlántico Travel podrá modificar este Aviso Legal cuando resulte necesario para adaptarlo a cambios en el sitio web, en los servicios ofrecidos o en la normativa aplicable.",

        avisoLexislacionTitulo:
            "11. Legislación aplicable",

        avisoLexislacionTexto:
            "Las presentes condiciones se regirán por la legislación española aplicable.",


        /* ---------- FOOTER ---------- */

        lema:
            "Galicia para vivirla.",

        contactar:
            "Contacta con nosotros",

        footerTelefono:
            "Teléfono:",

        footerCorreo:
            "Correo:",

        footerLocalizacion:
            "Localización:",

        siguenos:
            "Síguenos",

        avisoLegal:
            "Aviso legal",

        privacidade:
            "Política de privacidad",

        cookies:
            "Política de cookies",

        ultimaActualizacion:
            "Última actualización:",

        dereitosReservados:
            "© 2026 Atlántico Travel. Todos los derechos reservados."

    },



    /* =====================================================
       INGLÉS
    ===================================================== */

    en: {

        /* ---------- NAVIGATION ---------- */

        inicio: "Home",
        sobreNos: "About us",
        destinos: "Destinations",
        experiencias: "Experiences",
        ofertas: "Offers",
        contacto: "Contact",
        solicitar: "Request information",

        porPersoa: "/ person",
        duracion: "Duration",
        prezo: "Price",
        localizacion: "Location",
        desde: "From",
        zona: "Area",

        detalleExperiencia: "Experience",
        detalleDestino: "Destination",
        detalleInformacion: "Information",
        detalleInclueTitulo: "What's included?",
        detalleInformacionPractica: "Practical information",
        detalleParaQuen: "Who is it for?",


        /* ---------- HOME ---------- */

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

        cabaloTitulo:
            "Horse Riding",

        cabaloSubtitulo:
            "Horse riding adventure",

        cabaloTexto:
            "Explore the Costa da Morte on horseback and discover beautiful places where you can truly disconnect.",

        cabaloDuracion:
            "Duration: 3 hours, including a meal.",

        groveTitulo:
            "O Grove, a gastronomic paradise",

        groveSubtitulo:
            "Gastronomy with a view",

        groveTexto:
            "Enjoy Galician cuisine on a terrace overlooking the landscape. A unique experience including food and drinks during a sunset dinner.",

        exploraExperiencias:
            "Explore experiences",

        fraseMarca:
            "Atlántico Travel · Journeys with soul",


        /* ---------- ABOUT US ---------- */

        sobreNosSubtitulo:
            "Galicia is not just visited. It is experienced.",

        sobreNosTexto1:
            "Atlántico Travel was founded in 2026 to create a different way to discover Galicia. We design personalised trips and experiences that connect people, nature, culture, gastronomy and adventure.",

        sobreNosTexto2:
            "From sailing through our estuaries, kayaking or exploring the mountains on horseback, to discovering the Costa da Morte, raising a glass of Albariño or enjoying seafood by the Atlantic.",

        valoresTitulo:
            "Our values",

        valoresLista:
            "Trust · Closeness · Authenticity · Quality · Personalisation · Respect for our land",

        valoresTexto:
            "We are committed to local and responsible tourism, working with the region and creating experiences tailored to each traveller.",

        valoresFrase:
            "We don't sell destinations. We create memories.",


        /* ---------- DESTINATIONS ---------- */

        destinosTitulo:
            "Destinations",

        destinosIntroTexto:
            "Every journey has a story to discover.",

        costaTextoDestinos:
            "Discover Galicia at its wildest, among cliffs, lighthouses and beaches where fishing villages preserve their most authentic character.",

        costaDuracion:
            "3 days / 2 nights",

        destinosFrase:
            "\"Where every road leaves a memory.\"",


        /* ---------- EXPERIENCES ---------- */

        experienciasTitulo:
            "Experiences",

        experienciasIntroTexto:
            "Experiences that connect you with our land",

        kayakUllaTitulo:
            "Kayaking on the Ulla River",

        kayakUllaTexto:
            "Discover Galicia from the water, paddling among mountains, nature and unique landscapes in an experience full of adventure and tranquillity.",

        kayakUllaDuracion:
            "2 and a half hours",

        rutaCabalarTitulo:
            "Horse riding route",

        rutaCabalarTexto:
            "Ride through Galician forests and trails on horseback, connecting with nature in a peaceful, fun and different experience.",

        rutaCabalarDuracion:
            "2 hours",

        experienciasFrase:
            "“Galicia, an experience to feel.”",


        /* ---------- OFFERS ---------- */

        ofertasTitulo:
            "Offers",

        ofertasIntroTexto:
            "Offer to sail through the Sil River Canyons",

        ofertaSilTitulo:
            "Offer to sail through the Sil River Canyons.",

        ofertaSilTexto:
            "Discover the Ribeira Sacra from the water, sailing between impressive rock walls, hillside vineyards and unique landscapes. A peaceful and spectacular experience to enjoy one of Galicia's most beautiful views.",

        ofertaSilDuracion:
            "1.5 hours",

        ofertasFrase:
            "\"Travel · Discover · Feel\"",


        /* ---------- KAYAK DETAIL ---------- */

        detalleKayakTitulo:
            "Kayaking in the Ría de Aldán",

        detalleKayakSubtitulo:
            "Discover the Galician coast from a different perspective.",

        detalleKayakPresentacionTitulo:
            "Explore the Ría de Aldán",

        detalleKayakPresentacion1:
            "Discover one of Galicia's most special estuaries by kayaking through the calm waters of the Ría de Aldán.",

        detalleKayakPresentacion2:
            "An experience to enjoy the sea, discover small coves and admire the Galician coast from a different perspective.",

        detalleKayakDuracion:
            "2.5 hours",

        detalleKayakInclue1:
            "Kayak and paddle",

        detalleKayakInclue2:
            "Life jacket",

        detalleKayakInclue3:
            "Instructions before departure",

        detalleKayakInclue4:
            "Equipment required for the activity",

        detalleKayakAventuraTitulo:
            "An adventure on the sea",

        detalleKayakAventura1:
            "Paddle through calm waters and discover small coves and coastal corners that can only be reached from the sea.",

        detalleKayakAventura2:
            "A different way to connect with nature and enjoy Galicia's marine landscape.",

        detalleKayakPublico:
            "Couples, friends and groups",

        detalleKayakCtaTitulo:
            "Ready for the adventure?",

        detalleKayakCtaTexto:
            "Tell us what you're looking for and we'll help you prepare your experience.",


        /* ---------- HORSE RIDING DETAIL ---------- */

        detalleCabaloTitulo:
            "Horse Riding",

        detalleCabaloSubtitulo:
            "Discover Galicia at nature's pace.",

        detalleCabaloPresentacionTitulo:
            "Galicia on horseback",

        detalleCabaloPresentacion1:
            "Discover some of Galicia's most special landscapes on a horse riding route surrounded by nature and tranquillity.",

        detalleCabaloPresentacion2:
            "A different experience to disconnect, enjoy the surroundings and explore Galician trails and landscapes in a unique way.",

        detalleCabaloDuracion:
            "3 hours",

        detalleCabaloInclue1:
            "Horse suited to your experience level",

        detalleCabaloInclue2:
            "Safety helmet",

        detalleCabaloInclue3:
            "Guidance throughout the route",

        detalleCabaloInclue4:
            "Meal included",

        detalleCabaloDescubreTitulo:
            "Nature at a different pace",

        detalleCabaloDescubre1:
            "Travel along paths surrounded by nature and discover the landscapes of the Costa da Morte from a completely different perspective.",

        detalleCabaloDescubre2:
            "The route allows you to enjoy the tranquillity of the surroundings and experience the Galician landscape in a way designed to disconnect and enjoy the moment.",

        detalleCabaloPublico:
            "Couples, friends and groups",

        detalleCabaloCtaTitulo:
            "Ready to enjoy the experience?",

        detalleCabaloCtaTexto:
            "Tell us what you're looking for and we'll help you prepare your experience.",


        /* ---------- COSTA DA MORTE ---------- */

        detalleCostaTitulo:
            "Costa da Morte",

        detalleCostaSubtitulo:
            "Wild nature, sea and tradition in the heart of the Galician coast.",

        detalleCostaPresentacionTitulo:
            "Discover the Costa da Morte",

        detalleCostaPresentacion1:
            "The Atlantic Ocean, lighthouses, beaches and fishing villages make the Costa da Morte one of Galicia's most special destinations.",

        detalleCostaPresentacion2:
            "Discover unique landscapes, traditions and places full of history on a route designed to reveal an authentic and unforgettable Galicia.",

        detalleCostaInclue1:
            "Costa da Morte route",

        detalleCostaInclue2:
            "Visits to lighthouses and viewpoints",

        detalleCostaInclue3:
            "Gastronomic recommendations",

        detalleCostaInclue4:
            "Route adapted to the group",

        detalleCostaHistoriaTitulo:
            "A coast full of history",

        detalleCostaHistoria1:
            "Explore some of the most iconic places on the Costa da Morte, among lighthouses, beaches, cliffs and small fishing villages.",

        detalleCostaHistoria2:
            "Each route can be adapted to the pace and preferences of the travellers to discover this part of Galicia in a different way.",

        detalleCostaDuracion:
            "Full day",

        detalleCostaPublico:
            "Couples, families and groups",

        detalleCostaCtaTitulo:
            "Ready to discover Galicia?",

        detalleCostaCtaTexto:
            "Tell us what you're looking for and we'll create an experience for you.",


        /* ---------- RÍAS BAIXAS ---------- */

        detalleRiasTitulo:
            "Rías Baixas",

        detalleRiasSubtitulo:
            "Galicia to taste, discover and experience.",

        detalleRiasPresentacionTitulo:
            "Discover the Rías Baixas",

        detalleRiasPresentacion1:
            "Sea, nature, fishing villages and gastronomy make every visit a different experience.",

        detalleRiasPresentacion2:
            "Discover some of the most special places in the Rías Baixas and experience Galicia in a personal and authentic way.",

        detalleRiasInclue1:
            "Personalised route",

        detalleRiasInclue2:
            "Visits to selected places",

        detalleRiasInclue3:
            "Gastronomic recommendations",

        detalleRiasInclue4:
            "Advice throughout the experience",

        detalleRiasSentidosTitulo:
            "A destination for all the senses",

        detalleRiasSentidos1:
            "Explore fishing villages, discover beaches and viewpoints and experience the culture and gastronomy of the Rías Baixas.",

        detalleRiasSentidos2:
            "Each proposal can be adapted to the pace and preferences of the travellers.",

        detalleRiasDuracion:
            "Full day",

        detalleRiasPublico:
            "Couples, families and groups",

        detalleRiasCtaTitulo:
            "Ready to discover Galicia?",

        detalleRiasCtaTexto:
            "Tell us what you're looking for and we'll create an experience for you.",


        /* ---------- CONTACT ---------- */

        contactoDatosPersoais:
            "Personal details",

        contactoNome:
            "Name *",

        contactoNomePlaceholder:
            "Your name",

        contactoApelidos:
            "Surname *",

        contactoApelidosPlaceholder:
            "Your surname",

        contactoEmail:
            "Email *",

        contactoEmailPlaceholder:
            "example@email.com",

        contactoInfoViaxe:
            "Information about your trip or experience",

        contactoTipoExperiencia:
            "Type of experience *",

        contactoSelecciona:
            "Select an option",

        contactoOpcionDestino:
            "Destination",

        contactoOpcionExperiencia:
            "Experience",

        contactoOpcionOferta:
            "Offer",

        contactoOpcionPersonalizable:
            "Customisable",

        contactoMensaxe:
            "Message or request: *",

        contactoMensaxePlaceholder:
            "Ask us any questions and tell us how many people will be travelling...",

        contactoMaximoCaracteres:
            "Maximum 1000 characters.",

        contactoTelefono:
            "Phone *",

        contactoTelefonoAxuda:
            "Enter a 9-digit phone number.",

        contactoViaxeSonado:
            "Describe your dream trip.",

        contactoViaxePersonalizada:
            "Briefly describe the type of experience or destination you are looking for (customisable):",

        contactoViaxePlaceholder:
            "Tell us what kind of trip or experience you're looking for...",

        contactoAcepto:
            "I have read and accept the",

        contactoCamposObrigatorios:
            "* Required fields",

        contactoEnviar:
            "Send",

        contactoTlf:
            "Phone:",


        /* ---------- VALIDATION ---------- */

        validacionTitulo:
            "Request sent",

        validacionGracias:
            "Thank you for sending your request. We will contact you shortly.",

        validacionAgora:
            "What happens now?",

        validacionExplicacion:
            "Our team will review the information you submitted and contact you by email or telephone using the details provided in the form.",

        volverInicio:
            "Back to home",

        verExperiencias:
            "View experiences",


        /* ---------- PRIVACY ---------- */

        privacidadeTitulo:
            "Privacy Policy",

        privacidadeIntroducion:
            "At Atlántico Travel, we respect your privacy and process your personal data responsibly, transparently and securely.",

        privacidadeResponsableTitulo:
            "1. Data controller",

        privacidadeNomeComercial:
            "Trading name:",

        privacidadeTitular:
            "Owner or company name:",

        privacidadeDomicilio:
            "Address:",

        privacidadeCorreo:
            "Email:",

        privacidadeTelefono:
            "Phone:",

        privacidadeDatosTitulo:
            "2. What personal data may we collect?",

        privacidadeDatosIntro:
            "Depending on how you interact with Atlántico Travel, we may process the following data:",

        privacidadeDato1:
            "First name and surname.",

        privacidadeDato2:
            "Email address.",

        privacidadeDato3:
            "Telephone number.",

        privacidadeDato4:
            "Information voluntarily provided through contact forms.",

        privacidadeDato5:
            "Information related to the requested trip, destination or experience.",

        privacidadeDato6:
            "Data required to manage a booking or contract.",

        privacidadeDato7:
            "Technical information required for the correct operation and security of the website.",

        privacidadeFinalidadesTitulo:
            "3. What do we use your data for?",

        privacidadeFinalidadesIntro:
            "Personal data provided by users may be used for the following purposes:",

        privacidadeFinalidade1:
            "To handle requests for information.",

        privacidadeFinalidade2:
            "To answer questions about destinations, experiences and offers.",

        privacidadeFinalidade3:
            "To prepare personalised travel or experience proposals.",

        privacidadeFinalidade4:
            "To manage bookings or contracts.",

        privacidadeFinalidade5:
            "To contact customers with information related to their request.",

        privacidadeFinalidade6:
            "To manage possible incidents related to contracted services.",

        privacidadeFinalidade7:
            "To comply with legal, tax or administrative obligations when applicable.",

        privacidadeBaseLegalTitulo:
            "4. Legal basis for processing",

        privacidadeBaseLegal1:
            "The legal basis for processing personal data will depend on the relationship established with the user.",

        privacidadeBaseLegal2:
            "When a user voluntarily sends an enquiry or request for information, the data will be processed in order to respond to that request.",

        privacidadeBaseLegal3:
            "If a booking or contract is made, processing personal data may be necessary to correctly manage and provide the requested service.",

        privacidadeBaseLegal4:
            "In certain cases, processing may also be necessary to comply with legal obligations applicable to Atlántico Travel.",

        privacidadeConservacionTitulo:
            "5. How long do we keep your data?",

        privacidadeConservacion1:
            "Personal data will be kept for as long as necessary to fulfil the purpose for which it was collected.",

        privacidadeConservacion2:
            "When the data is no longer required, it may remain duly blocked for the periods established by law in order to address possible legal liabilities.",

        privacidadeDestinatariosTitulo:
            "6. Who may we share your data with?",

        privacidadeDestinatarios1:
            "Atlántico Travel will not sell or transfer your personal data to third parties for commercial purposes.",

        privacidadeDestinatarios2:
            "However, certain providers may access the data when necessary to provide the corresponding services.",

        privacidadeDestinatarios3:
            "These providers may include:",

        privacidadeDestinatarios4:
            "Only the data necessary to correctly provide the relevant service will be shared.",

        privacidadeProveedor1:
            "Web hosting providers.",

        privacidadeProveedor2:
            "IT service providers.",

        privacidadeProveedor3:
            "Email service providers.",

        privacidadeProveedor4:
            "Booking management platforms.",

        privacidadeProveedor5:
            "Companies or professionals responsible for providing certain tourism experiences.",

        privacidadeProveedor6:
            "Accommodation providers, transport companies or other providers required to organise the requested trip.",

        privacidadeTransferenciasTitulo:
            "7. International data transfers",

        privacidadeTransferencias1:
            "If technology providers located outside the European Economic Area are used, Atlántico Travel will adopt the safeguards required by data protection regulations.",

        privacidadeTransferencias2:
            "This section must be reviewed once the final tools used on the website are known.",

        privacidadeTransferenciasPendente:
            "[PENDING REVIEW: hosting, analytics, maps, forms, social networks or other external services]",

        privacidadeDereitosTitulo:
            "8. What are your rights?",

        privacidadeDereitosIntro:
            "Where applicable, users may exercise the following rights regarding their personal data:",

        privacidadeDereito1:
            "Access: to know what personal data we process.",

        privacidadeDereito2:
            "Rectification: to request the correction of inaccurate or incomplete data.",

        privacidadeDereito3:
            "Erasure: to request the deletion of data where appropriate.",

        privacidadeDereito4:
            "Objection: to object to the processing of data in certain circumstances.",

        privacidadeDereito5:
            "Restriction: to request restriction of processing.",

        privacidadeDereito6:
            "Portability: to receive personal data in a structured format where this right applies.",

        privacidadeDereito7:
            "Withdrawal of consent: to withdraw consent where processing is based on consent.",

        privacidadeExercerTitulo:
            "9. How can you exercise your rights?",

        privacidadeExercer1:
            "To exercise any of the rights listed above, you may contact Atlántico Travel using the following email address:",

        privacidadeExercer2:
            "The request must allow us to correctly identify the person exercising the right and clearly state which right they wish to exercise.",

        privacidadeReclamacionTitulo:
            "10. Right to lodge a complaint",

        privacidadeReclamacionTexto:
            "If you believe that your personal data has not been processed in accordance with applicable regulations, you may lodge a complaint with the competent data protection authority.",

        privacidadeSeguridadeTitulo:
            "11. Data security",

        privacidadeSeguridade1:
            "Atlántico Travel will adopt appropriate technical and organisational measures to protect personal data against loss, destruction, alteration, unauthorised access or misuse.",

        privacidadeSeguridade2:
            "These measures will be adapted to the type of information processed, the services used and the risks involved.",

        privacidadeMenoresTitulo:
            "12. Children's data",

        privacidadeMenores1:
            "The forms on this website are not specifically designed to collect personal data from minors without the involvement of their parents or legal guardians.",

        privacidadeMenores2:
            "If a trip or experience includes minors, the necessary data will be provided and managed by their legal representative where appropriate.",

        privacidadeFormulariosTitulo:
            "13. Contact forms",

        privacidadeFormularios1:
            "When users complete a contact form, they should only provide the data required to process their enquiry or request.",

        privacidadeFormularios2:
            "Users are advised not to enter particularly sensitive information in free-text fields unless it is essential to manage the requested service.",

        privacidadeCambiosTitulo:
            "14. Changes to the Privacy Policy",

        privacidadeCambios1:
            "Atlántico Travel may modify this Privacy Policy when necessary to adapt it to changes in the services offered, the tools used or applicable regulations.",

        privacidadeCambios2:
            "We recommend reviewing this page periodically to check the latest version.",

        privacidadeInfoTitulo:
            "15. Additional information",

        privacidadeInfoTexto:
            "For more information about how this website operates, you can consult:",


        /* ---------- COOKIES ---------- */

        cookiesTitulo:
            "Cookie Policy",

        cookiesIntroducion:
            "This page explains what cookies are, what they are used for and how you can manage your preferences.",

        cookiesQueSonTitulo:
            "1. What are cookies?",

        cookiesQueSon1:
            "Cookies are small files that may be stored on a user's device when they visit a website.",

        cookiesQueSon2:
            "These files can remember certain information related to browsing and may be used to ensure the correct operation of the website, remember preferences or analyse how the site is used.",

        cookiesTiposTitulo:
            "2. What types of cookies do we use?",

        cookiesTecnicasTitulo:
            "Technical or necessary cookies",

        cookiesTecnicas1:
            "These cookies are necessary for the correct operation, security and navigation of the website.",

        cookiesTecnicas2:
            "These cookies are not used for advertising purposes or to analyse user behaviour.",

        cookiesAnaliseTitulo:
            "Analytics or measurement cookies",

        cookiesAnalise1:
            "Atlántico Travel uses Google Analytics 4 as an analytics and measurement tool.",

        cookiesAnalise2:
            "Google Analytics provides statistical information about how users interact with the website, such as the number of visits, pages viewed and how visitors navigate the site.",

        cookiesAnalise3:
            "This information helps us understand how the website works and improve its content, structure and user experience.",

        cookiesAnalise4:
            "Google Analytics cookies that require consent will not be activated until the user accepts them.",

        cookiesPropiasTerceirosTitulo:
            "3. First-party and third-party cookies",

        cookiesPropiasTerceirosIntro:
            "Depending on who is responsible for the cookie, cookies may be classified as first-party or third-party cookies.",

        cookiesPropiasTitulo:
            "First-party cookies",

        cookiesPropiasTexto:
            "These cookies are sent from the Atlántico Travel domain and are used to ensure the correct operation of the website.",

        cookiesGoogleTitulo:
            "Cookies related to Google Analytics",

        cookiesGoogle1:
            "Atlántico Travel uses Google Analytics 4, a service provided by Google.",

        cookiesGoogle2:
            "Google Analytics tags use first-party cookies to distinguish users and sessions and to obtain statistics about website usage.",

        cookiesUtilizadasTitulo:
            "4. Cookies used by Atlántico Travel",

        cookiesTablaCookie:
            "Cookie",

        cookiesTablaProvedor:
            "Provider",

        cookiesTablaFinalidade:
            "Purpose",

        cookiesTablaTipo:
            "Type",

        cookiesTablaDuracion:
            "Duration",

        cookiesGaFinalidade:
            "Used to distinguish users.",

        cookiesTipoAnalitica:
            "Analytics",

        cookiesDousAnos:
            "2 years",

        cookiesGaContainerFinalidade:
            "Used to maintain the user's session state.",

        cookiesNomeCookie:
            "The exact name of the second cookie will depend on the Google Analytics property identifier configured for Atlántico Travel.",

        cookiesAnalyticsTitulo:
            "5. Google Analytics 4",

        cookiesAnalytics1:
            "This website uses Google Analytics 4 to statistically measure and analyse website usage.",

        cookiesAnalytics2:
            "The information obtained through this tool can help us understand aspects such as:",

        cookiesAnalyticsDato1:
            "Number of visitors.",

        cookiesAnalyticsDato2:
            "Most viewed pages.",

        cookiesAnalyticsDato3:
            "Duration of visits.",

        cookiesAnalyticsDato4:
            "Device or browser used.",

        cookiesAnalyticsDato5:
            "General way in which users navigate the website.",

        cookiesAnalyticsConsentimento:
            "The use of Google Analytics will depend on the consent preferences selected by the user.",

        cookiesConsentimentoTitulo:
            "6. Consent to the use of cookies",

        cookiesConsentimento1:
            "When users first access the website, a cookie settings panel will be displayed.",

        cookiesConsentimento2:
            "From this panel, users will be able to:",

        cookiesConsentimentoOpcion1:
            "Accept analytics cookies.",

        cookiesConsentimentoOpcion2:
            "Reject analytics cookies.",

        cookiesConsentimentoOpcion3:
            "Configure their preferences.",

        cookiesConsentimento3:
            "The user's choice must be respected and analytics cookies must not be activated before the corresponding consent has been obtained.",

        cookiesXestionConsentimentoTitulo:
            "7. Consent management",

        cookiesXestionConsentimento1:
            "Atlántico Travel may use Google Consent Mode to communicate the user's selected preferences to Google Analytics.",

        cookiesXestionConsentimento2:
            "When users do not authorise analytics cookies, Analytics-related storage will remain disabled according to the configuration implemented on the website.",

        cookiesXestionConsentimento3:
            "When users accept analytics cookies, the storage required for Google Analytics may be activated.",

        cookiesConfiguracionTitulo:
            "8. How can cookie settings be changed?",

        cookiesConfiguracion1:
            "Users may subsequently modify their preferences regarding the use of cookies.",

        cookiesConfiguracion2:
            "To do so, they may use the settings panel available on the website.",

        configurarCookies:
            "Configure cookies",

        cookiesNavegadorTitulo:
            "9. Deleting or blocking cookies in your browser",

        cookiesNavegador1:
            "In addition to the Atlántico Travel settings panel, users can allow, block or delete cookies through their browser settings.",

        cookiesNavegador2:
            "These options are usually found in the privacy, security or settings sections.",

        cookiesNavegador3:
            "Blocking certain technical cookies may affect the correct operation of some parts of the website.",

        cookiesGoogleDatosTitulo:
            "10. Data processing by Google",

        cookiesGoogleDatos1:
            "Google Analytics is a service provided by Google. Using this tool may involve processing certain technical information related to the use of the website.",

        cookiesGoogleDatos2:
            "Atlántico Travel will review the Google Analytics configuration and apply the corresponding privacy and consent measures.",

        cookiesActualizacionTitulo:
            "11. Updates to the Cookie Policy",

        cookiesActualizacion1:
            "Atlántico Travel may modify this Cookie Policy when the tools used, the Google Analytics configuration or applicable regulations change.",

        cookiesActualizacion2:
            "We recommend checking this page periodically for the latest version.",

        cookiesContactoTitulo:
            "12. Contact",

        cookiesContactoTexto:
            "For any questions regarding the use of cookies on this website, you may contact Atlántico Travel.",

        cookiesCorreoElectronico:
            "Email:",

        cookiesInfoTitulo:
            "13. Additional information",

        cookiesInfoTexto:
            "You can find more information related to privacy and the operation of the website at:",


        /* ---------- LEGAL NOTICE ---------- */

        avisoLegalTitulo:
            "Legal notice",

        avisoLegalIntroducion:
            "Legal information regarding the use of the Atlántico Travel website.",

        avisoDatosTitulo:
            "1. Identification details",

        avisoDatosIntro:
            "In accordance with the regulations applicable to information society services, users are informed that this website belongs to:",

        avisoNomeComercial:
            "Trading name:",

        avisoTitular:
            "Owner or company name:",

        avisoDomicilio:
            "Address:",

        avisoCorreo:
            "Email:",

        avisoTelefono:
            "Phone:",

        avisoSitioWeb:
            "Website:",

        avisoObxectoTitulo:
            "2. Purpose of the website",

        avisoObxecto1:
            "Atlántico Travel is an agency focused on promoting destinations, trips and tourism experiences, particularly those related to Galicia.",

        avisoObxecto2:
            "This website provides information about destinations, activities, experiences, offers and other tourism-related services.",

        avisoObxecto3:
            "Users may also request information through the contact methods available on the website.",

        avisoCondicionsTitulo:
            "3. Conditions of access and use",

        avisoCondicions1:
            "Access to this website implies acceptance of these terms of use.",

        avisoCondicions2:
            "Users agree to make appropriate use of the content and services offered and not to use them for illegal or fraudulent activities or activities that could cause damage to Atlántico Travel or third parties.",

        avisoInformacionTitulo:
            "4. Information about destinations, experiences and prices",

        avisoInformacion1:
            "Atlántico Travel aims to ensure that published information about destinations, experiences, durations, prices and availability is clear and up to date.",

        avisoInformacion2:
            "However, certain prices, schedules or conditions may vary depending on the season, availability, number of participants or conditions established by tourism service providers.",

        avisoInformacion3:
            "Before a final booking is made, customers will be provided with the specific conditions corresponding to the requested service.",

        avisoPropiedadeTitulo:
            "5. Intellectual and industrial property",

        avisoPropiedade1:
            "The texts, designs, logos, graphic elements, photographs, videos and other original content on this website are protected by intellectual and industrial property regulations.",

        avisoPropiedade2:
            "Their reproduction, distribution, transformation or use for commercial purposes is not permitted without prior authorisation from their owner, except where permitted by law.",

        avisoPropiedade3:
            "Photographs or resources belonging to third parties will retain the rights corresponding to their respective owners.",

        avisoResponsabilidadeTitulo:
            "6. Liability",

        avisoResponsabilidade1:
            "Atlántico Travel takes reasonable measures to maintain the correct operation and security of this website.",

        avisoResponsabilidade2:
            "However, it cannot guarantee the complete absence of interruptions, technical errors or incidents resulting from circumstances beyond its control.",

        avisoLigazonsTitulo:
            "7. External links",

        avisoLigazons1:
            "This website may include links to third-party websites, platforms or services.",

        avisoLigazons2:
            "Atlántico Travel does not necessarily control the content, terms or privacy policies of these external websites.",

        avisoLigazons3:
            "Users are advised to review the legal terms of each service before using it.",

        avisoProteccionTitulo:
            "8. Personal data protection",

        avisoProteccion1:
            "Personal data obtained through this website will be processed in accordance with applicable data protection regulations.",

        avisoProteccion2:
            "You can find more detailed information in our",

        avisoCookiesTitulo:
            "9. Cookies",

        avisoCookies1:
            "This website may use technical cookies and, where applicable, other categories of cookies.",

        avisoCookies2:
            "You can find all the information in our",

        avisoModificacionsTitulo:
            "10. Modifications",

        avisoModificacionsTexto:
            "Atlántico Travel may modify this Legal Notice when necessary to adapt it to changes to the website, the services offered or applicable regulations.",

        avisoLexislacionTitulo:
            "11. Applicable law",

        avisoLexislacionTexto:
            "These terms will be governed by applicable Spanish law.",


        /* ---------- FOOTER ---------- */

        lema:
            "Galicia, made to be experienced.",

        contactar:
            "Contact us",

        footerTelefono:
            "Phone:",

        footerCorreo:
            "Email:",

        footerLocalizacion:
            "Location:",

        siguenos:
            "Follow us",

        avisoLegal:
            "Legal notice",

        privacidade:
            "Privacy policy",

        cookies:
            "Cookie policy",

        ultimaActualizacion:
            "Last updated:",

        dereitosReservados:
            "© 2026 Atlántico Travel. All rights reserved."

    }

};


/* =========================================================
   3. PREPARAR ELEMENTOS TRADUCIBLES
========================================================= */

/*
   Gardamos se o texto orixinal tiña ":" ao final.

   Isto é útil porque nalgunhas páxinas temos:

   Duración:

   e noutras:

   Duración

   pero ambas usan data-i18n="duracion".
*/

const elementosTraducibles = document.querySelectorAll("[data-i18n]");

elementosTraducibles.forEach(function (elemento) {

    const textoOrixinal = elemento.textContent.trim();

    if (textoOrixinal.endsWith(":")) {

        elemento.dataset.dousPuntos = "true";

    }

});


/* =========================================================
   4. FUNCIÓN PARA CAMBIAR O IDIOMA
========================================================= */

function cambiarIdioma(idioma) {

    /*
       Se por algún motivo chega un idioma que non existe,
       empregamos galego.
    */

    if (!traduccions[idioma]) {

        idioma = "gl";

    }


    /* -----------------------------------------------------
       TEXTOS NORMAIS
    ----------------------------------------------------- */

    const elementos = document.querySelectorAll("[data-i18n]");

    elementos.forEach(function (elemento) {

        const clave = elemento.getAttribute("data-i18n");

        const traducion = traduccions[idioma][clave];

        if (traducion !== undefined) {

            let textoFinal = traducion;


            /*
               Conservamos os dous puntos nos elementos que
               orixinalmente os tiñan.
            */

            if (
                elemento.dataset.dousPuntos === "true" &&
                !textoFinal.trim().endsWith(":")
            ) {

                textoFinal = textoFinal + ":";

            }


            elemento.textContent = textoFinal;

        }

    });


    /* -----------------------------------------------------
       PLACEHOLDERS DOS FORMULARIOS
    ----------------------------------------------------- */

    const placeholders =
        document.querySelectorAll("[data-i18n-placeholder]");

    placeholders.forEach(function (elemento) {

        const clave =
            elemento.getAttribute("data-i18n-placeholder");

        const traducion =
            traduccions[idioma][clave];

        if (traducion !== undefined) {

            elemento.placeholder = traducion;

        }

    });


    /* -----------------------------------------------------
       CAMBIAR O ATRIBUTO LANG DO HTML
    ----------------------------------------------------- */

    document.documentElement.lang = idioma;


    /* -----------------------------------------------------
       GARDAR IDIOMA
    ----------------------------------------------------- */

    localStorage.setItem("idioma", idioma);

}


/* =========================================================
   5. SELECTOR DE IDIOMA
========================================================= */

const selectorIdioma =
    document.querySelector("#idioma");


/*
   Se xa se escolleu un idioma anteriormente,
   recuperámolo.

   Se non hai ningún gardado, usamos galego.
*/

const idiomaGardado =
    localStorage.getItem("idioma") || "gl";


/*
   Aplicamos o idioma nada máis cargar a páxina.
*/

cambiarIdioma(idiomaGardado);


/*
   Poñemos o selector na opción correspondente.
*/

if (selectorIdioma) {

    selectorIdioma.value = idiomaGardado;


    selectorIdioma.addEventListener("change", function () {

        cambiarIdioma(selectorIdioma.value);

    });

}


/* =========================================================
   6. PECHAR MENÚ AO PREMER NUN ENLACE
========================================================= */

if (menu && botonMenu) {

    const enlacesMenu =
        menu.querySelectorAll("a");

    enlacesMenu.forEach(function (enlace) {

        enlace.addEventListener("click", function () {

            menu.classList.remove("activo");
            botonMenu.classList.remove("activo");

        });

    });

}

const imaxesZoom = document.querySelectorAll(".imaxe-zoom");

const modalImaxe = document.querySelector("#modal-imaxe");

const imaxeModal = document.querySelector("#modal-contenido");

const botonPecharModal = document.querySelector(".modal-pechar");


imaxesZoom.forEach(function (imaxe) {

    imaxe.addEventListener("click", function () {

        imaxeModal.src = imaxe.src;

        imaxeModal.alt = imaxe.alt;

        modalImaxe.classList.add("activo");

    });

});


if (botonPecharModal) {

    botonPecharModal.addEventListener("click", function () {

        modalImaxe.classList.remove("activo");

    });

}


/* Pechar facendo clic no fondo */

if (modalImaxe) {

    modalImaxe.addEventListener("click", function (evento) {

        if (evento.target === modalImaxe) {

            modalImaxe.classList.remove("activo");

        }

    });

}


/* Pechar coa tecla ESC */

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape" && modalImaxe) {

        modalImaxe.classList.remove("activo");

    }

});
const avisoCookies = document.querySelector("#aviso-cookies");
const pecharCookies = document.querySelector("#pechar-cookies");
const botonCookie = document.querySelector("#boton-cookie");


if (avisoCookies && pecharCookies && botonCookie) {

    pecharCookies.addEventListener("click", function () {

        avisoCookies.style.display = "none";

        botonCookie.style.display = "flex";

    });
}
