import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";
import Title from "../../Components/Title/Title";
import Input from "../../Components/input/Input";
import PrimaryButton from "../../Components/Primary-button/PrimaryButton";
import firebase from "../../Config/firebase";
import {useForm} from "react-hook-form";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import dayjs from "dayjs";
import AlertCustom from "../../Components/Alert/AlertCustom";


function AddProduct() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [image, setImage] = useState("")
    const [alert,setAlert]=useState({variant:'', text:''})

    const onSubmitAddProducto = async (data) => {
        console.log("Form", data)
        try {
            const timestamp = dayjs().unix().toString();
            const storage = getStorage();
            const storageRef = ref(storage, `product-images/${timestamp}_${data.imagen[0].name}`);//ref to image
            const refImg = await uploadBytes(storageRef, data.imagen[0])//ref to storage
            const imageUrl = await getDownloadURL(storageRef)// Get the download URL
            console.log(imageUrl)

            const document = await firebase.firestore().collection("products")
                .add({
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    imagen: imageUrl,
                })
            console.log(document)
            console.log(refImg)
            setAlert({variant: 'secondary', text: 'Producto agregado'})
        } catch (e) {
            console.log(e)
            setAlert({variant: 'danger', text: 'Ha ocurrido algo inesperado'})
        }
    }


    useEffect(() => {
        const subscription = watch((value,{type, name}) => {
            if(name === "imagen"){
                console.log(value);
                setImage(URL.createObjectURL(value.imagen[0]))
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const renderPreview = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        console.log('preview :', image)
    }

    return (
        <>
            <Title>Agregar un nuevo producto</Title>
            <Form onSubmit={handleSubmit(onSubmitAddProducto)}>
                <Input label={"Nombre"} type={"Text"} placeholder={"Escribe aquí el nombre del producto"}
                       register={{...register("name", {required: true})}}/>
                {errors.name && <span>El campo nombre es obligatorio</span>}
                <Input label={"Descripción"} type={"Text"}
                       placeholder={"Escribe aquí la descripción del producto"}
                       register={{...register("description", {required: true})}}/>
                {errors.description && <span>El campo descripción es obligatorio</span>}
                <Input label={"Código"}
                       type={"Text"}
                       placeholder={"Escribe aquí el código del producto"}
                       register={{...register("id", {required: true})}}/>
                {errors.description && <span>El campo es obligatorio</span>}
                <Input label={"Precio"} type={"number"}
                       placeholder={"Escribe aquí el precio del producto"}
                       register={{...register("price", {required: true})}}/>
                {errors.price && <span>El campo de precio es obligatorio</span>}
                <input type="file" onChange={renderPreview} {...register("imagen")}/>
                <img src={image} alt={'preview'}/>
                <PrimaryButton type={"submit"} label={"Agregar producto"}/>
                <AlertCustom {...alert}/>
            </Form>
        </>
    )
}


export default AddProduct
