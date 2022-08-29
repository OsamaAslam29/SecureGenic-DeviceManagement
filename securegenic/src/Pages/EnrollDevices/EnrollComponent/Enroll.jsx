// ***************** All imports *************
import React from 'react'
import './Enroll.scss'
import { GoPrimitiveDot } from 'react-icons/go';
import a from '../../../Assets/Enroll/1.gif'
import b from '../../../Assets/Enroll/2.gif'
import c from '../../../Assets/Enroll/3.gif'
import d from '../../../Assets/Enroll/4.gif'
import e from '../../../Assets/Enroll/5.gif'
import qr from '../../../Assets/Enroll/qr.jpg'
import android from '../../../Assets/Enroll/android.png'
import Heading from '../../../Components/0-Atoms/Heading/Heading'

// ***************** Function *************
const enrollDevice = [
    {
        heading: "Step 1: Prepare Device",
        img: a,
        para: "Turn on your device. You should see Blue screen asking for language selection (if not then please \n factory reset device).",
        para2: "See instruction here"

    },
    {
        heading: "Step 2: Install Securegenic",
        img: b,
        para: "Tap 5 times on screen and it will open up rear camera. Scan this QR Code and connect WiFi on next \n screen. Wait for the App to be installed as it will take some time."

    },
    {
        heading: "Step 3: Complete Setup",
        img: c,
        para: "Once done it will ask for default launcher selection. Please choose “Securegenic” and press always \n then restart the device."

    },

    {
        heading: " Step 4: Verify Setup",
        img: d,
        para: "Tap three dots on top right and press info and see if you get Device ID"

    },
    {
        heading: "Step 5: Start Management",
        img: e,
        para: "Now, Login to Web admin console here or contact your IT department for further steps"

    }

]
// ***************** Body *************
const Enroll = () => {
    return (
        <div className='Enroll_Component'>
            <Heading heading="Enroll Devices" />
            <div className="android">
                <img src={android} alt="" />
                <p>Andorid Devices</p>
            </div>
            <div className="border"></div>
            <div className="enrol_devices">
                <div className="enroll_flex">
                    {
                        enrollDevice.map((enroll) => {
                            return (
                                <div className="e_devices">
                                    <div className="image"><img src={enroll.img} alt="Error" /></div>
                                    <GoPrimitiveDot className='size' />
                                    <div className="e_heading">
                                        <div className="heading">{enroll.heading}</div>
                                        <div className="para"> {enroll.para} </div>
                                        <div className="para"> {enroll.para2} </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="e_qr">
                    <img src={qr} alt="" />
                    <p>Scan to Install<br />"Securegenic MDM App"</p>
                </div>
            </div>
        </div>
    )
}

export default Enroll
