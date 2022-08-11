import css_styles from '../_module/scss/_.module.scss'
import var_styles from '../_module/scss/_var.module.scss'
import React, { useRef, useState } from 'react';
import { Edit } from '../MY_REACT/Playground/editorcomponents/EditEditor'

export default function Demo() {
  return (
    <>
      <h1 style={{color:'#33b5e5'}}>Welcome to node!</h1>
      <Edit />
    </>
  )
}