import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const ProductList = (props) => {

    const handleSelectionOne = (productId) => {
        console.log('Selected ID is ' + productId);
        props.onClick(productId, navigator);
    };

    console.log('props productList', props);
    const navigator = useNavigate();
    const product = props.productList.map((product) => {
        return (
            <Card
            key={product.id}
            productId={product.id}
            productName={product.name}
            productPrice={product.price}
            productDescription={product.Description}
            productOnHand={product.onHand}
            buttonText='OK'
            imgURL={product.image}
            onClick={handleSelectionOne}
            />

        );
    });
    return <div className='container'>{product}</div>;
};

export default ProductList;