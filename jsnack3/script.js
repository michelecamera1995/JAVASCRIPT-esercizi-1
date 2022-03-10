console.log("JS-OK")


//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let value = parseInt(prompt("inserisci un numero a quattro cifre!"))
sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
    const number = true;
}

console.log(sum);



