const header = () => {
    const header = document.createElement('header');
    const iconsDiv = document.createElement('div');
    iconsDiv.id = 'icons';
    const pomImg = document.createElement('img');
    pomImg.setAttribute('src', './img/pomegranate-icon.webp');
    const supportP = document.createElement('p');
    supportP.textContent = 'We Support Ukraine'
    iconsDiv.append(pomImg, supportP);

    const menuDiv = document.createElement('div');
    menuDiv.id = 'tab-menu';
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.id = 'home-button';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.id = 'menu-button'
    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Book';
    bookBtn.id = 'book-button';
    menuDiv.append(homeBtn, menuBtn, bookBtn);

    header.append(iconsDiv, menuDiv);

    return header;
}

export default header;
