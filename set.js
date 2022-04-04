const set1 = new Set();

set1.add(100)
set1.add('ww')
set1.add(100)
set1.add({ name: 'Jone' })
set1.add(true)
set1.add(100)
set1.add('ww')
set1.add('WW')
console.log(set1)

// Перебираем массив на уникальность


const names = ['jone', "asel", "erla", 'jone', "asel", "kate"]

const uniqNames = new Set(names)
console.log(uniqNames)
console.log(names)


// Чтабы получить массив из объекта

const names2 = ['jone', "asel", "erla", 'jone', "asel", "kate"]

let uniqNames2 = new Set(names2)
uniqNames2 = Array.from(uniqNames2)
console.log(uniqNames2)
console.log(names2)