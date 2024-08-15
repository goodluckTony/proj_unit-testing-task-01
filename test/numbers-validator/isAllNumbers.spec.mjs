// const { expect } = require('chai');
import { expect } from 'chai';

// const { describe, beforeEach, afterEach, it } = require('mocha');
import { describe,beforeEach, afterEach, it } from 'mocha';

// const NumbersValidator = require('../app/numbers-validator');
import NumbersValidator from '../../app/numbers-validator.js';

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it("should return TRUE if all items are numbers", () => {
    const arrayOfNumbers = [1, 2, 3, 4];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.be.equal(true);
  });

  it("should return FALSE if NOT all items are numbers", () => {
    const arrayOfMixed = [1, "2", 3, 4];
    expect(validator.isAllNumbers(arrayOfMixed)).to.be.equal(false);
  });

  it("should throw an ERROR if input is NOT an array", () => {
    expect(() => {
      validator.isAllNumbers("not an array");
    }).to.throw("[not an array] is not an array");
  });
});