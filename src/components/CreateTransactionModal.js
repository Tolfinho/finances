// Icons
import { VscChromeClose } from 'react-icons/vsc';

import { useState } from 'react';

const CreateTransactionModal = ({ sexo }) => {
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('form enviado');
  };

  return (
    <div className="createTransaction">
      <div className="modal">
        <VscChromeClose className="closeBtn" onClick={() => sexo(false)} />
        <h2>Nova Transação</h2>
        <div className="hr"></div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Valor:</span>
            <input
              type="number"
              name="value"
              placeholder="Valor da transação..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
              required
            />
          </label>
          <label>
            <span>Tipo:</span>
            <input
              type="text"
              name="type"
              placeholder="Tipo da transação..."
              onChange={(e) => setType(e.target.value)}
              value={type}
              required
            />
          </label>
          <label>
            <span>Descrição:</span>
            <input
              type="text"
              name="description"
              placeholder="Descrição da transação..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </label>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTransactionModal;
