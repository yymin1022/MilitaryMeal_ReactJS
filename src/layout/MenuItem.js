import React, {Component} from "react";

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div id="menuItem">
        <h4>{this.props.menuType}</h4>
        <p>{this.props.menuList}</p>
      </div>
    )
  }
}

export default MenuItem;