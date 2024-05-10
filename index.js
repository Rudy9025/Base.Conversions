function decToBase(inputNumber, inputBase) {
  if (inputBase < 2 || inputBase > 36) {
    return "Not Valid Base";
  }
  return inputNumber.toString(inputBase);
}

function baseToDec(inputNumber, inputBase) {
  return parseInt(inputNumber, inputBase);
}

function binToDec(binary) {
  return baseToDec(binary, 2);
}

function decToBin(decimal) {
  return decToBase(decimal, 2);
}

function binToOct(binary) {
  const decimal = binToDec(binary);
  return decToBase(decimal, 8);
}

function binToHex(binary) {
  const decimal = binToDec(binary);
  return decToBase(decimal, 16);
}

function decToHex(decimal) {
  return decToBase(decimal, 16);
}

function decToOct(decimal) {
  return decToBase(decimal, 8);
}

function octToBin(octal) {
  const decimal = baseToDec(octal, 8);
  return decToBase(decimal, 2);
}

function octToDec(octal) {
  return baseToDec(octal, 8);
}

function octToHex(octal) {
  const decimal = baseToDec(octal, 8);
  return decToBase(decimal, 16);
}

function hexToDec(hexadecimal) {
  return baseToDec(hexadecimal, 16);
}

function hexToBin(hexadecimal) {
  const decimal = hexToDec(hexadecimal);
  return decToBase(decimal, 2);
}

function hexToOct(hexadecimal) {
  const decimal = hexToDec(hexadecimal);
  return decToBase(decimal, 8);
}

module.exports = {
  decToBase,
  baseToDec,
  binToDec,
  decToBin,
  binToOct,
  binToHex,
  decToHex,
  decToOct,
  octToBin,
  octToDec,
  octToHex,
  hexToDec,
  hexToBin,
  hexToOct,
};
