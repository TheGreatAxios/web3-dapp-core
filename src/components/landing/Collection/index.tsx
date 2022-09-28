import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import { ICollection } from '../../../types';

const Container = styled.div`
  width: 22.5%;
  height: 300px;
  background-image:
    linear-gradient(to bottom right, var(--background-color), rgba(117, 19, 93, 0.73)),
    url('https://s.yimg.com/os/creatr-uploaded-images/2022-01/6e29fa70-72d8-11ec-b93a-7087dedb505b');
  background-size: cover;
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
  position: relative;
  @media(max-width: 864px) {
    width: 47.5%;
    margin: 4px 0;
    height: 150px;
  }
`;

const CollectionName = styled.h4``;
const CollectionSymbol = styled.p`
  color: var(--accent-color);
  font-size: 1rem;
`;
const CollectionType = styled.p`
  color: var(--secondary-color);
`;

const CollectionAbout = styled.div`
  position: absolute;
  top: 2.5%;
  left: 2.5%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const CollectionAboutRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export default({ collection } : { collection: ICollection }) => {

  const navigate = useNavigate();

  return (
    <Container onClick={(e) => {
      e.preventDefault();
      navigate(`/collection/${collection.chainId}/${collection.address}`);
    }}>
      <CollectionAbout>
        <CollectionName>{collection.name}</CollectionName>
        <CollectionAboutRow>
          <CollectionType>{collection.type.toUpperCase()}</CollectionType>
          <span style={{ width: '5px' }} />
          {collection.symbol && <CollectionSymbol>{collection.symbol}</CollectionSymbol>}
        </CollectionAboutRow>
      </CollectionAbout>
    </Container>
  );
};
