import React, {useState} from "react";
import {SearchBar} from "./SearchBar.tsx";
import {ProductTable} from "./ProductTable.tsx";
interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}
interface FilterableProductTableProps {
    products: Product[];
}

function FilterableProductTable(props:FilterableProductTableProps) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = (filterText: string) => {
        setFilterText(filterText);
    };

    const handleInStockChange = (inStockOnly: boolean) => {
        setInStockOnly(inStockOnly);
    };

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockChange={handleInStockChange}
            />
            <ProductTable
                products={props.products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}
 export default FilterableProductTable