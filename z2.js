const forma = document.getElementById("forma");
const poljeNaslov = document.getElementById("naslov");
const poljeTekst = document.getElementById("tekst");
const greska = document.getElementById("greska");
const dugmePregled = document.getElementById("pregled");
const dugmeReset = document.getElementById("vrati");
const kartica = document.getElementById("kartica");
const prikazNaslov = document.getElementById("prikaz-naslov");
const prikazTekst = document.getElementById("prikaz-tekst");
const prikazKategorija = document.getElementById("prikaz-kategorija");
const naziviKategorija = {
    hitno: "Hitno",
    informativno: "Informativno"
};

dugmePregled.addEventListener("click", function () {
    const naslov = poljeNaslov.value.trim();
    const tekst = poljeTekst.value.trim();
    const kategorija = document.querySelector('input[name="kategorija"]:checked').value;
    const greske = [];
    if (naslov === "") {
        greske.push("Naslov ne smije biti prazan.");
    }
    if (tekst === "") {
        greske.push("Tekst obavijesti ne smije biti prazan.");
    }

    if (greske.length > 0) {
        greska.textContent = greske.join(" ");
        return;
    }
    greska.textContent = "";
    prikazNaslov.textContent = naslov;
    prikazTekst.textContent = tekst;
    prikazKategorija.textContent = naziviKategorija[kategorija];

    kartica.classList.remove("hitno", "informativno");
    kartica.classList.add(kategorija);
});

dugmeReset.addEventListener("click", function () {
    forma.reset();
    greska.textContent = "";
});