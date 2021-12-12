/*
Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].
*/

let abc = ['a','b','c','d'];
let num = [1, 2, 3, 4];
let ris = [];

for (let index = 0; index < abc.length; index++) {
    ris.push(abc[index]);    
    ris.push(num[index]);    
}

console.log(abc,num,ris);

document.querySelector('.container').innerHTML = (`Primo array: [${abc}], secondo array: [${num}], nuovo array: [${ris}].`);