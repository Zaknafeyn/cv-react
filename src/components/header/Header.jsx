import React from 'react'
import { Text } from 'components/common/text/Text'
import { MenuItem } from 'components/header/menu/MenuItem'

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
        Title
      </Text>
    </div>
    <div className="navigation-bar">
      <MenuItem to="/" itemOrder="first">
        About
      </MenuItem>
      <MenuItem to="/skills">Skills</MenuItem>
      <MenuItem to="/experience">Experience</MenuItem>
      <MenuItem to="/education">Education</MenuItem>
      <MenuItem to="/contact" itemOrder="last">
        Contact
      </MenuItem>
    </div>
  </header>
)
