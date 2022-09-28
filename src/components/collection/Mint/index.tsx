import React, {useEffect, useRef, useState} from "react";
import { ICollection, ISaleContract, IToken } from '../../../types';
import styled from 'styled-components';
import { ethers, BigNumber, Contract } from "ethers";
import {useAccount, useProvider, useSigner} from "wagmi";

interface Props {
  collection: ICollection;
  sale: ISaleContract;
}


const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 35vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 90px; /* 40px - more place for scrollbar, is hidden under parent box */
  padding: 5px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
       display: none;
    }

`;


const nftAbi = [
  "function getMaxSupply() external view returns (uint256)",
  "function getCurrentSupply() external view returns (uint256)"
];

const saleAbi = [
  "function getTotalSales() external view returns (uint256)",
  "function mint(address to, uint256 mintAmount, address tokenAddress, uint256 tokenAmount)"
];

const erc20Abi = [
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function balanceOf(address account) external view returns (uint256)",
  "function allowance(address owner, address spender) external view returns (uint256)"
];

const OptionContainer = styled.div`
  width: 30%;
  height: 75%;
  position: relative;
  @media(max-width: 864px) {
    width: 85%;
    height: auto;
    min-height: 50%;
  }

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    background:linear-gradient(135deg, var(--secondary-color), var(--primary-color));
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
      mask-composite: exclude;
  }

`;

const MintButton = styled.div`
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Price = styled.p`
  position: absolute;
  top: 5%;
  left: 5%;
`;
const Balance = styled.p`
  position: absolute;
  top: 15%;
  left: 5%;
  @media(max-width: 864px) {
    top: 20%;
  }
`;

const Mint = (props: Props) => {

  // const wallets = useWallets();
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();

  const [supply, setSupply] = useState<{
    maxSupply: BigNumber | undefined,
    currentSupply: BigNumber | undefined
  }>({
    maxSupply: undefined,
    currentSupply: undefined
  });

  const [tokens, setTokens] = useState<{
    [key: string]: BigNumber;
  }>({});

  const [isMinting, setIsMinting] = useState<boolean>(false);

  const getBalances = async() => {

      let _balances: {[key: string]: BigNumber} = {};

      for (const t of Object.keys(props.sale.prices)) {
        const contract = new Contract(t, erc20Abi, new ethers.providers.JsonRpcProvider(props.collection.rpcUrl));
        _balances[t] = await contract.callStatic.balanceOf(address);
      }

      setTokens({
        ..._balances
      });
    }


  useEffect(() => {

    getBalances();

  }, [address])

  useEffect(() => {

    const interval = setInterval(async() => {

      const nftContract = new ethers.Contract(props.collection.address, nftAbi, new ethers.providers.JsonRpcProvider(props.collection.rpcUrl));

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

  if (!signer) {
    return (
      <Container>
        <p>Connect a Wallet</p>
      </Container>
    );
  }

  if (!supply.currentSupply || !supply.maxSupply) {
    return (
      <Container>
        <p>Loading Collection Details</p>
      </Container>
    );
  }

  if (!tokens || Object.entries(tokens).length === 0) {
    return (
      <Container>
        <p>Loading Purchase Options</p>
      </Container>
    );
  }

  if (supply.currentSupply === supply.maxSupply) {
    return (
      <Container>
        Sold Out
      </Container>
    );
  }

  if (isMinting) {
    return (
      <Container>
        <p>Minting &amp; Purchasing NFT</p>
      </Container>
    );
  }

  const mint = async(v: [string, IToken]) => {

    try {
      if (!signer) throw new Error("No Wallet");
      setIsMinting(true);
      const erc20 = new Contract(v[0], erc20Abi, signer);
      const saleContract = new Contract(props.sale.saleAddress, saleAbi, signer);
      const allowance: BigNumber = await erc20.callStatic.allowance(address, props.sale.saleAddress);
      const price: BigNumber = ethers.utils.parseEther(v[1].price);

      if (allowance !== price) {
        const approve = await erc20.approve(props.sale.saleAddress, price);
        await approve.wait(1);
      }

      const receipt = await saleContract.mint(address, 1, erc20.address, price);
      await receipt.wait(1);

      await getBalances();


    } catch (err) {
      alert("Error Minting NFT");
    } finally {
      setIsMinting(false);
    }
  }

  return (
    <Container>
      {Object.entries(props.sale.prices).length > 0 ? Object.entries(props.sale.prices).map((v: [string, IToken], index: number) => {
        return (
          <OptionContainer key={index} onClick={(e) => {
            e.preventDefault();
          }}>
            <Price>Price: {v[1].price} {v[1].symbol}</Price>
            <Balance>Your {v[1].symbol}: {ethers.utils.formatEther(tokens[v[0]]) ?? "Loading"}</Balance>
            <MintButton onClick={async(e) => {
              await mint(v);
            }}>Mint with {v[1].symbol}</MintButton>

          </OptionContainer>
        );
      }) : <p>No Options</p>}
    </Container>
  );
}

export default Mint;
