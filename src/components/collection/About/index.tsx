import {BigNumber} from 'ethers';
import styled from 'styled-components';
import { ICollection } from '../../../types';
import Row from './Row';

interface ISupply {
  maxSupply: BigNumber | undefined;
  currentSupply: BigNumber | undefined;
}

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
  @media(max-width: 864px) {
    width: 100%;
    max-width: 100%;
    padding: 8px 0;
  }

`;

const AboutTitle = styled.h3`
  padding: 16px;
  width: 100%;

  @media(max-width: 864px) {
    padding: 16px 0;
    text-align: center;
  }
`;


const About = ({ collection, supply }: { supply: ISupply, collection: ICollection }) => {
  return (
    <Container>
      <AboutTitle>About the Collection</AboutTitle>
      <Row label="Collection Name" value={collection.name} />
      {collection.symbol && <Row label="Collection Symbol" value={collection.symbol} />}
      <Row label="Collection Type" value={collection.type.toUpperCase()} />
      <Row label="Contract Address" value={collection.address} />
      {supply.maxSupply && supply.currentSupply && <Row label="Collection Supply (Minted/Maximum)" value={`${supply.currentSupply.toNumber()}/${supply.maxSupply.toNumber()}`} />}
    </Container>
  );
}

export default About;
