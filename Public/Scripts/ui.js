//AJAX to pull up pages while in the menu
function moveToPage(page) {
    console.log("This is run");
    var xhttp = new XMLHttpRequest();
    console.log("Test");
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('mainArea').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/" + page, true);
    xhttp.send();
}

function screenChange() {
    let drawer = document.querySelector('.mdl-js-layout');
    if (drawer && drawer.className.indexOf("is-small-screen")>-1) {
        document.getElementById("mainBox").style.marginLeft = "50px";
        document.getElementById("mainBox").style.width = "calc(100% - 50px)";
    } else {
        document.getElementById("mainBox").style.marginLeft = "250px";
        document.getElementById("mainBox").style.width = "calc(100% - 250px)";
    }
}

var addEvent = function (object, type, callback) {
    if (object == null || typeof (object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on" + type] = callback;
    }
};
addEvent(window, "resize", screenChange);

screenChange();