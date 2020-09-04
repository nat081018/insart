import React from 'react';
import './App.css';

import Header from "./components/header/header.component"
import CurrencyExchangeTable from "./components/currency_exchange_table/currency_exchange_table.component"
import Footer from "./components/footer/footer.component"


function App() {
  return (
    <div className="App">
      <Header />
      <CurrencyExchangeTable />
      <Footer/>
    </div>
  );
}

export default App;
