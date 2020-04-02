var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: 'Main' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/math', function(req, res, next) {
  res.render('math', { title: 'Math' });
});
router.get('/musings', function(req, res, next) {
  res.render('musings', { title: 'Musings' });
});
router.get('/social', function(req, res, next) {
  res.render('social', { title: 'Social' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
module.exports = router;
