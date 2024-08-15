// const { expect } = require('chai');
import { expect } from 'chai';

// const { describe, beforeEach, afterEach, it } = require('mocha');
import { describe,beforeEach, afterEach, it } from 'mocha';

// const NumbersValidator = require('../app/numbers-validator');
import NumbersValidator from '../../app/numbers-validator.js';

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it("should return an ARRAY of EVEN numbers", () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([2, 6, 22]);
  });

  it("should throw an ERROR if array is NOT full of numbers", () => {
    const arrayOfValues = [5, "2", 11, 22];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[5,2,11,22] is not an array of "Numbers"');
  });
});