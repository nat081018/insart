import React, {lazy, Suspense} from 'react';
import './App.css';


import { Provider } from "react-redux";
import {store} from "./redux/store"

// import { Spinner } from 'react-spinners-css'; // !error with typescript

import Header from "./components/header/header.component"

import Footer from "./components/footer/footer.component"

const CurrencyExchangeTable = lazy(() => import("./components/currency_exchange_table/currency_exchange_table.component") )


const App: React.FC = ()  => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading, please wait...</div>}>
          <CurrencyExchangeTable />
        </Suspense>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
