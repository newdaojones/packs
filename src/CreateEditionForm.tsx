// src/CreateEditionForm.tsx
import React, { useState } from 'react';
import './CreateEditionForm.css';

interface CreateEditionFormProps {
  onSubmitEdition: (formData: any) => void;
  onSubmitDrop: (formData: any) => void;
}

export const CreateEditionForm: React.FC<CreateEditionFormProps> = ({ onSubmitEdition, onSubmitDrop }) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [editionSize, setEditionSize] = useState('');
  const [royaltyBPS, setRoyaltyBPS] = useState('');
  const [fundsRecipient, setFundsRecipient] = useState('');
  const [defaultAdmin, setDefaultAdmin] = useState('');
  const [description, setDescription] = useState('');
  const [animationURI, setAnimationURI] = useState('');
  const [imageURI, setImageURI] = useState('');

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
    <div className="formContainer">
      <div className="formColumn">
        <h2>Create Edition</h2>
        <form onSubmit={handleEditionSubmit}>
          {/* Add form elements for creating an edition */}
          <label htmlFor="editionName">Name:</label>
          <input type="text" id="editionName" value={name} onChange={(e) => setName(e.target.value)} />
          <br />

          <label htmlFor="editionSymbol">Symbol:</label>
          <input type="text" id="editionSymbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
          <br />

          <label htmlFor="editionSize">Edition Size:</label>
          <input type="number" id="editionSize" value={editionSize} onChange={(e) => setEditionSize(e.target.value)} />
          <br />

          <label htmlFor="royaltyBPS">Royalty BPS:</label>
          <input type="number" id="royaltyBPS" value={royaltyBPS} onChange={(e) => setRoyaltyBPS(e.target.value)} />
          <br />

          <label htmlFor="fundsRecipient">Funds Recipient:</label>
          <input type="text" id="fundsRecipient" value={fundsRecipient} onChange={(e) => setFundsRecipient(e.target.value)} />
          <br />

          <label htmlFor="defaultAdmin">Default Admin:</label>
          <input type="text" id="defaultAdmin" value={defaultAdmin} onChange={(e) => setDefaultAdmin(e.target.value)} />
          <br />

          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <br />

          <label htmlFor="animationURI">Animation URI:</label>
          <input type="text" id="animationURI" value={animationURI} onChange={(e) => setAnimationURI(e.target.value)} />
          <br />

          <label htmlFor="imageURI">Image URI:</label>
          <input type="text" id="imageURI" value={imageURI} onChange={(e) => setImageURI(e.target.value)} />
          <br />
          {/* ... other form elements for creating an edition */}
          <button type="submit">Create Edition</button>
        </form>
      </div>
      <div className="formColumn">
        <h2>Create Drop</h2>
        <form onSubmit={handleDropSubmit}>
          {/* Add form elements for creating a drop */}
          {/* Example: */}
          <label htmlFor="dropName">Name:</label>
          <input type="text" id="dropName" value={name} onChange={(e) => setName(e.target.value)} />
          <br />

          <label htmlFor="dropSymbol">Symbol:</label>
          <input type="text" id="dropSymbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
          <br />

          <label htmlFor="dropEditionSize">Edition Size:</label>
          <input type="number" id="dropEditionSize" value={editionSize} onChange={(e) => setEditionSize(e.target.value)} />
          <br />

          <label htmlFor="dropRoyaltyBPS">Royalty BPS:</label>
          <input type="number" id="dropRoyaltyBPS" value={royaltyBPS} onChange={(e) => setRoyaltyBPS(e.target.value)} />
          <br />

          <label htmlFor="dropFundsRecipient">Funds Recipient:</label>
          <input type="text" id="dropFundsRecipient" value={fundsRecipient} onChange={(e) => setFundsRecipient(e.target.value)} />
          <br />

          <label htmlFor="dropDefaultAdmin">Default Admin:</label>
          <input type="text" id="dropDefaultAdmin" value={defaultAdmin} onChange={(e) => setDefaultAdmin(e.target.value)} />
          <br />

          <label htmlFor="dropDescription">Description:</label>
          <textarea id="dropDescription" value={description} onChange={(e) => setDescription(e.target.value)} />
          <br />

          <label htmlFor="dropAnimationURI">Animation URI:</label>
          <input type="text" id="dropAnimationURI" value={animationURI} onChange={(e) => setAnimationURI(e.target.value)} />
          <br />

          <label htmlFor="dropImageURI">Image URI:</label>
          <input type="text" id="dropImageURI" value={imageURI} onChange={(e) => setImageURI(e.target.value)} />
          <br />
          {/* ... other form elements for creating a drop */}
          <button type="submit">Create Drop</button>
        </form>
      </div>
    </div>
  );
};
