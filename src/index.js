import headerCreate from "../dist/header.js";
import {landing, foodTypesContainer, georgiaInfo} from "../dist/landing.js";

const content = document.getElementById('content');

content.append(headerCreate(), landing(), foodTypesContainer(), georgiaInfo());