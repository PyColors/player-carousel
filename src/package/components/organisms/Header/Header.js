import React from "react";

import Container from "muicss/lib/react/container";
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col'

import logo from '../../../../../public/bt_logo.png';
import lock from '../../../../../public/lock.png';

const Header = () => (
    <header className='header'>
        <Container fluid={true}>
            <Row>
                <Col xs="6">
                    <img className='header__logo' src={logo} alt='BT' />
                    <h1 className='header__title'>BT TV</h1>
                </Col>
                <Col xs="6 mui--text-right">
                    <img className='header__lock' src={lock} alt='BT' />
                    <a href='#' className='header__link-lock'>Log in</a>
                </Col>
            </Row>
        </Container>

    </header>
);
export default Header;
