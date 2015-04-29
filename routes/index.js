var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Xenakis'
	});
});

router.get('/mymusic', function(req, res, next) {
	res.render('mymusic', {
		title: 'My Music'
	});
});

module.exports = router;
