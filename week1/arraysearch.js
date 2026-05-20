//write a function that receives and array &search element as args and return the index of that search element as args and return thier index of that search elemnt
function search(array, searchElement)
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] == searchElement)
        {
            return i;   
        }
    }
    return "Not Found";  

}
console.log(search([10,20,30,40,50],30))
console.log(search([10,20,30,40,50,60],70))