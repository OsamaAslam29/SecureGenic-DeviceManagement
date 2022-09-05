//  ***************** All Imports *************
import React from 'react'
import "./Admin.scss"
import { BsLockFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FiPlusSquare } from 'react-icons/fi';
import Heading from '../../../Components/0-Atoms/Heading/Heading'
//  ***************** Body of Admin page starts *************
const Admin = () => {
  return (
    <div className='admin_panel'>
        <Heading heading="Administration" para="View and manage all your account administration and their roles"/>
        <div className="admin_button">
            <div className="admin_button_heading">All User</div>
          <div>
            <button>
                <div className="icon"><FiPlusSquare/></div>
                <div className="text">Add User</div>
            </button>
            </div>

        </div>
            <div className="card_main">
        <div className="card">
          <div className="card_title">
          Wifi Profile Name:
            <div className="name">Viion Office</div>
          </div>

          <div className="card_content">
            <div className="card_date">
            SSID
              <div className="date">Viion 2</div>
            </div>
            <div className="card_list">
            Password
              <div className="view">viion 3000</div>
            </div>
            <div className="icons">
              <BsLockFill className="lock" />
              <AiFillDelete className="del" />
            </div>
          </div>
        </div>
         </div>
    </div>
  )
}

export default Admin
