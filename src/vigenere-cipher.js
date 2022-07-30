const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    this.checkArguments(message, key);
    let messageStr = message.toUpperCase();
    let keyStr = this.makeKeyStr(messageStr, key);

    let chipher = '';

    for (let i = 0; i < messageStr.length; i++) {
      if (!this.alphabeth.includes(messageStr[i])) {
        chipher += messageStr[i];
        continue;
      }
      let shift = this.alphabeth.indexOf(messageStr[i]);
      let pos = this.alphabeth.indexOf(keyStr[i]);
      let index = pos + shift;

      if (index >= this.alphabeth.length) index -= this.alphabeth.length;

      chipher += this.alphabeth[index];
    }
    return this.type ? chipher : chipher.split('').reverse().join('');
  }
  decrypt(message, key) {
    this.checkArguments(message, key);
    let chipherStr = message.toUpperCase();
    let keyStr = this.makeKeyStr(chipherStr, key);

    let messageStr = '';

    for (let i = 0; i < chipherStr.length; i++) {
      if (!this.alphabeth.includes(chipherStr[i])) {
        messageStr += chipherStr[i];
        continue;
      }
      let index = this.alphabeth.indexOf(chipherStr[i]);
      let pos = this.alphabeth.indexOf(keyStr[i]);
      let shift = index - pos;

      if (shift < 0) shift += this.alphabeth.length;

      messageStr += this.alphabeth[shift];
    }
    return this.type ? messageStr : messageStr.split('').reverse().join('');
  }
  checkArguments(...args) {
    args.forEach((arg) => {
      if (arg === undefined) throw new Error('Incorrect arguments!');
    });
  }
  makeKeyStr(message, key) {
    let keyStr = '';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabeth.includes(message[i])) {
        keyStr += key[j];
        j = j === key.length - 1 ? 0 : j + 1;
      } else {
        keyStr += message[i];
      }
    }
    return keyStr.toUpperCase();
  }
}
module.exports = {
  VigenereCipheringMachine,
};
