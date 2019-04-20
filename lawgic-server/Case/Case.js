var db = require('../db');

var Case = {
    getcase: function (Case,callback) {
        return db.query('select name,solved_date,description,long_description from solved_judgements where keyword like ? and keyword like ? and keyword like ?',['%'+Case.keyword1+'%','%'+Case.keyword2+'%','%'+Case.keyword3+'%'], callback);
    }

}

module.exports = Case;