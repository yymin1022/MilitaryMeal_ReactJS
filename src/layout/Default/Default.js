import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {createGlobalStyle} from "styled-components";

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

const Default = props => {
  const{
    className,
    children,
  } = props;
  
  return(
    <div className={className}>
      <GlobalStyle />
      <div className="Header">
        <Link to="/">
          <div>MealView</div>
        </Link>
        <Link to="/rank">
          <div>RankView</div>
        </Link>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

Default.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Default;