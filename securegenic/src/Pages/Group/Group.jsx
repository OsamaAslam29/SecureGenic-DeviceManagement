import React from 'react'
import './Group.scss'
import Heading from '../../Components/0-Atoms/Heading/Heading'

const Group = () => {
  return (
    <div className='Group_page'>
      <div className="group_container">
        <Heading heading="Group" para="The device group feature allows you to organize your devices into groups."/>
      </div>
    </div>
  )
}

export default Group
