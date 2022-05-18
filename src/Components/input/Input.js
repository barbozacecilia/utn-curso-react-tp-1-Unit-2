import React from "react";
import './styles/inputStyles.css';
import {Form} from "react-bootstrap";

function Input (props){
    const {label, type, name, placeholder, register} = props
        return(
                <>
                    <Form.Group className="mb-3 form">
                        <Form.Label >{label}</Form.Label>
                        <Form.Control className="input" type={type} name={name||""} placeholder={placeholder} {...register} required/>
                    </Form.Group>
                </>
        )
    }


export default Input;


