
function mergemMaiDeparte(){
    alert("Who is HERE BROOO ?!");
    alert("Welcome in my GAME BROO");
    alert("We have a lot of things to do !");
    alert("I am glad to see you back AGAIN broooooooooooooooooooo");
    const destinatie = prompt("Unde vrei sa mergem brooo?");
    console.log(destinatie);
    document.write("<p>Who is here brooooo?!</p>");
    return console.error("Ne-am intors si o sa ne intoarcem de cate ori este nevoie!");
}

mergemMaiDeparte();

function ecuatie(x, y, z){
    const adunare = x + y + z;
    const scadere = x - y - z;
    const inmultire = x * y * z;
    const impartire = x / y / z;
    console.log("Avem aici " + adunare + " adunare.");
    console.log("Avem aici " + scadere + " scadere.");
    console.log("Avem aici " + inmultire + " inmultire.");
    console.log("Avem aici " + impartire + " impartire.");
    return document.write("Avem o ecuatie cu operatiile principale.");
}

ecuatie (1, 2, 3);

function test(){
    var x = 10;
    var y = 11;
    x += 10;
    y += 11;

    return console.log(x + y);
}

test();

function add1(a, b){
    return a + b;
}
assert.equal(add1(5, 2), 7);


//Operatori

//Operatori pentru numere

assert.equal(7 + 1, 8);
assert.equal(5 - 1, 4);
assert.equal(4 * 3, 12);
assert.equal(12 / 4, 3);

//Operatori cu numere booleane

assert.equal(true && false, false);
assert.equal(true || false, true);

//Operatori pentru siruri de caractere

assert.equal('a' + 'b', 'ab');
assert.equal('b' + 'c', 'bc');
assert.equal('Eu vad '+ 13 + ' pasari', 'Eu vad 13 pasari' );

// const si loops

//for-of
const arr = ['hello', 'world', 'my', 'name', 'is', 'Cristian'];
for (const elem of arr){
    console.log(elem);
}

//for
const arr1 = ['hello', 'world'];
for (let i=0; i<arr1.length; i++){
    const elem = arr1[i];
    console.log(elem);
}

typeof(arr1);
