//Task 3.1 function's
var count = 1;

function mouse() {

    var a = document.getElementById("mcount");

    a.innerHTML = count;

    count++;
}

//Task 3.2 and 3.4 function's
var display = " ";

function time() {

    var date = new Date();

    var time = document.getElementsByClassName("post-time");

    var post = document.getElementsByClassName("post-content");
    
    var color = 'red';

    var x = parseInt(document.getElementsByName("quantity")[0].value);
    
    if (document.getElementsByName("color")[0].checked) {

            color = document.getElementsByName("color")[0].value;
    }
    
    for (var i = 0; i < x; i++) {

            display += date + "<br/> <span style = 'color: " + color + "' > " + post[0].value + " </span><br/>";
    }
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