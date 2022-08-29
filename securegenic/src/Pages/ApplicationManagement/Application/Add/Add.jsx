import React from 'react'
import './Add.scss'
const addData = [
    {
        name: "Name",
        placeholder: "Name"
    },
    {
        name: "Package Name",
        placeholder: "Package Name"
    },
    {
        name: "Upload Image",
        placeholder: "Name"
    },
    {
        name: "Description",
        placeholder: "Description"
    },
    {
        name: "Upload Apk",
        placeholder: "Name"
    },
    {
        name: "Version",
        placeholder: "Version"
    },
]
const Add = () => {
    return (
        <div className='add_application'>
            <div className="application">
                <div className="heading">Application</div>
                <div className="inputs">
                    {
                        addData.map((add) => {
                            return (
                                <>
                                <div className="input_box">
                                    <div className="f-text">{add.name}</div>
                                    <input type="text" placeholder={add.placeholder} />
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="add_button">
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default Add
