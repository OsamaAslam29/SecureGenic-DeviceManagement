// ****************** All imports are here ****************
import React from 'react'
import './Navbar.scss'
import n_logo from '../../Assets/Navbar/logo.png'
import n_button from '../../Assets/Navbar/button.svg'
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import dash from '../../Assets/Navbar/dashboard.png'
import wifi from '../../Assets/Navbar/wifi_profile.png'
import threshold from '../../Assets/Navbar/threshold.png'
import privacy from '../../Assets/Navbar/privacy_policy.png'
import locataion from '../../Assets/Navbar/location.png'
import groups from '../../Assets/Navbar/groups.png'
import enroll from '../../Assets/Navbar/enroll_devices.png'
import devices from '../../Assets/Navbar/devices.png'
import devicehealth from '../../Assets/Navbar/deviceheath.png'
import deep from '../../Assets/Navbar/deepdive.png'
import administration from '../../Assets/Navbar/administration.png'
import battery from '../../Assets/Navbar/battery_report.png'
import apply from '../../Assets/Navbar/application_management.png'

const Navbar = () => {
    const [state, setState] = React.useState({

        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='main'>
                <div className="close"><CloseIcon/></div>
                <div className="nav"><img src={dash} alt="" /><Link to="/" >Dashboard</Link></div>
                <div className="nav"><img src={deep} alt="" /><Link to="/DeepDive" >DeepDive</Link></div>
                <div className="nav"><img src={enroll} alt="" /><Link to="/EnrollDevices" >Enroll Devices</Link></div>
                <div className="nav"><img src={devices} alt="" /><Link to="/Device" >Devices </Link></div>
                <div className="nav"><img src={apply} alt="" /><Link to="/Application" > Application Management</Link></div>
                <div className="nav"><img src={wifi} alt="" /><Link to="/Wifi" >Wifi Profile</Link></div>
                <div className="nav"><img src={groups} alt="" /><Link to="/Group" >Group</Link></div>
                <div className="nav"><img src={locataion} alt="" /><Link to="/Location" >Location</Link></div>
                <div className="nav"><img src={threshold} alt="" /><Link to="/Utilities" >Utilities</Link></div>
                <div className="nav"><img src={administration} alt="" /><Link to="/Administration" >Administration</Link></div>
                <div className="nav"><img src={devicehealth} alt="" /><Link to="/DeviceHealth" >Device Health Report</Link></div>
                <div className="nav"><img src={battery} alt="" /><Link to="/Reports" > Reports</Link></div>
                <div className="nav"><img src={privacy} alt="" /><Link to="/PrivacyPolicy" >Privacy Policy</Link></div>
            </div>

        </Box>
    );
    return (
        <>
 {/* ****************** Navbar Code **************** */}
        
            <div className="navbar">
                <div className="logo">
                    <img src={n_logo} alt="error" />
                </div>
                <div className="login_button">
                    <span>Welcome, admin</span>
                    <img src={n_button} alt="" />
                </div>
           
 {/* ****************** Hameburger Code **************** */}
            
            <div className="hameburger">
               <div className='ham_none'>
                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>

                            <div className="menu">
              
                                <MenuIcon onClick={toggleDrawer(anchor, true)} />
                            </div>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                                >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>  
            </div>      
        </>
    )
}

export default Navbar
