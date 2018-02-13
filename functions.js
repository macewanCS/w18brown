// Please add any requested function names, parameters, and return values.


// may want to add other restrictions. However, length will be limited by the database so must be set sooner than later.
async function validPassword(p){
	return new Promise(function(fulfill, reject){
		if (p.length <5 || p.length > 15){
			fulfill(false);
		} else {
			fulfill(true);
		}	
	})
}



async function isEmptyString(inString){
	return new Promise(function(fulfill, reject){
		if (inString == "" || inString == null) {
			fulfill(true);
		} else {
			fulfill(false);
		}
	})
}

async function getSettings(){
	return new Promise(function(fulfill, reject){
        var output = [];
		var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "brown",
              database: "carraway"
		});
		

		con.connect(function(err) {
            if (err) throw err;
            // ? is like %s in C. 
            var sql = "SELECT * FROM settings";
                            // this array gives order. name is the first ?, password is the 2nd ?
            con.query(sql, function (err, result, fields) {
              if (err) throw err;
              if (result.length === 0){
                  //this wont work, needs to be different.
                  fulfill("incorrect");
              }
              else {
                  output.push(result[0].block1_start, result[0].block1_end, result[0].block2_start, result[0].block2_end, result[0].block3_start, result[0].block3_end, result[0].weekly_requirements);
              }
          });

          sql = "SELECT DATE_FORMAT(year_start, '%Y/%m/%d') FROM settings"

          con.query(sql, function (err, result, fields) {
                if (err) throw err;
                if (result.length === 0){
                    //this wont work, needs to be different.
                    fulfill("incorrect");
                }
                else {
                  output.push(output[output.length - 1]);
                  output[output.length - 2] = result[0]["DATE_FORMAT(year_start, '%Y/%m/%d')"];
                  fulfill(output);
                }
          });
        });
	});
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
