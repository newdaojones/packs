// App.tsx
import { dogechain, polygon, polygonMumbai } from '@wagmi/core/chains';
import { WagmiConfig, createClient, configureChains, mainnet, goerli } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { ProviderContextProvider } from './contexts/ProviderContext';

const { chains, provider } = configureChains(
  [goerli, mainnet, polygonMumbai, polygon, dogechain],
  [alchemyProvider({ apiKey: 'vYDLoMGpRw9OVSL7-xYVj-0nMWF4_dk' }), publicProvider()],
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  provider,
})

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <ProviderContextProvider provider={provider as any}>
        {/* Your routes and components go here */}
      </ProviderContextProvider>
    </WagmiConfig>
  );
}

export { provider };
export default App;
