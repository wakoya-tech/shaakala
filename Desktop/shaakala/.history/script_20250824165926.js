/*const n=1;
function isPrime(num){
    if(num < 2)return false;
    for(let i=2; i <=Math.sqrt(num); i++){
        if(num % i ===0){
            return false;

        }
    }
    return true;
}
console.log(`${n} is prime`, isPrime(n));
*/
/*
const str = " jimma University";
function reverseString(s){
    let reversed = "";
    for(let i=s.length - 1; i >=0; i--){
        reversed +=s[i];

    }
    return reversed;
}
console.log("Original:", str);
console.log("reversed:",reverseString(str));
*//*
const str ="Jimma university";
function reverseString(s){
    let reversed="";
    for( let i=s.length-1;i>=0;i--){
        reversed+=s[i];
    }
    return reversed;
}
console.log("Ori:", str);
console.log("reversed:", reverseString(str));
*/
/*
const numbers = [12,34,7,89,23];
let smallest = numbers[0]; 
let largest = numbers[0]; 
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
    if(numbers[i] < smallest){
        smallest = numbers[i];
    }
}

console.log("The largest number is:", largest);
console.log("The smallest number is:", smallest);
*/
/*
const names = ["Abel", "Marta", "Sami", "Abel", "Liya", "Marta"];
let uniqueNames = [];
let seen = {};
for ( let i = 0; i < names.length; i++){
    if(!seen[names[i]]){
        uniqueNames.push(names[i]);
        seen[names[i]] = true;
    }
}
console.log(uniqueNames);
*//*
const text = "ab";
let vowels = 0;
let consonants = 0;

for(let i = 0; i < text.length; i++){
    let char = text[i].toLowerCase();
    if('aeiou'.includes(char)){
        vowels++;
    } else if(char >= 'a' && char <= 'z'){ // counts only letters
        consonants++;
    }
}

console.log("Number of vowels:", vowels);
console.log("Number of consonants:", consonants);
*/
/*
const n=5;
function factorial(n){
    if(n=== 0 || n===1) return 1;
    return n*factorial(n - 1);
}
console.log(`5! = ${factorial(n)}`);
*/
/*
const n = 6;
function factorial(n){
    if(n === 0 || n === 1)return 1;
    return n*factorial(n-1);
}
console.log(`n! = ${factorial(5)}`);
*//*
const n = 10;
let fib = [0,1];
for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2]; 
}
console.log(`First ${n} Fibonacci numbers:`);
console.log(fib.join(", "));
*/
/*
const k= 10;
function fibonacci(n){
    if(n === 0)return 0;
    if(n === 1)return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
const n=10;
let fibSeq = [];
for(let i = 0; i < n; i++){
    fibSeq.push(fibonacci(i));
}
console.log(fibSeq.join(","));
*/
const str = "madam";
const lowerStr = str.toLowerCase();
const reversed = lowerStr.split("").reverse().join("");
if(lowerStr === reversed){
    console.log(`${str} is a plindrome`);

}else{
    console.log(`${str} is not a palindrome`);
}
/*
let reversed = "";

for (let i = lowerStr.length - 1; i >= 0; i--) {
    reversed += lowerStr[i];
}

if (lowerStr === reversed) {
    console.log(`${str} is a palindrome`);
} else {
    console.log(`${str} is not a palindrome`);
}*/
