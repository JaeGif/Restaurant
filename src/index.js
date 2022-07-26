import header from "../dist/header.js";
import {landing, foodTypesContainer, georgiaInfo} from "../dist/landing.js";
import footer from "../dist/footer.js";
const content = document.getElementById('content');

content.append(header(), landing(), foodTypesContainer(), georgiaInfo(), footer());