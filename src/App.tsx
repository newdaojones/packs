// App.tsx
import { dogechain, polygon, polygonMumbai } from '@wagmi/core/chains';
import { WagmiConfig, createClient, configureChains, mainnet, goerli } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { ProviderContextProvider } from './contexts/ProviderContext';
import { Web3Provider } from '@ethersproject/providers';
import { getApiKey } from './config';
import { CreateEditionForm } from './CreateEditionForm'; 


const { chains, provider } = configureChains(
  [goerli, mainnet, polygonMumbai, polygon, dogechain],
  [alchemyProvider({ apiKey: getApiKey() }), publicProvider()],
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  provider,
})

const castProvider = (provider: any): Web3Provider => {
  return provider as Web3Provider;
};

function App() {
  const handleCreateEdition = async (formData: any) => {
    // Handle form submission here, call your backend API to create an edition
  };

  const handleCreateDrop = async (formData: any) => {
    // Handle form submission here, call your backend API to create a drop
  };
  
  return (
    <WagmiConfig client={wagmiClient}>
      <ProviderContextProvider provider={provider as any}>
        <CreateEditionForm 
          onSubmitEdition={handleCreateEdition}
          onSubmitDrop={handleCreateDrop}
        />
        {/* Your routes and components go here */}
      </ProviderContextProvider>
    </WagmiConfig>
  );
}

export { provider };
export default App;
