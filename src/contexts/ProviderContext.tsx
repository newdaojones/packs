// ProviderContext.tsx
import { createContext, useContext, ReactNode } from 'react';
import { Web3Provider } from '@ethersproject/providers';

interface ProviderContextProps {
  provider: Web3Provider;
  children: ReactNode;
}

const ProviderContext = createContext<Web3Provider | null>(null);

export const useProvider = (): Web3Provider => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('useProvider must be used within a ProviderContextProvider');
  }
  return context;
};

export const ProviderContextProvider: React.FC<ProviderContextProps> = ({ provider, children }) => {
  return <ProviderContext.Provider value={provider}>{children}</ProviderContext.Provider>;
};
