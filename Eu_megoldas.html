<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>EU tagállamok</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 1em; background: #f5f5f5; }
    section { margin-bottom: 1em; background: white; padding: 1em; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    h2 { color: #0055aa; }
  </style>
</head>
<body>
  <h1>EU Tagállamok Elemzése</h1>

  <section id="tagokSzama"></section>
  <section id="csatlakozott2007"></section>
  <section id="csatlakozottOrszag"></section>
  <section id="voltCsatlakozasHonapban"></section>
  <section id="utolsoCsatlakozo"></section>
  <section id="statisztika"></section>

  <script>
    // Adatok feldolgozása tömbbé
    const adatLista = `Ausztria;1995.01.01
Belgium;1958.01.01
Bulgária;2007.01.01
Ciprus;2004.05.01
Csehország;2004.05.01
Dánia;1973.01.01
Egyesült Királyság;1973.01.01
Észtország;2004.05.01
Finnország;1995.01.01
Franciaország;1958.01.01
Görögország;1981.01.01
Hollandia;1958.01.01
Horvátország;2013.07.01
Írország;1973.01.01
Lengyelország;2004.05.01
Lettország;2004.05.01
Litvánia;2004.05.01
Luxemburg;1958.01.01
Magyarország;2004.05.01
Málta;2004.05.01
Németország;1958.01.01
Olaszország;1958.01.01
Portugália;1986.01.01
Románia;2007.01.01
Spanyolország;1986.01.01
Svédország;1995.01.01
Szlovákia;2004.05.01
Szlovénia;2004.05.01`
      .split('\n')
      .map(sor => {
        const [orszag, datum] = sor.split(';');
        return [orszag, new Date(datum.replace(/\./g, '-'))];
      });

    // 1. Hány tagja van az EU-nak?
    document.getElementById("tagokSzama").innerHTML = `<h2>1. Tagok száma</h2><p>Az EU-nak ${adatLista.length} tagja van.</p>`;

    // 2. Hány ország csatlakozott 2007-ben (paraméteres is)
    function csatlakozottEvben(ev) {
      return adatLista.filter(([_, datum]) => datum.getFullYear() === ev).length;
    }
    document.getElementById("csatlakozott2007").innerHTML = `<h2>2. Csatlakozások 2007-ben</h2><p>${csatlakozottEvben(2007)} ország csatlakozott 2007-ben.</p>`;

    // 3. Magyarország csatlakozott-e (paraméteres is)
    function csatlakozottEOrszag(nev) {
      return adatLista.some(([orszag]) => orszag.toLowerCase() === nev.toLowerCase());
    }
    const magyarorszagIgen = csatlakozottEOrszag("Magyarország") ? "Igen" : "Nem";
    document.getElementById("csatlakozottOrszag").innerHTML = `<h2>3. Magyarország EU tag?</h2><p>${magyarorszagIgen}</p>`;

    // 4. Volt-e májusban csatlakozás? (paraméteres is)
    function voltCsatlakozasHonapban(honap) {
      return adatLista.some(([_, datum]) => datum.getMonth() + 1 === honap);
    }
    const majusVolt = voltCsatlakozasHonapban(5) ? "Igen" : "Nem";
    document.getElementById("voltCsatlakozasHonapban").innerHTML = `<h2>4. Volt-e májusban csatlakozás?</h2><p>${majusVolt}</p>`;

    // 5. Melyik ország csatlakozott utoljára?
    function utolsoCsatlakozo() {
      return adatLista.reduce((utolso, aktualis) => aktualis[1] > utolso[1] ? aktualis : utolso)[0];
    }
    document.getElementById("utolsoCsatlakozo").innerHTML = `<h2>5. Utolsó csatlakozó</h2><p>${utolsoCsatlakozo()}</p>`;

    // 6. Statisztika: 
    function csatlakozasiStatisztika() {
      const stat = {};
      adatLista.forEach(([_, datum]) => {
        const ev = datum.getFullYear();
        stat[ev] = (stat[ev] || 0) + 1;
      });
      return stat;
    }
    const stat = csatlakozasiStatisztika();
    const statHtml = Object.entries(stat)
      .sort((a, b) => a[0] - b[0])
      .map(([ev, db]) => `<li>${ev}: ${db} ország</li>`)
      .join("");
    document.getElementById("statisztika").innerHTML = `<h2>6. Éves statisztika</h2><ul>${statHtml}</ul>`;
  </script>
</body>
</html>
