// const { expect } = require('chai');
import { expect } from 'chai';

// const { describe, beforeEach, afterEach, it } = require('mocha');
import { describe,beforeEach, afterEach, it } from 'mocha';

// const NumbersValidator = require('../app/numbers-validator');
import NumbersValidator from '../../app/numbers-validator.js';

describe('isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return TRUE if number is EVEN', () => {
    // expect(validator.isNumberEven(4)).to.be.equal(true);
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return FALSE if number is ODD', () => {
    // expect(validator.isNumberEven(5)).to.be.equal(false);
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it("should throw an ERROR when provided a STRING", () => {
    expect(() => {
      validator.isNumberEven("4");
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});