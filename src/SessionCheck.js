import React, {Component} from 'react';
import {If, Then} from "react-if";
import {Redirect} from 'react-router-dom';

class SessionCheck extends Component{
  constructor() {
    super();
    this.state = {};
  }

  UNSAFE_componentWillMount(){
    if(this.props.currentSession){
      this.currentSession = this.props.currentSession;

      if(this.currentSession == "TEST_SESSION"){
          this.isSessionOK = true;
      }
    }else{
      this.isSessionOK = false;
    }
    
  }

  render(){
    return(
        <If condition={!this.isSessionOK}>
            <Then>
                <Redirect to="/login" />
            </Then>
        </If>
    );
  }
}

export default SessionCheck;