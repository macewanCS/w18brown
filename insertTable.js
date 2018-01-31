var mysql = require('mysql');

var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "brown",
	database: "carraway"
});

con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	  var sql = "INSERT INTO family (familyID, password, type, bonusHours, bonusComment, phone, email) VALUES ?";
	  var values = [
		      ['Peter001', 'peterpw', "admin", 5, "he is good", "(780)123-4567", "email@email.com"],
		      ['Sarah001', 'sarahpw', "facilitator", 0, "N/A", "780)555-9874", "her@email.com"]];
		    con.query(sql, [values], function (err, result) {
			        if (err) throw err;
			        console.log("Number of records inserted: " + result.affectedRows);
			      });
});
