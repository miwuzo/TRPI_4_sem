import React, {useState} from "react";
import {ProductCategoryRow} from "./ProductCategoryRow.tsx";
import {ProductRow} from "./ProductRow.tsx";
interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}
interface ProductTableProps {
    products: Product[];
    filterText: string;
    inStockOnly: boolean;
}
function ProductTable(props:ProductTableProps) {
    const { products, filterText, inStockOnly } = props;
    const rows: JSX.Element[] = [];
    let lastCategory: string | null = null;

    products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(
            <ProductRow product={product} key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
export {ProductTable}