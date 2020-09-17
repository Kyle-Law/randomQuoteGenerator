/***
 * A quotes array that store a list of quotes, each quote includes properties like quote, source(author), citation, year, and tags
 * `quotes` array
 *
 ***/
const quotes = [
  {
    quote:
      "The ability to work hard for days on end without losing focus is a talent. The ability to keep absorbing new information after many hours of study is a talent",
    source: "Garry Kasparov",
    achievement: "former World Chess Champion",
    citation: "How Life Imitates Chess",
    year: "2001",
    tags: "chess",
  },
  {
    quote:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    achievement: "Software Developers",
    source: "Brian W. Kernighan and P. J. Plauger",
    citation: "The Elements of Programming Style.",
    year: "1978",
    tags: "programming",
  },
  {
    quote:
      "Programming is not a zero-sum game. Teaching something to a fellow programmer doesn’t take it away from you. I’m happy to share what I can, because I’m in it for the love of programming. The Ferraris are just gravy, honest!",
    achievement: "Software Developer",
    source: "John Carmack",
    citation: "Graphics Programming Black Book",
    year: "1997",
    tags: "programming",
  },
  {
    quote:
      "Trying to outsmart a compiler defeats much of the purpose of using one.",
    achievement: "Software Developer",
    source: "Kernighan and Plauger",
    citation: "The Elements of Programming Style",
    year: "1978",
    tags: "programming",
  },
  {
    quote:
      "If you want a product with certain characteristics, you must ensure that the team has those characteristics before the product’s development.",
    achievement: "Software Developer",
    source: "Jim McCarthy and Michele McCarthy",
    citation: "Software for your Head",
    year: "2002",
    tags: "programming",
  },
];

/***
 * To generate a random quote Object
 * `getRandomQuote` function
 * @params: none
 * @return: {Object} A quote object within quotes array
 ***/
function getRandomQuote() {
  // random number 0-4
  const randNum = Math.floor(Math.random() * quotes.length);
  return quotes[randNum];
}

/***
 * A  function to generate random background color of the DOM
 * @params: none
 * @return: none
 *
 * ***/
function randomBodyColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${r},${g},${b})`;

  document.body.style.backgroundColor = bgColor;
}

/***
 * A function to display quote on the DOM
 * `printQuote` function
 * @param: none
 * @return: none
 ***/

function printQuote() {
  const quoteObj = getRandomQuote();
  document.querySelector(".quote").textContent = quoteObj.quote;
  document.querySelector(
    ".source"
  ).innerHTML = `${quoteObj.source} - <span class="achievement">${quoteObj.achievement}</span><span class="citation">${quoteObj.citation}</span><span class="year">${quoteObj.year}</span><span class="tags"> (${quoteObj.tags})</span>`;
  randomBodyColor();
}

// The quote is printed per 10 seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
