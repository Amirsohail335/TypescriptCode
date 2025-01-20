function add(n1, n2) {
  return n1 + n2;
}

const n1 = 1066;
const n2 = 10000;
// const result = add(n1, n2);
// console.log(result); // 30

function printName(name: string): void {
  console.log(`Name: ${name}`);
}
function subtract(a: number, b: number): number {
  return a - b;
}

// Example usage
const result = subtract(10, 4);
console.log(`Result: ${result}`); // Output: Result: 6

// Example usage
printName("Alice");
printName("himmat");
printName("Charlie"); // Output: Name: Alice, Name: Bob, Name: Charlie

