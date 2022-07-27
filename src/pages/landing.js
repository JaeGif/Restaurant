const landing = () => {
    const tagContainerDiv = document.createElement('div');
    tagContainerDiv.id = 'tagline-container';
    const desContainerDiv = document.createElement('div');
    desContainerDiv.id = 'description-container';
    const landingImg = document.createElement('img');
    landingImg.setAttribute('src', './img/landing-hero.webp');
    desContainerDiv.appendChild(landingImg);

    const staContainerDiv = document.createElement('div');
    staContainerDiv.id = 'statement-container';
    const nameP = document.createElement('p');
    const nameEm = document.createElement('em');
    nameEm.textContent = 'Jaeri'
    nameP.appendChild(nameEm);
    const restaurantP = document.createElement('p');
    restaurantP.textContent = 'Georgian Food and Wine Experience';
    const staP = document.createElement('p');
    staP.textContent = 'A recipe has no soul. You as the cook, must bring soul to the recipe. Georgia, not the state, the country. Delicious food is best served with wonderful friends.'
    const menuBtn = document.createElement('button');
    menuBtn.id = 'menu-button-2'
    menuBtn.textContent = 'Menu';
    staContainerDiv.append(nameP, restaurantP, staP, menuBtn);

    tagContainerDiv.append(desContainerDiv, staContainerDiv);

    return tagContainerDiv;
}

const foodTypesContainer = () => {
    const typContainerDiv = document.createElement('div');
    typContainerDiv.id = 'food-types-container';

    const typeFoodDiv = document.createElement('div');
    const typeWineDiv = document.createElement('div');
    const typeDessertDiv = document.createElement('div');
    typContainerDiv.append(typeFoodDiv, typeWineDiv, typeDessertDiv);

    const foodImgA = document.createElement('a');
    const wineImgA = document.createElement('a');
    const dessertImgA = document.createElement('a');
    foodImgA.setAttribute('href', '#');
    wineImgA.setAttribute('href', '#');
    dessertImgA.setAttribute('href', '#');
    const foodImg = document.createElement('img');
    const wineImg = document.createElement('img');
    const dessertImg = document.createElement('img');
    foodImg.setAttribute('src', './img/full-set-food.webp');
    wineImg.setAttribute('src', './img/wine.jpeg');
    dessertImg.setAttribute('src', './img/strawberry-dessert.jpeg');
    foodImg.className = 'img-types';
    wineImg.className = 'img-types';
    dessertImg.className = 'img-types';
    foodImgA.appendChild(foodImg);
    wineImgA.appendChild(wineImg);
    dessertImgA.appendChild(dessertImg);

    const foodH4 = document.createElement('h4');
    const wineH4 = document.createElement('h4');
    const dessertH4 = document.createElement('h4');

    foodH4.textContent = 'Food';
    wineH4.textContent = 'Wine';
    dessertH4.textContent = 'Dessert';

    typeFoodDiv.append(foodImgA, foodH4);
    typeWineDiv.append(wineImgA, wineH4);
    typeDessertDiv.append(dessertImgA, dessertH4);

    return typContainerDiv;
}

const georgiaInfo = () => {
    const georgiaContainerDiv = document.createElement('div');
    georgiaContainerDiv.id = 'georgia-container';

    // contains all content of description div grouped by eles
    const georgiaDesContainerDiv = document.createElement('div');
    georgiaDesContainerDiv.id = 'georgia-description';

    const countryP = document.createElement('p');
    const countryEm = document.createElement('em');
    countryEm.textContent = 'Georgia';
    countryP.appendChild(countryEm);

    const infoP = document.createElement('p');
    infoP.textContent = 'Georgian cuisine and wine have evolved through the centuries, adapting traditions in each era. One of the most unusual traditions of dining is supra, or Georgian table, which is also a way of socializing with friends and family.';

    const moreBtnA = document.createElement('a');
    moreBtnA.setAttribute('href', 'https://en.wikipedia.org/wiki/Georgia_(country)');
    moreBtnA.setAttribute('target', '_blank');
    moreBtnA.setAttribute('rel', 'noopener noreferrer');
    const moreBtn = document.createElement('button');
    moreBtn.id = 'wiki-button';
    moreBtn.textContent = 'More';
    moreBtnA.appendChild(moreBtn);

    georgiaDesContainerDiv.append(countryP, infoP, moreBtnA);

    // contains content of location div
    const locationContainerDiv = document.createElement('div');
    const googleIframe = document.createElement('iframe');
    googleIframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3021674.208398325!2d41.11447854976491!3d42.3029866271149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1658715607826!5m2!1sen!2s');
    googleIframe.setAttribute('allowfullscreen', '');
    googleIframe.setAttribute('loading', 'lazy');
    googleIframe.setAttribute('refererpolicy', 'no-referrer-when-downgrade');
    locationContainerDiv.appendChild(googleIframe);

    georgiaContainerDiv.append(georgiaDesContainerDiv, locationContainerDiv);
    
    return georgiaContainerDiv;
}
export {landing, foodTypesContainer, georgiaInfo};