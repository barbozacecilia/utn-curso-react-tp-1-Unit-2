import React from "react";
import {Alert} from "react-bootstrap";
import styles from './AlertStyles.css';

function AlertCustom(props) {
    const {variant, text} = props;

    return (
        <Alert className={styles.alertContainer} variant={variant}>
            {text}
        </Alert>
    )
}

export default AlertCustom;
