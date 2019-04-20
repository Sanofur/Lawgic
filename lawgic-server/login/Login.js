var db = require('../db');

var Login = {
    getlogin: function (Login,callback) {
        return db.query('select id,username from user_details where username=? and password=?;',[Login.username,Login.password], callback);
    }

}

module.exports = Login;