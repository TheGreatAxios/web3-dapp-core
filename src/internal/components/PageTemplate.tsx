import React from "react";
import styled from 'styled-components';
import {Navigation} from "./Navgiation";

interface Props {
  children: JSX.Element | JSX.Element[];
}


const PageTemplateContainer = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;


export const PageTemplate = (props: Props) => {
  return (
    <PageTemplateContainer>
      <Navigation />
      {props.children}
    </PageTemplateContainer>
  );
};
