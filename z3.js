const forma = document.getElementById("forma");
const poljeNaziv = document.getElementById("naziv");
const poljeIznos = document.getElementById("iznos");
const greska = document.getElementById("greska");

const tijelo = document.getElementById("tijelo");   
const celijaZbir = document.getElementById("zbir");
const celijaBroj = document.getElementById("broj-stavki");

function azurirajZbir() {
    const redovi = tijelo.rows;
    let zbir = 0;

    for (let i = 0; i < redovi.length; i++) {
        const iznos = parseFloat(redovi[i].cells[1].textContent);
        zbir += iznos;
    }

    celijaZbir.textContent = zbir.toFixed(2);
    celijaBroj.textContent = "Ukupno (" + redovi.length + " stavki)";
}

forma.addEventListener("submit", function (event) {

    event.preventDefault();

    const naziv = poljeNaziv.value.trim();
    const iznosTekst = poljeIznos.value.trim().replace(",", ".");
    const iznos = Number(iznosTekst);

    if (naziv === "") {
        greska.textContent = "Naziv ne smije biti prazan.";
        return;
    }
    if (iznosTekst === "" || isNaN(iznos)) {
        greska.textContent = "Iznos mora biti broj.";
        return;
    }
    if (iznos < 0) {
        greska.textContent = "Iznos ne smije biti negativan.";
        return;
    }

    greska.textContent = "";
    const noviRed = tijelo.insertRow(-1);
    const celijaNaziv = noviRed.insertCell(0);
    const celijaIznos = noviRed.insertCell(1);

    celijaNaziv.textContent = naziv;        
    celijaIznos.textContent = iznos.toFixed(2);
    celijaIznos.className = "broj";

    azurirajZbir();

    forma.reset();
    poljeNaziv.focus();
});

azurirajZbir();