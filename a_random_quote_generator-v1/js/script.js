/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

var quotes = [
  {
     quote: 'We will, we will, rock you.',
     source: 'Queen'
  },
  {
     quote: 'Two men enter, one man leaves.',
     source: 'Bartertown crowd',
     citation: 'Wikipedia',
     year: 1985
    },
    {
      quote: 'Bodhi, this is your wake-up call man. I am an F, B, I, Agent!',
      source: 'Johnny Utah',
      citation: 'Point Break',
      year: 1991
    },
    {
      quote: 'How inappropriate to call this planet Earth when it is quite clearly Ocean.',
      source: 'Arthur C. Clarke',
    },
    {
      quote: 'You miss 100% of the shots you don’t take.',
      source: 'Wayne Gretzky',
    }
];

// console.log(quotes);



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length)); // Note it's not length+1 since array begins at 0.
  //alert(randomNumber);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

//var test = getRandomQuote();
//console.log(test.quote);
/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  // Call the `getRandomQuote` function and assign it to a variable.
  var randomQuote = getRandomQuote();
  // Create a variable for the HTML string and set it equal to an empty string.
  var htmlQuote = '';
  // Use the HTML template in the instructions or the markup in the index.html file, AND the random quote vairable to build your HTML string.
  var htmlQuote = '<p class="quote">' + randomQuote.quote + '</p>';
  htmlQuote += 
  // Set the `innerHTML` of the `quote-box` div to the HTML string
  document.getElementById('quote-box').innerHTML = htmlQuote; 
}
//alert(printQuote());

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



// Remember to delete the comments that came with this file, and replace them with your own code comments.


