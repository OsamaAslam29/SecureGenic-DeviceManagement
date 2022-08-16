import React from 'react'
import './DashCards.scss'
import device from '../../../Assets/Dashboard/devices.png'
import appli from '../../../Assets/Dashboard/application.png'
import user from '../../../Assets/Dashboard/users.png'
import role from '../../../Assets/Dashboard/roles.png'
import Heading from '../../../Components/0-Atoms/Heading/Heading'
import CardHeading from '../../../Components/0-Atoms/CardHeading/CardHeading'

const DashCards = () => {
  return (
    <div className='wrape_dashboard'>
      <div className="dashboard">
        <Heading heading="Dashboard" para="View Status of devices and Application" />
        <div className="d_cards">
          <div className="dash__card f_card">
            <div className="c_icon">
              <img src={device} alt="" />
            </div>
            <div className="c_heading">
              <CardHeading heading="Devices" para="18" />
            </div>
          </div>
          <div className="dash__card s_card">
            <div className="c_icon">
              <img src={appli} alt="" />
            </div>
            <div className="c_heading">
              <CardHeading heading="Application" para="6" />
            </div>
          </div>
          <div className="dash__card t_card">
            <div className="c_icon">
              <img src={user} alt="" />
            </div>
            <div className="c_heading">
              <CardHeading heading="User" para="6" />
            </div>
          </div>
          <div className="dash__card forth_card">
            <div className="c_icon">
              <img src={role} alt="" />
            </div>
            <div className="c_heading">
              <CardHeading heading="Roles" para="4" />
            </div>
          </div>
        </div>
      </div>
      <div className="grap">

      </div>


    </div>
  )
}

export default DashCards
