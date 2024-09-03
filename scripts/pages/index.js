    async function getPhotographers() {

       //Get the JSON data
        try {
            const response = await fetch('../../data/photographers.json');
            if (!response.ok) {
                throw new Error('Error to read the JSON file');
            }
            const data = await response.json();
            return data; 
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    
