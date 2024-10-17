import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js'

describe('Calculator', () => {
  it('should sum correctly', () => {

    const numA = 1;
    const numB = 1;

    const sumValue = sum(numA, numB);

    const expectedValue = 2;
    assert.equal(sumValue, expectedValue)

  });

  it('should throw an error if string passed on numA parameter', () => {
    const potentialError = () => {

      const numA = '1';
      const numB = 1;

      sum(numA, numB);

    };

    assert.throws(potentialError, Error);

  });

  it('should throw an error if string passed on numB parameter', () => {
    const potentialError = () => {

      const numA = 1;
      const numB = '1';

      sum(numA, numB);

    };

    assert.throws(potentialError, Error);

  });
})