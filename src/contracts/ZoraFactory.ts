//ZoraFactor.ts
import { Contract } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import ZoraNFTCreatorV1 from '@zoralabs/nft-drop-contracts/dist/artifacts/ZoraNFTCreatorV1.t.sol/ZoraNFTCreatorV1Test.json';
 


export const createZoraInstance = (provider: Web3Provider, zoraNFTCreatorV1Address: string) => {
  const signer = provider.getSigner();
  const zoraInstance = new Contract(zoraNFTCreatorV1Address, ZoraNFTCreatorV1.abi, signer);

  return zoraInstance;
};