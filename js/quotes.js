const quotes = [
  {
    quote:
      "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.",
    author: "Ovid",
  },
  {
    quote:
      "There are always survivors at a massacre. Among the victors, if nowhere else.",
    author: "Lois McMaster Bujold",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "All you need in this life is ignorance and confidence; then success is sure.",
    author: "Mark Twain",
  },
  {
    quote:
      "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.",
    author: "Arthur Rubinstein",
  },
  {
    quote:
      "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were.",
    author: "David Rockefeller",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "Success is often achieved by those who don't know that failure is inevitable.",
    author: "Gabriel Coco Chanel",
  },
  {
    quote:
      "Success is the ability to go from one failure to another with no loss of enthusiasm.",
    author: "Sir Winston Churchill",
  },
  {
    quote: "Every time we say, 'Let there be!' in any form, something happens.",
    author: "Stella Terrill Mann",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
