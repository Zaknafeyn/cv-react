import React from 'react'
import { Text } from '../common/text/Text'
//import logo from '../../logo.svg'

import './Header.css'

export const Header = () => (
  <header>
    <div>
      <Text type="header-1" className="header-name">
        John Doe
      </Text>
    </div>
    <div>
      <Text type="title" className="header-title">
        Software Developer
      </Text>
    </div>
    {/*<img src={logo} className="logo" alt="logo" />*/}
  </header>
)
