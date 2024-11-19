import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataSource from "./dataSource";


const EditProduct = (props) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState('');
    const [productOnHand, setProductOnHand] = useState('');
    const [productImage, setProductImage] = useState('');
    const navigate = useNavigate();

    let product = {
        name: '',
        price: '',
        description: '',
        onHand: '',
        image: ''
    };

    let newProductCreation = true;

    if (props.product) {
        product = props.product;
        newProductCreation = false;
    }


    const updateName = (event) => {
        setProductName(event.target.value);
    }
    const updatePrice = (event) => {
        setProductPrice(event.target.value);
    }
    const updateDescription = (event) => {
        setProductDescription(event.target.value);
    }
    const updateOnHand = (event) => {
        setProductOnHand(event.target.value);
    }
    const updateImage = (event) => {
        setProductImage(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
        const editedProduct = {
            productId: product.productId,
            name: productName,
            price: productPrice,
            description: productDescription,
            onHand: productOnHand,
            image: productImage
        };
        console.log(editedProduct);
        saveProduct(editedProduct);
    };

    const saveProduct = async (product) => {
        let response;
        if (newProductCreation === true)
            response = await DataSource.post('/products', product);
        else
            response = await DataSource.put('/products', product);
        console.log(response);
        console.log(response.data);
        if(response.status===200) {
            alert(`The status of your product creation is : ${response.status} (Success)`)
        } else {
            alert(`The status of your product creation is : ${response.status} (Failed)`)
        }


        props.onNewProduct(navigate);
    };
    const handleCancel = () => {
        navigate("/");
    }

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit}>
                <h1>{newProductCreation ? "Create New" : "Edit"} Product </h1>
                <div className="form-group">
                    <label htmlFor="productName">Product Name: </label>
                    <input type="text" className="form-control" id="productName" placeholder="Enter Product Name" value={productName} onChange={updateName} />
                    <br/>

                    <label htmlFor="productPrice">Product Price:  </label>
                    <input type="text" className="form-control" id="productPrice" placeholder="Enter Product Price" value={productPrice} onChange={updatePrice} />
                    <br/>

                    <label htmlFor="productDescription">Product Description:  </label>
                    <input type="text" className="form-control" id="productDescription" placeholder="Enter Product Description" value={productDescription} onChange={updateDescription} />
                    <br/>

                    <label htmlFor="productOnHand">On Hand:  </label>
                    <input type="text" className="form-control" id="productOnHand" placeholder="Quantity On Hand" value={productOnHand} onChange={updateOnHand} />
                    <br/>

                    <label htmlFor="productImage">Product Image URL:  </label>
                    <input type="text" className="form-control" id="productImage" placeholder="Enter Product Image URL" value={productImage} onChange={updateImage} />
                    <br/>
                    <br/>

                </div>
                <div align="center">
                    <button type="button" className="btn btn-light" onClick={handleCancel}> Cancel </button>
                    <button type="submit" className="btn btn-primary"> Submit </button>
                </div>
            </form>
        </div>
    )
};
export default EditProduct;