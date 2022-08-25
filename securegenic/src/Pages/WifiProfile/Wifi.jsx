import React from 'react'
import './Wifi.scss'
import { FiPlusSquare } from 'react-icons/fi';
import Heading from '../../Components/0-Atoms/Heading/Heading'

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
    </div>
  )
}

export default Wifi
