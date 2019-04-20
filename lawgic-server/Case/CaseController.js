var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Case = require('./Case');


router.post('/', function (req, res) {
    Case.getcase(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(count);
        }
    });
});

module.exports = router;
