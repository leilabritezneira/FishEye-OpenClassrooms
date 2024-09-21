function photographerTemplate(data) {
    const { name, portrait } = data;
    
    const picture = `assets/photographers/${portrait}`;
    
    const city = data.city;
    const country = data.country;
    const tagline = data.tagline;
    const price = data.price;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", `./photographer.html/${data.id}`);
        link.setAttribute("aria-label", name);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const h2 = document.createElement( 'h2' );
        link.appendChild(img);
        link.appendChild(h2);
        const location = document.createElement( 'p' );
        location.className = 'location_card';
        const phrase = document.createElement( 'p' );
        phrase.className = 'phrase_card';
        const cost = document.createElement( 'p' );
        cost.className = 'cost_card';
        h2.textContent = name;
        location.textContent = city + ", " + country;
        phrase.textContent = tagline;
        cost.textContent = price + "€/jour";
        article.appendChild(link);
        article.appendChild(location);
        article.appendChild(phrase);
        article.appendChild(cost);
        return (article);
    }
    
    return { name, picture, getUserCardDOM }
}