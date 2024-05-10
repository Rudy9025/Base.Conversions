# <a href='https://www.npmjs.com/package/base-conversions'><img src='https://github.com/Rudy9025/Rudys.Weather.React/assets/95328967/37f872fb-f581-4c3f-86b7-2560a29d78f7' height='60' alt='Logo' />Base conversions</a>

Unleash numerical mystique with this npm package, effortlessly converting between binary, octal, decimal, and hexadecimal bases.

## Installation

```bash
npm install base-conversions
```
(or)
```bash
yarn add base-conversions
```

## Imports

For .mjs or "type":"module" 
```javascript
import { decToBase, baseToDec, binToDec, decToBin, binToOct, binToHex, decToHex, decToOct, octToBin, octToDec, octToHex, hexToDec, hexToBin, hexToOct } from 'base-conversions';
```
For .cjs or commonJs modules 
```javascript
const { decToBase, baseToDec, binToDec, decToBin, binToOct, binToHex, decToHex, decToOct, octToBin, octToDec, octToHex, hexToDec, hexToBin, hexToOct } = require('base-conversions');
```

## Usage
```
// Convert decimal to binary
const binary = decToBin(13);
console.log('Decimal to Binary:', binary); // Output: 1101

// Convert binary to decimal
const decimalOutput = binToDec(1101);
console.log('Binary to Decimal:', decimalOutput); // Output: 13
```

## Functions

### `decToBase(inputNumber, inputBase)`

Converts a decimal number to any base.

### `baseToDec(inputNumber, inputBase)`

Converts a number from any base to decimal.

### `binToDec(binary)`

Converts a binary number to decimal.

### `decToBin(decimal)`

Converts a decimal number to binary.

### `binToOct(binary)`

Converts a binary number to octal.

### `binToHex(binary)`

Converts a binary number to hexadecimal.

### `decToHex(decimal)`

Converts a decimal number to hexadecimal.

### `decToOct(decimal)`

Converts a decimal number to octal.

### `octToBin(octal)`

Converts an octal number to binary.

### `octToDec(octal)`

Converts an octal number to decimal.

### `octToHex(octal)`

Converts an octal number to hexadecimal.

### `hexToDec(hexadecimal)`

Converts a hexadecimal number to decimal.

### `hexToBin(hexadecimal)`

Converts a hexadecimal number to binary.

### `hexToOct(hexadecimal)`

Converts a hexadecimal number to octal.

## License
[MIT](https://www.npmjs.com/package/base-conversions)