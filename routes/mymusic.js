var express = require('express');
var router = express.Router();

/* GET user's My Music page */
router.get('/', function(req, res, next) {
	res.render('mymusic', {
		title: 'My Music'
	});
});

/* GET selected Document */
router.get('/document1', function(req, res, next) {
	res.render('document1', {
		title: 'Document 1'
	});
});

/* GET Create New Document page */
router.get('/createnewdocument', function(req, res, next) {
	res.render('createnew', {
		title: 'Create New Document'
	});
});

module.exports = router;
