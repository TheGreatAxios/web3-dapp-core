import { BigNumber } from 'ethers';
import styled from 'styled-components';
import { ICollection } from '../../../types';

interface Props {
  balance: BigNumber | undefined;
  collection: ICollection;
  owned: BigNumber[] | undefined;
}

const Container = styled.div`
  width: 45%;
  height: 100%;
  min-height: 35vh;
  position: relative;
`;

const Title = styled.h3`
  position: absolute;
  top: 5%;
  left: 5%;
`;

const User = (props: Props) => {

  return (
    <Container>
      <Title>User Information</Title>

    </Container>
  );
};

export default User;

