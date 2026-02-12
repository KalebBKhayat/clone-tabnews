function somar(arg1, agr2) {
  if (typeof arg1 !== "number") {
    return "error";
  }
  return arg1 + agr2;
}

function dividir(arg1, arg2) {
  if (arg1 == 0 || arg2 == 0) {
    return "Operação impossivel";
  }
  if (typeof arg1 !== "number") {
    return "error";
  }
  return arg1 / arg2;
}
exports.somar = somar;
exports.dividir = dividir;
