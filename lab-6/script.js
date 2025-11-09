// =========================
// Лабораторна робота №6
// Тема: Ініціалізація змінних у JavaScript
// =========================

// Завдання 1
console.log("=== Завдання 1 ===");

// Передбачення:
// console.log(a); -> undefined (через hoisting var)
// console.log(b); -> ReferenceError (let ще не ініціалізовано)
// console.log(c); -> ReferenceError (const ще не ініціалізовано)

try {
  console.log(a); // undefined
} catch (e) {
  console.log("Помилка a:", e.message);
}

var a = 10;

try {
  console.log(b); // ReferenceError
} catch (e) {
  console.log("Помилка b:", e.message);
}

let b = 20;

try {
  console.log(c); // ReferenceError
} catch (e) {
  console.log("Помилка c:", e.message);
}

const c = 30;

// =========================
// Завдання 2
console.log("\n=== Завдання 2 ===");

function testScope() {
  if (true) {
    var x = 5;
    let y = 10;
    const z = 15;
  }

  console.log("x:", x); // 5
  try {
    console.log("y:", y); // ReferenceError
  } catch (e) {
    console.log("y:", e.message);
  }

  try {
    console.log("z:", z); // ReferenceError
  } catch (e) {
    console.log("z:", e.message);
  }
}

testScope();

// =========================
// Завдання 3
console.log("\n=== Завдання 3 ===");

console.log(5 + "5"); // "55" — число конвертується в рядок
console.log("5" - 2); // 3 — рядок конвертується у число
console.log(true + false); // 1 — true → 1, false → 0
console.log(null + 1); // 1 — null → 0
console.log(undefined + 1); // NaN — undefined → NaN
console.log(0 == false); // true — нестроге порівняння
console.log(0 === false); // false — різні типи

// =========================
// Завдання 4
console.log("\n=== Завдання 4 ===");

const person = {
  name: "John",
  age: 30,
};

person.age = 31; // зміна властивості
person.city = "New York"; // додавання нової властивості

console.log(person); // {name: "John", age: 31, city: "New York"}

Object.freeze(person); // робимо об'єкт незмінним

person.age = 100; // не зміниться
person.country = "USA"; // не додасться

console.log("Після freeze:", person);

try {
  person = { name: "Alice", age: 25 }; // TypeError
} catch (e) {
  console.log("Переприсвоєння person:", e.message);
}

// =========================
// Завдання 5
console.log("\n=== Завдання 5 ===");

function checkType(value) {
  return typeof value;
}

console.log(checkType(10)); // "number"
console.log(checkType("Hello")); // "string"
console.log(checkType(null)); // "object" (особливість JS)
console.log(checkType(undefined)); // "undefined"
console.log(checkType({})); // "object"
console.log(checkType(function () {})); // "function"
