import Navigation from "./components/navigation/Navigation";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/Landing";
import CollectionPage from "./pages/Collection";
import { Collections } from "./config";
import './config/web3';
import { WagmiConfig } from "wagmi";
import { wagmiClient, appChains } from "./config/web3";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
/**
 *
 * Web3 Imports
 *
 */
function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={appChains}>
        <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path='/' element={ <LandingPage collections={Collections}/> } />
              <Route path='/collection/:chainId/:contractAddress' element={ <CollectionPage /> } />
            </Routes>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App
