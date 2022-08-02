import React from 'react';

import { GrClose } from 'react-icons/gr';

function DetalhesPopup(setPopupStatus) {
  return (
    <div className="moreInfo-popup">
      <div className="inner">
        <div
          className="close-btn"
          onClick={() => {
            console.log('muda o state do popup para false');
          }}
        >
          <GrClose />
        </div>
        <h1>Meu popup</h1>
      </div>
    </div>
  );
}

export default DetalhesPopup;
