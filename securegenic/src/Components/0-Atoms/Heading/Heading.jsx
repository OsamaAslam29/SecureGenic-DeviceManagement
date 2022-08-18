import React from 'react'
import './Heading.scss'
// ********** Body of heading atom starts***********
const Heading = (props) => {
  return (
    <div className='heading_atom'>
        <h4 className='a_heading'>{props.heading}</h4>
        <div className='a_para'>{props.para}</div>
    </div>
  )
}

export default Heading
