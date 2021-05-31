import React, {Component} from 'react';
import {If, Then} from "react-if";

import RankItem from "/home/server/ui/src/layout/RankItem";

class RankView extends Component{
  UNSAFE_componentWillMount(){
    this.isSessionOK = this.props.location.state.isSessionOK;
  }

  render(){
    this.rankList = ["햄소찌", "맛김", "돼김볶"];

    return(
      <div className="RankView">
        <If condition={!this.isSessionOK}>
          <Then>
            <Redirect to="/login" />
          </Then>
        </If>
        <RankItem 
          rankList = {this.rankList}/>
      </div>
    );
  }
}

export default RankView;