// ************ All Imports ************
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import Android from "../../Assets/DeepDive/android.svg"
import Application from "../../Assets/DeepDive/application.png"
import Group from "../../Assets/DeepDive/group.png"
import Wifi from "../../Assets/DeepDive/wifi.png"

import 'react-circular-progressbar/dist/styles.css';
import "./DeepDive.scss"

// ************ body of component starts ************
const appBox = [
  {
    name: "Android",
    img: Android,
    value: 1
  },
  {
    name: "Application",
    img: Application,
    value: 4
  },
  {
    name: "WiFi profile",
    img: Wifi,
    value: 3
  },
  {
    name: "Groupd",
    img: Group,
    value: 0
  }
]


const DeepDive = () => {

  return (
    <>
      <div className="deepdive_container">
        <div className="title_box">
          <p className="title">Securegenic DeepDive</p>
          <p>Get quick & deep insights into your inventory and how they are used.</p>
        </div>

        <div className="deepdiv_box">
          {/* ***************** Platform_box of Deepdive ************* */}

          <div className="platforms_box">
            <div className="heading">Platforms Summary</div>
            <div className="total"> <p>Total Devices Enrolled</p> <b>1</b> </div>

            <div className="apps_box">
              {
                appBox.map((app) => {
                  return (
                    <div className="app">
                      <div className="icon"><img src={app.img} alt="Error" /></div>
                      <div className="name_box"><p className="name">{app.name}</p> <p className="number" >{app.value}</p></div>
                    </div>
                  )
                })
              }
            </div>

          </div>
          {/* ***************** Inventory_box of Deepdive ************* */}
          <div className="inventory_box">
            <div className="inventory">
              <div className="heading">Inventory Snapshot</div>
              <div className="inventory_data">
                <div className="details"><p className="name">Active Devices</p> <p className="value">1</p></div>
                <div className="details"><p className="name">Inactive Devices</p> <p className="value">0</p></div>
                <div className="details"><p className="name">Android EMM Devices</p> <p className="value">0</p></div>
                <div className="details"><p className="name">Locked/Managed Devices</p> <p className="value">0</p></div>
                <div className="details"><p className="name">Unlocked Devices</p> <p className="value">1</p></div>
                <div className="details"><p className="name">Un-managed Devices</p> <p className="value">0</p></div>
                <div className="details"><p className="name">Android Legacy Devices</p> <p className="value">0</p></div>
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
                  <CircularProgressbar value={100} text={`${10}%`} />
                </div>
              </div>
            </div>
          </div>
          {/* ***************** License_box of Deepdive ************* */}
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