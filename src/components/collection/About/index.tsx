import styled from 'styled-components';
import {ICollection} from '../../../types';
import Row from './Row';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 16px 0 0 16px;
  @media(max-width: 864px) {
    width: 100%;
    max-width: 100%;
    padding: 8px 0;
    border-radius: 16px;
  }

`;

const AboutTitle = styled.h3`
  padding: 32px;
  width: 100%;

  @media(max-width: 864px) {
    padding: 16px 0;
    text-align: center;
  }
`;


const About = ({ collection }: { collection: ICollection }) => {
  return (
    <Container>
      <AboutTitle>About the Collection</AboutTitle>
      <Row label="Collection Name" value={collection.name} />
      {collection.symbol && <Row label="Collection Symbol" value={collection.symbol} />}
      <Row label="Collection Type" value={collection.type.toUpperCase()} />
      <Row label="Contract Address" value={collection.address} />
    </Container>
  );
}
export default About;
