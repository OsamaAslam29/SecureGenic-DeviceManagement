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
                <div className="flex">
                    <div className="e_devices">
                        <div className="image">
                            <img src={a} alt="" />
                        </div>
                        <GoPrimitiveDot className='size' />
                        <div className="e_heading">
                            <div className="heading">Step 1: Prepare Device</div>
                            <div className="para">Turn on your device. You should see Blue screen asking for language selection (if not then please <br /> factory reset device</div>
                            <div className="para">See instruction here</div>
                        </div>
                    </div>
                    <div className="e_devices">
                        <div className="image"><img src={b} alt="" /></div>
                        <GoPrimitiveDot className='size' />
                        <div className="e_heading">
                            <div className="heading">Step 2: Install Securegenic</div>
                            <div className="para">Tap 5 times on screen and it will open up rear camera. Scan this QR Code and connect WiFi on next<br />screen. Wait for the App to be installed as it will take some time.</div>
                        </div>
                    </div>
                    <div className="e_devices">
                        <div className="image"><img src={c} alt="" /></div>
                        <GoPrimitiveDot className='size' />
                        <div className="e_heading">
                            <div className="heading"> Step 3: Complete Setup</div>
                            <div className="para">Once done it will ask for default launcher selection. Please choose “Securegenic” and press always<br />then restart the device</div>
                        </div>
                    </div>
                    <div className="e_devices">
                        <div className="image"><img src={d} alt="" /></div>
                        <GoPrimitiveDot className='size' />
                        <div className="e_heading">
                            <div className="heading">Step 4: Verify Setup</div>
                            <div className="para">Tap three dots on top right and press info and see if you get Device ID</div>
                        </div>
                    </div>
                    <div className="e_devices">
                        <div className="image"><img src={e} alt="" /></div>
                        <GoPrimitiveDot className='size' />
                        <div className="e_heading">
                            <div className="heading">Step 5: Start Management</div>
                            <div className="para">Now, Login to Web admin console here or contact your IT department for further steps</div>
                        </div>
                    </div>
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
