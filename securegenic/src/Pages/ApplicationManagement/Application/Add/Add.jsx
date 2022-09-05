import React from 'react'
import './Add.scss'
const addData = [
    {
        type: "text",
        name: "Name",
        placeholder: "Name"
    },
    {
        type: "text",
        name: "Package Name",
        placeholder: "Package Name"
    },
    {
        type: "file",
        name: "Upload Image",
        placeholder: "Name"
    },
    {
        type: "text",
        name: "Description",
        placeholder: "Description"
    },
    {
        type: "file",
        name: "Upload Apk",
        placeholder: "Name"
    },
    {
        type: "text",
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
                        addData.map((add, index) => {
                            return (
                                <div className="input_box" key={index.toString()}>
                                    <div className="f-text">{add.name}</div>
                                    <input type={add.type} placeholder={add.placeholder} />
                                </div>
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
