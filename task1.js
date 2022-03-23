//Function that gives the date, time, and year
function showdate() {

    //Creates a date object
    var date = new Date();

    //Gets today's date
    var dateToday = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    //Gets the current time
    var timeToday = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    //Paragraph displays date and time
    document.getElementById("current_time").innerHTML = dateToday + " " + timeToday;
}