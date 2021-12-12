/*
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

let orto = [
    zucchina = { tipo: 'romana', peso: 2, lung: 10 },
    zucchina = { tipo: 'viola', peso: 1, lung: 10 },
    zucchina = { tipo: 'viola', peso: 0.5, lung: 10 },
    zucchina = { tipo: 'viola', peso: 0.5, lung: 10 },
    zucchina = { tipo: 'romana', peso: 0.3, lung: 10 },
    zucchina = { tipo: 'gialla', peso: 4, lung: 10 },
    zucchina = { tipo: 'romana', peso: 5, lung: 10 },
    zucchina = { tipo: 'tonda', peso: 5, lung: 10 },
    zucchina = { tipo: 'napoletana', peso: 2, lung: 10 },
    zucchina = { tipo: 'napoletana', peso: 2, lung: 10 },
    zucchina = { tipo: 'viola', peso: 1, lung: 10 }
]

console.log(orto);

let pesototale = 0;
for (let index = 0; index < orto.length; index++) {
    const element = orto[index];
    pesototale += element.peso;
    
}

console.log(pesototale);

let container = document.querySelector('.container');
container.innerHTML = (`Il peso complessivo delle tue zucchine è ${pesototale} kg.`);