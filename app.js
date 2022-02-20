// // PAROLE PALINDROME: PASSAGGI
// 1- Chiedere all'utente di inserire una parola
// 2- Crea funzione per capire se la parola è palindroma

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
