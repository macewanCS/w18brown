// Please add any requested function names, parameters, and return values.


// may want to add other restrictions. However, length will be limited by the database so must be set sooner than later.
function validPassword(p){
	if (p.length <5 || p.length > 15{
		return false;
	} else {
		return true;
	}	
}



function isEmptyString(inString){
	if (inString == "" || inString == null) {
		return true;
	} else {
		return false;
	}
}



// -- Test isEmptyString
console.log(isEmptyString(""));
console.log(isEmptyString("---"));
x = null;
console.log(isEmptyString(x));
// -- Test validPassword
console.log(validPassword(""));
console.log(validPassword("fishy"));
console.log(validPassword("theskyisthelimit"));
