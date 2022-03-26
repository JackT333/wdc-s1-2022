//Task 3.1 function's
var count = 1;

var temp = document.createElement("DIV");

function mouse() {

    var a = document.getElementById("mcount");

    a.innerHTML = count;

    count++;
}

//Task 3.2 and 3.4 function's
function date_and_time() {

    var date = document.createElement("P");

    var input = document.createElement("P");

    date.className = "post-time";

    input.className = "post-content";

    input.innerHTML = document.getElementsByTagName("textarea")[0].value;

    var output = document.getElementById("posts");

    date.innerHTML = new Date();

    var chooseColor = document.getElementsByName("color");

    for (let i = 0; i < chooseColor.length; i++) {

        if (chooseColor[i].checked == true) {

            input.style.color = chooseColor[i].value;
        }
    }

    var chooseFont = document.getElementsByName("style");

    for (let i = 0; i < chooseFont.length; i++) {

        if (chooseFont[0].checked == true) {

            input.style.fontWeight = "bold";
        }

        if (chooseFont[1].checked == true) {

            input.style.fontStyle = "italic";
        }
    }

    var amount = document.getElementsByName("quantity")[0].value;

    var display = document.getElementsByName("visible")[0].value;

    for (let i = 0; i < amount; i++) {

         temp.appendChild(input.cloneNode(true));
    }

    while (output.firstChild) {

        output.firstChild.remove();
    }

    for (let i = 0; i < display; i++) {

        output.appendChild(temp.childNodes[i * 2].cloneNode(true));

        output.appendChild(temp.childNodes[(i * 2) + 1].cloneNode(true));
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