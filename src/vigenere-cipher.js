const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor (value = true) {
    this.value = value;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error;
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

  }    
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error;
    }

  }
}

module.exports = VigenereCipheringMachine;
