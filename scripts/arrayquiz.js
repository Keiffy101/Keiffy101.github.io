var questionarray = [
['What come first chicken or the egg?','The Rooster came first.'],

['Why are none of the characters on the Simpsons that are married ever wearing wedding rings?',
'Secretly they have orgies with each other anyone who enters the town with a ring they know not to tell them?'],

['Why do people put shampoo in their hand first before applying it to their head?'
,'I have no idea'],

['Do People eat or drink soup?','Both']

];

var questionresponse = [];
var i = 0;
var numwrong = 0;
var numright = 0;

for ( var i = 0; i <4; i += 1) {
	document.write("<br>Question "+parseInt(i+1)+" - "+questionarray[i][0]);
questionresponse.push(prompt(questionarray[i][0]));
document.write("<br>Your Answer "+parseInt([i+1])+" - "+ questionresponse[i]);

console.log(questionresponse)

if (questionresponse[i] === questionarray[i][1]) {
	document.write(" This is correct!!!");
	parseInt(numright += 1);


} else (document.write ("<br> Sorry This is wrong!!!"));
		document.write ("<br> The correct answer was - "+questionarray[i][1]);
		parseInt(numwrong +=1);
}

document.write("<br>You got "+numright+" right and "+numwrong+" wrong.");

console.log(questionresponse[i]);
console.log(numwrong);
console.log(numright);
