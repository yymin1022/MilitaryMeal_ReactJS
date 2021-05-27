import React, {Component} from "react";

class RankItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){
    const rankList = this.props.rankList.map((rankItem) => {
        return(<li>{rankItem}</li>)
    });
  }

  render() {
    return(
      <div id="rankItem">
        <ul>{rankList}</ul>
      </div>
    )
  }
}

export default RankItem;