var Bookshelf = require('bookshelf');

var config = {
  host: 'localhost',
  user: 'vc',
  password: '12345678',
  database: 'eventapp'
};

var DB = Bookshelf.initialize({
  client: mysql',
  connection:config
});

module.export.DB = DB;
