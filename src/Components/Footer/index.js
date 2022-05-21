import React from "react";
import {Card, Stack} from "react-bootstrap";
import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className={"mainContainerFooter"}>
            <Stack gap={3} className={"vstack"}>
                <h2>¡Disfrute de su compra!</h2>
                <p className="text-muted">
                    Aproveche las mejores ofertas </p>
                <p className="text-muted">Página de práctica realizada por Cecilia</p>
            </Stack>

        </div>
    );
}

export default Footer;


/*
    <Card className="text-center ">
        <Card.Header>Mi tienda</Card.Header>
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text
            </Card.Text>
        </Card.Body>
        <Card.Footer </Card.Footer>
    </Card>
*/
