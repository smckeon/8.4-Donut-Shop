var Backbone = require('backbone');

var RecipeList = Backbone.Model.extend({

});

var RecipeCollection = Backbone.Collection.extend({
  model: RecipeList
})


module.exports = {
  RecipeList,
  RecipeCollection
};
