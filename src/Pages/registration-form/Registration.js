import React, {useState} from "react";
import './styles/RegistrationFormStyles.css';
import "./constants.js";
import {T} from "./constants";
import Input from "../../Components/input/Input";
import {useForm} from "react-hook-form";
//import PrimaryButton from "../../Components/Primary-button/PrimaryButton";
import Title from "../../Components/Title/Title";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import firebase from '../../Config/firebase';
import {Form} from "react-bootstrap";
import SpinnerButton from "../../Components/Secondary-button/SpinnerButton";


const schema = yup.object().shape({
    lastName: yup.string().min(2, 'el valor mínimo de caracteres debe ser 2').max(14, 'el valor máximo de caracteres debe es 14').required('requerido'),
    email: yup.string().email().required('requerido email'),
    password: yup.string().min(8, 'la contraseña debe tener como mínimo 8 caracteres').max(32, 'la contraseña debe tener como máximo 32 caracteres').required('requerido password'),
    confirmPassword: yup.string().min(8, 'la contraseña debe tener como mínimo 8 caracteres').max(32, 'la contraseña debe tener como máximo 32 caracteres').required('requerido password'),
    name: yup.string().min(2, 'el valor mínimo de caracteres debe ser 2').max(14, 'el valor máximo de caracteres debe es 14').required('requerido name'),
});

function Registration() {
    const [loading, setLoading]=useState(false)
    const [text, setText] = useState(T.ES)
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const handleClick = () => {
        setText(prevState =>
            prevState === T.EN ? T.ES : T.EN
        )
    }

    /*{const handleChange = (event) => {
        /*To get the event name*/
    //const name = event.target.name
    /*To get the value that the user typed*/
    //const value = event.target.value
    /*console.log('handleChange', name, value)*/
    /*console.log('form',form)*/
    //setForm({...form,[name]:value})}


    {

        /*The preventDefault() method cancels the event if it is cancelable*/
        //event.preventDefault()

        const onSubmit = async (data) => {
            //Send data to Firebase
            console.log("Form", data);
            setLoading(true)
            try {
                const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
                console.log("responseUser", responseUser)
                if (responseUser.user.uid) {
                    const document = await firebase.db.collection("users")
                        .add({
                            name: data.name,
                            lastname: data.lastName,
                            userId: responseUser.user.uid
                        })
                    console.log("document", document)
                    setLoading(false)
                }
            } catch (e) {
                console.log(e)
                setLoading(false)
            }
        };

        return (
            <div className="mainContainerRegistration">
                <div className="translateButtonContainer">
                    <button onClick={handleClick}
                            className="translateButton">{text.BUTTON}</button>
                </div>
                <h2>{text.WELCOME}</h2>
                <Title label={text.TITLE}/>
                <div className="formContainerR">
                    <Form className="inputContainer" onSubmit={handleSubmit(onSubmit)}>
                        <Input label={text.NAME} type="text"
                               placeholder={text.PLACEHOLDER_NAME}
                               register={{...register("name")}}
                        />
                        <p>{errors.name?.message}</p>
                        <Input label={text.LAST_NAME} type="text"
                               placeholder={text.PLACEHOLDER_LAST_NAME}
                               register={{...register("lastName")}}
                        />
                        <p>{errors.lastName?.message}</p>

                        <Input label="Email" type="email" placeholder={text.PLACEHOLDER_EMAIL}
                               register={{...register("email")}}/>
                        <p>{errors.email?.message}</p>

                        <Input label="Contraseña" type="password" placeholder={text.PLACEHOLDER_PASSWORD}
                               register={{...register("password")}}/>
                        <p>{errors.password?.message}</p>

                        <Input label={text.CONFIRM_PASSWORD}
                               register={{...register("confirmPassword")}}
                               placeholder={text.PLACEHOLDER_CONFIRM_PASSWORD} type={"password"}/>
                        <p>{errors.confirmPassword}</p>
                        <div className="buttonSignUpContainer">
                            <SpinnerButton loading={loading}>{text.BUTTON_SIGN_UP}</SpinnerButton>
                        </div>
                    </Form>
                </div>
            </div>
        )

    }
}

export default Registration;

//                if (errors.length) {
//                     alert('revisa los datos ingresados')
//                 } else {
//                     alert('¡Se ha registrado correctamente!')
//                     reset();
//                 }
