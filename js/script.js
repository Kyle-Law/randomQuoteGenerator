/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "The ability to work hard for days on end without losing focus is a talent. The ability to keep absorbing new information after many hours of study is a talent",
    source: "Garry Kasparov",
    citation: "<How Life Imitates Chess",
    year: "2001",
  },
  {
    quote:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    source: "Brian W. Kernighan and P. J. Plauger",
    citation: "The Elements of Programming Style.",
    year: "1978",
  },
  {
    quote:
      "Programming is not a zero-sum game. Teaching something to a fellow programmer doesn’t take it away from you. I’m happy to share what I can, because I’m in it for the love of programming. The Ferraris are just gravy, honest!",
    source: "John Carmack",
    citation: "Graphics Programming Black Book",
    year: "1997",
  },
  {
    quote:
      "Trying to outsmart a compiler defeats much of the purpose of using one.",
    source: "Kernighan and Plauger",
    citation: "The Elements of Programming Style",
    year: "1978",
  },
  {
    quote:
      "If you want a product with certain characteristics, you must ensure that the team has those characteristics before the product’s development.",
    source: "Jim McCarthy and Michele McCarthy",
    citation: "Software for your Head",
    year: "2002",
  },
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  // random number 0-4
  const randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  const quoteObj = getRandomQuote();
  document.querySelector(".quote").textContent = quoteObj.quote;
  document.querySelector(
    ".source"
  ).innerHTML = `${quoteObj.source}<span class="citation">${quoteObj.citation}</span><span class="year">${quoteObj.year}</span>`;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
