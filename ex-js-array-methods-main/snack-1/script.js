const names = ['Edoardo', 'Simone', 'Francesco'];

//map version
const stringNames = names.map(name=>{
    return name
}).join(',')
console.log(stringNames);
//forEach version
 const namesExtended = names.forEach(name=> {console.log(name)}
 )


// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'