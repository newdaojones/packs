// src/CreateEditionForm.tsx
import React, { useState } from 'react';

interface CreateEditionFormProps {
  onSubmitEdition: (formData: any) => void;
  onSubmitDrop: (formData: any) => void;
}

export const CreateEditionForm: React.FC<CreateEditionFormProps> = ({ onSubmitEdition, onSubmitDrop }) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  // Add more state variables for other form fields as needed
  const [editionSize, setEditionSize] = useState('');
  const [royaltyBPS, setRoyaltyBPS] = useState('');
  const [fundsRecipient, setFundsRecipient] = useState('');
  const [defaultAdmin, setDefaultAdmin] = useState('');
  const [description, setDescription] = useState('');
  const [animationURI, setAnimationURI] = useState('');
  const [imageURI, setImageURI] = useState('');
  
  const [formType, setFormType] = useState<'edition' | 'drop'>('edition');


  const handleEditionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitEdition({
      name,
      symbol,
      editionSize,
      royaltyBPS,
      fundsRecipient,
      defaultAdmin,
      description,
      animationURI,
      imageURI,
    });
  };

  const handleDropSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitDrop({
      name,
      symbol,
      editionSize,
      royaltyBPS,
      fundsRecipient,
      defaultAdmin,
      description,
      animationURI,
      imageURI,
    });
  };

  return (
    <div className="form-container">
      <div className="column">
        <h2>Create Edition</h2>
        <form onSubmit={handleEditionSubmit}>
          {/* Add form elements for creating an edition */}
          <div>
            <input
              type="radio"
              id="edition"
              name="formType"
              value="edition"
              checked={formType === 'edition'}
              onChange={() => setFormType('edition')}
            />
            <label htmlFor="edition">Edition</label>
          </div>
          <button type="submit">Create Edition</button>
        </form>
      </div>
      <div className="column">
        <h2>Create Drop</h2>
        <form onSubmit={handleDropSubmit}>
          {/* Add form elements for creating a drop */}
          <div>
            <input
              type="radio"
              id="drop"
              name="formType"
              value="drop"
              checked={formType === 'drop'}
              onChange={() => setFormType('drop')}
            />
            <label htmlFor="drop">Drop</label>
          </div>
          <button type="submit">Create Drop</button>
        </form>
      </div>
    </div>
  );
  
};
