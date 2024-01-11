'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Read the input
    while (currentLine < inputLines.length) {
        // Replace carriage return with empty string
        const input = inputLines[currentLine].replace(/\r/, '')
        // Split 
        if (input.startsWith('S')) {
            console.log(splitCamelCase(input))
        }
        // Combine
        else {
            console.log(combineCamelCase(input))
        }
        currentLine++
    }
}

function splitCamelCase(input: string): string {
    // Destructure input string
    const [, format, name] = input.split(";")
    // Split input based on uppercase char
    const words = name
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toLowerCase()
        .split(" ")

    // Join and remove parenthesis if method
    return format === "M" ? words.join(" ").slice(0, -2) : words.join(" ");
}

function combineCamelCase(input: string): string {
    // Destructure and split input
    const [, format, names] = input.split(";")
    const words = names.split(" ")
    
    // Uppercase/lowercase letters in splitted input
    const finalString = words.map((word, index) => {
        if (index === 0) {
            if (format === "C") {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            } else {
                return word.toLowerCase()
            }
        }
        
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    
    // Join letters and add parenthesis if method
    return format === "M" ? finalString.join("") + "()" : finalString.join("")
}
