function add(n1, n2) {
  return n1 + n2;
}

const n1 = 10;
const n2 = 510;
const result = add(n1, n2);
console.log(result); // 30

function printName(name: string): void {
  console.log(`Name: ${name}`);
}

// Example usage
printName("Alice");
printName("Bob");
