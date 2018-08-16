import React from 'react'
import logo from '../../logo.svg'

import './Header.css'

export const Header = ({ info }) => (
  <header>
    <img src={logo} className="logo" alt="logo" />
    <h1 className="title">Welcome to React</h1>
  </header>
)
