import React from 'react'
import './CardHeading.scss'

const CardHeading = (props) => {
  return (
    <div className='c_heading_atom'>
        <h4 className='c_heading'>{props.heading}</h4>
        <div className='c_para'>{props.para}</div>
    </div>
  )
}

export default CardHeading