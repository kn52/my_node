import css_styles from '../_module/scss/_.module.scss'
import var_styles from '../_module/scss/_var.module.scss'
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
export default function Demo({name, hi}) {
  console.log("css_styles.theme_color",css_styles)
  return (
    <>
      <h1 className={css_styles.them_color}>{hi} {name}</h1>
      {/* <h1 style={{
        color: var_styles.theme_color
      }}>Welcome to node!</h1> */}
    </>
  )
}

Demo.propTypes = {
  name: PropTypes.string,
  hi: PropTypes.string
}