import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 150px;
  padding-left: 50px;
  padding-right: 50px;

  height: 100%;
`;

const Empty = props => {
  const{
    className,
    children,
  } = props;
  
  return(
    <Container className={className}>
      <div>
        {children}
      </div>
    </Container>
  );
}

Empty.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Empty;