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
          menuList = {{
            "쌀밥": 100,
            "김치찌개": 100,
            "버섯볶음": 100,
            "오이무침": 100,
            }}
          menuType = "0" />
        <MenuItem
          menuDate = "20210527"
          menuList = {{
            "쌀밥": 100,
            "호박된장찌개": 100,
            "고등어순살조림": 100,
            "맛김": 100,
            }}
          menuType = "1" />
        <MenuItem
          menuDate = "20210527"
          menuList = {{
            "쌀밥": 100,
            "햄소시지찌개": 100,
            "닭고기양념튀김": 100,
            "배추김치": 100,
            }}
          menuType = "2" />
      </div>
    );
  }
}

export default MealView;