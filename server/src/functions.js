/** 
 * This is how functions are exported from a js file.
 * 
*/

module.exports = {
	roomDict,
	checkName,
	connect,
	getSettings,
	setSettings,
	addEditRoom,
	finalRoomUpdate,
	getFamilyList,
	createEmployeeCheck,
	createEmployeeConfirm,
	getTypes,
	createJSON
}







var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "browncar",
	password: "brown",
	  database: "caraway"
});

async function connect(){
	return new Promise(function(fulfill, reject){
		con.connect(function(err) {
			if (err) throw err;
		})
		fulfill("connected");
	})
}

/** 
 * returns dictionary of rooms contained in database.
 * 
 * */	
async function roomDict(){
	return new Promise(function(fulfill, reject){
		var output = {};
		var sql = "SELECT * FROM room";
		// this array gives order. name is the first ?, password is the 2nd ?
		con.query(sql, function (err, result, fields) {
			if (err) throw err;
			//iterate through results
			result.forEach(element => {
				output[element.roomID] = element.roomName;
			});
			fulfill(output);
		});
    });
}

//this function checks whether a username/password combo is in the database.
//Return: Promise containing account type.
async function checkName(name, password){
    return new Promise(function (fulfill, reject){
		// ? is like %s in C. 
		var sql = "SELECT * FROM account WHERE accountID = ? and password = ?";
						// this array gives order. name is the first ?, password is the 2nd ?
		con.query(sql, [name, password], function (err, result, fields) {
			if (err) throw err;
			if (result.length === 0){
				//this wont work, needs to be different.
				fulfill("incorrect");

				console.log("checkName function. user not found in database.")
			}
			else {
				fulfill(result[0].type);

				console.log("checkName function. User found with type: ", result[0].type)
			}
		
		});
    });
}

/**
 * 
 * @param {*} username provided username
 * @param {*} type provided type
 */
async function createEmployeeCheck(username, type){
	return new Promise(function(fulfill, reject){
		//confirm length
		if (username.length === 0 || username.length > 254){
			fulfill("tooLongOrEmpty");
		}
		var sql = "SELECT * from account where accountID = ?";

		//first lets make sure the username doesnt exist already
		con.query(sql, username, function (err, result, fields) {
			if (err) throw err;		
			if (result.length === 0){
				fulfill("brown");
			}
			else{
				fulfill("alreadyUsed");
			}
		});
	})
}

/**
 * 
 * @param {*} username username to insert
 * @param {*} type type of account
 */
async function createEmployeeConfirm(username, type){
	return new Promise(function(fulfill, reject){
		var sql = "INSERT into account (accountID, type) VALUES (?, ?);"

		con.query(sql, [username, type], function (err, result, fields) {
			if (err){
				fulfill(false);
				throw err;
			} 
			fulfill(true);		
		});
	})
}


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
}

/**
 * 
 * @param {*} input pass in the format as follows: var input = ["08:45", "12:00", "11:50", "13:00", "12:50", "15:45", "2018/09/05", "5:00"];
 * Currently no return value but we will have error checking on this down the road.
 */
async function setSettings(input){
    return new Promise(function(fulfill, reject){
		var date;
		// ? is like %s in C. 
		var sql = "UPDATE settings SET block1_start = ?, block1_end = ?, block2_start = ?, block2_end = ?, block3_start = ?, block3_end = ?, year_start = ?, weekly_requirements = ?";
						// this array gives order. name is the first ?, password is the 2nd ?
		con.query(sql, (input), function (err, result, fields) {
			if (err) throw err;
			console.log("settings updated");
			fulfill(true);
		});
	});
}

/**
 * 
 * @param {*} input Input to check if input is too long or not.
 */
async function below255(input){
	return new Promise(function(fulfill, reject){
		if (input.length >= 253){
			fulfill(false);
		}
		fulfill(true);
	})
}

async function getTypes(){
	return new Promise(function(fulfill, reject){
		var output = ["board", "teacher", "admin", "family"];

		fulfill(output);
	})
}

async function createJSON(){
	return new Promise(function(fulfill, reject){
		var json = {};
		var list = [];
		list.push("help");
		list.push("me");

		json.test = list;

		var output = JSON.stringify(json);

		console.log("within the function json is", output);
		fulfill(output);
	})
}

/**
 * 
 * @param {*} RoomsIn Pass me a dictionary with the rooms.
 */
async function addEditRoom(RoomsIn){
	//first get our existing rooms
	var currentRooms = await roomDict();
	return new Promise(function(fulfill, reject){
		var newRooms = {};
		var changedRooms = {};
		var deletedRooms = {};
		var problemRooms = [];
		//now lets see if any rooms are new/different
		for (var key in RoomsIn){
			//if we have a totally new room
			if (!(key in currentRooms)){
				newRooms[key] = RoomsIn[key];
				continue;
			}
			//if we have a new room name
			if (key in currentRooms && currentRooms[key] != RoomsIn[key]){
				changedRooms[key] = RoomsIn[key];
			}
		}
		//if we have deleted a room
		for (var key in currentRooms){
			if (!(key in RoomsIn)){
				deletedRooms[key] = currentRooms[key];
			}
		}

		//pull students to see if any deleted rooms shouldnt be deleted
		sql = "SELECT * FROM student";

		con.query(sql, async function (err, result, fields) {
			if (err) throw err;
				for (let element in result){
					//this takes care of deleted rooms
					if (Object.values(deletedRooms).indexOf(result[element].room) > -1){
						let bad = await getKey(deletedRooms, result[element].room);
						//only do unique keys
						if (problemRooms.indexOf(bad)){
							problemRooms.push(bad);
						}
					}
				}
			if (problemRooms.length > 0){
				fulfill(problemRooms);
			}
			else {
				fulfill(true);
			}
		})
	})
}

/**
 * 
 * @param {*} RoomsIn Takes a confirmed OK room Dictionary
 */
async function finalRoomUpdate(RoomsIn){
	let currentRooms = await roomDict();
	return new Promise(function(fulfill, reject){
		//iterate through incoming rooms
		for (var key in RoomsIn){
			//we found a new value so update it in the database
			if (currentRooms[key] != RoomsIn[key]){
				var oldName = currentRooms[key];
				var newName = RoomsIn[key];
				var sql = "UPDATE room SET roomName = ? WHERE roomName = ?";

				con.query(sql, [newName, oldName], function (err, result, fields) {
					if (err) throw err;				
				});
			}
			//we have a new entry
			if (!(key in currentRooms)){
				var sql = "INSERT into room (roomID, roomName) VALUES (?, ?)";

				con.query(sql, [key, RoomsIn[key]], function (err, result, fields) {
					if (err) throw err;				
				});
			}
		}
		//finished adding and editting, now to delete
		for (var key in currentRooms){
			if (!(key in RoomsIn)){
				var sql = "DELETE FROM room WHERE roomID = ?";

				con.query(sql, key, function (err, result, fields) {
					if (err) throw err;				
				});
			}
		}
		fulfill(true);
	})
}

/**
 * Returns the family ID of all families in the system.
 */
async function getFamilyList(){
	return new Promise(function(fulfill, reject){
		sql = "SELECT * FROM account";
		var output = [];
		con.query(sql, async function (err, result, fields) {
			if (err) throw err;
			result.forEach(element =>{
				output.push(element.accountID);
			})
			fulfill(output);
		})
	})
}

async function getKey(dictionary, value){
	return new Promise(function(fulfill, reject){
		for (var key in dictionary){
			if (dictionary[key] === value){
					fulfill(key);
			}
		}
	})
}

/*
async for loop
        for (let element in test) {
            let bad = await functions.getKey(testIn, "mauve");
            keys.push(bad);
        }


*/


// -- Test isEmptyString
console.log(isEmptyString(""));
console.log(isEmptyString("---"));
x = null;
console.log(isEmptyString(x));
// -- Test validPassword
console.log(validPassword(""));
console.log(validPassword("fishy"));
console.log(validPassword("theskyisthelimit"));
