import React from "react";
import { ICollection } from '../../../types';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  height: auto;
  min-height: 35vh;
  background: none;
  position: relative;

  @media(max-width: 864px) {
    margin-top: 16px;
    width: 100%;
  }

  &:before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 0 16px 16px 0;
  padding: 2px;
  background:linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  -webkit-mask:
     linear-gradient(#fff 0 0) content-box,
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
    mask-composite: exclude;

   @media(max-width: 864px) {
      border-radius: 16px;
    }
  }

`;

const GraphicsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  img {
    width: 25%;
    height: auto;
  }
`;

const GraphicsTitle = styled.h3`
  padding: 32px;
  width: 100%;

  @media(max-width: 864px) {
    padding: 16px 0;
    text-align: center;
  }
`;

interface IProps {
  collection: ICollection;
}

const Graphics = (props: IProps) => {
  return (
    <Container>
      <GraphicsTitle>Project Graphics</GraphicsTitle>
      <GraphicsList>
        {props.collection.graphics && props.collection.graphics.map((graphic: string, index: number) => {
          return <img src={graphic} key={index} alt={graphic} />
        })}
      </GraphicsList>
    </Container>
  );
};

export default Graphics;

