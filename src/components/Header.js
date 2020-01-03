import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Slackarma</h1>
        <p>A super simple realiable karma bot<br />
        designed by <a href="https://github.com/servatj">Servatj</a>.</p>
    </header>
)

export default Header
