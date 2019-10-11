/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Jesse Gay - jesse@teamtreehouse.com
******************************************/

/*** 
This project creates a webpage that displays a randomly selected quote from an array of quotes.
The color of the page changes to a random color each time a new quote is generated.
A new quote is displayed every 20 seconds
Concepts used: object, variable, optional property, array, box notation, function,conditional statement, CSS,
HTML, event listener, timer, comment.
***/

// Array of quotes. 
var quotes = [
  {
     quote: 'We will, we will, rock you.',
     source: 'Queen'
  },
  {
     quote: 'Two men enter, one man leaves.',
     source: 'Bartertown crowd',
     citation: 'Wikipedia',
     year: 1985,
     tag: 'Movies'
    },
    {
      quote: 'Bodhi, this is your wake-up call man. I am an F, B, I, Agent!',
      source: 'Johnny Utah',
      citation: 'Point Break',
      year: 1991,
      tag: 'Movies'
    },
    {
      quote: 'How inappropriate to call this planet Earth when it is quite clearly Ocean.',
      source: 'Arthur C. Clarke',
    },
    {
      quote: 'You miss 100% of the shots you don’t take.',
      source: 'Wayne Gretzky',
      tag: 'Sports'
    },
    {
      quote: 'The Earth is a very small stage in a vast cosmic arena.',
      source: 'Carl Sagan',
      tag: 'Wisdom'
     
    }
];

// Function to return a random selection from quotes array.
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length)); // Note it's not length+1 since array begins at 0.
  //alert(randomNumber);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

function printQuote() {
  // Generate randomly selected quote.
  var randomQuote = getRandomQuote();
  // Create empty variable for HTML to be placed on page.
  var htmlQuote = '';
  // Build HTML string using properties of randomQuote object.
  htmlQuote = '<p class="quote">' + randomQuote.quote + '</p>';
  htmlQuote += '<p class="source">' + randomQuote.source ;
  // Conditional statements to check for additional properties. If they exist, they are added to htmlQuote.
  if (randomQuote.hasOwnProperty('citation')) {
    htmlQuote += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  
  if (randomQuote.hasOwnProperty('year')) {
    htmlQuote += '<span class="year">' + randomQuote.year + '</span>' ;
  }
  
  if (randomQuote.hasOwnProperty('tag')) {
    htmlQuote += '<span class="tag">' + randomQuote.tag + '</span>' + '</p>';
  }
  // Set `innerHTML` of the `quote-box` div to the HTML string.
  document.getElementById('quote-box').innerHTML = htmlQuote; 
  // Change background color. Get random hex color and assign to .backgroundColor.
  var randomHexColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomHexColor;
  // Change button color to match.
  document.getElementById('loadQuote').style.backgroundColor = "#" + randomHexColor;
}

printQuote();
// Event listener to allow button click to call printQuote().
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Load new quote after 20 seconds if no activity from user. 
setInterval(printQuote, 20000);

