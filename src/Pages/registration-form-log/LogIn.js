import React, {useState} from "react";
import './styles/logInstyles.css';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Title from "../../Components/Title/Title";
import Input from "../../Components/input/Input";
import PrimaryButton from "../../Components/Primary-button/PrimaryButton";
import {Form} from "react-bootstrap";
import firebase from "../../Config/firebase";
import AlertCustom from "../../Components/Alert/AlertCustom";
import {loginMessage} from "../../Utils/errorMessage";


const schema = yup.object().shape({
    email: yup.string().email().required('requerido email'),
    password: yup.string().min(8, 'la contraseña debe tener como mínimo 8 caracteres').max(32, 'la contraseña debe tener como máximo 32 caracteres').required('requerido password'),
});

function LogIn() {
    const [alert, setAlert] = useState({variant: '', text: ''})
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandlerLogIn = async (data) => {
        console.log("Form", data);
        try {
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            console.log("responseUser", responseUser.user.uid)
            if (responseUser.user.uid) {
                const userInfo = await firebase.db.collection("users")
                    .where("userId", "==", responseUser.user.uid)
                    .get()
                if (userInfo) {
                    const name = userInfo.docs[0]?.data().name
                    setAlert({variant: "success", text: 'Bienvenido ' + (name || "")})
                }
            }
        } catch (e) {
            console.log(e)
            setAlert({variant: "danger", text: loginMessage[e.code] || "Ha ocurrido un error"})
        }
    }

    return (
        <div className="logInMainContainer">
            <Title label={'Ingresar'}/>
            <Form onSubmit={handleSubmit(onSubmitHandlerLogIn)} className="formContainer">
                <Input label="Email" type="email" placeholder={'Ingrese su email aquí'}
                       register={{...register("email")}}/>
                <p>{errors.email?.message}</p>
                <Input label="Contraseña" type="password" placeholder={'Ingrese aquí su contraseña'}
                       register={{...register("password")}}/>
                <p>{errors.password?.message}</p>
                <PrimaryButton label={'Ingresar'} type={"submit"}/>
                <AlertCustom {...alert}/>
            </Form>
        </div>
    );
}

export default LogIn;


//
//     const onSubmitHandler =  async (data) => {
//         console.log("data",{data});
//         try{
//         console.log('errors', errors);
//         if (errors.length) {
//             alert('revisa los datos ingresados')
//         } else {
//             alert('¡Bienvenido/a!')
//             reset();
//         }}catch (e){
//             console.log(e)
//         }
//         /*try {
//             const responseUser= await firebase.auth().createUserWithEmailAndPassword(data.email.data.password)
//             console.log(responseUser.user.uid, 'responseUser')
//         } catch (e){
//             console.log(e)
//         }*/
