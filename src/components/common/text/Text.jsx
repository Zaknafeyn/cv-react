import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Text.css'

const getElementClassNames = (className, type) => classNames(type, className)

export const Text = ({ children, type = 'body-1', className = '' }) => {
  switch (type) {
    case 'header-1':
      return <h1 className={getElementClassNames(className, type)}>{children}</h1>
    case 'header-2':
      return <h2 className={getElementClassNames(className, type)}>{children}</h2>
    case 'header-3':
      return <h3 className={getElementClassNames(className, type)}>{children}</h3>
    case 'title':
    case 'body-1':
    case 'body-2':
    default:
      return <span className={getElementClassNames(className, type)}>{children}</span>
  }
}

Text.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.oneOf(['header-1', 'header-2', 'header-3', 'title', 'body-1', 'body-2']),
}
