const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)
const passedStudents = students.filter(s => s.marks >= 40);

// 2. map() to add a grade field
const gradedStudents = passedStudents.map(s => {
  let grade;
  if (s.marks >= 90) grade = "A";
  else if (s.marks >= 75) grade = "B";
  else if (s.marks >= 60) grade = "C";
  else grade = "D";
  return { ...s, grade };
});

// 3. reduce() to calculate average marks
const avgMarks = gradedStudents.reduce((acc, s) => acc + s.marks, 0) / gradedStudents.length;

// 4. find() the student who scored 92
const student92 = gradedStudents.find(s => s.marks === 92);

// 5. findIndex() of student "Kiran"
const kiranIndex = gradedStudents.findIndex(s => s.name === "Kiran");

console.log("Passed Students:", passedStudents);
console.log("Graded Students:", gradedStudents);
console.log("Average Marks:", avgMarks);
console.log("Student with 92:", student92);
console.log("Index of Kiran:", kiranIndex);
