"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
exports.capitalize = capitalize;
exports.reverseString = reverseString;
exports.ceasarCipher = ceasarCipher;
exports.analyzeArray = analyzeArray;
const CAPITALIZED_UNICODE_START = 65;
const CAPITALIZED_UNICODE_END = 90;
const UNCAPITALIZED_UNICODE_START = 97;
const UNCAPITALIZED_UNICODE_END = 122;
function capitalize(text) {
    let temp = "";
    if (text === "")
        return temp;
    for (let [i, char] of Array.from(text).entries()) {
        if (char === " " || (text[i - 1] !== " " && i - 1 >= 0)) {
            temp += char;
            continue;
        }
        const curCharCode = char.charCodeAt(0);
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
function reverseString(text) {
    let temp = "";
    if (text === "")
        return temp;
    for (let i = text.length - 1; i >= 0; i--)
        temp += text[i];
    return temp;
}
exports.calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
};
function ceasarCipher(text, shiftBy) {
    let temp = "";
    if (text === "")
        return temp;
    function characterIsLetter(char) {
        const charCode = char.charCodeAt(0);
        return (charCode >= CAPITALIZED_UNICODE_START && charCode <= CAPITALIZED_UNICODE_END) ||
            (charCode >= UNCAPITALIZED_UNICODE_START && charCode <= UNCAPITALIZED_UNICODE_END);
    }
    function letterIsCapitalized(char) {
        const charCode = char.charCodeAt(0);
        return (charCode >= CAPITALIZED_UNICODE_START && charCode <= CAPITALIZED_UNICODE_END);
    }
    function shiftAndAppendLetter(shiftedCharCode, unicodeStartCap, unicodeEndCap) {
        if (shiftedCharCode < unicodeStartCap) {
            temp += String.fromCharCode(unicodeEndCap - (unicodeStartCap - shiftedCharCode));
        }
        else if (shiftedCharCode > unicodeEndCap) {
            temp += String.fromCharCode((unicodeStartCap - 1) + (shiftedCharCode - unicodeEndCap));
        }
        else {
            temp += String.fromCharCode(shiftedCharCode);
        }
    }
    const LETTERS_TOTAL = 26;
    const overflowingAlphabetTotal = (LETTERS_TOTAL * Math.floor((shiftBy / LETTERS_TOTAL)));
    const convertedShiftBy = shiftBy - overflowingAlphabetTotal;
    for (let [i, char] of Array.from(text).entries()) {
        if (!characterIsLetter(char)) {
            temp += char;
            continue;
        }
        ;
        const curCharCode = char.charCodeAt(0);
        let shiftedCharCode = curCharCode + convertedShiftBy;
        if (letterIsCapitalized(char)) {
            shiftAndAppendLetter(shiftedCharCode, CAPITALIZED_UNICODE_START, CAPITALIZED_UNICODE_END);
            continue;
        }
        shiftAndAppendLetter(shiftedCharCode, UNCAPITALIZED_UNICODE_START, UNCAPITALIZED_UNICODE_END);
    }
    return temp;
}
function analyzeArray(arr) {
    if (arr.length < 1)
        return {};
    let sum = arr[0], min = arr[0], max = arr[0];
    for (let [index, num] of arr.entries()) {
        if (index === 0)
            continue;
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
//# sourceMappingURL=utils.js.map