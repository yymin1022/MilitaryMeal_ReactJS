import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class LoginView extends Component{
  constructor() {
    super();
    this.state = {};
  }

  render(){
    return(
      <div className="MealView">
        LoginView
      </div>
    );
  }
}

export default withRouter(LoginView);