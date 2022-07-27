(()=>{"use strict";const e=()=>{const e=document.createElement("header"),t=document.createElement("div");t.id="icons";const n=document.createElement("img");n.setAttribute("src","./img/pomegranate-icon.webp");const c=document.createElement("p");c.textContent="We Support Ukraine",t.append(n,c);const o=document.createElement("div");o.id="tab-menu";const m=document.createElement("button");m.textContent="Home",m.id="home-button";const a=document.createElement("button");a.textContent="Menu",a.id="menu-button";const d=document.createElement("button");return d.textContent="Book",d.id="book-button",o.append(m,a,d),e.append(t,o),e},t=()=>{const e=document.createElement("footer"),t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div");t.className="footer-seg",n.className="footer-seg",c.className="footer-seg";const o=document.createElement("p");o.textContent="Hours",o.className="title";const m=document.createElement("p");m.textContent="Mon-Fri: 3p - 10p";const a=document.createElement("p");a.textContent="Sat-Sun: 1p - 11p",t.append(o,m,a);const d=document.createElement("p");d.textContent="Address",d.className="title";const r=document.createElement("p");r.textContent="1234 Seven Hundreth St. Georgia, Georgia 12345",n.append(d,r);const i=document.createElement("p");i.textContent="Socials",i.className="title";const s=document.createElement("span"),u=document.createElement("a");u.setAttribute("href","https://github.com/JaeGif");const l=document.createElement("img");l.setAttribute("src","./img/github.png"),l.id="github-icon",u.appendChild(l);const p=document.createElement("img");p.setAttribute("src","./img/instagram.png"),p.id="insta-icon";const E=document.createElement("img");return E.setAttribute("src","./img/twitter.png"),E.id="twitter-icon",s.append(u,p,E),c.append(i,s),e.append(t,n,c),e},n=()=>{const e=document.getElementById("content");for(;e.children.length>0;)e.children[0].remove()},c=document.getElementById("content"),o=()=>{document.getElementById("menu-button").addEventListener("click",(()=>{n(),a()})),document.getElementById("home-button").addEventListener("click",(()=>{n(),m()})),document.getElementById("book-button").addEventListener("click",(()=>{n(),d()}))},m=()=>{const m=document.createElement("div");m.id="home-content",c.appendChild(m),m.append(e(),(()=>{const e=document.createElement("div");e.id="tagline-container";const t=document.createElement("div");t.id="description-container";const n=document.createElement("img");n.setAttribute("src","./img/landing-hero.webp"),t.appendChild(n);const c=document.createElement("div");c.id="statement-container";const o=document.createElement("p"),m=document.createElement("em");m.textContent="Jaeri",o.appendChild(m);const a=document.createElement("p");a.textContent="Georgian Food and Wine Experience";const d=document.createElement("p");d.textContent="A recipe has no soul. You as the cook, must bring soul to the recipe. Georgia, not the state, the country. Delicious food is best served with wonderful friends.";const r=document.createElement("button");return r.id="menu-button-2",r.textContent="Menu",c.append(o,a,d,r),e.append(t,c),e})(),(()=>{const e=document.createElement("div");e.id="food-types-container";const t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div");e.append(t,n,c);const o=document.createElement("a"),m=document.createElement("a"),a=document.createElement("a");o.setAttribute("href","#"),m.setAttribute("href","#"),a.setAttribute("href","#");const d=document.createElement("img"),r=document.createElement("img"),i=document.createElement("img");d.setAttribute("src","./img/full-set-food.webp"),r.setAttribute("src","./img/wine.jpeg"),i.setAttribute("src","./img/strawberry-dessert.jpeg"),d.className="img-types",r.className="img-types",i.className="img-types",o.appendChild(d),m.appendChild(r),a.appendChild(i);const s=document.createElement("h4"),u=document.createElement("h4"),l=document.createElement("h4");return s.textContent="Food",u.textContent="Wine",l.textContent="Dessert",t.append(o,s),n.append(m,u),c.append(a,l),e})(),(()=>{const e=document.createElement("div");e.id="georgia-container";const t=document.createElement("div");t.id="georgia-description";const n=document.createElement("p"),c=document.createElement("em");c.textContent="Georgia",n.appendChild(c);const o=document.createElement("p");o.textContent="Georgian cuisine and wine have evolved through the centuries, adapting traditions in each era. One of the most unusual traditions of dining is supra, or Georgian table, which is also a way of socializing with friends and family.";const m=document.createElement("a");m.setAttribute("href","https://en.wikipedia.org/wiki/Georgia_(country)"),m.setAttribute("target","_blank"),m.setAttribute("rel","noopener noreferrer");const a=document.createElement("button");a.id="wiki-button",a.textContent="More",m.appendChild(a),t.append(n,o,m);const d=document.createElement("div"),r=document.createElement("iframe");return r.setAttribute("src","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3021674.208398325!2d41.11447854976491!3d42.3029866271149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1658715607826!5m2!1sen!2s"),r.setAttribute("allowfullscreen",""),r.setAttribute("loading","lazy"),r.setAttribute("refererpolicy","no-referrer-when-downgrade"),d.appendChild(r),e.append(t,d),e})(),t()),o(),document.getElementById("menu-button-2").addEventListener("click",(()=>{n(),a()}))},a=()=>{const n=document.createElement("div");n.id="menu-content",c.appendChild(n),n.append(e(),(()=>{const e=document.createElement("div"),t=document.createElement("div");e.id="eye-catcher-container",t.id="eye-p-container";const n=document.createElement("p");n.textContent="beautiful food";const c=document.createElement("p");c.textContent="beautiful experience";const o=document.createElement("p");o.textContent="beautiful ...",t.append(n,c,o);const m=document.createElement("img");return m.setAttribute("src","./img/food-spread.jpeg"),m.id="menu-spread-img",e.append(t,m),e})(),(()=>{const e=document.createElement("div");e.id="menu";const t=document.createElement("h2");t.textContent="Menu";const n=document.createElement("div");n.id="food-types-container";const c=document.createElement("div"),o=document.createElement("div"),m=document.createElement("div"),a=document.createElement("h3"),d=document.createElement("h3"),r=document.createElement("h3");a.textContent="Salad",d.textContent="Entree",r.textContent="Parfait";const i=document.createElement("img");i.setAttribute("src","./img/salad.png"),i.className="img-types";const s=document.createElement("img");s.setAttribute("src","./img/full-set-food.webp"),s.className="img-types";const u=document.createElement("img");u.setAttribute("src","./img/dessert.jpeg"),u.className="img-types";const l=document.createElement("p");l.textContent="18";const p=document.createElement("p");p.textContent="56";const E=document.createElement("p");return E.textContent="24",c.append(a,i,l),o.append(d,s,p),m.append(r,u,E),n.append(c,o,m),e.append(t,n),e})(),(()=>{const e=document.createElement("div");e.id="wines";const t=document.createElement("img");t.id="white-wine",t.setAttribute("src","./img/white-wine.jpeg");const n=document.createElement("div"),c=document.createElement("p"),o=document.createElement("p"),m=document.createElement("p"),a=document.createElement("em"),d=document.createElement("p");c.textContent="“Accept what life offers you and try to drink from every cup.",o.textContent="All wines should be tasted; some should only be sipped,",m.textContent="but with others, drink the whole bottle.” -- Paulo Coelho",a.textContent="Villa Maria, Savignon Blanc 108",d.appendChild(a);const r=document.createElement("button");return r.textContent="Buy",n.append(c,o,m,d,r),e.append(t,n),e})(),t()),console.log("passed"),o()},d=()=>{const n=document.createElement("div");n.id="book-content",c.appendChild(n),n.append(e(),(()=>{const e=document.createElement("div");e.id="reservation-container";const t=document.createElement("h3");t.textContent="Make a Reservation";const n=document.createElement("div");n.id="info-alignment";const c=document.createElement("div");c.id="info-div";const o=document.createElement("span"),m=document.createElement("span"),a=document.createElement("span"),d=document.createElement("span"),r=document.createElement("img");r.setAttribute("src","./img/location.png");const i=document.createElement("img");i.setAttribute("src","./img/phone.png");const s=document.createElement("img");s.setAttribute("src","./img/email.png");const u=document.createElement("img");u.setAttribute("src","./img/github.png"),r.className="icons",i.className="icons",s.className="icons",u.className="icons";const l=document.createElement("p");l.textContent="1234 Seven Hundreth St. Georgia, Georgia 12345";const p=document.createElement("p");p.textContent="123-456-1234";const E=document.createElement("p");E.textContent="fakemail@cooladdress.com";const g=document.createElement("p");g.textContent="Github";const b=document.createElement("a");b.setAttribute("href","https://github.com/JaeGif"),b.append(u),o.append(r,l),m.append(i,p),a.append(s,E),d.append(b,g),c.append(o,m,a,d);const h=document.createElement("div");h.id="contact";const C=document.createElement("div"),f=document.createElement("div"),v=document.createElement("div");C.className="input-container",f.className="input-container",v.id="checkbox";const x=document.createElement("label");x.setAttribute("for","name"),x.textContent="First Name";const A=document.createElement("label");A.setAttribute("for","email"),A.textContent="Email";const y=document.createElement("label");y.setAttribute("for","subscribe"),y.textContent="Subscribe for Updates?";const w=document.createElement("input");w.setAttribute("type","text"),w.setAttribute("placeholder","Name"),w.setAttribute("name","name");const k=document.createElement("input");k.setAttribute("type","email"),k.setAttribute("placeholder","Email"),k.setAttribute("name","email");const N=document.createElement("input");return N.setAttribute("type","checkbox"),N.setAttribute("name","subscribe"),C.append(x,w),f.append(A,k),v.append(y,N),h.append(C,f,v),n.append(c,h),e.append(t,n),e})(),(()=>{const e=document.createElement("div");e.id="reserve-quote";const t=document.createElement("img");t.setAttribute("src","./img/big-ish-dish.jpeg");const n=document.createElement("div");n.id="p-container";const c=document.createElement("p");c.textContent='"A table for TONIGHT should certainly';const o=document.createElement("p");return o.textContent='have been booked years before."',n.append(c,o),e.append(t,n),e})(),t()),o()};m()})();