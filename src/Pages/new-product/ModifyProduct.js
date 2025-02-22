import React, {useEffect, useState} from "react";
import {getDetailsNewProduct, updateNewProduct} from "../../Service/productsServicesFirebase";
import {useForm} from "react-hook-form";
import {Form} from "react-bootstrap";
import Input from "../../Components/input/Input";
import PrimaryButton from "../../Components/Primary-button/PrimaryButton";
import {useParams} from "react-router-dom";
import firebase from "../../Config/firebase";
import Loading from "../../Components/Loading/Loading";
import AlertCustom from "../../Components/Alert/AlertCustom";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import dayjs from "dayjs";

function ModifyProduct() {
    const [loading, setLoading] = useState(true)
    const[alert, setAlert]=useState({variant:'', text:''})
    const {register, handleSubmit, setValue, formState: {errors}} = useForm();
    const {id} = useParams()


    useEffect(
        () => {
            const products = async (data) => {
                try {
                    const storage = getStorage();
                    const timestamp = dayjs().unix().toString();
                    const storageRef = ref(storage, `product-images/${timestamp}_${data.imagen[0].name}`);//ref to image
                    const refImg = await uploadBytes(storageRef, data.imagen[0])//ref to storage
                    const imageUrl = await getDownloadURL(storageRef)// Get the download URL
                    console.log(imageUrl)

                    const response = await getDetailsNewProduct(id)
                    console.log('response', response)
                    setValue("name", response.data().name)
                    setValue("price", response.data().price)
                    setValue("description", response.data().description)
                    setValue("imagen", imageUrl)
                    setLoading(false)
                    console.log(refImg)
                } catch (e) {
                    console.log(e)
                }
            }
            products()
        },
        [id, setValue]
    )

    const onSubmitModifyP = async (data) => {
        console.log("Form", data)
        try {
            const document = await updateNewProduct(id, data)
            setAlert({variant:'secondary', text: 'El producto ha sido modificado'})
            console.log(document)
        } catch (e) {
            console.log(e)
            setAlert({variant: 'warning', text: 'Hubo un error. Las cosas no siempre salen como las planeamos'})
        }

    }
    const handleDelete = async () => {
        const document = await firebase.db.doc("products/" + id)
            .delete()
        console.log(document)
        setAlert({variant:'danger', text: 'El producto ha sido eliminado'})
    }

    return (
        <>
            <Loading cargando={loading} type={{variant: "success", animation: "grow"}}>
                <h1>Modificar un producto</h1>
                <Form onSubmit={handleSubmit(onSubmitModifyP)}>
                    <Input label={"Nombre"} type={"Text"} placeholder={"Escribe aquí el nombre del producto"}
                           register={{...register("name", {required: true})}}/>
                    {errors.name && <span>El campo nombre es obligatorio</span>}
                    <Input label={"Descripción"} type={"Text"}
                           placeholder={"Escribe aquí la descripción del producto"}
                           register={{...register("description", {required: true})}}/>
                    {errors.description && <span>El campo descripción es obligatorio</span>}
                    <Input label={"Precio"} type={"number"}
                           placeholder={"Escribe aquí el precio del producto"}
                           register={{...register("price", {required: true})}}/>
                    {errors.price && <span>El campo de precio es obligatorio</span>}
                    <input type="file" {...register("imagen")}/>
                    <PrimaryButton type={"submit"} label={"Modificar producto"}/>
                </Form>
                <PrimaryButton type={"submit"} onClick={handleDelete} label={"Eliminar productos"}/>
                <AlertCustom {...alert}/>
            </Loading>
        </>
    )
}

export default ModifyProduct
