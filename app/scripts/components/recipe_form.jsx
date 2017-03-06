var React = require('react');

class RecipeForm extends React.Component {
  constructor(props){
    super(props);

    this.handleServingChange = this.handleServingChange.bind(this);
    this.adjustRecipe = this.adjustRecipe.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      servings: 1
    };
  }
  componentWillMount() {
    this.setState({servings: this.props.recipe.get('servings')})
  }
  handleServingChange(e){
    this.setState({servings: e.target.value});
  }
  adjustRecipe(servings){
    console.log(this);
    var factor = parseInt(servings) / this.props.recipe.get('servings');
    this.setState({factor: factor})
  }
  handleSubmit(e){
    e.preventDefault();
    this.adjustRecipe(this.state.servings);
  }

  render(){
    var ingredientList = this.props.recipe.get('ingredients').map((ingredient)=>{
      return (
        <li key={ingredient.cid}>
         {ingredient.qtyDisplay(this.state.factor) + ' '}
         {ingredient.get('units') + ' '}
         {ingredient.get('name')}
       </li>
      )
    });
    return (
    <div>

      <div className="well">
        <span>Username / Logout</span>
        <br />
        <input className="btn btn-xs" type="submit" value="Back To Recipes Home" />
      </div>

    <div className="well container">
      <form onSubmit={this.handleSubmit}>
        Servings: <input onChange={this.handleServingChange} type="text" name="servings" value={this.state.servings}/>
        <input type="submit" value="Adjust" />
      </form>
      <ul>
        {ingredientList}
      </ul>
    </div>

  </div>
    )
  }
};


module.exports = {
  RecipeForm
}
