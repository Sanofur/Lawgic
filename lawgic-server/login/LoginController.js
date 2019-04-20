var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Login = require('./Login');


router.post('/login', function (req, res) {
    Login.getlogin(req.body, function (err, count) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.json(count);
        }
    });
});

module.exports = router;
