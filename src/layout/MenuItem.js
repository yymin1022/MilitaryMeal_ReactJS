import React, {Component} from "react";
import {Link} from "react-router-dom";

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <Link to={{
        pathname: "/mealDetail",
        state: {
          mealDate: "",
          mealType: "",
        }
        }}>
        <div id="menuItem">
          <h4>{this.props.menuType}</h4>
          <p>{this.props.menuList}</p>
        </div>
      </Link>
      
    )
  }
}

export default MenuItem;