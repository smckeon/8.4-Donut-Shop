var $ = require('jquery');
var Backbone = require('backbone');

require('./router');
require('./setup');

$(function(){
  Backbone.history.start();
});
