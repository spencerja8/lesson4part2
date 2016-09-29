var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 4',
  message: 'This is the lesson 4 home page' });
});

//GET random number page
router.get('/random', function (req, res, next) {
  //calculate a random number
  var num = Math.random();

  //load the random page and pass the num to it

  res.render('random', {
    title: 'Random Number',
    randomNumber: num
  });
});

module.exports = router;
