// Funzione per generare un numero casuale tra 1 e 5
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per verificare se un numero è pari o dispari
function isEven(number) {
    return number % 2 === 0;
}

// Chiedo all'utente di scegliere pari o dispari
let userChoice = prompt("Scegli pari o dispari, inserendo un numero tra 1 e 5:");

// Converto la scelta dell'utente in un numero
userChoice = parseInt(userChoice);

// Genero un numero casuale tra 1 e 5 per il PC
let pcChoice = getRandomNumber();

// Sommo i due numeri selezionati
let sum = userChoice + pcChoice;

// Verifico se la somma è pari o dispari
let isSumEven = isEven(sum);

// Determinare il vincitore
let winner = (userChoice % 2 === 0 && isSumEven) || (userChoice % 2 !== 0 && !isSumEven) ? "Utente" : "PC";

// Output risultato
// Utilizzo template literal ${} per aggiungere => i numeri selezionati, la loro somma, se questa è pari o dispari e il vincitore
console.log(`Tu hai scelto: ${userChoice}`);
console.log(`Il PC ha scelto: ${pcChoice}`);
console.log(`Somma: ${sum}`);
console.log(`La somma è ${isSumEven ? "pari" : "dispari"}`);
console.log(`Vincitore: ${winner}`);