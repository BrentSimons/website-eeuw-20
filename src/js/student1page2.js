// Author: Brent Simons

// console log om te laten zien dat JS werkt
console.log('JS Working');

// querySelectorAll -> maakt een lijst van elementen met gebruik CSS selector: elk element dat die CSS selector pakt word dus in de lijst gezet
const headers = document.querySelectorAll('.static-date-header');
console.log(headers);

// p tag element aanmaken voor in de loop
let p = document.createElement("p");
// dit zet de datum van vandaag in een variable, voor gebruik in de loop
const currentDate = new Date();

// deze variabelen houden de datum van de in de loop bij
let msec;
let loopDate

// deze variablelen houden het verschil tussen de 2 datum bij in de loops
let differenceMs;
let differenceDays;

// ik loop over de lijst van elementenm deze zit normaal vol met titels waar datums inzitten.
headers.forEach(function (header, index, headers) {
    // we zetten de datum tekst in de titel om naar miliseconden
    msec = Date.parse(header.textContent);
    // en zetten deze milliseconden om naar een datum
    loopDate = new Date(msec);

    // hier bereken we het verschil in milliseconden tussen de 2 variabelen, als je 2 datums van elkaar aftrekt kom je in JS een milliseconden getal uit.
    differenceMs = currentDate - loopDate;
    // we gebruiken (1000 * 60 * 60 * 24) om het naar dagen omtezetten: 1000 milliseconden, 60 seconden, 60 minuten, 24 uren
    differenceDays = differenceMs / (1000 * 60 * 60 * 24);

    // we zetten de dagen om naar dagen, maanden en jaren
    // 365.25 telt het schikkeljaar erbij en 30.45 is de gemiddelde lengte van een maand
    let dagen = Math.floor(differenceDays % 365.25 % 30.45);
    let maanden = Math.floor(differenceDays % 365.25 / 30.45);
    let jaren = Math.floor(differenceDays / 365.25);

    // hier Maken we de string aan zodat we deze makkelijker in een P element kunnen zetten.
    let tekstParagraph = jaren + ' jaar, ' + maanden + ' maanden en ' + dagen + ' dagen geleden.'
    // hier gebruiken we after om na de header de p tag te inserten en daarin de tekst zetten.
    header.after(p, tekstParagraph);

    // dit word dan geloopt voor elke header
});

