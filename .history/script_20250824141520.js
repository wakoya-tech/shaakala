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