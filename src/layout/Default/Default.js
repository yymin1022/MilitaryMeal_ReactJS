import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import "./Default.css";

const Default = props => {
  const{
    className,
    children,
  } = props;
  
  return(
    <div className={className}>
      <div className="Header">
        <div className="HeaderLogo">
          LOGO
        </div>
        <div className="HeaderNav">
          <Link to="/">
            <div>MealView</div>
          </Link>
          <Link to="/rank">
            <div>RankView</div>
          </Link>
        </div>
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