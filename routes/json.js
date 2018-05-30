var express = require('express');
var pd = require('pretty-data').pd;
var router = express.Router();

router.post('/print', function(req, res, next) {
  	res.send(pd.json(req.param('input')));
});

module.exports = router;
