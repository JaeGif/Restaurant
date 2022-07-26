const eyeCatch = () => {
    const eyeCatchContainerDiv = document.createElement('div');
    const eyePContainerDiv = document.createElement('div');
    eyeCatchContainerDiv.id = 'eye-catcher-container';
    eyePContainerDiv.id = 'eye-p-container';

    const p1 = document.createElement('p');
    p1.textContent = 'beautiful food';
    const p2 = document.createElement('p');
    p2.textContent = 'beautiful experience';
    const p3 = document.createElement('p');
    p3.textContent = 'beautiful ...'
    eyePContainerDiv.append(p1, p2, p3);

    const spreadImg = document.createElement('img');
    spreadImg.setAttribute('src', '../dist/img/food-spread.jpeg');
    spreadImg.id = 'menu-spread-img';

    eyeCatchContainerDiv.append(eyePContainerDiv, spreadImg);

    return eyeCatchContainerDiv;
}

const menu = () => {
    const menuContainerDiv = document.createElement('div');
    menuContainerDiv.id = 'menu';

    const menuH2 = document.createElement('h2');
    menuH2.textContent = 'Menu';

    const typeContainerDiv = document.createElement('div');
    typeContainerDiv.id = 'food-types-container';

    const appetizersDiv = document.createElement('div');
    const entreeDiv = document.createElement('div');
    const dessertDiv = document.createElement('div');

    const appH3 = document.createElement('h3');
    const entH3 = document.createElement('h3');
    const desH3 = document.createElement('h3');
    appH3.textContent = 'Appetizers';
    entH3.textContent = 'Entree';
    desH3.textContent = 'Desserts';

    const appImg = document.createElement('img');
    appImg.setAttribute('src', '../dist/img/salad.png');
    appImg.className = 'img-types';
    const entImg = document.createElement('img');
    entImg.setAttribute('src', '../dist/img/full-set-food.webp');
    entImg.className = 'img-types';
    const desImg = document.createElement('img');
    desImg.setAttribute('src', '../dist/img/dessert.jpeg')
    desImg.className = 'img-types';

    const appP = document.createElement('p');
    appP.textContent = '18';
    const entP = document.createElement('p');
    entP.textContent = '56';
    const desP = document.createElement('p');
    desP.textContent = '24';

    appetizersDiv.append(appH3, appImg, appP)
    entreeDiv.append(entH3, entImg, entP);
    dessertDiv.append(desH3, desImg, desP);

    typeContainerDiv.append(appetizersDiv, entreeDiv, dessertDiv);
    
    menuContainerDiv.append(menuH2, typeContainerDiv);
    
    return menuContainerDiv;

}

const wine = () => {
    const wineContainerDiv = document.createElement('div');
    wineContainerDiv.id = 'wines';

    const wineImg = document.createElement('img');
    wineImg.id = 'white-wine';
    wineImg.setAttribute('src', '../dist/img/white-wine.jpeg');

    const desDiv = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4Em = document.createElement('em');
    const p4 = document.createElement('p');
    p1.textContent = '“Accept what life offers you and try to drink from every cup.';
    p2.textContent = 'All wines should be tasted; some should only be sipped,';
    p3.textContent = 'but with others, drink the whole bottle.” -- Paulo Coelho';
    p4Em.textContent = 'Villa Maria, Savignon Blanc 108';
    p4.appendChild(p4Em);
    const buyBtn = document.createElement('button');
    buyBtn.textContent = 'Buy';
    
    desDiv.append(p1, p2, p3, p4, buyBtn);

    wineContainerDiv.append(wineImg, desDiv);
    return wineContainerDiv;
}

export {eyeCatch, menu, wine};