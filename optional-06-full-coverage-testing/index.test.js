import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Calculator', () => {
  it('Should sum correctly', () => {
    
    const numA = 1;
    const numB = 1;

    const sumValue = sum(numA, numB);

    const expectedValue = 2;
    assert.equal(sumValue, expectedValue);

  });

  it('Should return 0 if string passed on numA parameter', () => {
    const numA = '1';
    const numB = 1;

    const sumValue = sum(numA, numB);
    
    assert.equal(sumValue, 0); 
  });

  it('Should return 0 if string passed on numB parameter', () => {
    const numA = 1;
    const numB = '1';

    const sumValue = sum(numA, numB);
    
    assert.equal(sumValue, 0); 
  });

  it('Should return 0 if parameter numA < 0', () => {
    const numA = -1;
    const numB = 1;

    const sumValue = sum(numA, numB);
    
    assert.equal(sumValue, 0);
  });

  it('Should return 0 if parameter numB < 0', () => {
    const numA = 1;
    const numB = -1;

    const sumValue = sum(numA, numB);
    
    assert.equal(sumValue, 0); 
  });
});
