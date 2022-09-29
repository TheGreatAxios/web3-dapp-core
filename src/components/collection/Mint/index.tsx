import { useEffect, useState } from "react";
import { ICollection, ISaleContract, IToken } from '../../../types';
import styled from 'styled-components';
import { ethers, BigNumber, Contract } from "ethers";
import { useAccount, useSigner } from "wagmi";

interface Props {
  collection: ICollection;
  sale: ISaleContract;
  supply: ISupply;
}

interface ISupply {
  maxSupply: BigNumber | undefined;
  currentSupply: BigNumber | undefined;
}

const Container = styled.div<{
  backgroundURI?: string | null | undefined
}>`
  width: 100%;
  height: auto;
  min-height: 25vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 90px; /* 40px - more place for scrollbar, is hidden under parent box */
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  ${(props) => {
  if (props.backgroundURI) {
    return `
      background: url(${props.backgroundURI});
      background-size: cover;
      background-repeat: no-repeat;
    `;
    }
  }};
  .temporary {
    color: var(--primary-color);
    background: var(--background-color);
    width: 100%;
    height: 100%;
    opacity: 0.85;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
  }
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
  height: 100%;
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

  const { address } = useAccount();
  const { data: signer } = useSigner();
  const { ...supply } = props.supply;

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

  const backgroundURI: string | null | undefined = props.collection.graphics[0];

  if (!signer) {
    return (
      <Container backgroundURI={backgroundURI}>
        <p className="temporary" >Connect a Wallet</p>
      </Container>
    );
  }

  if (!supply.currentSupply || !supply.maxSupply) {
    return (
      <Container backgroundURI={backgroundURI} >
        <p className='temporary'>Loading Collection Details</p>
      </Container>
    );
  }

  if (!tokens || Object.entries(tokens).length === 0) {
    return (
      <Container backgroundURI={backgroundURI} >
        <p className="temporary">Loading Purchase Options</p>
      </Container>
    );
  }

  if (supply.currentSupply === supply.maxSupply) {
    return (
      <Container backgroundURI={backgroundURI} >
        <p className="temporary">Sold Out</p>
      </Container>
    );
  }

  if (isMinting) {
    return (
      <Container backgroundURI={backgroundURI}>
        <p className="temporary">Minting &amp; Purchasing NFT</p>
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
            <Balance>Your {v[1].symbol} Balance: {ethers.utils.formatEther(tokens[v[0]]) ?? "Loading"}</Balance>
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
