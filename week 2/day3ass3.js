const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
const itEmployees = employees.filter(e => e.department === "IT");

// 2. map() to add netSalary = salary + 10% bonus
const netSalaries = itEmployees.map(e => ({
  ...e,
  netSalary: e.salary + e.salary * 0.10
}));

// 3. reduce() to calculate total salary payout
const totalPayout = netSalaries.reduce((acc, e) => acc + e.netSalary, 0);

// 4. find() employee with salary 30000
const employee30000 = employees.find(e => e.salary === 30000);

// 5. findIndex() of employee "Neha"
const nehaIndex = employees.findIndex(e => e.name === "Neha");

console.log("IT Employees:", itEmployees);
console.log("Net Salaries:", netSalaries);
console.log("Total Payout:", totalPayout);
console.log("Employee with 30000:", employee30000);
console.log("Index of Neha:", nehaIndex);