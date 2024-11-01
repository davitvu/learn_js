let a = {
    name: "ronal",
    age: 18,
    address: "hanoi",
}

// Object.keys() duyet qua object bang for...in roi add vao array
// console.log(Object.keys(a))

let sum = new Function("a", "b", "return a + b");
let print = new Function("a", "console.log(`ban nhap: ${a}`)");

console.log(sum(1, 2));
print(5);