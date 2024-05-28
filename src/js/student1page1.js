// Author: Brent Simons

// links van verschillende artikels
const links = [
    'https://historiek.net/berlijnse-luchtbrug-blokkade-berlijn/79797/',
    'https://historiek.net/tsar-bomba-kernbom-1961-video/138214/',
    'https://historiek.net/rode-telefoon-hotline-koude-oorlog/143968/',
    'https://historiek.net/geschiedenis-ddr-ontstaan-kenmerken-tijdlijn/125496/',
    'https://historianet.nl/oorlog/koude-oorlog/wanneer-brak-de-koude-oorlog-uit',
    'https://nl.wikipedia.org/wiki/Rode_schisma',
];

// dit selecteert de button die we gebruik voor het script, het id van de button is article-finder
const button = document.getElementById('article-finder');

// hier voegen we een EventListener toe, die luistert dus totdat er een event gebeurt.
// in dit geval is het event wanneer iemand er op klikt ('click')
button.addEventListener('click', (e) => {
    // als er op de button geklikt word zal het script eerst een nummer tussen 0 en 6 genereren
    const random = Math.floor(Math.random() * 6);
    // daarna zal de functie een van de links kiezen op basis van het willekeurig nummer en dit openen in een nieuw tablad ('_blank')
    window.open(links[random], '_blank');
});
