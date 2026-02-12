const calculadora = require("../models/calculadora");

test("2 + 2 = 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("7 + 23 = 30", () => {
  const resultado = calculadora.somar(7, 23);
  expect(resultado).toBe(30);
});

test("'banana' + 5 = error", () => {
  const resultado = calculadora.somar("banana", 5);
  expect(resultado).toBe("error");
});

test("10 / 2 = 5", () => {
  const resultado = calculadora.dividir(10, 2);
  expect(resultado).toBe(5);
});

test("0 / 2 = op impossivel", () => {
  const resultado = calculadora.dividir(0, 2);
  console.log(resultado);
  expect(resultado).toBe("Operação impossivel");
});
