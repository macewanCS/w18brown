
var mysql = require("mysql");
var request = require("request-promise");

/*
File Export Instructions:
    Add new database functions within the module.export loop.
    Add the function name followed by : infront of the function.
        ex. checkName:  <unaltered function here>
    Ensure functions are separated by a comma.
*/

module.exports = {

    /* checkName - this function checks whether a username/password combo is in the database and 
    * returns their account type if found.
    * 
    * returns: promise containing account type
    */
  //  this.checkName = 
    checkName: async function checkName(name, password) {
        return new Promise(function (fulfill, reject) {

            // creates a connection to the database saved in the con variable.
            var con = mysql.createConnection({
                host: "localhost",
                user: "browncar",
                password: "brown",
                database: "caraway"
            });

            // sql query code
            con.connect(function (err) {
                if (err) throw err;
                // ? is like %s in C. 
                var sql = "SELECT * FROM account WHERE accountID = ? and password = ?";
                // this array gives order. name is the first ?, password is the 2nd ?
                con.query(sql, [name, password], function (err, result, fields) {
                    if (err) throw err;
                    if (result.length === 0) {
                        fulfill("incorrect");

                        // -- test output -- PLO
                        console.log("checkName function. user not found in database.")

                    }
                    else {
                        fulfill(result[0].type); // this returns account type

                        // -- test output -- PLO
                        console.log("checkName function. User found with type: ", result[0].type)
                    }
                });
            });
        })
    }



}; // end of function exports.