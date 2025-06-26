let num = Number(prompt("Enter a number"));

function isPrime(num){
    let count=0;
    for(let i=1 ; i<num; i++)
    {
        if(num%i==0)  count++;
    }

    //can also be written as return count<=1;
    return count>1 ? false : true;
}

console.log(`The given number ${num} is a prime number: ${isPrime(num)}`);