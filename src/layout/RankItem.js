import React, {Component} from "react";

class RankItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
      this.rankList = 
  }

  render() {
    return(
      <div id="rankItem">
        <ul>
            {
                this.props.rankList.map((rankItem) => {
                    return(<li>{rankItem}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}

export default RankItem;