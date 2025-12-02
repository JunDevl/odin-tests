"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
test("string capitalization function", () => {
    expect((0, utils_1.capitalize)("")).toBe("");
    expect((0, utils_1.capitalize)("too long, didn't read")).toBe("Too Long, Didn't Read");
    expect((0, utils_1.capitalize)("aff   baakanoka     oregadesune.")).toBe("Aff   Baakanoka     Oregadesune.");
});
test("string reversion function", () => {
    expect((0, utils_1.reverseString)("")).toBe("");
    expect((0, utils_1.reverseString)("Fuful")).toBe("lufuF");
    expect((0, utils_1.reverseString)("val  lav")).toBe("val  lav");
    expect((0, utils_1.reverseString)("racecar")).toBe("racecar");
    expect((0, utils_1.reverseString)("  j f  h g")).toBe("g h  f j  ");
});
test("calculator functions", () => {
    expect(utils_1.calculator.add(5, 5)).toBe(10);
    expect(utils_1.calculator.add(-356, -1000)).toBe(-1356);
    expect(utils_1.calculator.add(1.699135235, 1.13479025)).toBeCloseTo(2.833);
    expect(utils_1.calculator.subtract(5, 5)).toBe(0);
    expect(utils_1.calculator.subtract(-356, -1000)).toBe(644);
    expect(utils_1.calculator.subtract(1.699135235, 1.13479025)).toBeCloseTo(0.564);
    expect(utils_1.calculator.multiply(5, 5)).toBe(25);
    expect(utils_1.calculator.multiply(-356, -1000)).toBe(356_000);
    expect(utils_1.calculator.multiply(1.699135235, 1.13479025)).toBeCloseTo(1.928);
    expect(utils_1.calculator.divide(5, 5)).toBe(1);
    expect(utils_1.calculator.divide(-356, -1000)).toBe(0.356);
    expect(utils_1.calculator.divide(1.699135235, 1.13479025)).toBeCloseTo(1.497);
    expect(utils_1.calculator.divide(2, 0)).toBe(Infinity);
});
test("ceasar cipher function", () => {
    expect((0, utils_1.ceasarCipher)("", 3)).toBe("");
    expect((0, utils_1.ceasarCipher)("I swear to God i didn't cheat on you!", 3)).toBe("L vzhdu wr Jrg l glgq'w fkhdw rq brx!");
    expect((0, utils_1.ceasarCipher)("When will the revolution begin, Sir. Dragon?", 7)).toBe("Dolu dpss aol ylcvsbapvu ilnpu, Zpy. Kyhnvu?");
    expect((0, utils_1.ceasarCipher)("When will the revolution begin, Sir. Dragon?", 33)).toBe("Dolu dpss aol ylcvsbapvu ilnpu, Zpy. Kyhnvu?");
    expect((0, utils_1.ceasarCipher)("Do you know the wae ", -7)).toBe("Wh rhn dghp max ptx ");
});
test("statistics number array analysis function", () => {
    expect((0, utils_1.analyzeArray)([])).toStrictEqual({});
    expect((0, utils_1.analyzeArray)([3])).toStrictEqual({
        average: 3,
        min: 3,
        max: 3,
        length: 1
    });
    expect((0, utils_1.analyzeArray)([50, 135, 93, 0, 20])).toStrictEqual({
        average: 59.6,
        min: 0,
        max: 135,
        length: 5
    });
    expect((0, utils_1.analyzeArray)([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])).toStrictEqual({
        average: 55,
        min: 10,
        max: 100,
        length: 10
    });
});
//# sourceMappingURL=utils.test.js.map