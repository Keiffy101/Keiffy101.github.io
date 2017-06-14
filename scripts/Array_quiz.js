var questionarray = [
["Europeans were the first people that lived in the Townsville region","false","The first people who lived in the Townsville region were the Bindal and Wulgurukaba People. The Bindal knew the area as Thul Garrie Waja and the Wulgurukaba People knew it as Gurrumbilbarra." ],
["A site for the new settlement \( latter to be known as Townsville \) was founded in 1985.", "false","The settlement was founded in 1984" ],
["The city Townsville named after Andrew Towns?","false","The City of Townsville is named after Robert Towns although he never actually visited the city until years after it was established."],

];




var correct = 0;


function printh1 (message)
{ document.write ("<h1>" +message+ "</h1>");
}

function print (message)
{ document.write (message);
}

for ( var i = 0; i < questionarray.length; i += 1 ) {
	
	printh1 (questionarray[i][0]);
	print("<br>True or False ?<br>")
	var answer = prompt("Type Your Answer Here").toLowerCase();
	console.log(answer);
	
	
	if (answer == questionarray[i][1]) {
		print(" Thats Correct! The answer was "+questionarray[i][1]);
		print("<br>"+questionarray[i][2]);
		correct += 1;
	}

	if (answer !== questionarray[i][1]) {
		print(" Sorry Thats Wrong! The answer is "+questionarray[i][1]);
		print("<br><br>"+questionarray[i][2]);
	}
	
}

print("<br>You answerd correctly "+correct+" Times.")













