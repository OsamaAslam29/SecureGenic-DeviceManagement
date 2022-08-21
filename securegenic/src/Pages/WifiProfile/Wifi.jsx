import React from 'react'
import './Wifi.scss'
import { FaPlus } from 'react-icons/fa';
import Heading from '../../Components/0-Atoms/Heading/Heading'

const Wifi = () => {
  return (
    <div className='wifi_container'>
      <div className="wifi_profile">
        <Heading heading="Manage WiFi Profile" para="Manage WiFi profile on devices"/>
        <div className="wifi_button">
        <button>
                <div className="icon"><FaPlus/> </div>
                <div className="text">Add Application</div>
            </button>
        </div>

      </div>
    </div>
  )
}

export default Wifi
