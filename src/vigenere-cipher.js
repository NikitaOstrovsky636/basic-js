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
  constructor(flag = true) {
    this.flag = flag;
  }

  encrypt(mes, k) {
      if (typeof(mes) === 'undefined' || typeof(k) === 'undefined') throw new Error ('Incorrect arguments!');
      let res = this.vigenere(true, mes, k);
      return res;
  }

  decrypt(mes, k) {
      if (typeof(mes) === 'undefined' || typeof(k) === 'undefined') throw new Error ('Incorrect arguments!');
      let res = this.vigenere(false, mes, k);
      return res;
  }

  vigenere (isEncrypt, message, key) {
      let n = Math.ceil(message.length / key.length);
      key = key.repeat(n).toUpperCase();

      message = message.toUpperCase();

      let codeA = 'A'.charCodeAt(0);
      let abcCount = 26;

      let result = [];
      let num = 0;

      for (let i = 0; i < message.length; i++) {
          if( message[i].charCodeAt(0) < 65 ||  message[i].charCodeAt(0) > 90) {
              result.push(message[i]);
          } else {
              let letterIndex = message.charCodeAt(i) - codeA;
              let shift = key.charCodeAt(num) - codeA;

              if(isEncrypt === true) {
                  result.push(String.fromCharCode(codeA + (letterIndex + shift) % abcCount));
              } else if (isEncrypt === false) {
                  result.push(String.fromCharCode(codeA + (letterIndex - shift + abcCount) % abcCount));
              }

              num++
          }
      }

      return (this.flag === true) ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
