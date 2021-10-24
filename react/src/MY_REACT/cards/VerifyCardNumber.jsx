const VerifyCardNumber = { 
    verifyNumber
}

function verifyNumber(cardNumber) {
    let sum = 0;
    let temp = 0;
    let cardNumberCopy = cardNumber;
    let checkDigit = parseInt(cardNumber.slice(-1));
    let parity = cardNumberCopy.length % 2;

    for (let i = 0; i <= cardNumberCopy.length - 2; i++) {
      if (i % 2 === parity) {
        temp = (+cardNumberCopy[i]) * 2;
      }
      else {
        temp = (+cardNumberCopy[i]);
      }

      if (temp > 9) {
        temp -= 9;
      }

      sum += temp;
    }

    return (sum + checkDigit) % 10 === 0;
  }

export default VerifyCardNumber;