// ================
// VARIANT 2
// ================

// -------------------------
// Task 1: findMax(a, b)
// -------------------------
function findMax(a, b) {
  return a > b ? a : b;
}
console.log("Max(10, 7) =", findMax(10, 7));

// -------------------------
// Task 2: subtract(a, b) — function expression
// -------------------------
const subtract = function (a, b) {
  return a - b;
};
console.log("Subtract(10, 4) =", subtract(10, 4));

// -------------------------
// Task 3: sqrt(n) — arrow function
// -------------------------
const sqrt = (n) => Math.sqrt(n);
console.log("sqrt(25) =", sqrt(25));

// -------------------------
// Task 4: рекурсивна геометрична прогресія
// Формула Sₙ = a * (1 − rⁿ) / (1 − r)
// або рекурсивна сума a*r^(n-1) + ...
// -------------------------

function geometricProgression(n, a, r) {
  if (n === 1) return a;
  return a * r ** (n - 1) + geometricProgression(n - 1, a, r);
}

console.log("GP sum (n=4, a=2, r=3) =", geometricProgression(4, 2, 3));

// -------------------------
// Task 5: createDivider(divisor) — closure
// -------------------------
function createDivider(divisor) {
  return function (number) {
    return number / divisor;
  };
}

const divideBy2 = createDivider(2);
console.log("divideBy2(10) =", divideBy2(10));

// -------------------------
// Task 6: applyOperation(a, b, func)
// -------------------------
function applyOperation(a, b, func) {
  return func(a, b);
}

function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}

console.log("applyOperation add =", applyOperation(5, 3, add));
console.log("applyOperation multiply =", applyOperation(5, 3, multiply));

// -------------------------
// Task 7*: processSet(set, callback)
// -------------------------
function processSet(set, callback) {
  for (let value of set) {
    callback(value);
  }
}

const mySet = new Set([1, 2, 3, 4]);
processSet(mySet, (x) => console.log("Set element:", x));
