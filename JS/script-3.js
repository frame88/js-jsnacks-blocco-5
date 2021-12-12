/*
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

let orto = [
    zucchina = { tipo: 'romana', peso: 2, lung: 10 },
    zucchina = { tipo: 'viola', peso: 1, lung: 10 },
    zucchina = { tipo: 'viola', peso: 0.5, lung: 10 },
    zucchina = { tipo: 'viola', peso: 0.5, lung: 10 },
    zucchina = { tipo: 'romana', peso: 0.3, lung: 17 },
    zucchina = { tipo: 'gialla', peso: 4, lung: 10 },
    zucchina = { tipo: 'romana', peso: 5, lung: 20 },
    zucchina = { tipo: 'tonda', peso: 5, lung: 22 },
    zucchina = { tipo: 'napoletana', peso: 2, lung: 10 },
    zucchina = { tipo: 'napoletana', peso: 2, lung: 15 },
    zucchina = { tipo: 'viola', peso: 1, lung: 10 }
]

console.log(orto);

let mini = [];
let maxxi = [];
let pesomini = 0;
let pesomaxxi = 0;

for (let index = 0; index < orto.length; index++) {
    const element = orto[index];
    if (element.lung > 15) {
        maxxi.push(element.lung);
        pesomaxxi += element.peso;
    }
    else{
        mini.push(element.lung);
        pesomini += element.peso;
    }
}

console.log('In totale, quelle piu lunghe di 15cm pesano ', pesomaxxi, ' kg, mentre quelle piu corte', pesomini, ' kg.');
document.querySelector('.container').innerHTML = (`In totale, quelle piu lunghe di 15cm pesano  ${pesomaxxi}  kg, mentre quelle piu corte ${ pesomini }  kg.`);


