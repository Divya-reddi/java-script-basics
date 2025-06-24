let str = prompt("Enter a string to be checked for palindrome");

function isPalindrome(str){
     if((str.split('').reverse().join('')) === str){
        return true;
     }else{
        return false;
     }
}

console.log(str, " is a palindrome : ", isPalindrome(str));