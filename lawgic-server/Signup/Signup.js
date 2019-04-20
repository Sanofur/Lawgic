var db = require('../db');

var Signup = {

    createSignup: function (Signup, callback) {
        return db.query('Insert into user_details(username,email,password) values(?,?,?)'
, [Signup.username, Signup.email,Signup.password], callback);
    }
    
}

module.exports = Signup;