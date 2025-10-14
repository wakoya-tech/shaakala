
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
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill"
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    person: "John Lennon"
  },
  {
    quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    person: "William Butler Yeats"
  },
  {
    quote: "Whether you think you can, or you think you can’t – you’re right.",
    person: "Henry Ford"
  },
  {
    quote: "The best way to predict the future is to create it.",
    person: "Peter Drucker"
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    person: "Dalai Lama"
  },
];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
