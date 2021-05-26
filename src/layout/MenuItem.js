import React, {Component} from "react";

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div id="menuItem">
        <p>Menu Item Component</p>
        <p>{this.props.menuType}</p>
        <p>{this.props.menuList}</p>
      </div>
    )
  }
}

export default MenuItem;