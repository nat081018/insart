import React, {lazy, Suspense} from 'react';
import './App.css';

import Header from "./components/header/header.component"
// import CurrencyExchangeTable from "./components/currency_exchange_table/currency_exchange_table.component"
import Footer from "./components/footer/footer.component"

const CurrencyExchangeTable = React.lazy(() => import("./components/currency_exchange_table/currency_exchange_table.component") )


function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <CurrencyExchangeTable />
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
