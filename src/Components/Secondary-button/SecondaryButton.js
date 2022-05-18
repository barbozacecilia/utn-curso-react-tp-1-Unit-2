import React from "react";
import {Button} from "react-bootstrap";

function SecondaryButton(props) {
    const {onClick, label, configuration} = props;

    return (
            <div  >
                <Button size="lg" onClick={onClick} href={ configuration?.href ||""}
                        type={configuration?.type ||"submit"} variant={configuration?.variant || "outline-success"}  value={configuration?.value|| "Submit"}>{label}</Button>
            </div>
    )
}

export default SecondaryButton;

