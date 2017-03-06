var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var parse = require('./setup.js');

var LoginContainer = require('./components/login.jsx').LoginContainer;
var RecipeList = require('./components/recipe_list.jsx').RecipeList;
var RecipeForm = require('./components/recipe_form.jsx').RecipeForm;
var Recipe = require('./models/recipe_form.js').Recipe;
var Ingredient = require('./models/recipe_form.js').Ingredient;


var AppRouter = Backbone.Router.extend({
  routes: {
    '':'index',
    'recipelist/': 'recipelist',
    'recipeform/': 'recipeform'
  },
  initialize: function(){
    parse.setup({
        BASE_API_URL: 'https://tiny-parse-server.herokuapp.com'
  });
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    )
  },
  recipelist: function(){
    ReactDOM.render(
      React.createElement(RecipeList),
      document.getElementById('app')
    )
  },
  recipeform: function(){
    var recipe = new Recipe({'name': 'Pasta', 'servings': 4});
    recipe.get('ingredients').add([
      {'name': 'flour', 'qty': 2, 'units': 'cups'},
      {'name': 'water', 'qty': 2, 'units': 'tbsp'},
    ])
    // ^^^^^^^ THIS WAS ADDED DURING LECTURE -BROKEN-

    ReactDOM.render(
      React.createElement(RecipeForm, {recipe: recipe}),
      document.getElementById('app')
    )
  }

});

var appRouter = new AppRouter();

module.exports = appRouter;
