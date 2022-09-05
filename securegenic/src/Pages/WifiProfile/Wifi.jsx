// *****************  All imports *************
import React from 'react'
import './Wifi.scss'
import { BsLockFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FiPlusSquare } from 'react-icons/fi';
import Heading from '../../Components/0-Atoms/Heading/Heading'
// ***************** Body of WIFI page start *************
const Wifi = () => {
  return (
    <div className='wifi_container'>
      <div className="wifi_profile">
        <Heading heading="Manage WiFi Profile" para="Manage WiFi profile on devices"/>
        <div className="wifi_button">
        <button>
                <div className="icon"><FiPlusSquare/> </div>
                <div className="text">Add WIFI</div>
            </button>
        </div>
      </div>
      <div className="card_main">
        <div className="card">
          <div className="card_title">
            Group Name:
            <div className="name">Fahad</div>
          </div>

          <div className="card_content">
            <div className="card_date">
              Date and Time
              <div className="date">2-06-2022 15:24</div>
            </div>
            <div className="card_list">
              Device List
              <div className="view">View Details</div>
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

export default Wifi
