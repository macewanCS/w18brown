var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  port: 3306,
  database: "395Testing"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM UserNames WHERE name = ? and password = ?";
  var name = "Sarah Hunt";
  var pw = "sarahPW";
  con.query(sql, [name, pw], function (err, result, fields) {
    if (err) throw err;
    if (result.length === 0){
        console.log("Nothing here fucker!\n");
    }
    else{
        console.log(result[0].password);
    }
});
});
