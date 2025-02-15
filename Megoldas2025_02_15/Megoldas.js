/* Készítette: Attila Kecskés
   Csoport: #TeamFrontend
   HTML tudás: 90
   CSS tudás: 85
   JavaScript tudás: 60
*/

document.write("<h2>Készítő adatai</h2>");
document.write("Név: Attila Kecskés<br>");
document.write("Csoport: #TeamFrontend<br>");
document.write("HTML tudás: 90<br>");
document.write("CSS tudás: 85<br>");
document.write("JavaScript tudás: 60<br>");

document.write("<h2>Hatványozás</h2>");
function hatvanyozas() {
    let szam = prompt("Adj meg egy számot:");
    let kitevo = prompt("Add meg a hatvány kitevőjét:");
    let eredmeny = Math.pow(szam, kitevo);
    document.write(szam + " a " + kitevo + "-on: " + eredmeny + "<br>");
}
hatvanyozas();

document.write("<h2>Páros szám generálás</h2>");
function parosSzamGeneralas() {
    let also = parseInt(prompt("Add meg az alsó határt:"));
    let felso = parseInt(prompt("Add meg a felső határt:"));
    let parosSzam = Math.floor(Math.random() * ((felso - also) / 2 + 1)) * 2 + also;
    document.write("Generált páros szám: " + parosSzam + "<br>");
}
parosSzamGeneralas();

document.write("<h2>Életkor besorolás</h2>");
function eletkorBesorolas() {
    let eletkor = parseInt(prompt("Add meg az életkort:"));
    let besorolas;
    if (eletkor < 0 || eletkor > 120) {
        besorolas = "Hibás adat!";
    } else if (eletkor <= 6) {
        besorolas = "Kisgyermekkor";
    } else if (eletkor <= 12) {
        besorolas = "Gyermekkor";
    } else if (eletkor <= 16) {
        besorolas = "Serdülőkor";
    } else if (eletkor <= 20) {
        besorolas = "Ifjúkor";
    } else if (eletkor <= 30) {
        besorolas = "Fiatal felnőttkor";
    } else if (eletkor <= 60) {
        besorolas = "Felnőttkor";
    } else {
        besorolas = "Aggkor";
    }
    document.write("Besorolás: " + besorolas + "<br>");
}
eletkorBesorolas();

document.write("<h2>Osztó ellenőrzés</h2>");
function oszthatoE() {
    let szam = parseInt(prompt("Adj meg egy számot:"));
    let oszto = parseInt(prompt("Adj meg egy osztót:"));
    if (szam % oszto === 0) {
        document.write(szam + " osztható " + oszto + "maradék nélkül.<br>");
    } else {
        document.write(szam + " nem osztható " + oszto + "maradék nélkül.<br>");
    }
}
oszthatoE();

document.write("<h2>Első 10 négyzetszám</h2>");
function negyzetszamok() {
    for (let i = 1; i <= 10; i++) {
        document.write(i + "^2 = " + (i * i) + "<br>");
    }
}
negyzetszamok();
