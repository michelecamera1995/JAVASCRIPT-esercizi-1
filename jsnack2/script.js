console.log("JS-OK")

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const validNumbersArray = [];

while (validNumbersArray <= 6) {

    const firstnumb = parseInt(prompt('Insert a number!'));

    if (!isNaN(firstnumb) && firstnumb % 2 !== 0) {

        validNumbersArray.push(firstnumb);

        console.log(validNumbersArray)

        const fullist = true;
    }

}



