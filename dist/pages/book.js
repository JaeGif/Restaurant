const book = () => {
    const reserveContainerDiv = document.createElement('div');
    reserveContainerDiv.id = 'reservation-container';

    const h3 = document.createElement('h3');
    const infoContainerDiv = document.createElement('div');
    infoContainerDiv.id = 'info-alignment';

    const infoDiv = document.createElement('div');
    infoDiv.id = 'info-div';
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');

    const locImg = document.createElement('img');
    locImg.setAttribute('src', '../dist/img/location.png');
    const phoImg = document.createElement('img');
    phoImg.setAttribute('src', '../dist/img/phone.png');
    const emaImg = document.createElement('img');
    emaImg.setAttribute('src', '../dist/img/email.png')
    const gitImg = document.createElement('img');
    gitImg.setAttribute('src', '../dist/img/github.png');

    locImg.className = 'icons';
    phoImg.className = 'icons';
    emaImg.className = 'icons';
    gitImg.className = 'icons';

    const locP = document.createElement('p');
    locP.textContent = '1234 Seven Hundreth St. Georgia, Georgia 12345';
    const phoP = document.createElement('p');
    phoP.textContent = '123-456-1234';
    const emaP = document.createElement('p');
    emaP.textContent = 'fakemail@cooladdress.com'
    const gitP = document.createElement('p');
    gitP.textContent = 'Github';

    const gitA = document.createElement('a');
    gitA.setAttribute('href', 'https://github.com/JaeGif');
    gitA.append(gitImg);

    span1.append(locImg, locP);
    span2.append(phoImg, phoP);
    span3.append(emaImg, emaP);
    span4.append(gitA, gitP);

    infoDiv.append(span1, span2, span3, span4);

    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact';

    const inputContainerDiv1 = document.createElement('div');
    const inputContainerDiv2 = document.createElement('div');
    const inputContainerDiv3 = document.createElement('div');


    infoContainerDiv.append(infoDiv, contactDiv);


    reserveContainerDiv.append(h3, infoContainerDiv);
    return reserveContainerDiv;
};

export default reserveContainerDiv;