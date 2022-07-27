const book = () => {
    const reserveContainerDiv = document.createElement('div');
    reserveContainerDiv.id = 'reservation-container';

    const h3 = document.createElement('h3');
    h3.textContent = 'Make a Reservation';
    const infoContainerDiv = document.createElement('div');
    infoContainerDiv.id = 'info-alignment';

    const infoDiv = document.createElement('div');
    infoDiv.id = 'info-div';
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');

    const locImg = document.createElement('img');
    locImg.setAttribute('src', '../img/location.png');
    const phoImg = document.createElement('img');
    phoImg.setAttribute('src', '../img/phone.png');
    const emaImg = document.createElement('img');
    emaImg.setAttribute('src', '../img/email.png')
    const gitImg = document.createElement('img');
    gitImg.setAttribute('src', '../img/github.png');

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

    const inputContainerDivName = document.createElement('div');
    const inputContainerDivEmail = document.createElement('div');
    const inputContainerDivSubscribe = document.createElement('div');
    inputContainerDivName.className = 'input-container';
    inputContainerDivEmail.className = 'input-container';
    inputContainerDivSubscribe.id = 'checkbox';

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'First Name';

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';

    const subscribeLabel = document.createElement('label');
    subscribeLabel.setAttribute('for', 'subscribe');
    subscribeLabel.textContent = 'Subscribe for Updates?';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Name');
    nameInput.setAttribute('name', 'name');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('placeholder', 'Email');
    emailInput.setAttribute('name', 'email');

    const subscribeInput = document.createElement('input');
    subscribeInput.setAttribute('type', 'checkbox');
    subscribeInput.setAttribute('name', 'subscribe');

    inputContainerDivName.append(nameLabel, nameInput);
    inputContainerDivEmail.append(emailLabel, emailInput);
    inputContainerDivSubscribe.append(subscribeLabel, subscribeInput);

    contactDiv.append(inputContainerDivName, inputContainerDivEmail, inputContainerDivSubscribe);
    infoContainerDiv.append(infoDiv, contactDiv);

    reserveContainerDiv.append(h3, infoContainerDiv);

    return reserveContainerDiv;
};

const quoteBlock = () => {
    const reserveQuoteContainerDiv = document.createElement('div');
    reserveQuoteContainerDiv.id = 'reserve-quote';

    const foodImg = document.createElement('img');
    foodImg.setAttribute('src', '../img/big-ish-dish.jpeg');

    const pContainer = document.createElement('div');
    pContainer.id = 'p-container';
    const p1 = document.createElement('p');
    p1.textContent = '"A table for TONIGHT should certainly';
    const p2 = document.createElement('p');
    p2.textContent = 'have been booked years before."';
    pContainer.append(p1, p2);

    reserveQuoteContainerDiv.append(foodImg, pContainer);

    return reserveQuoteContainerDiv;
}
export {book, quoteBlock};