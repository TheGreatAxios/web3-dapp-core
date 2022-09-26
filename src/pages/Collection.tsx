import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../internal/Layout';
import { useParams } from 'react-router-dom';
import {ISaleContract} from '../types';
import {SaleContracts} from '../config';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  position: relative;
`;

const CollectionPage = () => {

  const { chainId, contractAddress } = useParams();
  const [sale, setSale] = useState<ISaleContract | undefined>(undefined);

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

    loadSale();


  }, []);

  return (
    <Container>
      <Layout>
        <p>Collection Page</p>
      </Layout>
    </Container>
  );
}

export default CollectionPage;
