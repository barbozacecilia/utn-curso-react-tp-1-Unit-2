import React from "react";
import {Button} from "react-bootstrap";

function ButtonWithLoading(props) {
    const{ configuration, label, loading}= props

return (
    <Button
        variant={configuration?.variant || "outline-success"}
        type={configuration?.type ||"submit"}
        disabled={loading}
        onClick={loading }
    >
        {loading ? 'Loading…' : 'Click to load'}
        {label}
    </Button>
);
}

export default ButtonWithLoading;
