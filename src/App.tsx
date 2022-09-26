import Navigation from "./components/navigation/Navigation";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/Landing";
import CollectionPage from "./pages/Collection";
import {Collections} from "./config";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;

`;

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
          <Route path='/' element={ <LandingPage collections={Collections}/> } />
          <Route path='/collection/:chainId/:contractAddress' element={ <CollectionPage /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App
