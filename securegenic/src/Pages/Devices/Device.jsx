import React from 'react'
import './Device.scss'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';
import Heading from '../../Components/0-Atoms/Heading/Heading'

const Device = () => {
  return (
    <div className='device_page'>
      <Heading heading="Registered Devices" para="Manage all devices - Select Application / Admin mode / WiFi Profile" />
      <div className="device_search">
        <div className="label">
          <div className="label_info">View Devices</div>
          <div className="label_option">
            <select id="optin">
              <option label="Android Devices">Android Devices</option>
              <option label="Admin Mode">Admin Mode</option>
              <option label="Wifi">Wifi</option>
              <option label="Device Status">Device Status</option>
            </select>
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder='Search..' />
          <button className="submit"><FaSearch /></button>

          <Link to="/Filter" style={{ textDecoration: "none" }}>
            <span className="menus"><FcMenu /></span>
          </Link>

        </div>
      </div>

      <form action="/action_page.php" className="device_radio">
        <label htmlFor="vehicle1" className="s_text" >Select All Devices </label>
        <input type="checkbox" />
      </form>
    </div>
  )
}

export default Device
