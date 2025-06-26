// let num = Number(prompt("Enter the value upto which you want to print fibnocci series"));

// function fibanocci(num){
//     debugger;
//     let a = 0, b=1, i=0, sum = [];
//     while(i<num){
//         sum[i] = a;
//         next = a+b;
//         a = b;
//         b = next;
//         i++;
//     }
//     return sum;
// }

// console.log(`The fibnocci series for ${num} : ${fibanocci(num)}`);


//make a habit of covering edge conditionss
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

let num = Number(prompt("Enter how many Fibonacci numbers you want:"));
console.log(`Fibonacci series for ${num}: ${fibonacci(num)}`);
