// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const internal = require("stream");
const Web3 = require("web3");
const { interface, bytecode } = require("../compile");

//create an instance of web3
const web3 = new Web3(ganache.provider());

//declare accounts variable
let accounts;
let inbox;

beforeEach(async () => {
  //get a list of accounts. Use async await instead of promises before assigning list of accounts to 'accounts' variable
  accounts = await web3.eth.getAccounts();
  //use one of these accounts to deploy our contract.
  //The following code is broken down line by line in lesson 51
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  // testing that the contract was deployed to an address
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });
  // testing that initial default message is passed
  it("has a default message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, "Hi there!");
  });
  // testing that setMessage works
  it("can change the message", async () => {
    await inbox.methods.setMessage("New Message!").send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, "New Message!");
  });
});

// This is a simple test from lesson 46:
// he uses beforeEach somewhere here. I might want to review this lesson
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
