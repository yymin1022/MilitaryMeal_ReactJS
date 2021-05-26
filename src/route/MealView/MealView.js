import React, {Component} from 'react';

import MenuItem from "/home/server/ui/src/layout/MenuItem";

class MealView extends Component{
  render(){
    return(
      <div className="MealView">
        <MenuItem
          menuType = "조식"
          menuList = "맛김" />
        <MenuItem
          menuType = "중식"
          menuList = "돼김볶" />
        <MenuItem
          menuType = "석식"
          menuList = "햄소찌" />
      </div>
    );
  }
}

export default MealView;