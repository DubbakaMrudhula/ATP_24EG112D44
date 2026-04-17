const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
// Insert new Emp at 2nd position
employees.splice(2,0,{ eno: 106, name: "neetha",marks: [90, 85, 37] })
console.log(employees)
//remove emp with name "Kiran"

let index = employees.findIndex(emp => emp.name === "Kiran");
employees.splice(index, 1);
console.log(employees)
//Change the last mark 95 to 75 of emp  "Sneha"

let result = employees.find(emp => emp.name === "Sneha");
result.marks.splice(2,1,75)
console.log(employees)

