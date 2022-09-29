import { useState } from "react";
import styled from 'styled-components';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Container = styled.div`
  width: 85%;
  height: 100%;
  padding: 0px;
  margin-right: 32px;
`;

const Web3Button = () => {
  return (
    <Container>
      <ConnectButton />
    </Container>
  );
};

export default Web3Button;
