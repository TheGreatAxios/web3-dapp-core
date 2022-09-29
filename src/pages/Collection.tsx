import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../internal/Layout';
import { useParams } from 'react-router-dom';
import { ICollection, ISaleContract } from '../types';
import { Collections, SaleContracts } from '../config';
import CollectionBase from '../components/collection/Base';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
`;

const CollectionPage = () => {

  const { chainId, contractAddress } = useParams();
  const [sale, setSale] = useState<ISaleContract | undefined>(undefined);
  const [collection, setCollection] = useState<ICollection | undefined>(undefined);

  useEffect(() => {

    const loadSale = () => {
      if (!chainId || !contractAddress) {
        throw new Error("ERROR");
      }
      const _sale: ISaleContract | undefined = SaleContracts[chainId][contractAddress];
      if (_sale) {
        setSale(_sale);
      }
    }

    const loadCollection = () => {

      const _collection: ICollection | undefined = Collections.find((coll: ICollection) => {
        if (coll.chainId.toString() === chainId && coll.address === contractAddress) {
          return coll;
        }
      });

      setCollection(_collection);
    }

    loadCollection();
    loadSale();
  }, []);

  if (!collection) {
    return (
      <Container>
        <Layout>
          <p>Collection Unsupported</p>
        </Layout>
      </Container>
    );
  }

  return (
    <Container>
      <Layout>
        <CollectionBase collection={collection} sale={sale} />
      </Layout>
    </Container>
  );
}

export default CollectionPage;
