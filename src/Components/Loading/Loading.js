import React from "react";
import {Spinner} from "react-bootstrap";

function Loading(props) {
    const {cargando, children, type} = props

    if (cargando) {
        return (
            <div className="spinner" >
                <p>Espere por favor...</p>
                <Spinner  variant={type?.variant || "secondary"}  animation={type?.animation || "border"} />
            </div>
        )
    } else {
        return (
            <div>
                {children}
            </div>
        )
    }

}

export default Loading;
