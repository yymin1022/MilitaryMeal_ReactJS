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
        <ul>
          {
                this.props.rankList.map((rankItem) =>
                  <li>{rankItem.toString()}</li>
                )
          }
        </ul>
      </div>
    )
  }
}

export default RankItem;