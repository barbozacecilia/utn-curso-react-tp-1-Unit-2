import React from "react";
import './ProductStyles.css';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import {ButtonGroup, Card, Col} from "react-bootstrap";
import SecondaryButton from "../Secondary-button/SecondaryButton";


function NewProductCard(props) {

    const {title, price, id, description} = props;


    return (
        <>
            <Col>
                <Card className="cardContainer">
                    <div className="imgContainer">
                    </div>
                    <Card.Body className="infoCardContainer">
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle>
                            <div className="priceAndId">{'Precio: $ ' + price}</div>
                            {description && <div className="priceAndId">{'Descripción: ' + description}</div>}
                            <div className="priceAndId">{'Código: ' + id}</div>
                        </Card.Subtitle>
                        <div className="buttonContainerProduct">
                            <ButtonGroup vertical size="sm" className="mb-2">
                                <SecondaryButton className="button" label={"Comprar"}/>
                                <SecondaryButton label={"Detalle"} configuration={{href: ('/products/' + id)}}/>
                                <SecondaryButton label={"Modificar"}
                                                 configuration={{href: ('/products/modify/' + id)}}/>
                            </ButtonGroup>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}


export default NewProductCard;
//<Card.Img className="productImage" variant="top" src={thumbnail} alt="imagen de producto"/>
