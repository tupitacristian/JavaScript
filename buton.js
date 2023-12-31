// Primul buton cu ajutor in HTML
function butonExecutat(){
    alert("Butonul a fost apasat!");
}

const executie = document.querySelector("button");
executie.addEventListener('click', butonExecutat);

// Al doilea buton creat din JavaScript
const butonNou = document.createElement("button");// crearea butonului
butonNou.textContent = "Apasa aici 2!";// denumirea butonului
document.body.appendChild(butonNou);// adaugarea butonului

butonNou.addEventListener("click", () => { // la evenimentul click apare alerta Butonul doi a fost executat
    alert("Butonul doi a fost executat!");
});

// Al treilea buton creat in JavaScript

const butonTrei = document.createElement("button");
butonTrei.textContent = "Apasa aici 3!";
document.body.appendChild(butonTrei);

butonTrei.addEventListener("click", () => {
    alert("Butonul trei a fost executat!");
});