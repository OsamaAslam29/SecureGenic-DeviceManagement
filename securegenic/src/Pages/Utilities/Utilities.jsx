
import React, { useState } from "react";
import "./Utilities.scss";
import "antd/dist/antd.css";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Modal, Switch } from "antd";
import battery from "../../Assets/Utilities/battery.png";
import bluetooth from "../../Assets/Utilities/bluetooth.png";
import mike from "../../Assets/Utilities/mike.png";
import Heading from "../../Components/0-Atoms/Heading/Heading"

const card = [
  {
    heading: "Threshold",
    para: "Please set battery Threshold",
    percent: "25%",
    pic: battery,
  },
  {
    heading: "Bluetooth Setting",
    para: "This feature allows you to Enable/Disable Bluetooth on Devices.",
    pic: bluetooth,
    switch: <Switch checkedChildren="On" unCheckedChildren="off" />,
  },
  {
    heading: "Volume Setting",
    para: "This feature allows you to Enable/Disable Volume on Devices.",
    pic: mike,
    switch: <Switch checkedChildren="On" unCheckedChildren="off" />,
  },
];

const Utilities = () => {
  const [model, setModel] = useState(true);

  const handleClick = () => {
    setModel(false);

    console.log("pic Clicked");
  };







  // modal

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };




  return (
    <div className="Utilities_Page">
      <Heading heading="Utilities" para="Collection of nifty utilities to make your device management even more
        easy."/>
      <div className="main_utiliy_card">
        {
          card.map((e) => {
            return (
              <>
                <div className="card">
                  <div className="card_img" onClick={showModal}>
                    <img src={e.pic} alt="Image Error" />
                    <b>{e.percent}</b>
                  </div>

                  <div className="card_text">
                    <b>{e.heading} </b>
                    <span>{e.para}</span>
                    <div className="switch">{e.switch}</div>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>





      <Modal title="Basic Modal" visible={isModalVisible}  >
        <div className="main_model">
          <div className="model_title">ThresHold</div>

          <div className="group">
            <label>ThresHold Value</label>
            <input type="number" />
          </div>

          <div className="buttons">
            <button style={{ background: "#00c8c0", color: "white" }} onClick={handleOk} >
              Save
            </button>
            <button style={{ background: "#161c32", color: "white" }} onClick={handleCancel} >
              Cancel
            </button>
          </div>
          <AiOutlineClose className="cross" onClick={handleCancel} />
        </div>
      </Modal>


    </div>
  );
};

export default Utilities;
