import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  position: absolute;
  top: 2.5%;
  left: 12.5%;
  right: 12.5%;
  height: auto;
  min-height: 100vh;
`;

const SubContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = (props: Props) => {
  return (
    <Container>
      <SubContainer>
        {props.children}
      </SubContainer>
    </Container>
  );
};

export default Layout;
