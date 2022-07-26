import header from "../dist/pages/header.js";
import {landing, foodTypesContainer, georgiaInfo} from "../dist/pages/landing.js";
import footer from "../dist/pages/footer.js";
import {eyeCatch, menu, wine} from "../dist/pages/menu.js";

const content = document.getElementById('content');
const menuContent = document.getElementById('menu-content');

menuContent.append(header(), eyeCatch(), menu(), wine(), footer());
content.append(header(), landing(), foodTypesContainer(), georgiaInfo(), footer());