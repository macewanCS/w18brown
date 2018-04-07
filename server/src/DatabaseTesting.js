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
    testIn["1"] = "green";
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

    jsonIn.familyID = "Should Work";
    jsonIn.date = "2018/04/11";
    jsonIn.facilitator = "Fred Flinstone";
    jsonIn.startTime = "11:00:00";
    jsonIn.endTime = "12:00:00";
    jsonIn.room = "mauve";

    let test = await functions.createReservation(jsonIn);

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
    input.phone1 = "780-258-3697";
    input.email1 = "sdfsdfsdf@sdfsdf.com";
    input.phone2 = "780-258-3697 this is #2";
    input.email2 = "2nd@sdfsdf.com";
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
    stu.firstName = "little";
    stu.lastName = "girl";
    stu.room = "red";
    stu.grade = "K";

    var stu2 = {};
    stu2.firstName = "little";
    stu2.lastName = "boy";
    stu2.room = "red";
    stu2.grade = "5";

    input.students.push(stu);
    input.students.push(stu2);

    json = JSON.stringify(input);


    let test = await functions.confirmCreateFamily(json);

    console.log("for input", name, "result is:", test);
}

async function testaddRoom(roomIn){
    let test = await functions.addRoom(roomIn);

    console.log(test);
}

async function testdeleteRoom(roomIn){
    let test = await functions.deleteRoom(roomIn);

    console.log(test);
}

async function testroomList(){
    let test = await functions.roomList();

    console.log(test);
}

async function testchangePassword(username, password){
    let test = await functions.changePassword(username, password);

    console.log(test);
}

async function testgetReservationByFamily(username){
    let test = await functions.getReservationByFamily(username);

    console.log(test);
}

async function testgetFacilitators(ID){
    let test = await functions.getFacilitators(ID);

    console.log(test);
}

async function testgetStudents(ID){
    let test = await functions.getStudents(ID);

    console.log(test);
}

async function testgetReservationByID(ID){
    let test = await functions.getReservationByID(ID);

    var output = JSON.parse(test);

    console.log(output);
}

async function testdeleteFieldtripReservation(ID){
    let test = await functions.deleteFieldtripReservation(ID);

    console.log(test);
}

async function testcreateFieldTrip(){
    var input = {};
    input.date = "2018/04/10";
    input.facilitators = 4;
    input.room = "mauve";
    input.credit = 8.0;
    input.message = "fun";

    var pass = JSON.stringify(input);

    let test = await functions.createFieldTrip(pass);

    console.log(test);
}

//following fields: fieldtripID, familyID, facilitator, date, credit, room.
async function testcreateFieldTripReservation(){
    var input = {};

    input.date = "2018/04/10";
    input.familyID = "ShouldWork001";
    input.facilitator = "Fred Flinstone";
    input.room = "mauve";
    input.credit = 8.0;
    input.fieldtripID = 8;

    let test = await functions.createFieldTripReservation(input);

    console.log(test);

}

async function testgetFieldTrip(date, room){
    let test = await functions.getFieldTrip(date, room);

    console.log(test);
}

async function testgetFutureFieldtrips(name){
    let test = await functions.getFutureFieldtrips(name);

    console.log(test);
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
        //  testConfirmRoomChange();
        // testcreateEmployeeCheck("", "admin");
        // testcreateEmployeeCheck("Peter001", "admin");
        // testcreateEmployeeCheck("shouldWork", "board");
        // testcreateEmployeeConfirm("testBoard1", "board", "brown");
        // testcreateEmployeeConfirm("testBoard2", "board", "brown");
        // testcreateEmployeeConfirm("testTeacher1", "teacher", "brown");
        // testgetRoomReservationByWeek("mauve", "2018/04/09");
        // testgetEmployeeList();
        // testdeleteEmployee("testBoard2");
        // testgetEmployeeList();
        //  testcreateReservation();
        // testdeleteReservation(15);
        //testgetTypes();
        // testcheckCreateFamily("Peter007");
        // testcheckCreateFamily("");
        // testcheckCreateFamily("ShouldWork001");
        // testcheckCreateFamilyStuError("ShouldWork001");
        // testcheckCreateFamilyFacError("ShouldWork001");
        // testgetGrades();
        //  testconfirmCreateFamily("Peter007");
        //  testaddRoom("Orange");
        // testRoom();
        //  testaddRoom("Orange");
        // testaddRoom("Orange");
        // testRoom();
        // testdeleteRoom("Orange");
        // testroomList();
        // testchangePassword("Sarah001", "brown");
        // testgetReservationByFamily("Fac002");
        // testgetFacilitators("ShouldWork001");
        // testgetFacilitators("Shouldn'tWork001");
        // testgetStudents("Shouldwork001");
        // testgetStudents("Shouldn'tWork001");
        // testgetReservationByID(12);
        // testgetReservationByID(555);
        // testcreateFieldTrip();
        // testcreateFieldTripReservation();
        // testgetFieldTrip("2018/04/10", "mauve");
        // testdeleteFieldtripReservation(1);
        testgetFutureFieldtrips("ShouldWork001");
        testgetFutureFieldtrips("ShouldNotWork001");
    }
}