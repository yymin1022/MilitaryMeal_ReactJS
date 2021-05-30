import React, {Component} from 'react';

class MenuDetail extends Component{
    UNSAFE_componentWillMount(){
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
        const GlobalStyle = createGlobalStyle`
            html, body {
                height: 100%
            }
            body {
                padding: 0;
                margin: 0;
            }
            #root {
                height: 100%;
            }
            `;

        return(
            <div className="MenuDetail">
              <GlobalStyle />
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