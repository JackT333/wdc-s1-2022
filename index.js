var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var counter = 0;
router.get('/count', function(req, res, next) {
counter ++;
res.send(`<!DOCTYPE html>
<html lang = "en">
<head>
<meta charset = "utf-8"/>
<title>Express</title>
<link rel="stylesheet" href="/stylesheets/style.css">
</head>
<body>
<h1>${counter}</h1>
</body>

</html>`);
});

/* Containing a timestamps of the previous visit to the page */
var count = 0;
var dateAndtime;
router.get('/last.txt', function(req, res) {

  if (count == 0) {

    dateAndtime = new Date().toString();
    res.send();
  }
  else {

    res.send(dateAndtime);
    dateAndtime = new Date().toString();
  }
  count++;
});

/* Level 1 heading containing the name of a colour, displayed in that colour */
var count = 0;

router.get('/color.html', function(req, res) {

var list = ["red", "yellow", "green", "blue"];

res.send('<!DOCTYPE html>\
<html>\
<head>\
<title>Color</title>\
</head>\
<body>\
<h1 style = "color:' + list[count % 4] + '">' + list[count % 4] + '</h1>\
</body>\
</html>');

count ++;
});

/* Displays a list of timestamps of each visit to the page */
var timestamps = "";
var first = '<!DOCTYPE html>\
<html lang = "en">\
<head>\
<meta charset = "utf-8"/>\
<title>\
Timestamps log\
</title>\
<body>\
<ul>';
var second =
'</ul>\
</body>\
</html>';
router.get('/log.html', function(req, res) {

timestamps += '<li>' + new Date().toString() + '</li>';
res.send(first + timestamps + second);
});

/*  */


module.exports = router;