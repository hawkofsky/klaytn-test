import { sumOfMultiplesOfThreeOrFive } from '../src/multiples'
import { sumOfEvenFibonacci } from '../src/fibonacci'
import { expect } from 'chai';

describe('tests', () => {
  it('sumOfMultiplesOfThreeOrFive should return xx', () => {
    expect(sumOfMultiplesOfThreeOrFive(10)).to.equal(23);
    expect(sumOfMultiplesOfThreeOrFive(1000)).to.equal(233168);
  });

  it('sumOfEvenFibonacci should return yy', () => {
    expect(sumOfEvenFibonacci(2)).to.equal(2);
    expect(sumOfEvenFibonacci(4000000)).to.equal(4613732);
  });
});
