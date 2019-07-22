import React from "react";

import logoBottom from '../../../../../public/bt_logo.png';

const Footer = () => (
    <footer className='header'>
        <img className='footer__logo' src={logoBottom} alt='BT'/>
        <p className='footer__title'>BT TV</p>
        <span className='footer__copyright'>@copyright 2018</span>
    </footer>
);
export default Footer;
