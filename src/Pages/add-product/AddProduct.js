import React from "react";
import {Form} from "react-bootstrap";
import Title from "../../Components/Title/Title";
import Input from "../../Components/input/Input";
import PrimaryButton from "../../Components/Primary-button/PrimaryButton";
import firebase from "../../Config/firebase";
import {useForm} from "react-hook-form";


function AddProduct() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmitAddProducto = async (data) => {
        console.log("Form", data)
        try {
            const document = await firebase.firestore().collection("products")
                .add({
                    name: data.name,
                    description: data.description,
                    price: data.price
                })
            console.log(document)
        } catch (e) {
            console.log(e)
        }
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
                <PrimaryButton type={"submit"} label={"Agregar producto"}/>
            </Form>
        </>
    )
}


export default AddProduct
