// src/CreateEditionForm.tsx
import React, { useState } from 'react';

interface CreateEditionFormProps {
  onSubmit: (formData: any) => void;
}

export const CreateEditionForm: React.FC<CreateEditionFormProps> = ({ onSubmit }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      symbol,
      editionSize,
      royaltyBPS,
      fundsRecipient,
      defaultAdmin,
      description,
      animationURI,
      imageURI,
      // Pass the values of other form fields as needed
    });
  };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

    <label htmlFor="symbol">Symbol:</label>
    <input type="text" id="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />

    {/* Add more form fields */}
    <label htmlFor="editionSize">Edition Size:</label>
    <input type="number" id="editionSize" value={editionSize} onChange={(e) => setEditionSize(e.target.value)} />

    <label htmlFor="royaltyBPS">Royalty BPS:</label>
    <input type="number" id="royaltyBPS" value={royaltyBPS} onChange={(e) => setRoyaltyBPS(e.target.value)} />

    <label htmlFor="fundsRecipient">Funds Recipient:</label>
    <input type="text" id="fundsRecipient" value={fundsRecipient} onChange={(e) => setFundsRecipient(e.target.value)} />

    <label htmlFor="defaultAdmin">Default Admin:</label>
    <input type="text" id="defaultAdmin" value={defaultAdmin} onChange={(e) => setDefaultAdmin(e.target.value)} />

    <label htmlFor="description">Description:</label>
    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

    <label htmlFor="animationURI">Animation URI:</label>
    <input type="text" id="animationURI" value={animationURI} onChange={(e) => setAnimationURI(e.target.value)} />

    <label htmlFor="imageURI">Image URI:</label>
    <input type="text" id="imageURI" value={imageURI} onChange={(e) => setImageURI(e.target.value)} />

    <button type="submit">Create Edition</button>
  </form>
  );
};
