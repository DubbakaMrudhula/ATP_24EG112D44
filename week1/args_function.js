//write a function that recieves 3 number args and return the big number
function findBig(a,b,c)
{
    if(a>b&&a>c)
{
    console.log(a);
}
else if(b>c&&b>a)
{
    console.log(b);
}
else 
{
    console.log(c);
}
}
findBig(10,20,30);