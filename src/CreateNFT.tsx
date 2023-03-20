// src/CreateNFT.tsx
import React from 'react';
import { CreateEditionForm } from './CreateEditionForm';
import { createZoraInstance } from '../src/contracts/ZoraFactory';
import { Web3Provider } from '@ethersproject/providers';

interface CreateNFTProps {
  provider: Web3Provider;
  zoraNFTCreatorV1Address: string;
}

const CreateNFT: React.FC<CreateNFTProps> = ({ provider, zoraNFTCreatorV1Address }) => {
  const zoraInstance = createZoraInstance(provider, zoraNFTCreatorV1Address);

  const handleCreateEdition = async (formData: any) => {
    try {
      const {
        name,
        symbol,
        editionSize,
        royaltyBPS,
        fundsRecipient,
        defaultAdmin,
        description,
        animationURI,
        imageURI,
      } = formData;

      const editionAddress = await zoraInstance.createEdition(
        name,
        symbol,
        editionSize,
        royaltyBPS,
        fundsRecipient,
        defaultAdmin,
        { // IERC721Drop.SalesConfiguration (optional)
          // ... any sales configuration data
        },
        description,
        animationURI,
        imageURI
      );

      // Update the UI with a success message
      console.log('Edition created successfully. Address:', editionAddress);
    } catch (error) {
      // Update the UI with an error message
      console.error('Error creating edition:', error);
    }
  };

  const handleCreateDrop = async (formData: any) => {
    try {
      const {
        name,
        symbol,
        defaultAdmin,
        editionSize,
        royaltyBPS,
        fundsRecipient,
        metadataURIBase,
        metadataContractURI,
      } = formData;

      const dropAddress = await zoraInstance.createDrop(
        name,
        symbol,
        defaultAdmin,
        editionSize,
        royaltyBPS,
        fundsRecipient,
        { // IERC721Drop.SalesConfiguration (optional)
          // ... any sales configuration data
        },
        metadataURIBase,
        metadataContractURI
      );

      // Update the UI with a success message
      console.log('Drop created successfully. Address:', dropAddress);
    } catch (error) {
      // Update the UI with an error message
      console.error('Error creating drop:', error);
    }
  };

  // Render the CreateEditionForm component and pass the callback functions as props
  return (
    <CreateEditionForm onSubmitEdition={handleCreateEdition} onSubmitDrop={handleCreateDrop} />
  );
};

export default CreateNFT;
