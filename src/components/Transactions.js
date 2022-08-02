import React, { useState } from 'react';

import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import DetailsModal from './DetailsModal';

function Transactions() {
  const [showMoreinfoPopup, setShowMoreinfoPopup] = useState(false);

  return (
    <div className="transactionsList">
      <h3>Maio</h3>
      <div className="item">
        <p>
          <span>
            <img src="/images/up.png" alt="arrow-up" className="arrowUpDown" />
          </span>
          R$246,98
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
      </div>
      <div className="item">
        <p>
          <span>
            <img src="/images/up.png" alt="arrow-up" className="arrowUpDown" />
          </span>
          R$126,98
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
      </div>
      <div className="item">
        <p>
          <span>
            <img
              src="/images/down.png"
              alt="arrow-down"
              className="arrowUpDown"
            />
          </span>
          R$446,18
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
      </div>
      <br />
      <h3>Junho</h3>
      <div className="item">
        <p>
          <span>
            <img src="/images/up.png" alt="arrow-up" className="arrowUpDown" />
          </span>
          R$246,98
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
      </div>
      <div className="item">
        <p>
          <span>
            <img src="/images/up.png" alt="arrow-up" className="arrowUpDown" />
          </span>
          R$126,98
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
      </div>
      <div className="item">
        <p>
          <span>
            <img
              src="/images/down.png"
              alt="arrow-down"
              className="arrowUpDown"
            />
          </span>
          R$446,18
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
      </div>
      {showMoreinfoPopup && (
        /* <DetalhesPopup popupState={showMoreinfoPopup} /> */
        <div className="moreInfo-popup">
          <div className="inner">
            <div
              className="close-btn"
              onClick={() => {
                setShowMoreinfoPopup(false);
              }}
            >
              <GrClose />
            </div>
            <h1>Detalhes</h1>
            <div className="hr"></div>
            <h3>
              Tipo:{' '}
              <span>
                DESPESA
                <img
                  src="/images/down.png"
                  alt="arrow-down"
                  className="arrowUpDown"
                />
              </span>
            </h3>
            <h3>
              Valor: <span>R$246,76</span>
            </h3>
            <h3>
              Data: <span>19/05/2022 - 16:43</span>
            </h3>
            <h3>
              Descrição: <span>Troca de pneu</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transactions;
