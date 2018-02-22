
function validRoom(room){
	if (room.length < 10 || room.length >= 1){
		return true;
	} else {
		return false;
	}	
}

function roomExists(roomIn){
// connects to database
    var con = mysql.createConnection({ 
        host: "localhost",
        user: "root",
        password: "brown",
    database: "carraway"
    });

    con.connect(function(err) {
        if (err) throw err;
        var sql = "SELECT * FROM room where roomName = ?";

        con.query(sql, roomIn , function (err, result, fields) {
            if (err) throw err;
            if (result.length === 0){
                return true;
            }
            else {
                return false;
            }
         });
    });
}