import React from 'react';

import { GrClose } from 'react-icons/gr';

function DetalhesPopup({ transaction }) {
  return (
    <div className="moreInfo-popup">
      <div className="inner">
        <div className="close-btn">
          <GrClose />
        </div>
        <h1>Detalhes</h1>
        <div className="hr"></div>
        <h3>
          Tipo:
          <span>
            {transaction.type}
            <img
              src="/images/down.png"
              alt="arrow-down"
              className="arrowUpDown"
            />
          </span>
        </h3>
        <h3>
          Valor: <span>R${transaction.value}</span>
        </h3>
        <h3>
          Data: <span>{transaction.date}</span>
        </h3>
        <h3>
          Descrição: <span>{transaction.description}</span>
        </h3>
      </div>
    </div>
  );
}

export default DetalhesPopup;
