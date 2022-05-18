import React from "react";
import './TitleStyles.css';


function Title(props ){
    const {label}=props;
    return(
        <div className="titleContainer">
            <h1 className="titleStyles">{label}</h1>
        </div>
    )

}

export default Title;
