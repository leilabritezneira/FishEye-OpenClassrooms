//Mettre le code JavaScript lié à la page photographer.html

let params = new URL(document.location).searchParams;
const id = params.get("id"); 

async function getPhotographerData(id) {
    try {
        const response = await fetch('../../data/photographers.json');
        if (!response.ok) {
            throw new Error('Error reading the JSON file');
        }
        const data = await response.json();
        // Filter photographer with the ID from the URL
        const photographer = data.photographers.find(p => p.id == id);
        console.log(photographer);
        return photographer;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function init() {
    // Récupère les datas du photographer
    const { photographer } = await getPhotographerData(id);;
    
    
    //displayData(photographer);
}

init();