export function sumOfEvenFibonacci(limit: number)  {
  if (limit === 2) {
    return 2;
  }
  
  let ef0 = 0;
  let ef1 = 2;
  let sum = ef0 + ef1;
  while (true) {
    let counter = ef1 * 4 + ef0;
    if (counter > limit) break;
    ef0 = ef1;
    ef1 = counter;
    sum += ef1;
  }

  return sum;
}
