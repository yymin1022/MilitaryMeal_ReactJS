import React, {Component} from 'react';

import MenuItem from "/home/server/ui/src/layout/MenuItem";
import SessionCheck from "/home/server/ui/src/SessionCheck";

class MealView extends Component{
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
    this.currentSession this.currentSession = this.props.location.state.currentSession;
  }

  render(){
    return(
      <div className="MealView">
        <SessionCheck currentSession={this.currentSession}/>
        <MenuItem
          menuDate = "20210527"
          menuList = "맛김"
          menuType = "0" />
        <MenuItem
          menuDate = "20210527"
          menuList = "돼김볶"
          menuType = "1" />
        <MenuItem
          menuDate = "20210527"
          menuList = "햄소찌"
          menuType = "2" />
      </div>
    );
  }
}

MealView.defaultProps = {
    currentSession: "NO_LOGIN"
};

export default MealView;