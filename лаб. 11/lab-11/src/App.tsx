import React from 'react';
import './App.css';
import PRODUCTS from "./state.ts";
import FilterableProductTable from "./FilterableProductTable.tsx";

function App() {
  return (
      <FilterableProductTable products={PRODUCTS} />
  );
}

export default App;
