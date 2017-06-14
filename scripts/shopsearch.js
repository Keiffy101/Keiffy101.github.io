var search;
var instock = ['apples','eggs','milk','cookies','cheese','bread','lettuce',
'carrot','broccoli','pizza','potato','crackers','onion','tofu','frozen dinner',
'cucumber'];

function print(message) {
	document.write ('<p>'+message+'</p>');

}

while (true) {
	search = prompt("search for a product I have. Type list to show all products type 'quit' to exit");
	search=search.toLowerCase();
	if (search ==='quit') {
		break;
	} else if (search === "list") { 
		alert(instock.join( " "));
	} else {
		if (instock.indexOf(search) > -1 ) {
			alert( 'yes we have '+search+' in stock');
		}
	}
	



}




