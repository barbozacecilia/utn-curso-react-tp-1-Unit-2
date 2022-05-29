import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getDetailsNewProduct} from "../../Service/productsServicesFirebase";
import Loading from "../../Components/Loading/Loading";
import SecondaryButton from "../../Components/Secondary-button/SecondaryButton";

function DetailsNewProduct() {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            const products = async () => {
                try {
                    const response = await getDetailsNewProduct(id)
                    console.log('response', response)
                    setProduct(response.data())
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                    setLoading(false)
                }
            }
            products()
        },
        [id]
    )
    const comprar = (id) => (
        console.log("id", id)
    )

    return (
        <Loading cargando={loading} type={{variant: "success", animation: "grow"}}>
            <div>
                <p>Detalle del producto</p>
                <p>{product.name}</p>
                <img src={(product.imagen)} />
                <p>Código de producto: {id}</p>
                <p>Descripción del producto: {product.description}</p>
                <p>Precio: {product.price}</p>
                <div>
                    <SecondaryButton onClick={() => comprar(id)} label={"Comprar"}/>
                </div>
            </div>
        </Loading>
    )
}


export default DetailsNewProduct;
