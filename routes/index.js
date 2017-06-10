var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Creators' });
});

router.get('/signin', (req, res) => {
  res.render('signin', {title: 'SignIn Creators'})
})

router.get('/signup', (req, res) => {
  res.render('signup', {title: 'SignUp Creators'})
})

module.exports = router;