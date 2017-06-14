var message;
var student;
var search;

var students = [
	{Name: 'Keith',Track: 'CSS',Achievements: 5,Points: 250 },
	{Name: 'Rick',Track: 'JS',Achievements: 4,Points: 200 },
	{Name: 'Rob',Track: 'HTML',Achievements: 3,Points: 150,},
	{Name: 'Joe',Track: 'CSS',Achievements: 4,Points: 200,},
	{Name: 'Mark',Track: 'HTML',Achievements: 10,Points: 500,},
];

function getstudentreport(student) {
	var report = "<h2> Student: " + student.Name + "</h2>";
	report+= "<p> Track: " + student.Track + "</p>";
	report+= "<p> Achievements: " + student.Achievements + "</p>";
	report+= "<p> Points: " + student.Points + "</p>";
	return report;
}

function print(message) {
	var outputdiv =document.getElementById('output');
	outputdiv.innerHTML = message;
}





while (true) {
search = prompt("Type in the name of the student you are looking for or quit choose cancel to exit");
		
	if (search === null || search.toLowerCase() === "quit" ) {
		break;
	}
	
	for (i=0; i< students.length; i+=1 ) {
	student = students[i];
		if (student.Name === search) {
		message = getstudentreport(student);
		print (message);
	}


}


}



// print(message);
