//Task 3.1 function's
var count = 1;

var temp = document.createElement("DIV");

function mouse() {

    var a = document.getElementById("mcount");

    a.innerHTML = count;

    count++;
}

//Task 3.2 function's
var display = " ";

function date_and_time() {

    var D = new Date();

    var time = document.getElementsByClassName("post-time")

    var post = document.getElementsByClassName("post-content");

    display = display + D +"<br/>" + post[0].value + "<br/>";

    time[0].innerHTML = display;
}

//Task 3.3 function's
function hidemain() {

    var main = document.getElementById("main");

    main.style.display = "none";

    var menu = document.getElementById("menu");

    menu.style.display = "block";
}

function hidemenu() {

    var main = document.getElementById("main");

    main.style.display = "block";

    var menu = document.getElementById("menu");

    menu.style.display = "none";
}

//Task 3.4 function's


//Task 3.5 function's
function change_backgroundcolor(e) {
    document.body.style.backgroundColor = e.value;
}

//Task 3.6 function's