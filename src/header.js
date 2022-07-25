const header = () => {
    const body = document.getElementById('content');
    const iconsDiv = document.createElement('div');
    iconsDiv.id = 'icons';
    const pomImg = document.createElement('img');
    pomImg.setAttribute('src', './img/pomegranate-icon.webp');
    const p = document.createElement('p');
    const menuDiv = document.createElement('div');
    menuDiv.id = 'tab-menu';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Book';

    body.appendChild(iconsDiv);
}

export { header };