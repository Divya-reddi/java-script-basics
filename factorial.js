let n = Number(prompt("enter the number to find factorial"));

function factorial(n){
    let result = n;
    for(i=1;i<=n-1;i++){
        result *= (n-i);
    }
    return result;
}

console.log(`factorial of ${n} is ${factorial(n)}`);