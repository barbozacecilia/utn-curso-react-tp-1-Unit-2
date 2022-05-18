import React from "react";
import './styles/PrimaryButtonStyles.css';

function PrimaryButton(props) {
    const {onClick, label, type} = props;

    return (
            <div className="primaryButtonContainer" >
                <button className="primaryButton" onClick={onClick}
                        type={type}>{label}</button>
            </div>
    )
}

export default PrimaryButton;
