import React, {Dispatch, SetStateAction} from "react";
import styled from "styled-components";
import { IToken } from '../../../types';
import { CheckBox, CheckBoxOutlineBlank } from '@styled-icons/material';

interface Props {
  setSelectedToken: any; //Dispatch<SetStateAction<string | undefined>>;
  selected: string | undefined;
  tokens: {[key: string]: IToken }
}

const Container = styled.div`
  width: 25%;
  position: absolute;
  top: 5%;
  bottom: 5%;
  height: 90%;
  left: 5%;
`;

const TokenContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  min-height: 20%;
  border-bottom: 1px solid var(--primary-color);
`;

const Row = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Selection = styled.div`
  width; 25%;
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
`;
const Symbol = styled.p`
  font-weight: 400;
  font-size: 0.85rem;
  color: var(--secondary-color);
`;

const Tokens = (props: Props) => {
  return (
    <Container>
      {props.tokens && Object.entries(props.tokens).map((token: any, index: number) => {

        const address: string = token[0];
        const isSelected: boolean = address === props.selected;
        const details: IToken = token[1];

        return (
          <TokenContainer>
            <Row>
              <span style={{ width: '5px' }} />
              <Name>{details.name}</Name>
              <span style={{ width: '5px' }} />
              <span style={{ width: '5px' }} />
              <Symbol>{details.price} {details.symbol}</Symbol>
            </Row>
            <Selection key={index} onClick={(e) => {
            e.preventDefault();
            if (isSelected) {
              props.setSelectedToken(undefined);
            } else {
              props.setSelectedToken(address);
            }
          }}>
              {isSelected ? <CheckBox size="36" color="white"/>  : <CheckBoxOutlineBlank size="36" color="var(--accent-color)" />}
            </Selection>
          </TokenContainer>
        );
      })}
    </Container>
  );
};

export default Tokens;

