// Funzione per verificare se una parola è palindroma
function isPalindrome(word) {

    // Rimuovo eventuali spazi nella parola utilizzando => .replace(/\s+/g, '')
    // Rendo tutto il testo minuscolo per analizzare meglio la parola evitando potenziali bug, per questo utilizzo => .toLowerCase() 
    word = word.replace(/\s+/g, '').toLowerCase();
    // Confronto la parola con la sua versione invertita
    // .split => divido la parola in un array
    // .reverse => inverto l'array della parola
    // .join => ricompongo l'array in una stringa
    return word === word.split('').reverse().join('');

}

// Chiedo all'utente di inserire una parola da lui scelta
const wordInput = prompt("Inserisci una parola:");

// Output di verifica
if (isPalindrome(wordInput)) {
    alert("Questa parola è un palindroma");
} else {
    alert("Questa parola non è un palindroma");
}