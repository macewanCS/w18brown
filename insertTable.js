var mysql = require('mysql'); // import required

// connects to database
var con = mysql.createConnection({ 
	  host: "localhost",
	  user: "browncar",
	  password: "brown",
	database: "caraway"
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
	  year_start DATE, weekly_requirements TIME";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("Table created");
		    });
		    
	// settings table ----------------------------------------------------
	// this is the query named sql		// ? is a string formatter
	// TO UPDATE: starting and end dates must be changed. Need to force this when 
	// initializing the system
	  var sql = "INSERT INTO settings (block1_start, block1_end, \
	  block2_start, block2_end, block3_start, block3_end, \
	  year_start, year_end, weekly_requirements) VALUES ?";
	  var values = [
		      ['08:45:00', '12:00:00', '11:50:00', '13:00:00', '12:50:00', '15:45:00', '2018-02-03', '02:30:00'],
	
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
        var sql = "SELECT * FROM settings";
        con.query(sql, function (err, result, fields) {
          if (err) throw err;
		
		console.log(result);
		return result
      });
      
      
	// 
	  var sql = "INSERT INTO settings (block1_start, block1_end, \
	  block2_start, block2_end, block3_start, block3_end, \
	  year_start, weekly_requirements) VALUES ?";
	  var values = [
		      ['08:45:00', '12:00:00', '11:50:00', '13:00:00', '12:50:00', '15:45:00', '2018-02-03', '02:30:00'],
	
			// executes the query to the database.
		    con.query(sql, [values], function (err, result) {
			        if (err) throw err;
			        console.log("Number of records inserted into settings: ");
			      });
      
      
      
      
    // earned_hours table ----------------------------------------------------
	// hours here is a float. this will be after times are compared using the TIME type.
	// date is for determining which week/month hours were earned. time is not needed.
	  var sql = "CREATE TABLE earned_hours (family_ID VARCHAR(255), room VARCHAR(255), \
	  hours FlOAT(7,1), date DATE";
	
		con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("earned_hours table created");
		    });
		    
	// cancelations table ----------------------------------------------------
	  var sql = "CREATE TABLE cancelations (family_ID VARCHAR(255), \
	  facilitator VARCHAR(255), date DATE, start_time TIME, end_time Time, \
	  room VARCHAR(255)";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("cancelation table created");
		    }); 
      
  	// reservations table ----------------------------------------------------
	  var sql = "CREATE TABLE reservations (family_ID VARCHAR(255), \
	  facilitator VARCHAR(255), date DATE, start_time TIME, end_time Time, \
	  room VARCHAR(255)";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("reservations table created");
		    });    
      
    	// holidays table ----------------------------------------------------
    	// this table is used by admin to schedule holidays. Holidays "may" result
    	// in hours not being required for those days. Holidays also prevent reservations
	  var sql = "CREATE TABLE holidays (family_ID VARCHAR(255), \
	  start_date DATE, end_date Date, room VARCHAR(255)";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("reservations table created");
		    });     
      
    
    
    
        	// leave table ----------------------------------------------------
        	// !!!! Dont see boolean type in the mySQL website. need to confirm this syntax
	  var sql = "CREATE TABLE leave (family_ID VARCHAR(255), \
	  start_date DATE, end_date Date, approved BOOLEAN";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("leave table created");
		    });  
    
   
           	// donations table ----------------------------------------------------
	  var sql = "CREATE TABLE donations (donating_ID VARCHAR(255), receiving_ID VARCHAR(255), \
	  hours FLOAT(7,1), date DATE";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("donations table created");
		    });  
   
   
     	// late table ----------------------------------------------------
	  var sql = "CREATE TABLE late (family_ID VARCHAR(255), \
	  facilitator VARCHAR(255), date DATE, hours FLOAT(7,1)";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("late table created");
		    }); 
      
      
       	// fieldtrip table ----------------------------------------------------
       	// credit is the number of hours earned for completion
       	//   ?? may want to add time or let is be in the message?
	  var sql = "CREATE TABLE fieldtrip (fieldtrip_ID VARCHAR(255), \
	  date DATE, credit FLOAT(7,1), room VARCHAR(255), facilitator_number INT, \
	  message VARCHAR(500)";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("fieldtrip table created");
		    });    
      
	// fieldtrip_reservations table ----------------------------------------------------    
	  var sql = "CREATE TABLE fieldtrip_reservations (fieldtrip_ID VARCHAR(255), \
	  family_ID VARCHAR(255), facilitator VARCHAR(255), date DATE, credit FLOAT(7,1), \
	  room VARCHAR(255)";
	
	con.query(sql, function (err, result) {
		      if (err) throw err;
		      console.log("fieldtrip_reservations table created");
		    });     
      
      
      // facilitator, student, family tables made by peter?
      
      
});
