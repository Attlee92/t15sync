const csapatAdat = [
    "Anglia;4;0;1662", "Argentína;10;0;1614", "Belgium;1;0;1752", "Brazília;3;-1;1719",
    "Chile;17;-3;1576", "Dánia;14;-1;1584", "Franciaország;2;1;1725", "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625", "Kolumbia;9;-1;1622", "Mexikó;12;0;1603", "Németország;16;-1;1580",
    "Olaszország;15;1;1583", "Peru;19;0;1551", "Portugália;5;1;1643", "Spanyolország;7;2;1631",
    "Svájc;11;0;1604", "Svédország;18;0;1560", "Szenegál;20;0;1546", "Uruguay;6;-1;1639"
];

function csapatokSzama(lista) {
    return lista.length;
}

function atlagPontszam(lista) {
    let osszPont = 0;
    for (let i = 0; i < lista.length; i++) {
        osszPont += parseInt(lista[i].split(';')[3]);
    }
    return osszPont / lista.length;
}

function atlagFelettiCsapatok(lista) {
    let atlag = atlagPontszam(lista);
    let eredmeny = [];
    for (let i = 0; i < lista.length; i++) {
        let adatok = lista[i].split(';');
        let nev = adatok[0];
        let pontszam = parseInt(adatok[3]);
        if (pontszam > atlag) {
            eredmeny.push(`${nev} - ${pontszam} pont`);
        }
    }
    return eredmeny;
}

function legtobbetJavito(lista) {
    let maxValtozas = -Infinity;
    let legjobbCsapat = "";
    for (let i = 0; i < lista.length; i++) {
        let adatok = lista[i].split(';');
        let nev = adatok[0];
        let helyezes = parseInt(adatok[1]);
        let valtozas = parseInt(adatok[2]);
        let pontszam = parseInt(adatok[3]);
        if (valtozas > maxValtozas) {
            maxValtozas = valtozas;
            legjobbCsapat = `Helyezés: ${helyezes}, Csapat: ${nev}, Pontszám: ${pontszam}`;
        }
    }
    return legjobbCsapat;
}

function szerepelE(lista, keresettCsapat) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].split(';')[0] === keresettCsapat) {
            return true;
        }
    }
    return false;
}


console.log("Csapatok száma:", csapatokSzama(csapatAdat));
console.log("Átlagpontszám:", atlagPontszam(csapatAdat).toFixed(2));
console.log("Átlag felett teljesítő csapatok:");
console.log(atlagFelettiCsapatok(csapatAdat).join("\n"));
console.log("Legtöbbet javító csapat:");
console.log(legtobbetJavito(csapatAdat));
console.log("Magyarország szerepel-e a listán:", szerepelE(csapatAdat, "Magyarország") ? "Igen" : "Nem");


