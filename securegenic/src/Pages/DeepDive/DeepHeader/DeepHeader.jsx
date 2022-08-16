import React from 'react'
import './DeepHeader.scss'
import android from '../../../Assets/DeepDive/android.svg'
import application from '../../../Assets/DeepDive/application.png'
import group from '../../../Assets/DeepDive/group.png'
import wifi from '../../../Assets/DeepDive/wifi.png'
import Heading from '../../../Components/0-Atoms/Heading/Heading'

const DeepHeader = () => {
  return (
    <div className='deep_header'>
            <Heading heading="Securegenic DeepDive" para="Get quick & deep insights into your inventory and how they are used."/>
            <div className="deep_container">
                <div className="deep_phone">
                    <div className="deep_heading">
                        <div className="f_heading">Platforms Summary</div>
                        <div className="s_heading">Total Devices Enrolled</div>
                        <div className="t_heading">0</div>
                    </div>
                    <div className="deep_icons">
                        <div className="f_icon">
                            <div className="logo">
                                <img src={android} alt="" style={{height:"3.1rem"}} />
                                <p>Android</p>
                            </div>
                            <div className="d_data">0</div>
                        </div>
                        <div className="f_icon">
                            <div className="logo">
                                <img src={application} alt="" />
                                <p>Applications</p>
                            </div>
                            <div className="d_data">6</div>
                        </div>
                        <div className="f_icon">
                            <div className="logo">
                                <img src={wifi} alt="" />
                                <p>WiFi profile</p>
                            </div>
                            <div className="d_data">5</div>
                        </div>
                        <div className="f_icon">
                            <div className="logo">
                                <img src={group} alt="" />
                                <p>Groups</p>
                            </div>
                            <div className="d_data">0</div>
                        </div>
                    </div>    
                </div>
                <div className="deep_flex">
                    <div className="inventory">
                        <div className="inventory_heading">Inventory Snapshot</div>
                        <div className="inventory_container">
                                    <div className="inventory_flex">
                                        <div className="i_flex">
                                            <div className="i_heading">Active Devices</div>
                                            <div className="i_value">0</div>
                                        </div>
                                        <div className="i_flex">
                                            <div className="i_heading">Android EMM Devices</div>
                                            <div className="i_value">0</div>
                                        </div>
                                        <div className="i_flex">
                                            <div className="i_heading">Unlocked Devices</div>
                                            <div className="i_value">0</div>
                                        </div>
                                        <div className="i_flex">
                                            <div className="i_heading">Android Legacy Devices</div>
                                            <div className="i_value">0</div>
                                        </div>
                                    </div>
                                    <div className="inventory_flex">
                                        <div className="i_flex">
                                            <div className="i_heading">Inactive Devices</div>
                                            <div className="i_value">0</div>
                                        </div>
                                        <div className="i_flex">
                                            <div className="i_heading">Locked/Managed Devices</div>
                                            <div className="i_value">0</div>
                                        </div>
                                        <div className="i_flex">
                                            <div className="i_heading">Un-managed Devices</div>
                                            <div className="i_value">0</div>
                                        </div>
                                    </div>
                            

                        </div>
                    </div>
                </div>

                <div className="deep_license">
                    <div className="license_headings">
                        <div className="lf_heading">License Overview</div>
                        <div className="ls_heading">License Used <br /> <span className='e_size'> 0 </span> </div>
                        <div className="ls_heading">License Purchased: <br /><span className='e_size'>5530</span></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DeepHeader
