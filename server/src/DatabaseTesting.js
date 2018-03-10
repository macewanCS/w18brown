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
    testIn["0"] = "red";
    testIn["1"] = "bluewithgreen";
    testIn["2"] = "blue";
    testIn["3"] = "mauve";
    testIn["4"] = "purple";
    testIn["5"] = "fancycolour";
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

async function testcreateReservation(){
    var jsonIn = {};

    jsonIn.familyID = "Fac006";
    jsonIn.date = "2018/03/09";
    jsonIn.facilitator = "Smiley Face";
    jsonIn.startTime = "14:00:00";
    jsonIn.endTime = "15:45:00";
    jsonIn.room = "red";

    var input = JSON.stringify(jsonIn);

    let test = await functions.createReservation(input);

    console.log(test);
}

async function testdeleteReservation(ID){
    let test = await functions.deleteReservation(ID);

    console.log(test);
}

async function testcheckCreateFamily(name){
    var input = {};
    input.accountID = name;
    input.bonusHours = 5;
    input.bonusComment = "board";
    input.phone = "780-258-3697";
    input.email = "sdfsdfsdf@sdfsdf.com";
    input.historicHours = 4356;

    input.facilitators = [];
    var fac = {};
    fac.name = "Fred Flinstone";
    input.facilitators.push(fac);
    var fac2 = {};
    fac2.name = "Misfkj sadf";
    input.facilitators.push(fac2);
    input.students = [];

    var stu = {};
    stu.name = "little girl";
    stu.room = "red";
    stu.grade = "K";

    var stu2 = {};
    stu2.name = "little boy";
    stu2.room = "red";
    stu2.grade = "5";

    input.students.push(stu);
    input.students.push(stu2);

    json = JSON.stringify(input);


    let test = await functions.checkCreateFamily(json);

    console.log("for input", name, "result is:", test);
}

async function testcheckCreateFamilyFacError(name){
    var input = {};
    input.accountID = name;
    input.bonusHours = 5;
    input.bonusComment = "board";
    input.phone = "780-258-3697";
    input.email = "sdfsdfsdf@sdfsdf.com";
    input.historicHours = 4356;

    input.facilitators = [];
    var fac = {};
    fac.name = "";
    input.facilitators.push(fac);
    var fac2 = {};
    fac2.name = "Misfkj sadf";
    input.facilitators.push(fac2);
    input.students = [];

    var stu = {};
    stu.name = "little girl";
    stu.room = "red";
    stu.grade = "K";

    var stu2 = {};
    stu2.name = "little boy";
    stu2.room = "red";
    stu2.grade = "5";

    input.students.push(stu);
    input.students.push(stu2);

    json = JSON.stringify(input);


    let test = await functions.checkCreateFamily(json);

    console.log("for input", name, "result is:", test);
}

async function testcheckCreateFamilyStuError(name){
    var input = {};
    input.accountID = name;
    input.bonusHours = 5;
    input.bonusComment = "board";
    input.phone = "780-258-3697";
    input.email = "sdfsdfsdf@sdfsdf.com";
    input.historicHours = 4356;

    input.facilitators = [];
    var fac = {};
    fac.name = "Fred Flinstone";
    input.facilitators.push(fac);
    var fac2 = {};
    fac2.name = "Misfkj sadf";
    input.facilitators.push(fac2);
    input.students = [];

    var stu = {};
    stu.name = "";
    stu.room = "red";
    stu.grade = "K";

    var stu2 = {};
    stu2.name = "little boy";
    stu2.room = "red";
    stu2.grade = "5";

    input.students.push(stu);
    input.students.push(stu2);

    json = JSON.stringify(input);


    let test = await functions.checkCreateFamily(json);

    console.log("for input", name, "result is:", test);
}

async function testgetGrades(){
    let test = await functions.getGrades();

    console.log(test);
}

async function testconfirmCreateFamily(name){
    var input = {};
    input.accountID = name;
    input.bonusHours = 5;
    input.bonusComment = "board";
    input.phone = "780-258-3697";
    input.email = "sdfsdfsdf@sdfsdf.com";
    input.historicHours = 4356;

    input.facilitators = [];
    var fac = {};
    fac.name = "Fred Flinstone";
    input.facilitators.push(fac);
    var fac2 = {};
    fac2.name = "Misfkj sadf";
    input.facilitators.push(fac2);
    input.students = [];

    var stu = {};
    stu.name = "little girl";
    stu.room = "red";
    stu.grade = "K";

    var stu2 = {};
    stu2.name = "little boy";
    stu2.room = "red";
    stu2.grade = "5";

    input.students.push(stu);
    input.students.push(stu2);

    json = JSON.stringify(input);


    let test = await functions.confirmCreateFamily(json);

    console.log("for input", name, "result is:", test);
}

/**
 * All backend testing can be completed here
 * 
 */
async function connectAndTest(){
    let test = await functions.connect();
    if (test === "connected"){
        // testRoom();
        // testName("Peter001", "peterpw");
        // testName("Sarah001", "sarahpw");
        // testName("sdf", "sdfsfg");
        // testGetSettings();
        // testgetJSON();
        // testEditRooms("bad");
        // testEditRooms("good");
        // testGetFamilyList();
         testConfirmRoomChange();
        // testcreateEmployeeCheck("", "admin");
        // testcreateEmployeeCheck("Peter001", "admin");
        // testcreateEmployeeCheck("shouldWork", "board");
        // testcreateEmployeeConfirm("testBoard1", "board", "brown");
        // testcreateEmployeeConfirm("testBoard2", "board", "brown");
        // testcreateEmployeeConfirm("testTeacher1", "teacher", "brown");
        // testgetRoomReservationByWeek("red", "2018/03/05");
        // testgetEmployeeList();
        // testdeleteEmployee("testBoard2");
        // testgetEmployeeList();
        // testcreateReservation();
        // testdeleteReservation(15);
        //testgetTypes();
        // testcheckCreateFamily("Peter001");
        // testcheckCreateFamily("");
        // testcheckCreateFamily("ShouldWork001");
        // testcheckCreateFamilyStuError("ShouldWork001");
        // testcheckCreateFamilyFacError("ShouldWork001");
        // testgetGrades();
        // testconfirmCreateFamily("ShouldWork001");
    }
}