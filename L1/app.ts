function add(n1, n2) {
  return n1 + n2;
}

const n1 = 1011;
const n2 = 1200;
// const result = add(n1, n2);
// console.log(result); // 30

function printName(name: string): void {
  console.log(`Name: ${name}`);
}
function subtract(a: number, c: number): number {
  return a - c;
}

function multiply(x: number, y: number): number {
  return x * y;
}

// Example usage
const result = subtract(10, 4);
console.log(`Result: ${result}`); // Output: Result: 6

const multiplyResult = multiply(10, 7);
console.log(`Result of multiply ${multiplyResult}`);

// Example usage
printName("Alicy1");
printName("hi");
printName("Charlie dean deeen");
printName("Shiza Amreens");
printName("Bob");
// Output: Name: Alice, Name: Bob, Name: Charlie
