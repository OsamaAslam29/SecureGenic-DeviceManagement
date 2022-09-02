import React from 'react'
import './Home.scss'
import { Route } from 'react-router-dom'
import Aside from '../../Components/AsideBar/Aside'
import Navbar from '../../Components/Navbar/Navbar'
import DashBoard from '../DashBoard/DashBoard'
import Location from '../Location/Location'
import Reports from '../Reports/Reports'
import DeepDive from '../DeepDive/DeepDive'
import EnrollDevices from '../EnrollDevices/EnrollDevices'
import Device from '../Devices/Device'
import Filter from '../Devices/Filter'
import Application from '../ApplicationManagement/Application'
import Add from "../ApplicationManagement/Application/Add/Add"
import Wifi from '../WifiProfile/Wifi'
import Utilities from '../Utilities/Utilities'
import Administration from '../Administration/Administration'
import DeviceHealth from '../DeviceHealthReport/DeviceHeath'
import Group from '../Group/Group'
import Addgroup from '../Group/Addgroup'
import Pushgroup from '../Group/Pushgroup'
import Tablegroup from '../Group/Tablegroup'


const Home = () => {
  return (
    <>

      <Navbar />
      <div className='Home_Container'>
        <Aside />
        <div className="right_container">
          <Route exact path="/" component={DashBoard} />
          <Route path="/DeepDive" component={DeepDive} />
          <Route path="/EnrollDevices" component={EnrollDevices} />
          <Route path="/Device" component={Device} />
          <Route path="/Filter" component={Filter} />
          <Route path="/Application" component={Application} />
          <Route path="/Add" component={Add} />
          <Route path="/Wifi" component={Wifi} />
          <Route path="/Location" component={Location} />
          <Route path="/Utilities" component={Utilities} />
          <Route path="/Administration" component={Administration} />
          <Route path="/DeviceHealth" component={DeviceHealth} />
          <Route path="/Reports" component={Reports} />
          <Route path="/PrivacyPolicy" component={Reports} />
          <Route path="/Group" component={Group} />
          <Route path="/Addgroup" component={Addgroup} />
          <Route path="/Pushgroup" component={Pushgroup} />
          <Route path="/Tablegroup" component={Tablegroup} />
        </div>
      </div>

    </>
  )
}

export default Home
