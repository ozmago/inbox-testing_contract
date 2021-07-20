// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const internal = require("stream");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

// This is a simple test from lesson 46:

/*
class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

describe("Car", () => {
  const car = new Car();
  it("can park", () => {
    assert.equal(car.park(), "stopped");
  });
  it("can drive", () => {
    assert.equal(car.drive(), "vroom");
  });
});
*/
