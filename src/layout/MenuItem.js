import React, {Component} from "react";

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div id="menuItem">
        <p>Menu Item Component Start</p>
        <h4>{this.props.menuType}</h4>
        <p>{this.props.menuList}</p>
        <p>Menu Item Component End</p>
      </div>
    )
  }
}

export default MenuItem;