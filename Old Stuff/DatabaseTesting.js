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

/**
 * All backend testing can be completed here
 * 
 */
async function connectAndTest(){
    let test = await functions.connect();
    if (test === "connected"){
        testRoom();
        testName("Peter001", "peterpw");
        testName("Sarah001", "sarahpw");
        testName("sdf", "sdfsfg");
        testGetSettings();
        testgetJSON();
        testEditRooms("bad");
        testEditRooms("good");
    }
}