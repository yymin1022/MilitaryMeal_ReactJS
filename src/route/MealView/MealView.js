import React, {Component} from 'react';

import MenuItem from "/home/server/ui/src/layout/MenuItem";
import SessionCheck from "/home/server/ui/src/SessionCheck";

class MealView extends Component{
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
    // this.currentSession = this.props.location.state.currentSession;
  }

  render(){
    return(
      <div className="MealView">
        {/* <SessionCheck currentSession={this.currentSession}/> */}
        <MenuItem
          menuDate = "20210527"
          menuList = {
            {name: "쌀밥",
            calory: 100},
            {name: "김치찌개",
            calory: 100},
            {name: "버섯볶음",
            calory: 100},
            {name: "오이무침",
            calory: 100}
            }
          menuType = "0" />
        <MenuItem
          menuDate = "20210527"
          menuList = {
            {name: "쌀밥",
            calory: 100},
            {name: "호박된장찌개",
            calory: 100},
            {name: "맛김",
            calory: 100},
            {name: "고등어순살조림",
            calory: 100}
            }
          menuType = "1" />
        <MenuItem
          menuDate = "20210527"
          menuList = {
            {name: "쌀밥",
            calory: 100},
            {name: "햄소시지찌개",
            calory: 100},
            {name: "닭고기양념튀김",
            calory: 100},
            {name: "배추김치",
            calory: 100}
            }
          menuType = "2" />
      </div>
    );
  }
}

export default MealView;