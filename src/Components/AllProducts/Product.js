import React from "react";
import './ProductStyles.css';
import {ButtonGroup, Card, Col} from "react-bootstrap";
import SecondaryButton from "../Secondary-button/SecondaryButton";


function Product(props) {

    const {title, price, id, thumbnail} = props;


    return (
        <>
            <Col>
                <Card className="cardContainer">
                    <div className="imgContainer">
                        <Card.Img className="productImage" variant="top" src={thumbnail} alt="imagen de producto"/>
                    </div>
                    <Card.Body className="infoCardContainer">
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle>
                            {price && <div className="priceAndId">{'Precio: $ ' + price}</div>}
                            {id && <div className="priceAndId">{'Código: ' + id}</div>}
                        </Card.Subtitle>
                        <ButtonGroup vertical size="sm" className="mb-2">
                            <SecondaryButton label={"Comprar"}/>
                            <SecondaryButton label={"Detalle"} configuration={{href: ('/headset/' + id)}}/>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}


export default Product;

//min 8
