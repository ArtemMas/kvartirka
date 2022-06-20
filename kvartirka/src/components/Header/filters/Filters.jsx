import React from 'react';
import filt from './Filters.module.css';
import {Button, Dropdown} from "react-bootstrap";
//import {NavLink} from "react-router-dom";

const Filters = () => {
    return (
                <Dropdown>
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                        Фильтры
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Дом</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Квартира</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Покупка</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Посуточно</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Аренда</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
    );
}

export default Filters;
