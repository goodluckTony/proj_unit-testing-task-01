// const { expect } = require('chai');
import { expect } from 'chai';

// const { describe, beforeEach, afterEach, it } = require('mocha');
import { describe,beforeEach, afterEach, it } from 'mocha';

// const NumbersValidator = require('../app/numbers-validator');
import NumbersValidator from '../../app/numbers-validator.js';

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it("should return TRUE if the number is an integer", () => {
    expect(validator.isInteger(4)).to.be.equal(true);
  });

  it("should return FALSE if the number is NOT an integer", () => {
    expect(validator.isInteger(4.5)).to.be.equal(false);
  });

  it("should throw an ERROR if the number is NOT a number", () => {
    expect(() => {
      validator.isInteger("not a number");
    }).to.throw('[not a number] is not a number');
  });
});