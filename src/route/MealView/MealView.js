import React, {Component} from 'react';

import MenuItem from "/home/server/ui/src/layout/MenuItem";

class MealView extends Component{
  render(){
    return(
      <div className="MealView">
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

export default MealView;