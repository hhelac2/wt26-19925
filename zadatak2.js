function napraviProfil() {
  let profil = { naziv: "Početni" };
  return {
    pregled: function () { return profil; },
    postaviNaziv: function (n) { profil.naziv = n; }
  };
}

const modul1 = napraviProfil();

const p = modul1.pregled();   
p.naziv = "Hakovano";         

console.log(modul1.pregled()); 

function napraviProfilSiguran() {
  let profil = { naziv: "Početni", brojIzmjena: 0 }; 

  return {
    pregled: function () {
      return { naziv: profil.naziv, brojIzmjena: profil.brojIzmjena };
    },
    postaviNaziv: function (n) {
      profil.naziv = n;
      profil.brojIzmjena++;
    }
  };
}

const modul2 = napraviProfilSiguran();

const kopija = modul2.pregled();
kopija.naziv = "Hakovano";       
kopija.brojIzmjena = 999;

console.log(modul2.pregled());   

modul2.postaviNaziv("Novi");     
console.log(modul2.pregled());   