import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import DataSource from "./dataSource";

const ProductList = (props) => {
    const handleSelectionOne = (productId, uri) => {
        console.log('Selected ID is ', productId);
        props.onClick(productId, navigator, uri);
    };
    console.log('props productList ', props);
    const navigator = useNavigate();

    const onDelete = async (productId) => {
        console.log('Selected delete ID is ', productId);
        let response = await DataSource.delete('/products/' + productId);
        console.log(response);
        console.log(response.data);
        window.location.reload(false);
    }

    const products = props.productList.map((product) => {
        return (
            <Card
                key={product.productId}
                productId={product.productId}
                productName={product.name}
                productPrice={product.price}
                productDescription={product.description}
                productOnHand={product.onHand}
                buttonText='OK'
                imgURL={product.image}
                onClick={handleSelectionOne}
                onClick2={handleSelectionOne}
                onDelete={onDelete}
                
            />
        );
    });
    return <div className="container">{products}</div>;
};

export default ProductList;