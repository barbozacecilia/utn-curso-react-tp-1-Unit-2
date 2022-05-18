import React, {useState, useEffect} from "react";
import Styles from './ProductDetailsStyles.css';
import {useParams} from "react-router-dom";
import {getById} from "../../Service/productsServices";
import {Carousel} from "react-bootstrap";
import Loading from "../../Components/Loading/Loading";

function ProductDetails() {
    const {id} = useParams()
    const [product, setProduct] = useState({ })
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            const request = async () => {
                try {
                    const responseAxios = await getById(id)
                    console.log('responseAxios', responseAxios)
                    setProduct(responseAxios.data)
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                    setLoading(false)
                }
            }
            request()
        },
        [id]
    )
    const comprar = (id) => {
        console.log("id", id)
    }

        return (
            <Loading cargando={loading} type={{variant: "warning"}}>
            <div className={Styles.mainContainerDetails}>
                <p className="productDetailsP">Detalle del producto</p>
                <p className="productDetailsP">{product.title}</p>
                <Carousel className="carouselStyle" variant="dark">
                    {product.pictures?.map((picture) => (<Carousel.Item key={picture.url}> <img className='allImgDetails'
                                                                                               alt="imagen del producto"
                                                                                               src={picture.url}/> </Carousel.Item>))}
                </Carousel>
                <p className="productDetailsP">Código de producto: {product.id}</p>
                <p className="productDetailsP">Cantidad disponible: {product?.available_quantity}</p>
                <p className="productDetailsP">Este producto cuenta con {product?.warranty} </p>
                <p className="productDetailsP">Este producto ha sido comprado por {product?.sold_quantity} personas</p>
                <p className="productDetailsP">Precio: {product?.price}</p>
                <div>
                    <button onClick={() => comprar(id)} className="buttonDetails">Comprar</button>
                </div>
            </div>
            </Loading>
        )
}


export default ProductDetails;
