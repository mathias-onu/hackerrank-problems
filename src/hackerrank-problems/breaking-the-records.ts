/*
    Problem:
    Maria plays college basketball and wants to go pro. Each season she maintains 
    a record of her play. She tabulates the number of times she breaks her season 
    record for most points and least points in a game. Points scored in the first 
    game establish her record for the season, and she begins counting from there.
*/

function breakingRecords(scores: number[]): number[] {
    const records = [0, 0]
    let maxRecord = scores[0]
    let minRecord = scores[0]
    
    for(let i = 1; i < scores.length; i++) {  
        if(scores[i] > maxRecord) {
            records[0]++
            maxRecord = scores[i]
        } else if (scores[i] < minRecord) {
            records[1]++
            minRecord = scores[i]
        }
    }
    
    return records
}

console.log(breakingRecords([12, 24, 10, 24]))