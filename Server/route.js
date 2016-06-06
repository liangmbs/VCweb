//library
var passport = require('passport');
//var bcrypt = require('bcrypt-nodejs');

var Model = require('./model');

//index
var index = function(req, res, next){
  if(!req.isAuthenticated()){
    res.redirect('/');
  }else{

    var user =req.user;

    if(user !== undefined){
      user = user.toJSON();
    }
    res.render('index', {title: 'Home', user:user});
  }
};


