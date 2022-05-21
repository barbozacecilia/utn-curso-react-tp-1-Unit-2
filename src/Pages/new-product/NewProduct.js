import React, {useEffect, useState} from "react";
import {getNewProduct} from "../../Service/productsServicesFirebase";
import NewProductCard from "../../Components/AllProducts/NewProductCard";
import Loading from "../../Components/Loading/Loading";


function NewProduct() {
    const [newProducts, setNewProducts] = useState([])
    const[loading, setLoading]=useState(true)
    useEffect(() => {
            const products = async () => {
                try {
                    const response = await getNewProduct()
                    console.log('response', response)
                    setNewProducts(response)
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                }
            }
            products()
        },
        [])


    return (
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
            <div className={"bottom"}>
                <h2>¡Disfrute de su compra!</h2>
            </div>
        </div>
        </Loading>
    )

}

export default NewProduct;
