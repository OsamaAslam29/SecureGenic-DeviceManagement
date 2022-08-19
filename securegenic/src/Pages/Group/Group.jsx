import React from 'react'
import './Group.scss'
import { FaPlus } from 'react-icons/fa';
import Heading from '../../Components/0-Atoms/Heading/Heading'

const Group = () => {
  return (
    <div className='Group_page'>
      <div className="group_container">
        <Heading heading="Group" para="The device group feature allows you to organize your devices into groups."/>
        <div className="group_button">
        <button>
            <div className="icon"><FaPlus /> </div>
            <div className="text">Add Group</div>
          </button>
        <button>
            <div className="icon"><FaPlus /> </div>
            <div className="text">Push Application Group</div>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Group
