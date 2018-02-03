var mysql = require('mysql'); // import required

// connects to database
var con = mysql.createConnection({ 
	  host: "localhost",
	  user: "root",
	  password: "brown",
	database: "carraway"
});



con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");
	
	  // this is the query named sql		// ? is a string formatter
	  var sql = "INSERT INTO family (familyID, password, type, bonusHours, bonusComment, phone, email) VALUES ?";
	  var values = [
		      ['Peter001', 'peterpw', "admin", 5, "he is good", "(780)123-4567", "email@email.com"],
		      ['Sarah001', 'sarahpw', "facilitator", 0, "N/A", "780)555-9874", "her@email.com"]];
	
			// executes the query to the database.
		    con.query(sql, [values], function (err, result) {
			        if (err) throw err;
			        console.log("Number of records inserted: " + result.affectedRows);
			      });
	
	
	// -------------------- Settings table created and filled with defaults -------------------
	// https://dev.mysql.com/doc/refman/5.7/en/time.html
	// TIME variable type:
	/* MySQL retrieves and displays TIME values in 'HH:MM:SS' format (or 'HHH:MM:SS' 
	format for large hours values). TIME values may range from '-838:59:59' to 
	'838:59:59'. The hours part may be so large because the TIME type can be used not 
	only to represent a time of day (which must be less than 24 hours), but also elapsed 
	time or a time interval between two events (which may be much greater than 24 hours, 
	or even negative).
	*/
	
	// create settings table. Note: weekly requirements could be an int or time.
	// Note INTEGER is the same as INT
	  var sql = "CREATE TABLE settings (block1_start TIME, block1_end TIME, \
	  block2_start TIME, block2_end TIME, block3_start TIME, block3_end TIME, \
	  year_start DATE, year_end DATE, weekly_requirements TIME";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("Table created");
		    });
		    
		    
	// this is the query named sql		// ? is a string formatter
	// TO UPDATE: starting and end dates must be changed. Need to force this when 
	// initializing the system
	  var sql = "INSERT INTO settings (block1_start, block1_end, \
	  block2_start, block2_end, block3_start, block3_end, \
	  year_start, year_end, weekly_requirements) VALUES ?";
	  var values = [
		      ['08:45:00', '12:00:00', '11:50:00', '13:00:00', '12:50:00', '15:45:00', '2018-02-03', '2018-08-03', '02:30:00'],
	
			// executes the query to the database.
		    con.query(sql, [values], function (err, result) {
			        if (err) throw err;
			        console.log("Number of records inserted into settings: " + result.affectedRows);
			      });
			      
			      
	// dont need this connect, but it differes from above. ??
	// NOT sure this works.
	con.connect(function(err) {
        if (err) throw err;
        // ? is like %s in C. 
        var sql = "SELECT * FROM select";
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
		
		console.log(result);
		return result
      });
});
