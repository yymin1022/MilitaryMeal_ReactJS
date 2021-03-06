import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LoginView extends Component{
  constructor() {
    super();
    this.state = {};
  }

  render(){
    return(
      <div className="LoginView">
        <Link to={{
          pathname: "/",
          state: {
            currentSession: "TEST_SESSION"
          }
        }}>
          <button type="btnLogin">
            Login(Success)
          </button>
        </Link>
        <Link to={{
          pathname: "/",
          state: {
            currentSession: "TEST_FAIL_SESSION"
          }
        }}>
          <button type="btnLogin">
            Login(Fail)
          </button>
        </Link>
      </div>
    );
  }
}

export default LoginView;