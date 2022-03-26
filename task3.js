//Task 3.1 function's
var count = 1;

var temp = document.createElement("DIV");

function mouse() {

    var a = document.getElementById("mcount");

    a.innerHTML = count;

    count++;
}

//Task 3.2 and 3.4 and 3.6 function's
function date_and_time() {

    var date = new Date();

    var post = document.getElementsByTagName("textarea");

    var content = document.createElement("x");

    var time = document.createElement("x");

    content.className = "post-content";

    time.className = "post-time";

    time.innerHTML = date;

    content.innerHTML = post[0].value ;

    var amount = document.getElementsByName("visible")[0].value;

    var color = " ";

    var fontBold = " ";

    var fontItalic = " ";

    var font = document.getElementsByName("style");

    var colorName = document.getElementsByName("color");

    if (colorName[0].checked == true) {

        color = "blue";
    }

    else if (colorName[1].checked == true) {

        color = "red";
    }

    if (font[0].checked == true) {

        fontBold = "bold";
    }

    if (font[1].checked == true) {

        fontItalic = "italic";
    }

    document.getElementById("posts").innerHTML = " ";

    for (var i = 0; i < amount; i++) {

        document.getElementById("posts").innerHTML+="<div class='post-time'>"+time.innerHTML+"</div>"+"<br/>"+"<div class='post-content' style='color:"+color+";font-style:"+fontItalic+";font-weight:"+fontBold+"'>"+content.innerHTML+"</div>"+"<br/>";
    }
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

//Task 3.5 function's
function change_backgroundcolor(e) {

    document.body.style.backgroundColor = e.value;
}