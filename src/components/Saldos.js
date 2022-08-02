import React from 'react';

function Saldos() {
  return (
    <div>
      <div className="saldos-container" key="sexo">
        <div className="saldo block">
          <span>Saldo</span>
          <p>
            R$1000
            <span>
              <img
                src="/images/up.png"
                alt="arrow-up"
                className="arrowUpDown"
              />
            </span>
          </p>
        </div>
        <div className="ganhos block">
          <span>Ganhos</span>
          <p>
            R$2000
            <span>
              <img
                src="/images/up.png"
                alt="arrow-up"
                className="arrowUpDown"
              />
            </span>
          </p>
        </div>
        <div className="despesas block">
          <span>Despesas</span>
          <p>
            R$39
            <span>
              <img
                src="/images/down.png"
                alt="arrow-down"
                className="arrowUpDown"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Saldos;
