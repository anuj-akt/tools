var express = require('express');
var pd = require('pretty-data').pd;
var libxmljs = require("libxmljs");
var router = express.Router();

router.post('/print', function(req, res, next) {
  	res.send(pd.xml(req.param('input')));
});

router.post('/validate', function(req, res, next) {
	var input = req.param('input');
	try{
		var xmlDoc = libxmljs.parseXmlString(input);
		res.send(input);
	} catch(err) {
		console.log(err);
		res.send(err.toString());
	}
});

module.exports = router;
