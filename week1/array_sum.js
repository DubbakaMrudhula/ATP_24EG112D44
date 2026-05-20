//write a function taht recieves an array as arg and return their sum
function findSum(marks)
{
    
  let sum=0;
for(let index=0;index<marks.length;index++)
{
   sum=sum+marks[index];
}
console.log(sum);  
    

}
findSum([30,40,50])