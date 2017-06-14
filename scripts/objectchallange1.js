// // write a print fuction
function print(message) {
	var outputdiv =document.getElementById('output');
	outputdiv.innerHTML = message;
}

// var person = {
// 	name: "Keith",
// 	country: "Aus",
// 	age: 35,
// 	treehousestudent: true,
// 	skills: ["JavaScript","HTML","CSS"]

// };

// // basic example of pulling the name info from the above basic object
// // console.log(person["name"]);
// // console.log(person.name);

// // Basic function to call all information in the above object
// function objcall (object) {
// 	console.log(person.name);
// 	console.log(person.age);
// 	console.log(person.country);
// 	console.log(person.treehousestudent);
// 	console.log(person.skills.join(", "));
// }

// // console.log(objcall(person));

// var message = "<p>Hello. My Name is " + person.name + "</p>";
// message += "<p> I live in " + person.country + "</p>";
// person.name = "Neil";
// message += "<p> But I wish my name was " + person.name +"</p>";
// print(message);

// for(var key in person) {
// 	console.log(key);
// }


// // ********REMEMBER in SQUARE BRACKETS IT MUST BE A STRING VALUE TO SEARCH**********

// for(var property in person) {
// 	console.log(property, person["name"]);
// }


// for(var property in person) {
// 	console.log(property, person[property]);
// }


