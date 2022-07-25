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
    menuBtn.textContent = 'Menu';
    staContainerDiv.append(nameP, restaurantP, staP, menuBtn);

    tagContainerDiv.append(desContainerDiv, staContainerDiv);

    return tagContainerDiv;
}

export default landing;