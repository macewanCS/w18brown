var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "brown",
    database: "carraway"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM family WHERE familyID = ? and password = ?";
  var name = "Peter001";
  var pw = "petekrpw";
  con.query(sql, [name, pw], function (err, result, fields) {
    if (err) throw err;
    if (result.length === 0){
        console.log("Nothing here fucker!\n");
    }
    else{
        console.log(result[0].type);
    }
});
});
