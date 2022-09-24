import './App.css';
import Router from './Router';
import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';

const ApplicationContainer = styled.div``;

function App() {
  return (
    <ApplicationContainer>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </ApplicationContainer>
  );
}

export default App;
