import React, {Component} from "react";
import {Link} from "react-router-dom";

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
    this.menuDate = this.props.menuDate;
    this.menuList = this.props.menuList;

    switch(this.props.menuType){
      case 0:
        this.menuType = "조식";
        break;
      case 1:
        this.menuType = "중식";
        break;
      case 2:
        this.menuType = "석식";
        break;
    }
  }

  render() {
    return(
      <div id="menuItem">
        <Link to={{
          pathname: "/mealDetail",
          state: {
            menuDate: this.menuDate,
            menuType: this.props.menuType,
          }
          }}>
            <h4>{this.menuType}</h4>
        </Link>
        
        <p>{this.menuList}</p>
      </div>
    )
  }
}

export default MenuItem;