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
	getRoomReservationByWeek,
	deleteEmployee,
	getEmployeeList,
	createReservation,
	deleteReservation,
	checkCreateFamily,
	confirmCreateFamily,
	getGrades
}







var mysql = require('mysql');
var dateFormat = require('dateformat');

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
 * returns dictionary of rooms contained in database. No parameters
 * Example output:
 * { '0': 'red',
  '1': 'green',
  '2': 'blue',
  '3': 'mauve',
  '4': 'purple' }
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

/**
 * this function checks whether a username/password combo is in the database.
 * Return: Promise containing account type if successful.
 * If unsuccessful it passes the string 'incorrect'
 *
 * @param {*} name username to be checked
 * @param {*} password password input by user
 */
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
 * If successful, returns true. If there is an SQL error it passes false.
 * @param {*} username username to be created
 * @param {*} type type of the account
 * @param {*} password password of the new account
 */
async function createEmployeeConfirm(username, type, password){
	return new Promise(function(fulfill, reject){
		var sql = "INSERT into account (accountID, type, password) VALUES (?, ?, ?);"

		con.query(sql, [username, type, password], function (err, result, fields) {
			if (err){
				fulfill(false);
				throw err;
			} 
			fulfill(true);		
		});
	})
}

/**
 * This function returns an object containing all room bookings for a room, for a given week.
 * @param {*} roomName the roomName desired
 * @param {*} startDate the start date desired
 */
async function getRoomReservationByWeek(roomName, startDate){
	var monday = new Date(startDate);

	let blocks = await getBlocks();

	var json = {};

	var days = [];
	var daysOut = {};
	daysOut.room = roomName;
	daysOut.reservations = [];
	var blocksOut = [];

	days.push(monday);

	for (let i = 1; i < 5; i++){
		let day = await addDays(monday, i);
		days.push(day);
	}

	return new Promise(function(fulfill, reject){

		var sql = "SELECT * from reservations WHERE date >= ? AND date <= ? AND room = ?";

		con.query(sql, [days[0], days[4], roomName], async function (err, result, fields) {
			if (err){
				fulfill(false);
				throw err;
			} 
			//go through each day
			days.forEach(day =>{
				var today = {};

				today.date = dateFormat(day, "yyyy/mm/dd");
				today.blocks = [];
				today.fieldTrip = false;
				//go through each block
				blocks.forEach(block =>{
					var blockOut = {};
					blockOut.startTime = block.startTime;
					blockOut.endTime = block.endTime;
					blockOut.slot = [];
					//go through each reservation during this week
					result.forEach(reservation =>{
						if (reservation.start_time >= block.startTime && reservation.end_time <= block.endTime && reservation.date.getTime() === day.getTime()){
							var person = {};
							person.name = reservation.family_ID;
							if (reservation.start_time === block.startTime && reservation.end_time === block.endTime){
								person.percentage = 1;
							}
							else{
								//need to parse strings into ints
								var startSplit = reservation.start_time.split(":");
								var stringcat = startSplit[0] + startSplit[1];
								var startTime = parseInt(stringcat);

								startSplit = reservation.end_time.split(":");
								stringcat = startSplit[0] + startSplit[1];
								var endTime = parseInt(stringcat);

								startSplit = block.endTime.split(":");
								stringcat = startSplit[0] + startSplit[1];
								var blockEndTime = parseInt(stringcat);

								startSplit = block.startTime.split(":");
								stringcat = startSplit[0] + startSplit[1];
								var blockStartTime = parseInt(stringcat);

								person.percentage = (endTime - startTime) / (blockEndTime - blockStartTime);
							}
							
							person.startTime = reservation.start_time;
							person.endTime = reservation.end_time;
							person.reservationID = reservation.reservation_ID;

							if (person.percentage === 1){
								var outputList = [];
								outputList.push(person);
								blockOut.slot.push(outputList);
							}
							else{
								//if this was the first slot
								if (blockOut.slot.length === 0){
									var outputList = [];
									outputList.push(person);
									blockOut.slot.push(outputList);
								}

								//if we are creating a new slot because the current last slot is full
								else if (blockOut.slot[blockOut.slot.length -1][0].percentage === 1){
									var outputList = [];
									outputList.push(person);
									blockOut.slot.push(outputList);
								}

								//or we need to add to an existing slot
								else{
									blockOut.slot[blockOut.slot.length -1].push(person);
								}
								
							}

						}
					})
					//fill with free person for Brucetopher
					i = 0;
					currentPercent = 0;
					while (currentPercent < 3){
						//console.log("slot i is", blockOut.slot[i], i);
						if (blockOut.slot[i] === undefined){
							outputList = [];
							//free person for Brucetopher
							var free = {};
							free.name = "free";
							free.percentage = 1;
							free.startTime = blockOut.startTime;
							free.endTime = blockOut.endTime;
							free.reservationID = 0;
							outputList.push(free);
							blockOut.slot.push(outputList);
							currentPercent++;
						}
						else{
							if (blockOut.slot[i].percentage != 1){
								if (blockOut.slot[i].name != "free"){
									var remaining = 1 - blockOut.slot[i].percentage;
									if (remaining > 0.05){
										var newFree = {};
										newFree.percentage = remaining;
										newFree.name = "free";
										newFree.startTime = blockOut.startTime;
										newFree.endTime = blockOut.endTime;
										newFree.reservationID = 0;
										blockOut.slot.push(newFree);
										currentPercent++;
									}
								}
								else{

								}
							}
							else{
								currentPercent++;
							}
						}
						i++;
					}
					today.blocks.push(blockOut);
				})
				daysOut.reservations.push(today);
			})
			var output = JSON.stringify(daysOut, null, 2);
			fulfill(output);
		});
	})
}
/**
 * Call this function to insert a reservation into the system. The return value is false for SQL error or the reservation ID if successful.
 * @param {*} reservationJSON a JSON object. ***ALWAYS use property names as follows. Order doesnt matter but naming does*****!!!!
 * familyID, facilitator, date, startTime, endTime, room
 */
async function createReservation(reservationJSON){
	return new Promise(function(fulfill, reject){

		var reservation = JSON.parse(reservationJSON);

		var sql = "INSERT INTO reservations (family_ID, facilitator, date, start_time, end_time, room) VALUES (?, ?, ?, ?, ?, ?)";

		con.query(sql, [reservation.familyID, reservation.facilitator, reservation.date, reservation.startTime, reservation.endTime, reservation.room],async function (err, result, fields) {
			if (err){
				reject(false);
				throw err;
			} 
			else{
				fulfill(result["insertId"]);
			}
		});
	})
}

/**
 * Call this function to create a family. Returns temp password (brown) if successful. Otherwise will pass back an object containing key that contains error with value being the error.
 * @param {*} FamilyIn JSON object passed in.*****Please follow the following naming conventions*******
 * accountID, bonusHours, bonusComment, phone, email, historicHours, facilitators (list), students (list)
 * 
 * For each facilitator object, pass me their name.
 * 
 * For every student object, pass me their room, name and grade.
 * 
 * For facilitators and students, please use the property names above
 * If the account name is already in use, there will be a single return string of 'alreadyUsed'. If the username was blank, there will be a single return string of "emptyUsername"
 * 
 * I propose you have the user only select room and grade via a dropdown menu and therefore no error checking is required.
 * 
 * You can get the rooms using roomDict function and grades via getGrades.
 */
async function checkCreateFamily(familyIn){
	//first parse the JSON
	var family = JSON.parse(familyIn);

	let exists = await alreadyExists(family.accountID);

	var output = {};
	errors = 0;

	output.facilitators = [];
	output.students = [];

	for (var key in family){
		//these are just single strings
		if (key != "facilitators" && key != "students" && key != "accountID"){
			if (family[key].length === 0 || family[key].length > 254){
				output[key] = "tooLongOrEmpty";
				errors++;
			}
		}
		//now to handle facilitator checks
		if (key === "facilitators"){
			family[key].forEach(fac =>{
				if (fac.name.length === 0 || fac.name.length > 254){
					var person = {};
					person.name = fac.name;
					person.error = "tooLongOrEmpty";
					output.facilitators.push(person);
					errors++;
				}
			})
		}
		//now for student check
		if (key === "students"){
			family[key].forEach(stu =>{
				if (stu.name.length === 0 || stu.name.length > 254){
					var person = {};
					person.name = stu.name;
					person.error = "tooLongOrEmpty";
					output.students.push(person);
					errors++;
				}
			})
		}
	}

	return new Promise(function(fulfill, reject){
		//first 3 if statements return errors according to spec
		if (family.accountID.length === 0){
			fulfill("emptyUsername");
		}
		if (exists === true){
			fulfill("alreadyUsed");
		}

		if (errors > 0){
			var json = JSON.stringify(output);
			fulfill(json);
		}

		//return the current default password
		fulfill("brown");

		
	})
}

/**
 * Use this function once all errors are removed from the checkCreateFamily function.
 * @param {} familyIn JSON object with the identical requirements as checkCreateFamily with one exception. This time also have a password property.
 * 
 * Returns true if successful
 */
async function confirmCreateFamily(familyIn){
	var family = JSON.parse(familyIn);
	return new Promise(function(fulfill, reject){

		var sql = "INSERT into account (accountID, password, type, bonusHours, bonusComment, phone, email, historic) VALUES (?,?,?,?,?,?,?,?)";

		con.query(sql, [family.accountID, family.password, "family", family.bonusHours, family.bonusComment, family.phone, family.email, family.historic], async function (err, result, fields) {
			if (err){
				reject(false);
				throw err;
			} 
		});

		//insert every student
		family.students.forEach(stu =>{
			sql = "INSERT into student (familyID, room, studentName, grade) VALUES (?,?,?,?)";

			con.query(sql, [family.accountID, stu.room, stu.name, stu.grade], async function (err, result, fields) {
				if (err){
					reject(false);
					throw err;
				} 
			});
		})

		//insert every facilitator
		family.facilitators.forEach(fac =>{
			sql = "INSERT into facilitator (familyID, name) VALUES (?,?)";

			con.query(sql, [family.accountID, fac.name], async function (err, result, fields) {
				if (err){
					reject(false);
					throw err;
				} 
			});
		})

		fulfill(true);

	})
}

/**
 * This function returns a list of all grades in order of youngest students to oldest.
 * Example:
 * [ 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ]
 */
async function getGrades(){
	return new Promise(function(fulfill, reject){
		output = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

		fulfill(output);
	})
}

/**
 * Internal helper function for me. Don't touch!
 * @param {*} username 
 */
async function alreadyExists(username){
	return new Promise(function(fulfill, reject){
		var sql = "SELECT * from account WHERE accountID = ?";

		con.query(sql, username, async function (err, result, fields) {
			if (err){
				reject(false);
				throw err;
			} 
			if (result.length > 0){
				fulfill(true);
			}
			else{
				fulfill(false);
			}
		});
	})
}

/**
 * Use this function to delete a reservation. Pass a reservation id (int) value.
 * Returns true if it was successfully deleted or false if there was an SQL error.
 * @param {*} reservationID 
 */
async function deleteReservation(reservationID){
	return new Promise(function(fulfill, reject){
		var sql = "DELETE FROM reservations WHERE reservation_ID = ?";

		con.query(sql, reservationID ,async function (err, result, fields) {
			if (err){
				reject(false);
				throw err;
			} 
			else{
				fulfill(true);
			}
		});
	})
}

/**
 * Internal helper function for me. Don't touch!
 */
async function getBlocks(){

	let settings = await getSettings();

	return new Promise(function(fulfill, reject){
		var blocks = [];

		for (i = 0; i < settings.length - 2; i++){
			if (i % 2 == 0){
				var block = {};
				block.startTime = settings[i];
			}
			else{
				block.endTime = settings[i];
				blocks.push(block);
			}
		}
		fulfill(blocks);
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

/**
 * Returns all employees in the database. Currently sorted by type, we could alter this though to be type or accountID.
 * JSON object returned and formatted in a pretty print format with spacing of 2.
 */
async function getEmployeeList(){
	return new Promise(function(fulfill, reject){
		var output = {};
		output.name = "EmployeeList";
		output.values = [];
		var sql = "SELECT * FROM account WHERE type <> ('family') ORDER BY type";

		con.query(sql, async function (err, result, fields) {
			if (err) throw err;
			result.forEach(element=>{
				var field = {};
				field.name = element.accountID;
				field.type = element.type;
				output.values.push(field);
			})
			var json = JSON.stringify(output, null, 2);
			fulfill(json);
		});
	})
}

/**
 * Deletes an employee account from the system. No error checking. Returns true if account was deleted and false if there was an SQL error.
 * @param {*} username username to be deleted.
 */
async function deleteEmployee(username){
	return new Promise(function(fulfill, reject){
		var sql = "DELETE FROM account WHERE accountID = ?";

		con.query(sql, username, async function (err, result, fields) {
			if (err){
				throw err;
				fulfill(false);
			} 
			fulfill(true);
		});
	})
}

/**
 * Returns the current settings in the database as a list of strings in the same order every time.
 * Example:
 * [ '08:45:00',
  '12:00:00',
  '11:50:00',
  '13:00:00',
  '12:50:00',
  '15:45:00',
  '2018/09/05',
  '05:00:00' ]
  This is start/end time of block1, block2 and block 3, respectively. Followed by year start date and the weekly requirements.
 */
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
 * This is start/end time of block1, block2 and block 3, respectively. Followed by year start date and the weekly requirements.
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

/**
 * Returns all account types in the database as a list of strings.
 * Example:
 * ["board", "teacher", "admin", "family"]
 */
async function getTypes(){
	return new Promise(function(fulfill, reject){
		var output = ["board", "teacher", "admin", "family"];

		fulfill(output);
	})
}

/**
 * This function is called to add or edit rooms.
 * @param {*} RoomsIn Pass me a dictionary with the rooms.
 * If there are no problems, the return value is true.
 * If there are problems with any of the rooms selected for deletion or editting, you will receive a dictionary of rooms back that have the problem.
 * Deleted rooms cannot have students in them, thats their only error possible.
 * Editted room names can only have an error of that name already being in use.
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
 * After room edit/delete is checked, call this function to actually edit the DB.
 * @param {*} RoomsIn Takes a confirmed OK room Dictionary.
 * Return value is true if suycessful.
 * False if there was an SQL error.
 * 
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

				sql = "UPDATE student SET room = ? WHERE room = ?";

				con.query(sql, [newName, oldName], function (err, result, fields) {
					if (err) throw err;				
				});

				sql = "UPDATE fieldtrip_reservations SET room = ? WHERE room = ?";

				con.query(sql, [newName, oldName], function (err, result, fields) {
					if (err) throw err;				
				});

				sql = "UPDATE fieldtrip SET room = ? WHERE room = ?";

				con.query(sql, [newName, oldName], function (err, result, fields) {
					if (err) throw err;				
				});

				sql = "UPDATE holidays SET room = ? WHERE room = ?";

				con.query(sql, [newName, oldName], function (err, result, fields) {
					if (err) throw err;				
				});

				sql = "UPDATE cancelations SET room = ? WHERE room = ?";

				con.query(sql, [newName, oldName], function (err, result, fields) {
					if (err) throw err;				
				});

				sql = "UPDATE earned_hours SET room = ? WHERE room = ?";

				con.query(sql, [newName, oldName], function (err, result, fields) {
					if (err) throw err;				
				});

				sql = "UPDATE reservations SET room = ? WHERE room = ?";

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
					if (err){
						fulfill(false);
						throw err;
					} 				
				});
			}
		}
		fulfill(true);
	})
}

/**
 * Returns the family ID of all families in the system.
 * The return value is a list of IDs.
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

/**
 * Internal function for me. Dont touch!
 * @param {*} dictionary 
 * @param {*} value 
 */
async function getKey(dictionary, value){
	return new Promise(function(fulfill, reject){
		for (var key in dictionary){
			if (dictionary[key] === value){
					fulfill(key);
			}
		}
	})
}

/**
 * Helper Function
 * @param {*} date 
 * @param {*} days 
 */
async function addDays(date, days) {
    return new Promise(function(fulfill, reject){
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        fulfill(result);
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
