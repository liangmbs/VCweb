var DB = require('./mysqlconnection').DB;

var User = DB.Model.extend({
    tableName: 'users',
    idAttribute: 'user_id',
});


module.exports = {
    User: User
};
