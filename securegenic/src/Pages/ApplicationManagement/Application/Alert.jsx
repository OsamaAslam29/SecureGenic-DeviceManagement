import React from 'react'
import './Alert.scss'
const Alert = () => {
    return (
        <div className="alert_box">
            <div className="heading">Add Application</div>
            <div className="form_box">
                <div className="line">
                    <div className="text_box">
                        <div className="f-text">Name</div>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="text_box">
                        <div className="f-text">Package Name</div>
                        <input type="text" placeholder='Package Name' />
                    </div>
                </div>
                <div className="line">
                    <div className="text_box">
                        <div className="f-text">Upload Image</div>
                        <input type="text" />
                    </div>
                    <div className="text_box">
                        <div className="f-text">Description</div>
                        <input type="text" placeholder='Description' />
                    </div>
                </div>
                <div className="line">
                    <div className="text_box">
                        <div className="f-text">Upload Apk</div>
                        <input type="text" />
                    </div>
                    <div className="text_box">
                        <div className="f-text">Version</div>
                        <input type="text" placeholder='Version' />
                    </div>
                </div>
                <div className="text_button">
                    <button>Save</button>
                    <button>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default Alert
