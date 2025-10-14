const n=10;
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