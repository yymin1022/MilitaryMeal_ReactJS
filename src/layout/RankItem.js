import React, {Component} from "react";

class RankItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
      this.rankList = this.props.rankList;
  }

  render() {
    return(
      <div id="rankItem">
        RankItem Component
        <p>{this.rankList}</p>
      </div>
    )
  }
}

export default RankItem;