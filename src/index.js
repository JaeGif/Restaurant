import header from "../dist/pages/header.js";
import {landing, foodTypesContainer, georgiaInfo} from "../dist/pages/landing.js";
import footer from "../dist/pages/footer.js";
const content = document.getElementById('content');

content.append(header(), landing(), foodTypesContainer(), georgiaInfo(), footer());