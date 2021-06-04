import React, {Component} from "react";
import {Link} from "react-router-dom";
import {If, Else, Then} from "react-if";

import {faThumbsUp as faThumbON} from "@fortawesome/free-solid-svg-icons";
import {faThumbsUp as faThumbOFF} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./MenuItem.css";

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
    this.menuDate = this.props.menuDate;
    this.menuList = this.props.menuList;

    switch(this.props.menuType){
      case "0":
        this.menuType = "조식";
        break;
      case "1":
        this.menuType = "중식";
        break;
      case "2":
        this.menuType = "석식";
        break;
    }
  }

  render() {
    return(
      <Link
        className="menuLink"
        to={{
          pathname: "/menuDetail",
          state: {
            currentSession: "TEST_SESSION",

            menuDate: this.menuDate,
            menuList: this.menuList,
            menuType: this.props.menuType,
          }
        }}>
        <div id="menuItem">
          <div className="menuTitle">
            <p>{this.menuType}</p>
          </div>
          <div className="menuContent">
          {
            this.menuList.map(menuData => {
              return(
                <div className="menuElement">
                  <div className="menuElementName">
                    <p>{menuData.name}</p>
                  </div>
                  <div className="menuElementCalory">
                    <p>{menuData.calory}kcal</p>
                  </div>
                  <div className="menuElementThumb">
                    <If condition={menuData.isLiked}>
                      <Then>
                        <FontAwesomeIcon className="iconThumb" icon={faThumbON} />
                      </Then>
                      <Else>
                        <FontAwesomeIcon className="iconThumb" icon={faThumbOFF} />
                      </Else>
                    </If>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </Link>
    )
  }
}

export default MenuItem;