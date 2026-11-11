const stavke = document.querySelectorAll(".stavka");
const sazetak = document.getElementById("sazetak");
const dugmeReset = document.getElementById("reset");

function azurirajSazetak() {
    const ukupno = stavke.length;
    const zavrseno = document.querySelectorAll(".stavka.zavrseno").length;
    sazetak.textContent = "Završeno: " + zavrseno + " / " + ukupno;
}

function promijeniStanje(stavka) {
    stavka.classList.toggle("zavrseno");

    const dugme = stavka.querySelector(".dugme-stanje");
    if (stavka.classList.contains("zavrseno")) {
        dugme.textContent = "Vrati kao nezavršeno";
    } else {
        dugme.textContent = "Označi kao završeno";
    }

    azurirajSazetak();
}


stavke.forEach(function (stavka) {
    stavka.addEventListener("click", function () {
        promijeniStanje(stavka);
    });

    const dugme = stavka.querySelector(".dugme-stanje");
    dugme.addEventListener("click", function (event) {
        event.stopPropagation();
        promijeniStanje(stavka);
    });
});


dugmeReset.addEventListener("click", function () {
    stavke.forEach(function (stavka) {
        stavka.classList.remove("zavrseno");
        stavka.querySelector(".dugme-stanje").textContent = "Označi kao završeno";
    });
    azurirajSazetak();
});

azurirajSazetak();