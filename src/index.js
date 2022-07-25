import headerCreate from "../dist/header.js";
import landing from "../dist/landing.js";

const content = document.getElementById('content');

content.append(headerCreate(), landing());