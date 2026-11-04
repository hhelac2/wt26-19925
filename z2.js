function ponavljanja (ponavljanja, reps) {
    for (let i=0; i<ponavljanja; i++) {
        if(i%reps == 0) alert("Pauza");
        alert(`${i+1} ponavljanje: bravo`);
    }
}