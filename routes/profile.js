var express = require('express');
var router = express.Router();

router.get('/mymusic', function(req, res, next) {
	res.render('mymusic', {
		title: 'My Music'
	});
});

module.exports = router;
