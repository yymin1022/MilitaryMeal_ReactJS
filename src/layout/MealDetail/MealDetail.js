import React from "react";
import PropTypes from "prop-types";

import styled, {createGlobalStyle} from "styled-components";

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

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 150px;
  padding-left: 50px;
  padding-right: 50px;

  height: 100%;
`;

const MealDetail = props => {
  const{
    className,
  } = props;
  
  return(
    <Container className={className}>
      <GlobalStyle />
      <div>
        MealDetail
      </div>
    </Container>
  );
}

MealDetail.propTypes = {
  className: PropTypes.string,
}

export default MealDetail;