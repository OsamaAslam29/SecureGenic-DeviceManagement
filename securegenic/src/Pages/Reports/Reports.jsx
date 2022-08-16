import React from 'react'
import './Reports.scss'
import { HiInformationCircle } from 'react-icons/hi';
import signal from "../../Assets/Report/Wifi.svg"
import android from "../../Assets/Report/android.png"
import battery from "../../Assets/Report/battery.svg"
import Heading from '../../Components/0-Atoms/Heading/Heading'

const Reports = () => {
  return (
    <div className='Reports_Page'>
      <Heading heading="All Report" para="View and download reports from here" /> 
      <div className="report_cards">
        <div className="r-card">
          <div className="r_logo"><img src={signal} alt="" /></div>
          <div className="r_content">
            <div className="content"><h4>Conectivity History</h4></div>
            <div className="android_logo"><img src={android} alt="" /></div>
          </div>
          <div className="r_icon"><HiInformationCircle/></div>
        </div>
        <div className="r-card">
          <div className="r_logo"><img src={battery} alt="" /></div>
          <div className="r_content">
            <div className="content"><h4>Conectivity History</h4></div>
            <div className="android_logo"><img src={android} alt="" /></div>
          </div>
          <div className="r_icon"><HiInformationCircle/></div>
        </div>
      </div>


    </div>
  )
}

export default Reports
