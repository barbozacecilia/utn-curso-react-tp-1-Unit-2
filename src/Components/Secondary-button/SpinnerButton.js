import React from "react";
import {Button, Spinner} from "react-bootstrap";

const styles = {
    btn: {
        backgroundColor: "#e5d2c1",
    }
}



function SpinnerButton(props) {
    const {configuration, loading} = props;

    return (
        <>
            <Button style={styles.btn}
                variant={configuration?.variant || "light"}
                type={configuration?.type ||"submit"}
                disabled={loading}
            >
                {
                    loading  &&
                    <Spinner animation="grow" size="sm" />
                }
                {props.children}
            </Button>
        </>
    )

}

export default SpinnerButton;
