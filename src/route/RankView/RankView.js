import React, {Component} from 'react';

import SessionCheck from "/home/server/ui/src/SessionCheck";
import RankItem from "/home/server/ui/src/layout/RankItem";

class RankView extends Component{
  UNSAFE_componentWillMount(){
    this.currentSession = "NO_LOGIN";
    if(this.props.location.state.currentSession !== undefined){
      this.currentSession = this.props.location.state.currentSession;
    }
  }

  render(){
    this.rankList = ["햄소찌", "맛김", "돼김볶"];

    return(
      <div className="RankView">
        <SessionCheck currentSession={this.currentSession}/>
        <RankItem 
          rankList = {this.rankList}/>
      </div>
    );
  }
}

export default RankView;