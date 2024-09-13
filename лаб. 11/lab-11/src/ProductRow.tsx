import React from "react";
interface Product {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}
interface ProductRowProps {
    product: Product;
}
function ProductRow(props:ProductRowProps) {
    const { product } = props;
    const name = product.stocked ? (
        product.name
    ) : (
        <span style={{ color: 'red' }}>{product.name}</span>
    );

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}
export {ProductRow}