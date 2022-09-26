import styled from 'styled-components';
import Collection from "../Collection";
import { ICollection } from '../../../types';

const Container = styled.div`
  width: 75%;
  height: auto;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;
const CollectionsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 8px 0;
`;


const Collections = ({ collections } : { collections: ICollection[] }) => {
  return (
    <Container>
      <h2>Collections</h2>
      <CollectionsRow>
        {collections && collections.length > 0 && collections.map((coll: ICollection, index: number) => {
          return Collection({ collection: coll });
        })}
      </CollectionsRow>
    </Container>
  );
};

export default Collections;

