import { capitalize, reverseString, calculator, ceasarCipher, analyzeArray } from "./utils";

test("string capitalization function", () => {
  expect(capitalize("")).toBe("");
  expect(capitalize("too long, didn't read")).toBe("Too Long, Didn't Read");
  expect(capitalize("aff   baakanoka     oregadesune.")).toBe("Aff   Baakanoka     Oregadesune.")
});

test("string reversion function", () => {
  expect(reverseString("")).toBe("");
  expect(reverseString("Fuful")).toBe("lufuF");
  expect(reverseString("val  lav")).toBe("val  lav");
  expect(reverseString("racecar")).toBe("racecar");
  expect(reverseString("  j f  h g")).toBe("g h  f j  ");
})

test("calculator functions", () => {
  expect(calculator.add(5, 5)).toBe(10);
  expect(calculator.add(-356, -1000)).toBe(-1356);
  expect(calculator.add(1.699135235, 1.13479025)).toBeCloseTo(2.833);

  expect(calculator.subtract(5, 5)).toBe(0);
  expect(calculator.subtract(-356, -1000)).toBe(644);
  expect(calculator.subtract(1.699135235, 1.13479025)).toBeCloseTo(0.564);

  expect(calculator.multiply(5, 5)).toBe(25);
  expect(calculator.multiply(-356, -1000)).toBe(356_000);
  expect(calculator.multiply(1.699135235, 1.13479025)).toBeCloseTo(1.928);

  expect(calculator.divide(5, 5)).toBe(1);
  expect(calculator.divide(-356, -1000)).toBe(0.356);
  expect(calculator.divide(1.699135235, 1.13479025)).toBeCloseTo(1.497);
  expect(calculator.divide(2, 0)).toBe(Infinity);
})

test("ceasar cipher function", () => {
  expect(ceasarCipher("", 3)).toBe("");
  expect(ceasarCipher("I swear to God i didn't cheat on you!", 3)).toBe("L vzhdu wr Jrg l glgq'w fkhdw rq brx!");
  expect(ceasarCipher("When will the revolution begin, Sir. Dragon?", 7)).toBe("Dolu dpss aol ylcvsbapvu ilnpu, Zpy. Kyhnvu?");
  expect(ceasarCipher("When will the revolution begin, Sir. Dragon?", 33)).toBe("Dolu dpss aol ylcvsbapvu ilnpu, Zpy. Kyhnvu?");
  expect(ceasarCipher("Do you know the wae ", -7)).toBe("Wh rhn dghp max ptx ");
})

test("statistics number array analysis function", () => {
  expect(analyzeArray([])).toStrictEqual({});
  expect(analyzeArray([3])).toStrictEqual({
    average: 3,
    min: 3,
    max: 3,
    length: 1
  });
  expect(analyzeArray([50, 135, 93, 0, 20])).toStrictEqual({
    average: 59.6,
    min: 0,
    max: 135,
    length: 5
  })
  expect(analyzeArray([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])).toStrictEqual({
    average: 55,
    min: 10,
    max: 100,
    length: 10
  })
})