function breakingRecords(scores: number[]): number[] {
    let [max, min] = [scores[0], scores[0]], [maxB, minB] = [0, 0];
  
    scores.forEach(score => {
      if (score > max) [max, maxB] = [score, maxB + 1];
      else if (score < min) [min, minB] = [score, minB + 1];
    });
  
    return [maxB, minB];
  }
  

console.log(breakingRecords([12, 24, 10, 24]))