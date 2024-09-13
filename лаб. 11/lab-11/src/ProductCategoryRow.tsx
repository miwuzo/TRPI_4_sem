import React from "react";
import './App.css';
interface ProductCategoryRowProps {
    category: string;
}
function ProductCategoryRow(props:ProductCategoryRowProps) {
    const { category } = props;
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    );
}
export {ProductCategoryRow}
