import React from "react";
import ExampleCard from "./ExampleCard/ExampleCard";
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import cs from './Cards.module.css'
import {Container, Row} from "react-bootstrap";

const Cards = (props) => {

    return (
        <div className={cs.cards}>
            <Container>
                <Row xs={1} md={2} xl={4} className="justify-content-md-center">
                    <ExampleCard nameOfCard={'Название карточки'} img={img1}/>
                    <ExampleCard nameOfCard={'Название карточки'} img={img2}/>
                    <ExampleCard nameOfCard={'Название карточки'} img={img3}/>
                    <ExampleCard nameOfCard={'Название карточки'} img={img1}/>
                </Row>
                <Row xs={1} md={2} xl={4} className="justify-content-md-center">
                    <ExampleCard nameOfCard={'Название карточки'} img={img2}/>
                    <ExampleCard nameOfCard={'Название карточки'} img={img3}/>
                    <ExampleCard nameOfCard={'Название карточки'} img={img1}/>
                    <ExampleCard nameOfCard={'Название карточки'} img={img2}/>
                </Row>
            </Container>
        </div>
    )
}

export default Cards