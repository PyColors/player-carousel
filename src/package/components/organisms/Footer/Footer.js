import React from "react";

import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import logoBottom from '../../../../../public/bt_logo.png';

const Footer = () => (
    <footer className='footer'>
            <Row>
                <Col md="6"><img className='footer__logo' src={logoBottom} alt='BT'/>
                    <p className='footer__title'>BT TV</p>
                    <span className='footer__copyright'>@copyright 2018</span></Col>
                <Col md="6" mui--text-right>
                    <div className="mui--text-right">
                        <img className='footer__travis--logo' src="https://travis-ci.org/PyColors/player-carousel.svg?branch=master"
                             alt="Build Status"/>
                        <a className="footer__travis--text" href="https://github.com/PyColors/player-carousel"
                           target="_blank">Project on
                            GitHub</a>
                    </div>

                </Col>
            </Row>
    </footer>
);

export default Footer;
