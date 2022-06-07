export function sumOfMultiplesOfThreeOrFive(limit: number) {
  let sum = 0;
  for (let i = 3; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
