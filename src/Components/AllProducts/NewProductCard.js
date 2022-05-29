import React from "react";
import './ProductStyles.css';
import {ButtonGroup, Card, Col} from "react-bootstrap";
import SecondaryButton from "../Secondary-button/SecondaryButton";
import AuthContext from "../../Context/AuthContext";

function NewProductCard(props) {

    const {title, price, id, description, image} = props;


    return (
        <><AuthContext>
            {context =>
                <Col>
                    <Card className="cardContainer">
                        <div className="imgContainer">
                            <Card.Img className="productImage" variant="top" src={image} alt="imagen de producto"/>
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
                                    {context.userLogin &&
                                        <SecondaryButton label={"Modificar"}
                                                         configuration={{href: ('/products/modify/' + id)}}/>
                                    }
                                </ButtonGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

            }
        </AuthContext>

        </>
    )
}


export default NewProductCard;
//<Card.Img className="productImage" variant="top" src={thumbnail} alt="imagen de producto"/>
