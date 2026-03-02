//find the minimum number in the array
let min=marks[0];
for(index=0;index<marks.length;index++)
{
    if(min>marks[index])
    {
        min=marks[index];
    }
}
console.log(min)
