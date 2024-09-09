function photographerTemplate(data) {
    const { name, portrait } = data;
    
    const picture = `assets/photographers/${portrait}`;
    
    const city = data.city;
    const country = data.country;
    const tagline = data.tagline;
    const price = data.price;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const location = document.createElement( 'p' );
        const phrase = document.createElement( 'p' );
        h2.textContent = name;
        location.textContent = city + ", " + country;
        phrase.textContent = tagline;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(phrase);
        return (article);
    }
    return { name, picture, city, country, tagline, getUserCardDOM }
}