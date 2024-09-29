//Mettre le code JavaScript lié à la page photographer.html

async function getId(){
    let params = new URL(document.location).searchParams;
    const id = params.get("id"); 
    return id;
}

async function getPhotographerData(id) {
    try {
        const response = await fetch('../../data/photographers.json');
        if (!response.ok) {
            throw new Error('Error reading the JSON file');
        }
        const data = await response.json();
        // Filter photographer with the ID from the URL
        const photographer = data.photographers.find(p => p.id == id);
        return photographer;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function displayData(photographer) {
    const photographersSection = document.querySelector(".photographer-information");
    const photographersImage= document.querySelector(".photographer-image");
    const photographerHeaderDOM = photographerHeader(photographer);
    const photographerPictureDOM = photographerPicture(photographer);

    photographersSection.appendChild(photographerHeaderDOM);
    photographersImage.appendChild(photographerPictureDOM);
}

function photographerHeader(data) {

    const { name, city, country, tagline } = data;

    const photographerHTML = document.createElement( 'article' );
        const photographer = document.createElement( 'h2' );
        const location = document.createElement( 'p' );
        location.className = 'location_photographer';
        const phrase = document.createElement( 'p' );
        phrase.className = 'phrase_photographer';
        photographer.textContent = name;
        location.textContent = city + ", " + country;
        phrase.textContent = tagline;
        photographerHTML.appendChild(photographer);
        photographerHTML.appendChild(location);
        photographerHTML.appendChild(phrase);

    return photographerHTML;
}

function photographerPicture(data) {

    const { name, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    const photographerImageHTML = document.createElement( 'img' );
    photographerImageHTML.setAttribute("src", picture);
    photographerImageHTML.setAttribute("alt", name);

    return photographerImageHTML;
}

async function init() {
    // Récupère les datas du photographer
    const id = await getId();
    const photographer = await getPhotographerData(id);
    displayData(photographer);
}

init();