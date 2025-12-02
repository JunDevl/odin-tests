const CAPITALIZED_UNICODE_START = 65;
const CAPITALIZED_UNICODE_END = 90;

const UNCAPITALIZED_UNICODE_START = 97;
const UNCAPITALIZED_UNICODE_END = 122;

export function capitalize(text: string): string {
  let temp = "";

  if (text === "") return temp;

  for (let [i, char] of Array.from(text).entries()) {
    if (char === " " || (text[i - 1] !== " " && i - 1 >= 0)) {
      temp += char;
      continue;
    }

    const curCharCode = char.charCodeAt(0)

    if (curCharCode >= CAPITALIZED_UNICODE_START && curCharCode <= CAPITALIZED_UNICODE_END) {
      temp += char;
      continue;
    }

    if (curCharCode >= UNCAPITALIZED_UNICODE_START && curCharCode <= UNCAPITALIZED_UNICODE_END) {
      const capitalized = String.fromCharCode(curCharCode - 32);
      temp = i - 1 >= 0 ? temp + capitalized : capitalized;
    }

  }

  return temp;
}

export function reverseString(text: string): string {
  let temp = "";

  if (text === "") return temp;

  for (let i = text.length - 1; i >= 0; i--) 
    temp += text[i];

  return temp;
}

export const calculator = {
  add: (num1: number, num2: number): number => num1 + num2,
  subtract: (num1: number, num2: number): number => num1 - num2,
  multiply: (num1: number, num2: number): number => num1 * num2,
  divide: (num1: number, num2: number): number => num1 / num2
}

export function ceasarCipher(text: string, shift: number): string {
  let temp = "";

  if (text === "") return temp;

  const alphabetCharTotal = 26;
  const overflowingAlphabetTotal = (alphabetCharTotal * Math.floor((shift + alphabetCharTotal) / alphabetCharTotal + 1))

  if (shift < 0) shift = shift + overflowingAlphabetTotal
  else shift = (alphabetCharTotal * Math.floor((shift + alphabetCharTotal) / alphabetCharTotal + 1)) - shift

  for (let [i, char] of Array.from(text).entries()) {
    const curCharCode = char.charCodeAt(0);

    if ((curCharCode < CAPITALIZED_UNICODE_START && curCharCode > CAPITALIZED_UNICODE_END) &&
        (curCharCode < UNCAPITALIZED_UNICODE_START && curCharCode > UNCAPITALIZED_UNICODE_END))
      continue;

    
    
  }

  const cipher = "";
  return cipher;
}

type numberAnalyzer = {
  average: number,
  min: number,
  max: number,
  length: number
}

export function analyzeArray(arr: number[]): numberAnalyzer | {} {
  if (arr.length < 1) return {};

  let sum = arr[0], min = arr[0], max = arr[0];

  for (let [index, num] of arr.entries()) {
    if (index === 0) continue;

    sum += num;
    min = num < min ? num : min;
    max = num > max ? num : max;
  } 

  const average = arr.length > 1 ? sum / arr.length : sum;

  return {
    average,
    min,
    max,
    length: arr.length
  };
}