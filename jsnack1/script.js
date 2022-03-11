console.log("JS-OK")

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const list = ['michele', 'luca', 'silvio'];

const username = prompt("inserisci il nome");

let youcanjoin = false;

for (let i = 0; i < list.length; i++) {
    const listparty = list[i];
    if (username === listparty) {
        youcanjoin = true;
    }
}

if (youcanjoin) {
    console.log("You can join!")
} else {
    console.log("You can't join!")
}













