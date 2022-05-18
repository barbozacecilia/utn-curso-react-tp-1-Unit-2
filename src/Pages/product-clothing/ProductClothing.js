import React, {useState, useEffect} from "react";
import './ProductClothingStyles.css';
import images from "../../assets/images";
import ProductD from "../../Components/AllProducts/ProductD";
import PrimaryButton from "../../Components/Primary-button/PrimaryButton";
import Loading from "../../Components/Loading/Loading";


function ProductClothing(){
    const [loading, setLoading] = useState(true)
    const [ listProducts, setListProducts ] = useState([
        {
            imagen: images.imagen1,
            name: "Remeron",
            description: "100% algodón",
            code: "1205",
            quantity: "5",
            price: "4154",
        },
        {
            imagen: images.imagen2,
            name: "Camiseta",
            description: "Color beige",
            code: "1206",
            quantity: "50",
            price: "4800",
        },
        {
            imagen: images.imagen3,
            name: "Saco",
            description: "Material natural",
            code: "1207",
            quantity: "25",
            price: '4154',
        },
        {
            imagen: images.imagen4,
            name: "Remera blanca",
            description: "Material natural",
            code: "1208",
            quantity: "10",
            price: '4154',
        },
        {
            imagen: images.imagen5,
            name: "Pantalón",
            description: "Pantalón clásico",
            code: "1209",
            quantity: "6",
            price: '4500',
        },
        {
            imagen: images.imagen6,
            name: "Campera",
            description: "Campera marrón",
            code: "1210",
            quantity: "12",
            price: '4800',
        },
    ])

    /*
    function(){}

    componentDidMount =
     useEffect(
        ()=>{

        },[]
    )
    */
    useEffect(
        ()=>{
            setTimeout(()=>{
                setLoading(false)
            },550)
        },[]
    )


    const promoClick =()=> {
        setListProducts ([
                {
                    imagen: images.imagen6,
                    name: "Campera",
                    description: "Campera marrón",
                    code: "1201",
                    quantity: "12",
                    price: '4800',
                },
                {
                    imagen: images.imagen5,
                    name: "Pantalón",
                    description: "Pantalón clásico",
                    code: "1202",
                    quantity: "6",
                    price: '4500',
                },
                {
                    imagen: images.imagen3,
                    name: "Saco",
                    description: "Material natural",
                    code: "1203",
                    quantity: "25",
                    price: '4154',
                },
                {
                    imagen: images.imagen4,
                    name: "Remera blanca",
                    description: "Material natural",
                    code: "1204",
                    quantity: "10",
                    price: '4154',
                },
            ]
        )
    }

        return(
            <Loading cargando={loading} type={{animation:"grow"}}>
                <div className="mainContainerProductsClothing">
                    <h2> Colección otoño</h2>
                    <PrimaryButton  label={'Productos en Promoción'} type={"submit"}  onClick={promoClick} />
                    <div className={"productsContainerClothing"}>
                        {listProducts.map(product=> (
                                <ProductD
                                    imagen={product.imagen}
                                    name={product.name}
                                    description={product.description}
                                    code={product.code}
                                    price={product.price}
                                    quantity={product.quantity}
                                    key={product.code}
                                />
                            )
                        )
                        }
                    </div>
                </div>
            </Loading>
        )


}

export default ProductClothing;
