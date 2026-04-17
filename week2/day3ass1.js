const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let result = cart.filter(item => item.inStock === true);

console.log(result);


let Cart1 = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log(Cart1);

let grandTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log("Grand Total:", grandTotal);


let mouse = cart.find(item => item.name === "Mouse");
console.log("Mouse ", mouse);


let a= cart.findIndex(item => item.name === "Keyboard");
console.log(a);