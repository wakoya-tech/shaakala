let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
      quote: "Be the change that you wish to see in the world.",
      person: "Mahatma Gandhi"
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      person: "Albert Einstein"
    },
    {
      quote: "It always seems impossible until it's done.",
      person: "Nelson Mandela"
    },
    {
      quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      person: "Walt Whitman"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
      person: "William James"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    }
  ];
  
btn.addEventListener('click',function(){
let random = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
})