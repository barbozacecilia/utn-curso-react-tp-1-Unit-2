import React, {useEffect, useState} from "react";
import {getNewProduct} from "../../Service/productsServicesFirebase";
import NewProductCard from "../../Components/AllProducts/NewProductCard";
import Loading from "../../Components/Loading/Loading";


function NewProduct() {
    const [newProducts, setNewProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    useEffect(() => {
            const products = async () => {
                try {
                    setLoading(true)
                    console.log('getNewProduct', search)
                    const response = await getNewProduct(search)
                    console.log('response', response)
                    setNewProducts(response)
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                }
            }
            products()
        },
        [search])
    const handleSearch = (event) => {
        const value= event.target.value
        setSearch(value)
    }

    return (
        <> <input type={"text"} value={search} onChange={handleSearch}/>
            <Loading cargando={loading} type={{variant: "success", animation: "grow"}}>
                <div className="mainContainerHome">
                    <h1>Conoce los mejores productos</h1>
                    <div className="productsContainer">
                        {newProducts.map(product => (
                                <NewProductCard
                                    title={product.data().name}
                                    description={product.data().description}
                                    price={product.data().price}
                                    id={product.id}
                                    key={product.id}
                                />
                            )
                        )
                        }
                    </div>
                </div>
            </Loading>
        </>
    )
}

export default NewProduct;
