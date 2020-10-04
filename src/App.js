import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectEntries,
} from './dataSlice';
import Header from './components/Header/Header';
import ProductOverview from './components/ProductOverview/ProductOverview';
import ProductTable from './components/ProductTable/ProductTable';
import './App.css';

function App() {
  const entries = useSelector(selectEntries);

  return (
    <div className="App">
      <Header />
      <div className="product-content-container">
        <ProductOverview data={entries[0]} />
        <ProductTable sales={entries[0].sales}/>
      </div>
    </div>
  );
}

export default App;
