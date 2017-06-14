// create an area on the webpage that has Player information in it, like username and wallet.

// Create a fallback main menu that is able to display instructions for the webpage and how to use it
function print(message) {
	var outputdiv =document.getElementById('output');
	outputdiv.innerHTML = message; }


// Menus and fallback variables 
var menuresponse;
var instructions;
var intro;
var lastchance;
var coins = 0;

// Maze Game Variables
var mazelocation = "nothing";


while(true) {
intro =	prompt("Hi, Welcome to Keiffys Game page. Please understand this page is still under development so theres not much to it. As I continue to develop the page games will be added. Type 'Menu' to enter the Main Menu, if you dont want to participate in the JavaScript options on this page then you mayaswell just leave now as its all about the JavaScript basics im learning and what can be done with it at a simple level.");

if ( intro === null) {
	intro = "menu"
	lastchance = prompt( "CONFIRM YOU WANT TO LEAVE BY CLICKING ON CANCEL THIS WILL CAUSE ALL USER INFORMATION TO BE LOST AS THIS PAGE IS NOT SETUP TO SAVE INFORMATION, OTHERWISE TYPE MENU OR CLICK OK TO RETURN TO THE MAIN MENU") 

	if (lastchance === null) {
		break;
		
	}
	}

	if (intro.toLowerCase() === "menu") {



// Menu prompt
while(true) {

menuresponse = prompt("MENU PROMPT ----- if unsure type 'Instructions'");

	if (menuresponse === null) {
		break;
	}  

// This is where my menu starts to branch off into differant sections
	

	if (menuresponse.toLowerCase() === "instructions") {
		alert("when you click the 'OK' button you will get basic instuctions on the web page, good luck, enjoy your gaming experiance at greatzstuff.com")
		var instructions = "<p> Hi again, as you can see I have moved my messages from the little alert window that keeps poping up on your screen to the actual webpage. Im still learning how to manipulate the webpage so whille learning i will still be sending you alot of messages through the little alert window, sorry I know its kinda a pain having it pop up constantly but thats how this page rolls for now.</p><p> All these games require you to read the prompts and then input a value of sorts, each game allows you to earn coins that you will be able to spend on a number of things, for now I hope to just get my basic game up called 'Maze' thats right Im taking you 40 years into the past when these types of computer games where AMAZING!!!<p>Type the number or name of a game you would like to play into the Menu prompt</p><ol><li>Maze</li><li>Comming Soon</li><li>Comming Soon</li><li>Comming Soon</li><li>Comming Soon</li><li>Comming Soon</li><li>Comming Soon</li><li>Comming Soon</li><li>Comming Soon</li><li>Comming Soon</li><li>Comming Soon</li>";

		print(instructions); }
		
		// MAZE
					if (menuresponse.toLowerCase() === "maze" || menuresponse == 1) {

					while(true) {

					alert("Welcome To MAZE!!! This game will blow your mind");

					mazelocation = prompt("You just woke up in what looks like a cell.. a PRISON CELL!!! you need to escape!!! MOVE soon, you notice you have a compass with you and you see there is a door to the NORTH What do you do?");
					if (mazelocation === null) {
						alert("if ya cancell you go back to the Menu")
						break;
					}
										
					if (mazelocation.toLowerCase() === "move north" || mazelocation.toLowerCase() === "movenorth") {
						
						alert("You open the door to the north and walk through wondering whats next");

						alert("Thats it for this maze right now, I'm Going to Give you 100 Coins cause you are elite!!!");
						coins =+ 100;

						break;
					}
					








					else {
						alert("no you fail learn how to play!!! are you dumb or what... Hey Im the programmer and I can finish this");
					}
					//Below finishes First Move North
					}
					// Below finnishes IF Maze response
					}







}
}
}