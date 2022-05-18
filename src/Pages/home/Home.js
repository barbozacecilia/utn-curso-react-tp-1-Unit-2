import React, {useEffect, useState} from "react";
import './HomeStyles.css';
import {newProducts} from "../../Service/productsServices";
import Product from "../../Components/AllProducts/Product";
import Loading from "../../Components/Loading/Loading";


//const response =await getNewProduct()
//console.log('response', response)
//setShowNewProducts(response)


function Home() {
    const [showNewProducts, setShowNewProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
            const products = async () => {
                try {
                    const responseAxios = await newProducts()
                    console.log('responseAxios', responseAxios)
                    setShowNewProducts(responseAxios.data.results)
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                }
            }
            products()
        },
        [])
    return (
        <Loading cargando={loading}>
            <div className="mainContainerHome">
                <h1>Conoce los mejores productos</h1>
                <div className="productsContainer">
                    {showNewProducts.map(product => (
                            <Product
                                thumbnail={product.thumbnail}
                                title={product.title}
                                id={product.id}
                                key={product.id}
                                price={product.price}
                            />
                        )
                    )
                    }
                </div>
                <div className="bottom">
                    <h2>¡Disfrute de su compra!</h2>
                </div>
            </div>
        </Loading>
    )

}

export default Home;
