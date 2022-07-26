(()=>{"use strict";const e=()=>{const e=document.createElement("header"),t=document.createElement("div");t.id="icons";const n=document.createElement("img");n.setAttribute("src","./img/pomegranate-icon.webp");const o=document.createElement("p");o.textContent="We Support Ukraine",t.append(n,o);const c=document.createElement("div");c.id="tab-menu";const m=document.createElement("button");m.textContent="Home";const r=document.createElement("button");r.textContent="Menu";const a=document.createElement("button");return a.textContent="Book",c.append(m,r,a),e.append(t,c),e},t=()=>{const e=document.createElement("footer"),t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");t.className="footer-seg",n.className="footer-seg",o.className="footer-seg";const c=document.createElement("p");c.textContent="Hours",c.className="title";const m=document.createElement("p");m.textContent="Mon-Fri: 3p - 10p";const r=document.createElement("p");r.textContent="Sat-Sun: 1p - 11p",t.append(c,m,r);const a=document.createElement("p");a.textContent="Address",a.className="title";const d=document.createElement("p");d.textContent="1234 Seven Hundreth St. Georgia, Georgia 12345",n.append(a,d);const i=document.createElement("p");i.textContent="Socials",i.className="title";const s=document.createElement("span"),u=document.createElement("a");u.setAttribute("href","https://github.com/JaeGif");const l=document.createElement("img");l.setAttribute("src","./img/github.png"),l.id="github-icon",u.appendChild(l);const p=document.createElement("img");p.setAttribute("src","./img/instagram.png"),p.id="insta-icon";const E=document.createElement("img");return E.setAttribute("src","./img/twitter.png"),E.id="twitter-icon",s.append(u,p,E),o.append(i,s),e.append(t,n,o),e},n=document.getElementById("content");document.getElementById("menu-content").append(e(),(()=>{const e=document.createElement("div"),t=document.createElement("div");e.id="eye-catcher-container",t.id="eye-p-container";const n=document.createElement("p");n.textContent="beautiful food";const o=document.createElement("p");o.textContent="beautiful experience";const c=document.createElement("p");c.textContent="beautiful ...",t.append(n,o,c);const m=document.createElement("img");return m.setAttribute("src","../dist/img/food-spread.jpeg"),m.id="menu-spread-img",e.append(t,m),e})(),(()=>{const e=document.createElement("div");e.id="menu";const t=document.createElement("h2");t.textContent="Menu";const n=document.createElement("div");n.id="food-types-container";const o=document.createElement("div"),c=document.createElement("div"),m=document.createElement("div"),r=document.createElement("h3"),a=document.createElement("h3"),d=document.createElement("h3");r.textContent="Appetizers",a.textContent="Entree",d.textContent="Desserts";const i=document.createElement("img");i.setAttribute("src","../dist/img/salad.png"),i.className="img-types";const s=document.createElement("img");s.setAttribute("src","../dist/img/full-set-food.webp"),s.className="img-types";const u=document.createElement("img");u.setAttribute("src","../dist/img/dessert.jpeg"),u.className="img-types";const l=document.createElement("p");l.textContent="18";const p=document.createElement("p");p.textContent="56";const E=document.createElement("p");return E.textContent="24",o.append(r,i,l),c.append(a,s,p),m.append(d,u,E),n.append(o,c,m),e.append(t,n),e})(),(()=>{const e=document.createElement("div");e.id="wines";const t=document.createElement("img");t.id="white-wine",t.setAttribute("src","../dist/img/white-wine.jpeg");const n=document.createElement("div"),o=document.createElement("p"),c=document.createElement("p"),m=document.createElement("p"),r=document.createElement("em"),a=document.createElement("p");o.textContent="“Accept what life offers you and try to drink from every cup.",c.textContent="All wines should be tasted; some should only be sipped,",m.textContent="but with others, drink the whole bottle.” -- Paulo Coelho",r.textContent="Villa Maria, Savignon Blanc 108",a.appendChild(r);const d=document.createElement("button");return d.textContent="Buy",n.append(o,c,m,a,d),e.append(t,n),e})(),t()),n.append(e(),(()=>{const e=document.createElement("div");e.id="tagline-container";const t=document.createElement("div");t.id="description-container";const n=document.createElement("img");n.setAttribute("src","./img/landing-hero.webp"),t.appendChild(n);const o=document.createElement("div");o.id="statement-container";const c=document.createElement("p"),m=document.createElement("em");m.textContent="Jaeri",c.appendChild(m);const r=document.createElement("p");r.textContent="Georgian Food and Wine Experience";const a=document.createElement("p");a.textContent="A recipe has no soul. You as the cook, must bring soul to the recipe. Georgia, not the state, the country. Delicious food is best served with wonderful friends.";const d=document.createElement("button");return d.textContent="Menu",o.append(c,r,a,d),e.append(t,o),e})(),(()=>{const e=document.createElement("div");e.id="food-types-container";const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div");e.append(t,n,o);const c=document.createElement("a"),m=document.createElement("a"),r=document.createElement("a");c.setAttribute("href","#"),m.setAttribute("href","#"),r.setAttribute("href","#");const a=document.createElement("img"),d=document.createElement("img"),i=document.createElement("img");a.setAttribute("src","./img/full-set-food.webp"),d.setAttribute("src","./img/wine.jpeg"),i.setAttribute("src","./img/strawberry-dessert.jpeg"),a.className="img-types",d.className="img-types",i.className="img-types",c.appendChild(a),m.appendChild(d),r.appendChild(i);const s=document.createElement("h4"),u=document.createElement("h4"),l=document.createElement("h4");return s.textContent="Food",u.textContent="Wine",l.textContent="Dessert",t.append(c,s),n.append(m,u),o.append(r,l),e})(),(()=>{const e=document.createElement("div");e.id="georgia-container";const t=document.createElement("div");t.id="georgia-description";const n=document.createElement("p"),o=document.createElement("em");o.textContent="Georgia",n.appendChild(o);const c=document.createElement("p");c.textContent="Georgian cuisine and wine have evolved through the centuries, adapting traditions in each era. One of the most unusual traditions of dining is supra, or Georgian table, which is also a way of socializing with friends and family.";const m=document.createElement("a");m.setAttribute("href","https://en.wikipedia.org/wiki/Georgia_(country)"),m.setAttribute("target","_blank"),m.setAttribute("rel","noopener noreferrer");const r=document.createElement("button");r.id="wiki-button",r.textContent="More",m.appendChild(r),t.append(n,c,m);const a=document.createElement("div"),d=document.createElement("iframe");return d.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3021674.208398325!2d41.11447854976491!3d42.3029866271149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1658715607826!5m2!1sen!2s"),d.setAttribute("allowfullscreen",""),d.setAttribute("loading","lazy"),d.setAttribute("refererpolicy","no-referrer-when-downgrade"),a.appendChild(d),e.append(t,a),e})(),t())})();