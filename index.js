console.log('Inizio');
var catsNumber= prompt('Inserisci il numero di gatti');
console.log ('Ci sono '+ catsNumber+ ' gatti');
var catsLines= prompt ('Inserisci il numero di gatti presenti in ogni fila');
console.log('Ci sono '+ catsLines+ ' gatti per linea');
var linesNumber= catsNumber/catsLines;
var remainder= catsNumber % catsLines
if (remainder==0) {
    console.log('Ci sono '+ linesNumber+ ' file di gatti')
} else {
    if (remainder != 0) {
        var missingCats= catsLines - remainder;
        var uncompleteLines= Math.floor(linesNumber);
        console.log('Mancano '+ missingCats + ' gatti per completare la linea');
        console.log('Ci sono '+ uncompleteLines+ ' file di gatti')
    }
}
console.log('Fine');