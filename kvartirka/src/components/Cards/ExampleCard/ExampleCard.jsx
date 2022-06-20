import React from "react";
import {Button, Card, Col} from "react-bootstrap";
import ec from './ExampleCard.module.css'
import classNames from "classnames";

const ExampleCard = (props) => {


    return (
        <Col className={ec.column}>
            <Card style={{ width: '18rem' }} className={ec.obj}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.gridNum}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Читать далее</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ExampleCard