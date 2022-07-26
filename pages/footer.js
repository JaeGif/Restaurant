const footer = () => {
    const footer = document.createElement('footer');

    const hoursDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    const socialsDiv = document.createElement('div');
    hoursDiv.className = 'footer-seg';
    addressDiv.className = 'footer-seg';
    socialsDiv.className = 'footer-seg';

    const hoursTitleP = document.createElement('p');
    hoursTitleP.textContent = 'Hours';
    hoursTitleP.className = 'title';
    const MtoFP = document.createElement('p');
    MtoFP.textContent = 'Mon-Fri: 3p - 10p';
    const StoSP = document.createElement('p');
    StoSP.textContent = 'Sat-Sun: 1p - 11p'
    hoursDiv.append(hoursTitleP, MtoFP, StoSP);

    const addressTitleP = document.createElement('p');
    addressTitleP.textContent = 'Address';
    addressTitleP.className = 'title';
    const addressP = document.createElement('p');
    addressP.textContent = '1234 Seven Hundreth St. Georgia, Georgia 12345';
    addressDiv.append(addressTitleP, addressP);

    const socialsTitleP = document.createElement('p');
    socialsTitleP.textContent = 'Socials';
    socialsTitleP.className = 'title';

    const socialsContainerSpan = document.createElement('span');
    const githubImgA = document.createElement('a');
    githubImgA.setAttribute('href', 'https://github.com/JaeGif');
    const githubImg = document.createElement('img');
    githubImg.setAttribute('src', './img/github.png');
    githubImg.id = 'github-icon';
    githubImgA.appendChild(githubImg);
    const instaImg = document.createElement('img');
    instaImg.setAttribute('src', './img/instagram.png');
    instaImg.id = 'insta-icon';
    const twitterImg = document.createElement('img');
    twitterImg.setAttribute('src', './img/twitter.png');
    twitterImg.id = 'twitter-icon';
    socialsContainerSpan.append(githubImgA, instaImg, twitterImg);
    socialsDiv.append(socialsTitleP, socialsContainerSpan);

    footer.append(hoursDiv, addressDiv, socialsDiv);

    return footer;
}

export default footer;
