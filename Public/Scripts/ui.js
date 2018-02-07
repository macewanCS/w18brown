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