// // PAROLE PALINDROME: PASSAGGI
// 1- Chiedere all'utente di inserire una parola
// 2- Crea funzione per capire se la parola è palindroma

const parolaUtente = prompt('dimmi una parola');
console.log(parolaUtente)

function verificaPalindromo(parolaRicevuta){
    let arrayParola = parolaRicevuta.split("");
    console.log(arrayParola);
}

verificaPalindromo (parolaUtente);
