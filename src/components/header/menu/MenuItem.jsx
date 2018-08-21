import React from 'react'
import { PropTypes } from 'prop-types'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import { Text } from 'components/common/text/Text'

import './MenuItem.css'

export const MenuItem = ({ children, itemOrder, to, className, activeClassName = 'selected' }) => (
  <div className={classNames('menu-item-container', itemOrder, className)}>
    <NavLink to={to} activeClassName={activeClassName}>
      <Text type="body-2" className="link-text">
        {children}
      </Text>
    </NavLink>
  </div>
)

MenuItem.propTypes = {
  itemOrder: PropTypes.oneOf(['first', 'regular', 'last']),
  to: PropTypes.string.isRequired,
  children: PropTypes.any,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
}
