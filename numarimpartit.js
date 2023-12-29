function numarImpartit(){
    alert("Program in JavaScript");
    alert("Prima alerta din functie!");
    const numarSelectat = prompt("Adauga un numar.");
    const impartire = numarSelectat / 2;
    const inmultire = numarSelectat * 2;
    document.write("<h1>Avem primul H1 din programul JavaScript</h1>");
    document.write("<b>Aici avem un text bold.</b>");
    console.log(numarSelectat);
    console.log(impartire);
    console.log(inmultire);
}
function numarSelectat(){
    alert("Program nr 2");
    let numarSelectie = prompt("Introdu numarul pe care vrei sa il verifici");
    console.log(typeof(numarSelectie));
    numarSelectie = 50;
    const numarVerificat = typeof(numarSelectie);
    const numarMarime = length.numarSelectie;
    console.log(numarSelectie);
    console.log(numarVerificat);
    console.log(numarMarime);
}

function numarScazut(){
    alert("Program nr 3");
    let numarScadere = prompt("Introdu numarul pe care vrei sa il verifici");
    console.log(typeof(numarScadere));
    numarScadere = 40;
    const numarVerificare = typeof(numarScadere);
    const numarMarimi = length.numarScadere;
    console.log(numarScadere);
    console.log(numarVerificare);
    console.log(numarMarimi);
}


// Aici apelez functia
numarImpartit();
numarSelectat();
numarScazut();