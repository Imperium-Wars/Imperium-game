const { ec } = require("starknet");

function generate_key_pair() {
  const starkKeyPair = ec.genKeyPair();
  console.log("private", starkKeyPair.getPrivate().toString(10));
  console.log("public", ec.getStarkKey(starkKeyPair));
}

generate_key_pair();
