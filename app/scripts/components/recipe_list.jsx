var React = require('react');


class RecipeList extends React.Component {

  render(){
    return (
      <div>

    <div className="well">
      <span>Username / Logout</span>
    </div>

    <div className="container bg">

    <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3 rwrapper">
         <div className="rlisting">
            <div className="col-md-12 nopad">
              <img src="http://dummyimage.com/250x250" className="img-responsive" />
            </div>
            <div className="col-md-12 nopad">
              <h5>Recipe Name</h5>
               <p>Recipe Description Goes Here...</p>
               <div className="rfooter">
                 <input className="btn btn-xs" type="submit" value="Edit Recipe" />
               </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 rwrapper">
         <div className="rlisting">
            <div className="col-md-12 nopad">
              <img src="http://dummyimage.com/250x250" className="img-responsive" />
            </div>
            <div className="col-md-12 nopad">
              <h5>Recipe Name</h5>
               <p>Recipe Description Goes Here...</p>
               <div className="rfooter">
                 <input className="btn btn-xs" type="submit" value="Edit Recipe" />
               </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 rwrapper">
         <div className="rlisting">
            <div className="col-md-12 nopad">
              <img src="http://dummyimage.com/250x250" className="img-responsive" />
            </div>
            <div className="col-md-12 nopad">
              <h5>Recipe Name</h5>
               <p>Recipe Description Goes Here...</p>
               <div className="rfooter">
                 <input className="btn btn-xs" type="submit" value="Edit Recipe" />
               </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 rwrapper">
         <div className="rlisting">
            <div className="col-md-12 nopad">
              <img src="http://dummyimage.com/250x250" className="img-responsive" />
            </div>
            <div className="col-md-12 nopad">
              <h5>Recipe Name</h5>
               <p>Recipe Description Goes Here...</p>
               <div className="rfooter">
                 <input className="btn btn-xs" type="submit" value="Edit Recipe" />
               </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
    )
  }
}

module.exports = {
  RecipeList
}
