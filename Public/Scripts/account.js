var facilitatorCount = 1;
var limit = 10;
function addFacilitator(divName){
	if (facilitatorCount == limit)  {
    	alert("You have reached the limit of adding " + counter + " facilitator");
    }
    else {
    	var newdiv = document.createElement('div');
    	newdiv.innerHTML = "Facilitator " + (facilitatorCount + 1) + " Name:" + " <input type='text' name='facilitator'>";
    	document.getElementById(divName).appendChild(newdiv);
    	counter++;
    }
}
var studentCount = 1;
var studentLimit = 10;
function addStudent(divName){
	if (studentCount == limit)  {
          alert("You have reached the limit of adding " + studentCount + " students");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Student " + (studentCount + 1) + " Name:" + " <input type='text' name='studentName'>" + " Room: " + "<input type='text' name='room'>" + " Grade: " + "<input type='text' name='grade'>"
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}