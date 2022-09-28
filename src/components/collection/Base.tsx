import styled from 'styled-components';
import { ICollection, ISaleContract } from '../../types';
import About from './About';
import Graphics from './Graphics';
import Mint from './Mint';

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 40vh;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const CollectionBase = ({ collection, sale }: { collection: ICollection, sale: ISaleContract | undefined }) => {

  return (
    <Container>
      <Row>
        {sale && <Mint collection={collection} sale={sale} />}
      </Row>
      <Row>
        <About collection={collection} />
        {/* <Graphics collection={collection} /> */}
      </Row>
    </Container>
  );
}

export default CollectionBase;
