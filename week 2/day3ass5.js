const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() all credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");

// 2. map() to extract only transaction amounts
const creditAmounts = creditTransactions.map(t => t.amount);

// 3. reduce() to calculate final account balance
const finalBalance = transactions.reduce((acc, t) => {
  return t.type === "credit" ? acc + t.amount : acc - t.amount;
}, 0);

// 4. find() the first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");

// 5. findIndex() of transaction with amount 10000
const index10000 = transactions.findIndex(t => t.amount === 10000);

console.log("Credit Transactions:", creditTransactions);
console.log("Credit Amounts:", creditAmounts);
console.log("Final Balance:", finalBalance);
console.log("First Debit Transaction:", firstDebit);
console.log("Index of 10000 Transaction:", index10000);