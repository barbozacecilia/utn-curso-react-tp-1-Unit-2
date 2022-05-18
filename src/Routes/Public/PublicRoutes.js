import React from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import Home from "../../Pages/home/Home";
import ProductHeadset from "../../Pages/product-headset/ProductHeadset";
import ProductClothing from "../../Pages/product-clothing/ProductClothing";
import ProductDetails from "../../Pages/product-details/ProductDetails";
import NotFound from "../../Pages/not-found/NotFound";
import LogIn from "../../Pages/registration-form-log/LogIn";
import Registration from "../../Pages/registration-form/Registration";
import AddProduct from "../../Pages/add-product/AddProduct";
import NewProduct from "../../Pages/new-product/NewProduct";
import DetailsNewProduct from "../../Pages/new-product/DetailsNewProduct";
import ModifyProduct from "../../Pages/new-product/ModifyProduct";

function PublicRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Navigate to='/'/>}/>
            <Route path='/clothing' element={<ProductClothing/>}/>
            <Route path='/headset' element={<ProductHeadset/>}/>
            <Route path='/headset/:id' element={<ProductDetails/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/log-in' element={<LogIn/>}/>
            <Route path='/products/add' element={<AddProduct/>}/>
            <Route path='/products/new' element={<NewProduct/>}/>
            <Route path='/products/modify/:id' element={<ModifyProduct/>}/>
            <Route path='/products/:id' element={<DetailsNewProduct/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
}

export default PublicRoutes
