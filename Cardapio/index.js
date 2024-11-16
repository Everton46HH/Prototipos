const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
function checar(){

    console.log(a.checked)
    if(a.checked){
        a = 2
    }
    else{
        a = 0
    }
}

function calc(){
    let total = 1 + a + b;
    document.getElementById("resultado").innerHTML += total
}

function nextPage(){
    document.getElementById("Comidas").innerHTML = "<ol><li>5. Torta de maçã <h1>2,00 R$<input type='checkbox' id='e' onclick='checar'</h1></li><li>6. Bolo de cenoura <h1>7,00 R$<input type='checkbox' id='f' onclick='checar()' <h1></h1></li><li>7. Coxinha <h1>3,50 R$<input type='checkbox' id='g' onclick='checar()'</h1></li><li>8. Pastel <h1>7,00 R$<input type='checkbox' id='h' onclick='checar()' </h1></li></ol>"
    document.getElementById("Bebidas").innerHTML = "<ol><li>5. Suco de Abóbora <h1>8,00 R$<input type='checkbox' id='i'></h1></h1><li>6. Suco de Melancia <h1>8,00 R$ <input type='checkbox' id='j'></h1></li><li>7. Suco de Tamarindo <h1>8,00 <input type='checkbox' id='k'></h1></li><li>8. Suco de Goiaba <h1>7,50 <input type='checkbox' id='l'></h1></li></ol>"
}