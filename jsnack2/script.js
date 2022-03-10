console.log("JS-OK")

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const numberlist = [];

for (let i = 0; i <= 5; i++) {

    const firstnumb = parseInt(prompt('Insert a number!'));

    if (!isNaN(firstnumb) && firstnumb % 2 !== 0) {

        numberlist.push(firstnumb);

    }

    console.log(numberlist)

}



