import React from "react";
import styled from 'styled-components';

interface Props {
  children: JSX.Element | JSX.Element[];
}


const PageTemplateContainer = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;


const PageTemplate = (props: Props) => {
  return (
    <PageTemplateContainer>
      {props.children}
    </PageTemplateContainer>
  );
};

export default PageTemplate;

