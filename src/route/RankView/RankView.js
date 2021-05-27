import React, {Component} from 'react';

import RankItem from "/home/server/ui/src/layout/RankItem";

class RankView extends Component{
  componentDidMount(){
    this.rankList = ["햄소찌", "맛김", "돼김볶"];
  }

  render(){
    return(
      <div className="RankView">
        <RankItem 
          rankList = {this.rankList}/>
      </div>
    );
  }
}

export default RankView;