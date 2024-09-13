import React from "react";
interface SearchBarProps {
    filterText: string;
    inStockOnly: boolean;
    onFilterTextChange: (filterText: string) => void;
    onInStockChange: (inStockOnly: boolean) => void;
}
function SearchBar(props:SearchBarProps) {
    const {
        filterText,
        inStockOnly,
        onFilterTextChange,
        onInStockChange,
    } = props;

    const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterTextChange(e.target.value);
    };

    const handleInStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInStockChange(e.target.checked);
    };

    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange}
            />
            <p>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={handleInStockChange}
                />
                {' '}
                Only show products in stock
            </p>
        </form>
    );
}
export {SearchBar}
