//1
let stringToBeReversed = prompt("Please Enter a String to be reversed!!");
let reversedString = "";

function reverse(str){
    console.log(str);
    for(let i=str.length-1; i>=0; i--){
         reversedString += str[i];
    }
    return reversedString;
}

console.log(reverse(stringToBeReversed));

//2
//let str = prompt("Enter String:");
// let revstr = str.split('').reverse().join('');
// console.log(revstr);


//3
// function reverseString(str) {
//     let chars = str.split('');
//     let left = 0;
//     let right = chars.length - 1;

//     while (left < right) {
//         [chars[left], chars[right]] = [chars[right], chars[left]];
//         left++;
//         right--;
//     }

//     return chars.join('');
// }
// console.log(reverseString(str));