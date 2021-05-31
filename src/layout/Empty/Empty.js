import React from "react";

const Container = styled.div`
  padding-top: 100px;
  padding-bottom: 150px;
  padding-left: 50px;
  padding-right: 50px;

  height: 100%;
`;

const Empty = props => {
  const{
  } = props;
  
  return(
    <Container className={className}>
      <div>
        {children}
      </div>
    </Container>
  );
}

export default Empty;