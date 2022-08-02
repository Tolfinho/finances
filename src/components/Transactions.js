import React, { useState } from 'react';

import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { useFetchDocument } from '../hooks/useFetchDocument';

import DetailsModal from './DetailsModal';

function Transactions() {
  const [showMoreinfoPopup, setShowMoreinfoPopup] = useState(false);

  const {
    documents: transactions,
    error,
    loading,
  } = useFetchDocument('transactions');

  return (
    <div className="transactionsList">
      <h3>Recentes</h3>

      {transactions &&
        transactions.map((transaction) => (
          <div className="item" key={transaction.id}>
            <p>
              <span>
                <img
                  src="/images/up.png"
                  alt="arrow-up"
                  className="arrowUpDown"
                />
              </span>
              R${transaction.value}
            </p>
            <button
              className="more-info-btn"
              onClick={() => {
                setShowMoreinfoPopup(true);
              }}
            >
              Ver Detalhes!
            </button>
            <div className="buttons">
              <button className="btn">
                <AiOutlineEdit />
              </button>
              <button className="btn">
                <BsTrash />
              </button>
            </div>

            {/* <DetailsModal transaction={transaction} /> */}
          </div>
        ))}
    </div>
  );
}

export default Transactions;
