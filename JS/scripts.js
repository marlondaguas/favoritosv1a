// Objeto que contiene las URLs y las imágenes
const sitesV1a = [
    { name: "Everest", url: "https://appportal.everestintelligent.com/EverHealth/", image: "./IMG/app.png" },
    { name: "Atril", url: "http://api.digiturno.viva1a.com.co:85/", image: "./IMG/app.png" },
    { name: "Athenea Lab", url: "https://viva1a.atheneasoluciones.com/", image: "./IMG/app.png" },
    { name: "Athenea Resultados", url: "https://medicosviva1a.atheneasoluciones.com/", image: "./IMG/app.png" },
    { name: "Lumier", url: "https://lumierdigital.com:8443/login.lu", image: "./IMG/app.png" },
    { name: "Mipres", url: "https://mipres.sispro.gov.co/MIPRESNOPBS/Login.aspx", image: "./IMG/app.png" },
    { name: "Annarlitycs", url: "http://datacare.viva1a.com.co:8080/datacare/#nbb", image: "./IMG/app.png" },
    { name: "Eventos Adversos Regional Costa", url: "https://forms.office.com/Pages/ResponsePage.aspx?id=S6q48XMM30ySUZubC9zVp-nqrrGNgSlLvHS057gXxCRUNjVMUTJNV043U0s1QlZOSTdLOTBXWDY4US4u", image: "./IMG/app.png" },
    { name: "Viva Aprendiendo", url: "http://vivaaprendiendo.com.co", image: "./IMG/app.png" },
    { name: "Mi Portal", url: "https://miportalgh.com/", image: "./IMG/app.png" },
    { name: "Mesa De Servicios, Monta el ticket", url: "http://mesadeservicios.viva1a.com.co/glpi/", image: "./IMG/app.png" },
    { name: "Asignacion Citas de Laboratorio", url: "https://appcita.viva1a.com.co:8051/laboratorio/agente", image: "./IMG/app.png" },
    { name: "Intranet", url: "http://intranet.viva1a.com.co/", image: "./IMG/app.png" },
    { name: "EKG", url: "\\192.168.200.110\\fs_viva1a\\Archivos Soledad\\SEDE SOLEDAD\\EKG DTC 2023-2024\\2025 EKG", image: "./IMG/app.png" },
];

const sitesAlternos = [
    { name: "Imagenes Vitales", url: "https://imagenesvitales.co/resultados/", image: "./IMG/app.png" },
    { name: "Mas Imagenes", url: "https://massimagenes.co/", image: "./IMG/app.png" },
    { name: "Adres Consulta", url: "https://www.adres.gov.co/consulte-su-eps", image: "./IMG/app.png" },
    { name: "Prevrenal", url: "https://mutualser.prevrenal.org/", image: "./IMG/app.png" },
    { name: "Mutual Ser Consulta Afiliado", url: "https://www.mutualser.com/ser-afiliado/", image: "./IMG/app.png" },
    { name: "Zona Ser", url: "https://portal.mutualser.org/ZONASER/", image: "./IMG/app.png" },
    { name: "Correo Outlook", url: "https://login.microsoftonline.com/", image: "./IMG/app.png" },
    { name: "Correo Gmail", url: "https://accounts.google.com/", image: "./IMG/app.png" },
    { name: "Crehana", url: "https://hr.acsendo.com/logout", image: "./IMG/app.png" },
    { name: "Synlab Resultados", url: "https://webapps.synlab.co/_resultados/view/formLogin.php?error=0", image: "./IMG/app.png" },
    { name: "Resultados Continental", url: "http://resultbq1.labcontinental.com/Consulta/Login.aspx?ReturnUrl=%2fconsulta%2fdefault.aspx", image: "./IMG/app.png" },
    { name: "Colcan", url: "https://resultados.labcolcan.com/login.aspx?ReturnUrl=%2fBusquedaPaciente.aspx", image: "./IMG/app.png" },
    { name: "Unigastro", url: "https://unigastro.medhis.net/login/?next=/", image: "./IMG/app.png" },
    { name: "Pos Populi", url: "https://pospopuli.minsalud.gov.co/PospopuliWeb/paginas/home.aspx", image: "./IMG/app.png" },
];

const sitesSura = [
    { name: "IPSA", url: "https://login.sura.com/sso/servicelogin.aspx?continueTo=https%3A%2F%2Fipsa-version.suramericana.com%2Fipsa&service=salud", image: "./IMG/app.png" },
    { name: "Agenda Web", url: "https://login.sura.com/sso/servicelogin.aspx?continueTo=https%3A%2F%2Fagendaweb.suramericana.com%2Fagenda&service=salud", image: "./IMG/app.png" },
    { name: "Salud Web", url: "https://login.sura.com/sso/servicelogin.aspx?continueTo=https%3A%2F%2Fsaludweb.suramericana.com%2Fsaludweb%2F&service=salud", image: "./IMG/app.png" },
    { name: "Servicios a un Clic", url: "https://portaleps.epssura.com/ServiciosUnClick/", image: "./IMG/app.png" },
    { name: "Eventos Adversos Regional Norte", url: "https://forms.office.com/Pages/ResponsePage.aspx?id=S6q48XMM30ySUZubC9zVp-nqrrGNgSlLvHS057gXxCRUMzMzNUlSTjRCNTFDM0k0U1hFV1BRN1dNSC4u", image: "./IMG/app.png" },
    { name: "CONTINGENCIA SURA", url: "https://seus.sura.com/idp/login/default?continueTo=https%3A%2F%2Fcontiatenpa.suramericana.com.co%2F&service=somossura", image: "./IMG/app.png" },
    { name: "Servicios Tecnologicos", url: "https://soportetecnologico.arus.com.co:18081/auth/sign-in", image: "./IMG/app.png" },
];

// Contenedor donde se agregarán los recuadros
const cardContainer = document.getElementById('cardContainer');
const cardAlternos = document.getElementById('cardAlternos');
const cardSura = document.getElementById('cardSura');

// Función para crear los recuadros
function createCardsV1a(sitesV1a) {
    sitesV1a.forEach(site => {
        const link = document.createElement('a');
        link.href = site.url;
        link.target = "_blank";

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = site.image;
        img.alt = site.name;

        const name = document.createElement('h3');
        name.textContent = site.name;

        card.appendChild(img);
        card.appendChild(name);
        link.appendChild(card);
        cardContainer.appendChild(link);
    });
}

function createCardsAlternos(sitesAlternos) {
    sitesAlternos.forEach(site => {
        const link = document.createElement('a');
        link.href = site.url;
        link.target = "_blank";

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = site.image;
        img.alt = site.name;

        const name = document.createElement('h3');
        name.textContent = site.name;

        card.appendChild(img);
        card.appendChild(name);
        link.appendChild(card);
        cardAlternos.appendChild(link);
    });
}

function createCardsSura(sitesSura) {
    sitesSura.forEach(site => {
        const link = document.createElement('a');
        link.href = site.url;
        link.target = "_blank";

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = site.image;
        img.alt = site.name;

        const name = document.createElement('h3');
        name.textContent = site.name;

        card.appendChild(img);
        card.appendChild(name);
        link.appendChild(card);
        cardSura.appendChild(link);
    });
}


// Llamada a la función para crear los recuadros
createCardsV1a(sitesV1a);
createCardsAlternos(sitesAlternos);
createCardsSura(sitesSura);
