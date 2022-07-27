import header from "../dist/pages/header.js";
import {landing, foodTypesContainer, georgiaInfo} from "../dist/pages/landing.js";
import footer from "../dist/pages/footer.js";
import {eyeCatch, menu, wine} from "../dist/pages/menu.js";
import {removeChildren} from "../dist/functions/reload.js";
import {book, quoteBlock} from "../dist/pages/book.js"
const content = document.getElementById('content');


const tabListeners = () => {
    const menuBtn = document.getElementById('menu-button');
    menuBtn.addEventListener('click', () => {
        removeChildren();
        loadMenu();
    });

    const homeBtn = document.getElementById('home-button');
    homeBtn.addEventListener('click', () => {
        removeChildren();
        loadHome();
    });

    const bookBtn = document.getElementById('book-button');
    bookBtn.addEventListener('click', () => {
        removeChildren();
        loadBook();
    })
};

const loadHome = () => {
    const homePage = document.createElement('div');
    homePage.id = 'home-content';
    content.appendChild(homePage);
    homePage.append(header(), landing(), foodTypesContainer(), georgiaInfo(), footer());
    tabListeners();
};

const loadMenu = () => {
    const menuPage = document.createElement('div');
    menuPage.id = 'menu-content';
    content.appendChild(menuPage);
    menuPage.append(header(), eyeCatch(), menu(), wine(), footer());
    console.log('passed');
    tabListeners();
}

const loadBook = () => {
    const bookPage = document.createElement('div');
    bookPage.id = 'book-content';
    content.appendChild(bookPage);
    bookPage.append(header(), book(), quoteBlock(), footer());
    tabListeners();
}
loadHome();