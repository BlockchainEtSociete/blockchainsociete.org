if (window.web3) {
  window.web3 = new Web3(window.web3.currentProvider);
}

var web3 = window.web3;
var eth = window.web3.eth;

const abi = [
  {
    constant: false,
    inputs: [],
    name: "subscribe",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "members",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
const addresss = "0x8ebd085262ceb8c8512986ef0c16a8a0f2a53a1e";
var membershipContract = new eth.Contract(abi, addresss);

eth.getAccounts().then(accounts => {
  console.log("default send account set for contract");
  membershipContract.options.from = accounts[0];
});

function subscribeMembership() {
  membershipContract.methods
    .subscribe()
    .send({ value: web3.utils.toWei("0.1", "ether") })
    .on("transactionHash", console.log)
    .on("receipt", console.log)
    .on("confirmation", console.log)
    .on("error", console.log);
}
