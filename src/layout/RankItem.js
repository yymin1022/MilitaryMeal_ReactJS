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
        <ul>{
                this.props.rankList.map((rankItem) =>
                    <li>{rankItem.toString()}</li>
                )
            }</ul>
      </div>
    )
  }
}

export default RankItem;