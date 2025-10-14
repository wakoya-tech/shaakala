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