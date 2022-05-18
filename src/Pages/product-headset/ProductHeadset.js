import React, {useState, useEffect} from "react";
import './ProductHeadsetStyles.css';
import Product from "../../Components/AllProducts/Product";
import {getAllProducts} from "../../Service/productsServices";
import PrimaryButton from "../../Components/Primary-button/PrimaryButton";
import Loading from "../../Components/Loading/Loading";

function ProductHeadset() {
    const [loading, setLoading] = useState(true)
    const [listProducts, setListProducts] = useState([])
    const [infoMl, setInfoMl] = useState({})
    const [filter, setFilter] = useState('ipod')

    useEffect(
        () => {
            setTimeout(() => {
                setLoading(false)
            }, 550)
        }, []
    )

    /* with axios*/
    useEffect(
        () => {
            const request = async () => {
                try {
                    const responseAxios = await getAllProducts(filter)
                    console.log('responseAxios', responseAxios)
                    setListProducts(responseAxios.data.results)
                    setInfoMl(responseAxios.data)
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                }
            }
            request()
        },
        [filter]
    )

    /* without axios
    useEffect(
        ()=> {
            const request = async ()=>{
                try{
                const data = await getAllProducts(filter)
                    setListProducts(data.results)
                    setInfoMl(data)
                    setLoading(false)
                console.log('products', data)
                }catch (e){
                    console.log(e)
                }
            }
            request()
        },
        [filter]
    )
    */

    /* with fetch and .then
    useEffect (
        ()=>{
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=ipod#options')
            .then (res=>res.json())
            .then (data=>{
                console.log('data', data)
                setListProducts(data.results)
                setLoading(false)
            })
            .catch (error=>{
                console.log(error)
            })
        },
        []
    )*/

    const filterButton = () => {
        setFilter('auriculares')
    }
    const goBackButton = () => {
        setFilter('ipod')
    }

    return (
        <Loading cargando={loading}>
            <div className="mainContainerProductsHeadset">
                <h1>Productos mostrados de {infoMl.query}</h1>
                <div className="buttonContainer">
                    <PrimaryButton label={'Auriculares'} type={"submit"} onClick={filterButton}/>
                    <PrimaryButton label={'Varios'} type={"submit"} onClick={goBackButton}/>
                </div>
                <div className="productsContainer">
                    {listProducts.map(product => (
                            <Product key={product.id}
                                     thumbnail={product.thumbnail}
                                     title={product.title}
                                     id={product.id}
                                     price={product.price}
                            />
                        )
                    )
                    }
                </div>
            </div>
        </Loading>
    )


}

export default ProductHeadset;
