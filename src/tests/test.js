const { healthDecrease } = require('./healthDecrease');
const { healthIncrease } = require('./healthIncrease');

const assert = require('assert');

describe('Health Decrease', () => {
  it('test crush 1', () => {
    const obj = { healthPoints: 100 };
    const whatCome = healthDecrease(obj);
    const whatBack = 80;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 2', () => {
    const obj = { healthPoints: 80 };
    const whatCome = healthDecrease(obj);
    const whatBack = 60;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 3', () => {
    const obj = { healthPoints: 60 };
    const whatCome = healthDecrease(obj);
    const whatBack = 40;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 4', () => {
    const obj = { healthPoints: 40 };
    const whatCome = healthDecrease(obj);
    const whatBack = 20;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 5', () => {
    const obj = { healthPoints: 20 };
    const whatCome = healthDecrease(obj);
    const whatBack = 0;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 6', () => {
    const obj = { healthPoints: 5 };
    const whatCome = healthDecrease(obj);
    const whatBack = "Sorry, you're already dead!";
    assert.equal(whatBack, whatCome);
  });
  it('test crush 7', () => {
    const obj = { healthPoints: 0 };
    const whatCome = healthDecrease(obj);
    const whatBack = "Sorry, you're already dead!";
    assert.equal(whatBack, whatCome);
  });
  it('test crush 8', () => {
    const obj = { healthPoints: -25 };
    const whatCome = healthDecrease(obj);
    const whatBack = "Sorry, you're already dead!";
    assert.equal(whatBack, whatCome);
  });
  it('test crush 9', () => {
    const obj = { healthPoints: 125 };
    const whatCome = healthDecrease(obj);
    const whatBack = 80;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 10', () => {
    const obj = { healthPoints: 1251 };
    const whatCome = healthDecrease(obj);
    const whatBack = 80;
    assert.equal(whatBack, whatCome);
  });
});

describe('Health Increase', () => {
  it('test crush 1', () => {
    const obj = { healthPoints: 100 };
    const whatCome = healthIncrease(obj);
    const whatBack = 100;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 2', () => {
    const obj = { healthPoints: 95 };
    const whatCome = healthIncrease(obj);
    const whatBack = 100;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 3', () => {
    const obj = { healthPoints: 80 };
    const whatCome = healthIncrease(obj);
    const whatBack = 100;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 4', () => {
    const obj = { healthPoints: 40 };
    const whatCome = healthIncrease(obj);
    const whatBack = 60;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 5', () => {
    const obj = { healthPoints: 20 };
    const whatCome = healthIncrease(obj);
    const whatBack = 40;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 6', () => {
    const obj = { healthPoints: 0 };
    const whatCome = healthIncrease(obj);
    const whatBack = 20;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 7', () => {
    const obj = { healthPoints: 1220 };
    const whatCome = healthIncrease(obj);
    const whatBack = 100;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 8', () => {
    const obj = { healthPoints: -25 };
    const whatCome = healthIncrease(obj);
    const whatBack = 20;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 9', () => {
    const obj = { healthPoints: -125 };
    const whatCome = healthIncrease(obj);
    const whatBack = 20;
    assert.equal(whatBack, whatCome);
  });
  it('test crush 10', () => {
    const obj = { healthPoints: 1251 };
    const whatCome = healthIncrease(obj);
    const whatBack = 100;
    assert.equal(whatBack, whatCome);
  });
});
