var suit;
var card;
randomNumber=Math.random();
console.log (randomNumber);
var randomsuit = randomNumber * 4  + 1;
console.log (randomsuit);
randomsuit=parseInt(Math.floor(randomsuit));
console.log (randomsuit);
if (randomsuit === 1) {
	suit="Hearts";
}
else if (randomsuit === 2) {
	suit="Clubs";
}
else if (randomsuit === 3) {
	suit="Spades";
}
else {
	suit = "Diamonds";
}
console.log (suit);

randomNumber=parseInt(Math.floor(Math.random() * 13 + 1))
console.log(randomNumber)

if (randomNumber === 1) {
	card="Ace";
}
else if (randomNumber === 13) {
	card="King";
}
else if (randomNumber === 12) {
	card="Queen";
}	
else if (randomNumber === 11) {
	card="Jack";
}
else {
	card= randomNumber;
}

console.log(card);


document.write("Thanks for Visiting You have been Given a Card, you got "+card+" of "+suit);

document.write("<div> This is a Div </div>");
	







  