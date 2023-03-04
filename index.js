let rawInput = document.getElementById("type-message");
let result = document.getElementById("output-text");

// Working on the reset button set everything to an empty string when clicked
function reset(){
	rawInput.value = " ";
	result.innerHTML = " ";
}

// This is the function of the copy button
function copy() {
	var value = document.getElementById("output-text").innerHTML;
	var input_temp = document.createElement("input");
	input_temp.value = value;
	document.body.appendChild(input_temp);
	input_temp.select();
	document.execCommand("copy");
	document.body.removeChild(input_temp);

// We cannot copy an empty string so we have to let the users know when they are doing so
	if (input_temp.value == 0) {
	alert("You cannnot copy a blank space! Kindly input a text above and encrypt or decrypt it to be able to copy")
	}
	else{
	alert("Copied to clipboard!")
	}

// After the string is copied, we have to alert the user that he executed an action
	let copyBtn = document.getElementById("copy");
};

let str = document.getElementById("type-message");
let ecBtn = document.getElementById("ecBtn");

// Working on the encryption button to perform the text rotations
function encrypt(newestStr) {

// We have set the newestStr value to capture everything that we input and return the value to the function
	newestStr = str.value;

// Our function accepts only uppercase so we want to convert each input to uppercase even if the user inputs lower cases  
	newestStr = newestStr.toUpperCase()

// This empty variable is where all our manipulated values will be accumulated
  let newStr = "";

// The encryption function will rotate the texts based on this string of alphabets
  let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < newestStr.length; i++){
   let index = alphabets.indexOf(newestStr[i]);
   if(index == -1){
     newStr += newestStr[i]
   }
   else{
     let newIndex = (index + 13) % 26;
     newStr += alphabets[newIndex]
   }
 
  }

// We are replacing each space in the input with a % and random floats to make the text more complex to read 
  let spaceReplace = Math.random()*13.125;
	newStr = newStr.replace(/\s/gm,"%2" + spaceReplace)

// Returning the result to the user
  	result.innerHTML = newStr;
};


// Working on the decryption button to reverse the text rotation the other way round
function decrypt(newestStr) {
	newestStr = str.value;
  let newStr = "";
  let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Converting the string of the alphabet var to an array for us to be able to reverse it.
  reversedAlpha = alphabets.split("")

// Reversing the alphabets for it to be able to perform the opposite function of the encrypt button
  reversedAlpha.reverse()

// We are done with the array manipulation so we have to convert it back to a normal string
  reversedAlpha = reversedAlpha.join("")
  alphabets = reversedAlpha
  for (let i = 0; i < newestStr.length; i++){
   let index = alphabets.indexOf(newestStr[i]);
   if(index == -1){
     newStr += newestStr[i]
   }
   else{
     let newIndex = (index + 13) % 26;
     newStr += alphabets[newIndex]
   }
 
  }

// Let's make it a readable sentence with only the first letter as an uppercase letter
	let testingStr = newStr;

// We have to initially make the inputs all lowercase
	testingStr = testingStr.toLowerCase();

// Convert it from string to an array
	let myRegExp = testingStr.split("");

// Take of the first item of the array(first word of the letter/sentence)
	let mynewRegExp = myRegExp.shift();

// Covert the first item to an uppercase letter
	mynewRegExp = mynewRegExp.toUpperCase();
	mynewRegExp.split();

// Return the uppercase letter to a new array in addition to the other lowercased letters
	let pushedItem = myRegExp.unshift(mynewRegExp);

// Convert the final array into a string
	myRegExp = myRegExp.join("");
	// let regExp = /^[a-z]|(?<=\.)\s?\w{1}|(?<=\w+\?\s?)\w/mig;

// Here, we are removing the random floats and the "%" sign returned in place of the empty space
	myRegExp = myRegExp.replace(/\%\d+\.\d+/gm," " )

// Return the result
	result.innerHTML = myRegExp;

};

// function for the check compatibility button

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("check");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Background animation

// Some random colors
const colors = ["#fff", "#f6f6f6", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

