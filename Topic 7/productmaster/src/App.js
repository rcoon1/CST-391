import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
//import Card from "./Card";
//import SearchForm from "./SearchForm";
import "./App.css";
import datasource from "./datasource";
import SearchProduct from "./SearchProduct";
import NavBar from './NavBar';
import OneProduct from "./OneProduct";
import NewProduct from "./NewProduct";

const App = () => {
     const [searchPhrase, setSearchPhrase] = useState('');
     const [productList, setProductList] = useState([]);
     const [currentlySelectedProductId, setCurrentlySelectedProductId] = useState(0);
     let refresh = false;

     const loadProducts = async () => {
          const response = await datasource.get('/products');

          setProductList(response.data);
     };

     useEffect(() => {
          loadProducts();
     }, [refresh]);

     const updateSearchResults = async (phrase) => {
          console.log('phrase is ' + phrase);
          setSearchPhrase(phrase);
     };

     const updateSingleProduct = (id, navigate) => {
          console.log('Update single product = ', id);
          console.log('Update single product = ', navigate);
          var indexNumber = 0;
          for (var i = 0; i < productList.length; ++i) {
               if (productList[i].id === id) indexNumber = i;
          }

          setCurrentlySelectedProductId(indexNumber);
          console.log('update path ', '/products/' + indexNumber);
          navigate('/products/search' + indexNumber);
     };
     const renderedList = productList.filter((product) => {
          if (
               product.description.toLowerCase().includes(searchPhrase.toLowerCase()) || 
               searchPhrase === '' 
               ) {
                    return true;
               }
               return false;
     });

     console.log('renderedList', renderedList);

     return (
          <BrowserRouter>
          <NavBar />
          <Routes>
               <Route exact path='/'
               element={
                    <SearchProduct
                    updateSearchResults={updateSearchResults}
                    productList={renderedList}
                    updateSingleProduct={updateSingleProduct}
                    />
               }
               />
               <Route exact path='/new' element={<NewProduct />} />
               <Route
               exact path='/products/:productId'
               element={<OneProduct product={productList[currentlySelectedProductId]} />}
               />
          </Routes>
          </BrowserRouter>
     );
};

export default App;