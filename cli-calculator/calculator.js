function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b == 0) {
    return console.log("That can not be done");
  } else return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
