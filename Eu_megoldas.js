const euTagok = [
    ["Ausztria", "1995-01-01"],
    ["Belgium", "1958-01-01"],
    ["Bulgária", "2007-01-01"],
    ["Ciprus", "2004-05-01"],
    ["Csehország", "2004-05-01"],
    ["Dánia", "1973-01-01"],
    ["Egyesült Királyság", "1973-01-01"],
    ["Észtország", "2004-05-01"],
    ["Finnország", "1995-01-01"],
    ["Franciaország", "1958-01-01"],
    ["Görögország", "1981-01-01"],
    ["Hollandia", "1958-01-01"],
    ["Horvátország", "2013-07-01"],
    ["Írország", "1973-01-01"],
    ["Lengyelország", "2004-05-01"],
    ["Lettország", "2004-05-01"],
    ["Litvánia", "2004-05-01"],
    ["Luxemburg", "1958-01-01"],
    ["Magyarország", "2004-05-01"],
    ["Málta", "2004-05-01"],
    ["Németország", "1958-01-01"],
    ["Olaszország", "1958-01-01"],
    ["Portugália", "1986-01-01"],
    ["Románia", "2007-01-01"],
    ["Spanyolország", "1986-01-01"],
    ["Svédország", "1995-01-01"],
    ["Szlovákia", "2004-05-01"],
    ["Szlovénia", "2004-05-01"],
  ];
  
  // 1. Hány tagja van az EU-nak?
  function tagokSzama() {
    return euTagok.length;
  }
  
  // 2. Hány ország csatlakozott adott évben?
  function csatlakozottOrszagokSzamaEgyEvben(ev) {
    let db = 0;
    for (const [_, datum] of euTagok) {
      if (new Date(datum).getFullYear() === ev) db++;
    }
    return db;
  }
  
  // 3. Csatlakozott-e adott ország?
  function csatlakozottEOrszag(nev) {
    for (const [orszag] of euTagok) {
      if (orszag.toLowerCase() === nev.toLowerCase()) return true;
    }
    return false;
  }
  
  // 4. Volt-e csatlakozás adott hónapban?
  function voltCsatlakozasAdottHonapban(honap) {
    for (const [_, datum] of euTagok) {
      if (new Date(datum).getMonth() + 1 === honap) return true;
    }
    return false;
  }
  
  // 5. Melyik ország csatlakozott utoljára?
  function utoljaraCsatlakozottOrszag() {
    let utolsoOrszag = "";
    let utolsoDatum = new Date("1900-01-01");
    for (const [orszag, datum] of euTagok) {
      const d = new Date(datum);
      if (d > utolsoDatum) {
        utolsoDatum = d;
        utolsoOrszag = orszag;
      }
    }
    return utolsoOrszag;
  }
  
  // 6. Statisztika
  function csatlakozasiStatisztika() {
    const stat = {};
    for (const [_, datum] of euTagok) {
      const ev = new Date(datum).getFullYear();
      stat[ev] = (stat[ev] || 0) + 1;
    }
    return stat;
  }
  
  
  console.log("Az Európai Uniónak jelenleg ennyi tagja van:", tagokSzama());
  console.log("Ebben az évben csatlakozott országok száma (2007):", csatlakozottOrszagokSzamaEgyEvben(2007));
  console.log("Csatlakozott-e Magyarország az EU-hoz?", csatlakozottEOrszag("Magyarország") ? "Igen" : "Nem");
  console.log("Volt-e csatlakozás május hónapban?", voltCsatlakozasAdottHonapban(5) ? "Igen" : "Nem");
  console.log("Az utoljára csatlakozott ország:", utoljaraCsatlakozottOrszag());
  console.log("Csatlakozási statisztika év szerint:", csatlakozasiStatisztika());
  