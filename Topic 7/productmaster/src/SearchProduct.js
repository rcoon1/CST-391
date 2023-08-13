import React from "react";
import SearchForm from './SearchForm';
import ProductList from "./ProductList";

const SearchProduct = (props) => {
    console.log('props with update single product ', props);
    return (
        <div className='container'>
            <SearchForm onSubmit={props.updateSearchResults} />

            <ProductList productList={props.productList} onClick={props.updateSingleProduct} />
        </div>
    );
};

export default SearchProduct;