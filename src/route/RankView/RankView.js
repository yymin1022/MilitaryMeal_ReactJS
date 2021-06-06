import React, {Component} from 'react';

import SessionCheck from "/home/server/ui/src/SessionCheck";
import RankItem from "/home/server/ui/src/layout/RankItem";

class RankView extends Component{
  UNSAFE_componentWillMount(){
    try{
      this.currentSession = this.props.location.state.currentSession;
    }catch(error){
      this.currentSession = "NO_SESSION"
    }
  }

  render(){
    this.rankList = ["햄소찌", "맛김", "돼김볶"];

    return(
      <div className="RankView">
        <SessionCheck currentSession={this.currentSession}/>
        <RankItem 
          currentSession = {this.currentSession}
          rankList = {this.rankList}/>
      </div>
    );
  }
}

export default RankView;