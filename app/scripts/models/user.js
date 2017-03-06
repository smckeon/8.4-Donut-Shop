var $ = require('jquery');
var Backbone = require('backbone');

var parse = require ('../setup.js');

var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: function () {
    return parse.BASE_API_URL + '/users';
  }
}, {

login(credentials, callback){
  var url = parse.BASE_API_URL + '/login?' + $.param(credentials);
  $.get(url).then(data => {
    var user = new User(data);
    User.store(user);
    callback();
  });
},
signup(creds){
  var newUser = new User(creds);
  newUser.save().then(() => {
    User.store(newUser);
  });
  return newUser;
},
store: function(user){
    localStorage.setItem('user', JSON.stringify(user.toJSON()));
},
current: function(){
  var user = localStorage.getItem('user');

// if no user in local storage, bail
  if(!user){
    return false;
}

user = new User(JSON.parse(user));

  // If we don't have a token, bail
  if(!user.get('sessionToken')){
    return false;
}

  return user;
}

});


module.exports = {
  User
};
