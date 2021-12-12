/*
SNACK 1
* Crea un array vuoto e chiedi all’utente un numero
    * da inserire nell’array.Continua a chiedere i numeri
        * all’utente e a inserirli nell’array fino a quando
            * a somma degli elementi è minore di 50.
*/

arr = [];
a = 0;
find = true;

while (a <= 50) {
    b = parseInt(prompt('inserisci un numero: '));
    a += b;
    arr.push(b);
}

console.log(a, arr);
let rimosso = arr.pop();
a -= rimosso;
console.log(a, arr);

if (a >= 50) {
    arr.pop();
    a -= rimosso;
}
console.log(arr);
//demo = [23, 4, 5, 6, 12, 12];


document.querySelector(".calls").innerHTML = (`L'array vale ${a}, se minore di 50 è: [${arr}].`);
