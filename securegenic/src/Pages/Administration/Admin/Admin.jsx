//  ***************** All Imports *************
import React from 'react'
import "./Admin.scss"
import { FiPlusSquare } from 'react-icons/fi';
import Heading from '../../../Components/0-Atoms/Heading/Heading'
//  ***************** Body of Admin starts *************
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
      
    </div>
  )
}

export default Admin
