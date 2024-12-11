// OVERVIEW -
// In the HTML, there are 4 <span> elements. Each <span> has an id.
// Your goal is to change the textContent of each <span> element using Javascript. By the end, you will have a nice holiday card that you can send to someone!

// STEP 1 - In Javascript, get each <span> element from the DOM using document.getElementById().
let result = {
  friend: "Donna",
  forward: "the New Year",
  filled: ["Happy Memories", "Faith", "love"],
  name: "Cassy",
};

// STEP 2 - In Javascript, change the textContent of each <span> element.
let friend = document.getElementById("friend");
friend.textContent = result.friend;

let forward = document.getElementById("hopes");
forward.textContent = result.forward;

let filled = document.getElementById("wishes");
filled.textContent = result.filled;

let name = document.getElementById("your-name");
name.textContent = result.name;

// STEP 3 - In CSS, style your holiday card!

/* Here's some ideas how you can style your card in CSS:
  - background-color
  - color (this property changes the font color)
  - border
  - border-radius
  - padding
  - margin
  - font-family (using a font from Google Fonts. Don't forget to import it first)
  - Anything else that inspires you! 
  
  BONUS CHALLENGE: Here are some more cool ways you can style your card! You may need to Google these: 
  - CSS color gradient (you can generate a gradient using https://cssgradient.io) 
  - background-image (and the background-size property will help too)
  - Add today's date using Javascript!
  */

// STEP 4 - We will do this together as a class on Tuesday!
// Add a button that toggles the card open or closed! You will need to write both CSS and Javascript for this.
//pseudo code show/hide button
//create a button in html
//style in css
//hide the card
//add a hidden class in html to the card
//style the hidden class in css

//make the button toggle in js
//make the button toggle in hidden class
// get the button from dom
let button = document.getElementById("clicker");

//get the card from the dom using document.getelementbyid()
let card = document.getElementById("card");

// get the svg icons from dom
let open = document.getElementById("open");
let closed = document.getElementById("closed");

//or you can do this (let card = document.querySelector("#card"))

//use document.querySelector() or document.getelementbyid()

//make a function to open/hide the card
function openClose() {
  card.classList.toggle("hidden");

  open.classList.toggle("hidden");
  closed.classList.toggle("hidden");

  //card.classList.toggle("hidden")
}
button.addEventListener("click", openClose);
// add an even listener on the button to open /hide the card
