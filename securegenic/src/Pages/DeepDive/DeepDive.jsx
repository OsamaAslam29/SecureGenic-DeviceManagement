import React from 'react'

import { CircularProgressbar } from 'react-circular-progressbar';

import Android from "../../Assets/DeepDive/android.svg"
import Application from "../../Assets/DeepDive/application.png"
import Group from "../../Assets/DeepDive/group.png"
import Wifi from "../../Assets/DeepDive/wifi.png"

import 'react-circular-progressbar/dist/styles.css';
import "./DeepDive.scss"





const DeepDive = () => {
  return (
    <>
      <div className="deepdive_container">
        <div className="title_box">
          <p className="title">Securegenic DeepDive</p>
          <p>Get quick & deep insights into your inventory and how they are used.</p>
        </div>
        <div className="deepdiv_box">
          <div className="platforms_box">
            <div className="heading">Platforms Summary</div>
            <div className="total"> <p>Total Devices Enrolled</p> <b>1</b> </div>
            <div className="apps_box">
              <div className="app">
                <div className="icon"><img src={Android} alt="" /></div>
                <div className="name_box"><p className="name">Android</p> <p className="number">1</p></div>
              </div>
              <div className="app">
                <div className="icon"><img src={Application} alt="" /></div>
                <div className="name_box"><p className="name">Applications</p> <p className="number">4</p></div>
              </div>
              <div className="app">
                <div className="icon"><img src={Wifi} alt="" /></div>
                <div className="name_box"><p className="name">Wifi Profile</p> <p className="number">5</p></div>
              </div>
              <div className="app">
                <div className="icon"><img src={Group} alt="" /></div>
                <div className="name_box"><p className="name">Groups</p> <p className="number">2</p></div>
              </div>
            </div>
          </div>
          <div className="inventory_box">
            <div className="inventory">
              <div className="heading">Inventory Snapshot</div>
              <div className="inventory_data">
                <div className="details"><p className="name">Active Devices</p> <p className="value">1</p></div>
                <div className="details"><p className="name">Active Devices</p> <p className="value">1</p></div>
                <div className="details"><p className="name">Active Devices</p> <p className="value">1</p></div>
                <div className="details"><p className="name">Active Devices</p> <p className="value">1</p></div>
                <div className="details"><p className="name">Active Devices</p> <p className="value">1</p></div>
                <div className="details"><p className="name">Active Devices</p> <p className="value">1</p></div>
                <div className="details"><p className="name">Active Devices</p> <p className="value">1</p></div>
                <div className="details"><p className="name">Active Devices</p> <p className="value">1</p></div>
              </div>
            </div>
            <div className="device_type">
              <div className="heading">Device Type Available</div>
              <div className="device_type_data">
                <div className="details_box">
                  <div className="details"><div className="name">Tablets</div> <div className="value">1</div></div>
                  <div className="details"><div className="name">SmartPhones</div> <div className="value">0</div></div>
                </div>
                <div className="status">
                  <CircularProgressbar value={100} text={`${1}%`} />
                </div>
              </div>
            </div>
          </div>
          <div className="license_box">
            <div className="heading">License Overview</div>
            <div className="used">License Used</div>
            <div className="used">1</div>
            <div>License Purchased:</div>
            <div className="used">5530</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeepDive