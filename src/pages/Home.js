import { useEffect, useState } from 'react';

// Components
import Saldos from '../components/Saldos';
import Transactions from '../components/Transactions';
import CreateTransactionModal from '../components/CreateTransactionModal';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

// Icons
import { BsFillPlusCircleFill } from 'react-icons/bs';

import { useAuthValue } from '../context/authContext';

function Home() {
  const { user } = useAuthValue();
  const [showCreateTransaction, setShowCreateTransaction] = useState(false);

  const handleCreateTransaction = (data) => {
    setShowCreateTransaction(data);
  };

  return (
    <div>
      <div>
        <Navbar />
        <div className="home">
          <Saldos />
          <div className="transactions">
            {user && <h4>Olá {user.displayName}</h4>}
            <h2>Transações</h2>
            <div className="hr"></div>
            <button
              className="newTransaction-btn"
              onClick={() => setShowCreateTransaction(true)}
            >
              Adicionar Transação
              <BsFillPlusCircleFill className="plus-icon" />
            </button>
            {showCreateTransaction && (
              <CreateTransactionModal sexo={handleCreateTransaction} />
            )}
            <Transactions />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
