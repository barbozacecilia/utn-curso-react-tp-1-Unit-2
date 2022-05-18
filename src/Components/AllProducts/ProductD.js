import React from "react";
import './ProductDStyles.css';
import {useState} from "react";
import {Card, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";


function ProductD(props) {
    console.log('props', props)
    const [showMessage, setShowMessage] = useState([""])
    const message = () => {
        setShowMessage("¡Gracias por su compra!")
    }
    const {name, description, price, code, quantity, imagen} = props;
    return (
        <>
            <Col>
                <Card style={{width: '18rem'}} className="cardContainer">
                    <div className="imgContainer">
                        <Card.Img className="productImage" src={imagen} alt="imagen de producto"/>
                    </div>
                    <Card.Body className="infoCardContainer">
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>
                            <p>{description || ""}</p>
                            <p>{'Precio: $ ' + price}</p>
                            <p>{'Código: ' + code}</p>
                            <p>{'Cantidad: ' + quantity}</p>
                        </Card.Subtitle>
                        <Button className="button" variant="outline-success" onClick={message}>Comprar</Button>
                        <div className="message">{showMessage}</div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}


export default ProductD;
