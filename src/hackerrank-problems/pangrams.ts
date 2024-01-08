/*
    Problem:
    A pangram is a string that contains every letter of the alphabet. Given a 
    sentence determine whether it is a pangram in the English alphabet. 
    Ignore case. Return either "pangram" or "not pangram" as appropriate.
*/

function pangrams(s: string): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    
    for(let i = 0; i < alphabet.length; i++) {
        if(!s.toLowerCase().includes(alphabet[i])) {
            return 'not pangram'
        }
    }
    
    return 'pangram'
}

console.log(pangrams("The quick brown fox jumps over the lazy dog"))