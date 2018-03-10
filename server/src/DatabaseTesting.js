//this is how you import a javascript file
var functions = require('./functions');

connectAndTest();


async function testRoom(){
    let test = await functions.roomDict();

    console.log(test);
}

async function testName(name, password){
    let test = await functions.checkName(name, password);
    console.log(test);
}

async function testGetSettings(){
    let test = await functions.getSettings();
    console.log(test);
}

async function testgetJSON(){
    let test = await functions.createJSON();
    console.log(test);
}

async function testEditRooms(parameter){
    if (parameter === "bad"){
        var testIn = {};
        //testIn["1"] = "bluewithgreen";
        //testIn["2"] = "red";
        testIn["3"] = "blue";
        testIn["4"] = "mauve";
        testIn["5"] = "purple";
        testIn["6"] = "fancycolour";
        let test = await functions.addEditRoom(testIn);
        console.log(test);
    }
    if (parameter === "good"){
        var testIn = {};
        testIn["1"] = "bluewithgreen";
        testIn["2"] = "red";
        testIn["3"] = "blue";
        testIn["4"] = "mauve";
        testIn["5"] = "purple";
        testIn["6"] = "fancycolour";
        let test = await functions.addEditRoom(testIn);
        console.log(test);
    }
}

async function testConfirmRoomChange(){
    var testIn = {};
    testIn["1"] = "bluewithgreen";
    testIn["2"] = "red";
    //testIn["3"] = "blue";
    testIn["4"] = "mauve";
    testIn["5"] = "purple";
    testIn["6"] = "fancycolour";
    let test = await functions.finalRoomUpdate(testIn);
    console.log(test);
}

async function testGetFamilyList(){
    let test = await functions.getFamilyList();
    console.log(test);
}

async function testcreateEmployeeCheck(input, type){
    let test = await functions.createEmployeeCheck(input, type);
    console.log("input is:", input, "result is", test);
}

async function testcreateEmployeeConfirm(input, type, password){
    let test = await functions.createEmployeeConfirm(input, type, password);
    console.log("input is:", input, "result is", test);
}

async function testgetTypes(){
    let test = await functions.getTypes();
    console.log(test);
}

async function testgetRoomReservationByWeek(roomID, startDate){

    let test = await functions.getRoomReservationByWeek(roomID, startDate);

    console.log(test);

}

async function testgetEmployeeList(){
    let test = await functions.getEmployeeList();

    console.log(test);
}

async function testdeleteEmployee(username){
    let test = await functions.deleteEmployee(username);

    console.log(test);
}

/**
 * All backend testing can be completed here
 * 
 */
async function connectAndTest(){
    let test = await functions.connect();
    if (test === "connected"){
        /*testRoom();
        testName("Peter001", "peterpw");
        testName("Sarah001", "sarahpw");
        testName("sdf", "sdfsfg");
        testGetSettings();
        testgetJSON();
        testEditRooms("bad");
        testEditRooms("good");
        testGetFamilyList();
        testConfirmRoomChange();
        testcreateEmployeeCheck("", "admin");
        testcreateEmployeeCheck("Peter001", "admin");
        testcreateEmployeeCheck("shouldWork", "board");*/
        // testcreateEmployeeConfirm("testBoard1", "board", "brown");
        // testcreateEmployeeConfirm("testBoard2", "board", "brown");
        // testcreateEmployeeConfirm("testTeacher1", "teacher", "brown");
        //testgetRoomReservationByWeek(1, "2018/03/05");
        testgetEmployeeList();
        testdeleteEmployee("testBoard2");
        testgetEmployeeList();
        //testgetTypes();
    }
}