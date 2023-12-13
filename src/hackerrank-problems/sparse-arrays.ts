/*
    Problem:
    There is a collection of input strings and a collection of query strings. 
    For each query string, determine how many times it occurs in the list of 
    input strings. Return an array of the results.
*/

function matchingStrings(strings: string[], queries: string[]): number[] {
    const results: number[] = []
    
    for(let i = 0; i < queries.length; i++) {
        let queryOccurences: number = 0
        for(let j = 0; j < strings.length; j++) {
            if(queries[i] == strings[j]) {
                queryOccurences++
            }
        }
        results.push(queryOccurences)
    }
    
    return results
}

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))