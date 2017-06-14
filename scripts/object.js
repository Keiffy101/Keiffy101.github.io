var person = {
	name: 'Keith',
	country: 'Australia',
	age: 35,
	treehousestudent : true,
	skills: ['JavaScript','CSS','HTML'],
};
// This function takes everything put in "message and prints it to the output div in HTML Document.
function print(message) {
	var div = document.getElementById('output');
	div.innerHTML = message;
}

// ********** Accessing and changing properties and values in objects ************

// var message = '<p> Hello my name is '+person.name+'</p>';
// message += '<p> I live in '+person.country+'</p>';
// person.name = 'Neil';
// message += '<p> But, I wish my name was '+person.name+'</p>';
// person.age +=1;
// message +='<p> My age is now '+person.age+'</p>';
// message += '<p> I have ' +person.skills.length+' Skills they are '+person.skills.join(', ')+'</p>';

// print(message);


// ********** For in loops ************

for(var key in person ) {    
console.log (key, ': ', person[key] );
}





