import React, { useEffect, useState } from "react";
import Card from './Card';
import './App.css';
import SearchForm from './SearchForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import NavBar from "./NavBar";
import EditProduct from "./EditProduct";
import DataSource from "./dataSource";
import OneProduct from "./OneProduct";

const App = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [productList, setProductList] = useState([]);
    const [currentlySelectedProductId, setCurrentlySelectedProductId] = useState(0);

    let refresh = false;

    const updateSearchResults = (phrase) => {
        console.log('phrase is ', phrase);
        setSearchPhrase(phrase);
    }

    const updateSingleProduct = (product, navigate, uri) => {
        console.log('Update Single product = ', product);
        var indexNumber = 0;
        for (var i = 0; i < productList.length; ++i) {
            if (productList[i].productId === product) indexNumber = i;
        }
        setCurrentlySelectedProductId(indexNumber);
        let path = uri + indexNumber;
        console.log('path', path);
        navigate(path);
    };

    useEffect(() => {
        loadProducts();
    }, [refresh]);

    const loadProducts = async () => {
        const response = await DataSource.get('/products');
        setProductList(response.data);
    }

    const onNewProduct = (navigate) => {
        loadProducts();
        navigate("/");
    }


    console.log('productList ', productList);
    const renderedList = productList.filter((product) => {
        if (product.name.toLowerCase().includes(searchPhrase.toLowerCase()) || product.description.toLowerCase().includes(searchPhrase.toLowerCase()) || searchPhrase === '') {
            return true;
        }
        return false;
    });
    console.log('renderedList ', renderedList);
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <SearchProduct
                            updateSearchResults={updateSearchResults}
                            productList={renderedList}
                            updateSingleProduct={updateSingleProduct} />
                    }
                />
                <Route exact path='/new' element={<EditProduct onNewProduct={onNewProduct} />} />
                <Route exact path='/edit/:productId' element={<EditProduct onNewProduct={onNewProduct} product={productList[currentlySelectedProductId]} />} />
                <Route
          exact path='/show/:productId'
          element={<OneProduct product={productList[currentlySelectedProductId]} />}
        />
            </Routes>
        </BrowserRouter>
    );
};

export default App;