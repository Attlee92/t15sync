const csapatAdat = [
    "Anglia;4;0;1662", "Argentína;10;0;1614", "Belgium;1;0;1752", "Brazília;3;-1;1719", "Chile;17;-3;1576", 
    "Dánia;14;-1;1584", "Franciaország;2;1;1725", "Hollandia;13;3;1586", "Horvátország;8;-1;1625", "Kolumbia;9;-1;1622", 
    "Mexikó;12;0;1603", "Németország;16;-1;1580", "Olaszország;15;1;1583", "Peru;19;0;1551", "Portugália;5;1;1643", 
    "Spanyolország;7;2;1631", "Svájc;11;0;1604", "Svédország;18;0;1560", "Szenegál;20;0;1546", "Uruguay;6;-1;1639"
];

// 1. Hány csapat szerepel a listán
console.log("Csapatok száma:", csapatAdat.length);

// 2. Átlagpontszám számítása
const osszPont = csapatAdat.reduce((sum, csapat) => sum + parseInt(csapat.split(';')[3]), 0);
const atlagPont = osszPont / csapatAdat.length;
console.log("Átlagpontszám:", atlagPont.toFixed(2));

// 3. Átlagnál több pontot elért csapatok listázása
console.log("Átlagnál több pontot szerző csapatok:");
csapatAdat.forEach(csapat => {
    const [nev, helyezes, valtozas, pont] = csapat.split(';');
    if (parseInt(pont) > atlagPont) {
        console.log(`Csapat: ${nev}, Pontszám: ${pont}`);
    }
});

// 5. Magyarország szerepel-e a listán?
function szerepelE(csapatNev) {
    return csapatAdat.some(csapat => csapat.startsWith(csapatNev));
}
console.log("Magyarország szerepel a listán:", szerepelE("Magyarország"));

// 6. Helyezés változás statisztika
const statisztika = {};
csapatAdat.forEach(csapat => {
    let valtozas = parseInt(csapat.split(';')[2]);
    statisztika[valtozas] = (statisztika[valtozas] || 0) + 1;
});
console.log("Helyezésváltozás statisztika:");
Object.entries(statisztika).forEach(([valtozas, db]) => {
    if (db > 1) console.log(`Változás: ${valtozas}, Csapatok száma: ${db}`);
});
