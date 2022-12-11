"use strict";
let opEl1 = document.querySelector('#operando1');
let opEl2 = document.getElementById('operando2');
let btnSuma = document.getElementById('btn-suma');
let btnResta = document.getElementById('btn-resta');




btnSuma.onclick = () => {
    let op1 = Number(opEl1.value);
    let op2 = Number(opEl2.value);
    document.querySelector("#output").value = op1 + op2;
}

btnResta.onclick = () => {
    let op1 = Number(opEl1.value);
    let op2 = Number(opEl2.value);

    // if(op1<op2){
    //     let aux = op2;
    //     op2 = op1;
    //     op1 = aux;
    // }

    document.querySelector("#output").value = op1 - op2;
}