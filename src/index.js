import header from './pages/header.js';
import { landing, foodTypesContainer, georgiaInfo } from './pages/landing.js';
import footer from './pages/footer.js';
import { eyeCatch, menu, wine } from './pages/menu.js';
import { removeChildren } from './functions/reload.js';
import { book, quoteBlock } from './pages/book.js';
const content = document.getElementById('content');

// adds listeners for tab switches
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
  });
};

// load individual pages
const loadHome = () => {
  const homePage = document.createElement('div');
  homePage.id = 'home-content';
  content.appendChild(homePage);
  homePage.append(
    header(),
    landing(),
    foodTypesContainer(),
    georgiaInfo(),
    footer()
  );
  tabListeners();
  const menuBtn2 = document.getElementById('menu-button-2');
  menuBtn2.addEventListener('click', () => {
    removeChildren();
    loadMenu();
  });
};

const loadMenu = () => {
  const menuPage = document.createElement('div');
  menuPage.id = 'menu-content';
  content.appendChild(menuPage);
  menuPage.append(header(), eyeCatch(), menu(), wine(), footer());
  tabListeners();
};

const loadBook = () => {
  const bookPage = document.createElement('div');
  bookPage.id = 'book-content';
  content.appendChild(bookPage);
  bookPage.append(header(), book(), quoteBlock(), footer());
  tabListeners();
};

// first visit loads homepage
loadHome();
