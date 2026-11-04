function prolaz(vrijednost, granica) {
  let p1, p2;
  p1 = 55;
  p2 = 100;
  if (vrijednost<p1) return "Pao si legendo";
  if(vrijednost>p2) return "Nemoguce preko 100";
  return "Bravo";
}

function main() {
    alert(prolaz(55));
}