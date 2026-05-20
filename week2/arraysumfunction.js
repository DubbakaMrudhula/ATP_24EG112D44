//write a function that receives any no of args and return thier sum
function findSum(...numbers)
{
   return numbers.reduce((acc,sum)=>acc+sum);
   
}
let result=findSum(10,20,30,40);
console.log(result);
