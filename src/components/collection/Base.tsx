import styled from 'styled-components';
import { ICollection, ISaleContract } from '../../types';
import About from './About';
import Mint from './Mint';
import User from './User';
import { ethers, BigNumber } from 'ethers';
import { useAccount, useSigner } from 'wagmi';
import { useState, useEffect } from 'react';

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 40vh;
  h2 {
    padding: 16px 0;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

interface ISupply {
  maxSupply: BigNumber | undefined;
  currentSupply: BigNumber | undefined;
}

const nftAbi = [
  "function getMaxSupply() external view returns (uint256)",
  "function getCurrentSupply() external view returns (uint256)"
];

const CollectionBase = ({ collection, sale }: { collection: ICollection, sale: ISaleContract | undefined }) => {

  const [supply, setSupply] = useState<ISupply>({
    maxSupply: undefined,
    currentSupply: undefined
  });

  useEffect(() => {

    const interval = setInterval(async() => {

      const nftContract = new ethers.Contract(collection.address, nftAbi, new ethers.providers.JsonRpcProvider(collection.rpcUrl));

      const [ max, current, ] = await Promise.all([ //currentSales
        nftContract.callStatic.getMaxSupply(),
        nftContract.callStatic.getCurrentSupply(),
      ]);

      setSupply({
        maxSupply: max,
        currentSupply: current
      });
    }, 5000);

    return () => clearInterval(interval);

  }, [])

  return (
    <Container>
      {sale && <h2>Purchase &amp; Mint Options</h2>}
      {sale &&
        <Row>
          <Mint supply={supply} collection={collection} sale={sale} />
          {/* <User balance={BigNumber.from(0)} collection={collection} owned={[]} /> */}
        </Row>
      }
      <Row>
        <About supply={supply} collection={collection} />
      </Row>
    </Container>
  );
}

export default CollectionBase;
