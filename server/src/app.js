// Some import code was from the following tutorial.
// https://www.youtube.com/watch?v=Fa4cRMaTDUI

console.log('The Caraway Server is running.')

const express = require('express')
const bodyParser = require('body-parser') // process json data easily.
const cors = require('cors') // allows any client around the world to hit the server. security risk.
const app = express() // builds an express server
const functions = require('./functions');
var request = require("request-promise");
const enviro = require('./config/globals'); // Contains global environment variables
// code to import functions file
var authFunctions = require('./authFunctions')


/*
    Note: to use authFunctions, use dot notation.
            ex. authFunctions.checkName(...)
*/
app.use(bodyParser.json())
app.use(cors())


//---------------------------------
// Begin JWT section
const jwt = require("jsonwebtoken");

/*
    Signs a JSON Web Token which expires in an hour.
*/
function jwtSignObject(user) {
    const timeLimit = 60 * 60 * 24 * 7 //Give each token a 1 hour limit
    return jwt.sign(user, enviro.authentication.jwtToken, {
        expiresIn: timeLimit
    })
}


// End JWT Section
//----------------------------------


/*
* This code takes a username and password from the login page and sends the user type.
* integration code
* from client: login
* returns: user type
*/
app.post('/login', async function (req, res) {
    //Checkname is passed username/password and the resolution to redirect the user to the correct page.

    // -- test output -- PLO
    //  console.log("In app.js file:   username: ", req.body.username, "password: ", req.body.password)

    // calls checkName. Gives it username and password from the login page. Returns type to user.
    let user = await authFunctions.checkName(req.body.username, req.body.password);

    // -- test output -- PLO
    //  console.log("In app.js file: type: ", type)
    try {
        //console.log(jwtSignObject({myType: type}));  //jwtSignObject requires an object to be passed through.
        res.send({
            accountID: user.accountID,
            type: user.type,
            token: jwtSignObject({ ID: user.accountID })
        });
    } catch (err) {
        console.log(err);
    }
})


/*
* This code takes a username and employee type, checks if the username is available, 
* and adds the user to the database if possible with a random password.
* integration code
* from client: AccoutStaff.vue page via ApiFunctions.vue and Api.js
* returns: a boolean
*/
app.post('/createEmployeeCheck', async function (req, res) {
    //createEmployeeCheck is passed username/employeeType and the resolution.

    // -- test output -- PLO
    //  console.log("In app.js file:   username: ", req.body.username, "employeeType: ", req.body.employeeType)

    // calls checkName. Gives it username and password from the login page. Returns type to user.
    let employeeExists = await functions.createEmployeeCheck(req.body.username, req.body.employeeType);

    // -- test output -- PLO
    //  console.log("In app.js file: employeeExists: ", employeeExists)

    res.send(employeeExists)
})

app.post('/createEmployeeConfirm', async function (req, res) {
    let addedBool = await functions.createEmployeeConfirm(req.body.username, req.body.employeeType, req.body.password);
    res.send(addedBool)
})


/// ------------ post request?
//
//
app.post('/deleteEmployee', async function (req, res) {
    let deleteData = await functions.deleteEmployee(req.body.username);
    res.send(deleteData)
})





/*
    Functions linked in advance.

    These can be used in the server side app.js file and in the client side vue files.

*/


// * @param {*} RoomsIn Pass me a dictionary with the rooms.

app.post('/addEditRoom', async function (req, res) {
    let rooms = await functions.addEditRoom(req.body.RoomsIn);
    res.send(rooms)
})

//  * @param {*} RoomsIn Takes a confirmed OK room Dictionary
app.post('/finalRoomUpdate', async function (req, res) {
    let rooms2 = await functions.finalRoomUpdate(req.body.RoomsIn);
    res.send(rooms2)
})


/** Sends to frontend: 
 * Returns all employees in the database. Currently sorted by type, we could alter this though to be type or accountID.
 * JSON object returned and formatted in a pretty print format with spacing of 2.
 */
app.get('/getEmployeeList', async function (req, res) {
    let employeeList = await functions.getEmployeeList();
    //  await console.log(employeeList)
    res.send(JSON.stringify(employeeList))
    res.send(employeeList)
})

app.get("/getRoomList", async function (req, res) {
    //  console.log("get room list in app.js");
    let room5 = await functions.getRoomList();
    //  await console.log(room5.data)
    res.send(JSON.stringify(room5));
    // res.send(room5);
})

app.post("/addRoom", async function (req, res) {
    let addRoomCheck = await functions.addRoom(req.body.roomName);
    //    await console.log("addroom app boolean: ", addRoomCheck)
    res.send(addRoomCheck);
    // res.send(room5);
})

app.post('/deleteRoom', async function (req, res) {
    let deleteRoomData = await functions.deleteRoom(req.body.roomIn);
    //  await console.log("app.js deleting: ", deleteRoomData)
    res.send(deleteRoomData)
})


app.post('/accountExists', async function (req, res) {
    let existsResult = await functions.accountExists(req.body.username);
    console.log("app.js account Exists inout: ", req.body.username)
    console.log("app.js account Exists result: ", existsResult)
    res.send(existsResult)
})
app.post('/changePassword', async function (req, res) {
    let changeResult = await functions.changePassword(req.body.username, req.body.password);
  //  console.log("app.js account Exists input: ", req.body.username)
  //  console.log("app.js account Exists input: ", req.body.password)

  //  console.log("app.js account Exists result: ", changeResult)
    res.send(changeResult)
})
app.post('/requiredMinutesWeekly', async function (req, res) {
  /*   console.log("in app.js")
    try {
    console.log("app.js requiredMinutesWeekly input: ", req.body.account)
    }
    catch (error) {
        console.log("error", error)
    } */
    let minutesRequired = await functions.requiredMinutesWeekly(req.body.account);
  //  console.log("app.js requiredMinutesWeekly result: ", minutesRequired)
    res.send({minutes: minutesRequired})
})












/*

async checkName(info2) {
    return Api().post('checkName', info2)
},
async getFamilyList(info4) {
    return Api().post('getFamilyList', info4)
},
*/


/* 
    backend functions not yet linked

connect,
getTypes,
createJSON
*/








/* GET:  getSettings
----------------------------
    Returns a array with this format:
    block1_start, block1_end, block2_start, block2_end, block3_start, block3_end, Year start, weekly_requirements
    Ex.
    [
    "08:45:00",
    "12:00:00",
    "11:50:00",
    "13:00:00",
    "12:50:00",
    "15:45:00",
    "2018/09/05",
    "05:00:00"
    ]
*/
app.get('/getSettings', async function (req, res) {
    let settings = await functions.getSettings();
    res.send(settings);
})
/* POST:  setSettings
*/
app.post("/setSettings", async (req, res) => {
    // console.log(req.body);
    functions.setSettings(req.body);
})

app.post("/getReservations", async (req, res) => {
    // console.log(req.body.room, req.body.startDate);
    let reservations = await functions.getRoomReservationByWeek(req.body.room, req.body.startDate);
    // console.log(reservations);
    res.send(JSON.stringify(reservations));
})

app.get("/roomDict", async function (req, res) {
    let rooms = await functions.roomDict();
    res.send(rooms);
})
app.get("/roomList", async function (req, res) {
    let rooms = await functions.roomList();
    console.log(rooms);
    res.send(JSON.stringify(rooms));
})

app.post("/getFacilitators", async function (req, res) {
    //console.log("This is Req:  ", req.body);
    let facil = await functions.getFacilitators(req.body.accountID);
    res.send(JSON.stringify(facil));
})

app.post("/createReservation", async function (req, res) {
    //console.log(req.body.familyID);
    try {
        let newReservation = await functions.createReservation(req.body);
        res.send(JSON.stringify(newReservation));
    } catch (err) {
        console.log(err.message);
        console.log(err.stack);
        return null
    }
})

app.post("/getReservationByFamily", async function (req, res) {
    let futureReservations = await functions.getReservationByFamily(req.body.familyID);
    res.send(JSON.stringify(futureReservations));
})

app.post("/cancelReservation", async function (req, res) {
    let result = await functions.deleteReservation(req.body.reserveID);
    res.send(JSON.stringify(result));
})

app.post("/getReservationByID", async function (req, res) {
    let reservation = await functions.getReservationByID(req.body.reserveID);
    res.send(JSON.stringify(reservation));
})





app.listen(8081)