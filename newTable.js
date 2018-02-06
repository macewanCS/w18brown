var mysql = require('mysql'); 

// only need this once per program. not once per file!
var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "brown",
	database: "carraway"
});


con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	
	// create table.
	  var sql = "CREATE TABLE family (familyID VARCHAR(255), password VARCHAR(255), type VARCHAR(255), bonusHours INT, bonusComment VARCHAR(255), phone VARCHAR(20), email VARCHAR(255))";
	
	// query here means sending to the database even though this is an create table.
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("Table created");
		    });
});
