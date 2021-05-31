import React, {Component} from 'react';
import {If, Then} from "react-if";
import {Redirect} from 'react-router-dom';

class MenuDetail extends Component{
    UNSAFE_componentWillMount(){
        this.currentSession = this.props.location.state.currentSession;

        if(this.currentSession == "TEST_SESSION"){
          isSessionOK = true;
        }

        this.menuDate = this.props.location.state.menuDate;
        this.menuList = this.props.location.state.menuList;
    
        switch(this.props.location.state.menuType){
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

    render(){
        return(
            <div className="MenuDetail">
                <If condition={!this.isSessionOK}>
                <Then>
                    <Redirect to="/login" />
                </Then>
                </If>
              <div>
                <h3>MenuDetail</h3>
                <h4>{this.menuDate} / {this.menuType}</h4>
                <p>{this.menuList}</p>
              </div>
            </div>
        );
  }
}

export default MenuDetail;