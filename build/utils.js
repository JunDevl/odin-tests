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
            temp = temp + char;
            continue;
        }
        if (char.charCodeAt(0) >= CAPITALIZED_UNICODE_START && char.charCodeAt(0) <= CAPITALIZED_UNICODE_END) {
            temp = temp + char;
            continue;
        }
        if (char.charCodeAt(0) >= UNCAPITALIZED_UNICODE_START && char.charCodeAt(0) <= UNCAPITALIZED_UNICODE_END) {
            const capitalized = String.fromCharCode(char.charCodeAt(0) - 32);
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
        temp = temp + text[i];
    return temp;
}
exports.calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
};
function ceasarCipher(text, shift) {
    let temp = "";
    if (text === "")
        return temp;
    const cipher = "";
    return cipher;
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