import React, {Component} from 'react';
import {If, Then} from "react-if";
import {Redirect} from 'react-router-dom';

import MenuItem from "/home/server/ui/src/layout/MenuItem";

class MealView extends Component{
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
    this.currentSession = this.props.location.state.currentSession;

    if(this.currentSession == "TEST_SESSION"){
      isSessionOK = true;
    }
  }

  render(){
    return(
      <div className="MealView">
        <If condition={!this.isSessionOK}>
          <Then>
            <Redirect to="/login" />
          </Then>
        </If>
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