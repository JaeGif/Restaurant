import header from "../dist/pages/header.js";
import {landing, foodTypesContainer, georgiaInfo} from "../dist/pages/landing.js";
import footer from "../dist/pages/footer.js";
import {eyeCatch, menu, wine} from "../dist/pages/menu.js";

const content = document.getElementById('content');

const removeChildren = () => {
    const content = document.getElementById('content');
    while (content.children.length > 0) {
        content.children[0].remove();
    };
};

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
        console.log('passed-hopme');
    });
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

loadHome();