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
	  var sql = "CREATE TABLE family (familyID VARCHAR(255), password VARCHAR(255), type VARCHAR(255), bonusHours INT, bonusComment VARCHAR(255), phone VARCHAR(20), email VARCHAR(255))";
	  con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("Table created");
		    });
});
