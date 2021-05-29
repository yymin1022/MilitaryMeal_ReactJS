import React, {Component} from "react";

class RankItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div id="rankItem">
        <ul>
                {
                // this.props.rankList.map((rankItem) =>
                //     <li>{rankItem.toString()}</li>
                // )
                }
                <li>{this.props.rankList[0]}</li>
                <li>{this.props.rankList[1]}</li>
            </ul>
      </div>
    )
  }
}

export default RankItem;