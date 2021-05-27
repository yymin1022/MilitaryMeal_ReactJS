import React, {Component} from "react";

class RankItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){
    this.rankList = this.props.rankList.map((rankItem) => {
        return(<li>{rankItem}</li>)
    });
  }

  render() {
    return(
      <div id="rankItem">
        <ul>{this.rankList}</ul>
      </div>
    )
  }
}

export default RankItem;