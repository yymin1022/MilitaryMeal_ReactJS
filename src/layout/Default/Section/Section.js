import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  height: 100%;
`;

const Section = props => {
  const {
    className,
    children,
  } = props;
  
  return (
    <Container className={ className }>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Section;
