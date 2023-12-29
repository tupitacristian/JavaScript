//parsefloat transforma un string in int
function sk( a, b){
    alert("Avem program de operatii");
    var a = prompt("Introduceti numarul dorit de dumneavoastra:");
    var b = prompt("Introduceti cel de-al doilea numar dorit de dumneavoastra:");

    console.log(parseFloat(a) + parseFloat(b) + " Aici avem adunare.");// valorile sunt siruri pt adunare trebuie transformate in tip numeric
    console.log(a - b + " Aici avem scadere.");
    console.log(a * b + " Aici avem inmultire");
    console.log(a / b + " Aici avem impartire.");
    console.log(a ** b + " Aici avem numarul " + a + " ridicat la puterea a " + b + " -a");
    console.log(a.length);
    console.log(b.length);

    var c = prompt("Iti place programul?");
    console.log(c + " Sfarsitul Programului");
}
sk ();