const parolaUtente = prompt('dimmi una parola');
console.log(parolaUtente)

function confrontoPalindromo(parolaRicevuta){
    let arrayParola = parolaRicevuta.split("");
    let copia = arrayParola.slice();
    let arrayReverse = copia.reverse();
    let originalWord = arrayParola.toString();
    let wordReverse= arrayReverse.toString();
    console.log(originalWord)
    console.log(wordReverse);

    if (originalWord == wordReverse){
        alert(`La parola ${parolaRicevuta} è palindroma`);
    }
    else{
        alert(`La parola ${parolaRicevuta} non è palindroma`);
    }
}

confrontoPalindromo (parolaUtente);


// -----------------------------------------------------------------------------------------------------------

// PARI&DISPARI : PASSAGGI
// 1- Chiedere all'utente di scegliere Pari o Dispari
// 2- Chiedere all'utente di inserire un numero da 1 a 5;
// 3- Generare con una funzione un numero random da 1 a 5 per il computer
// 4- Sommare i due numeri e verificare chi vince;


const pari = document.getElementById('pari');
const dispari = document.getElementById('dispari');
console.log(pari, dispari);

function scelta (bottone){
    bottone.addEventListener('click', function(){
        
        let richiestaNumero = prompt('dammi un numero da 1 a 5');

        if(richiestaNumero < 1 || richiestaNumero > 5){
            alert('il numero deve essere da 1 a 5 ')
        }

        let numeroComputer = Math.floor(Math.random() * 5) + 1
        console.log(numeroComputer);

        let sum = parseInt(richiestaNumero) + parseInt(numeroComputer);
        console.log(sum);
        
        scelta (pari) 
            if(sum % 2 == 0){
                alert("hai vinto")
            }
            else {
                alert("hai perso")
            }

        scelta (dispari)
            if(sum % 2 != 0){
                alert("hai vinto")
            }
            else {
                alert ("hai perso")
            }
    })

}



scelta (pari);
scelta (dispari);