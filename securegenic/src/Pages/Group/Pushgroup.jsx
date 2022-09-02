import React from "react";
import "./Pushgroup.scss";
import { Link } from "react-router-dom";
import Heading from "../../Components/0-Atoms/Heading/Heading";
const Pushgroup = () => {
  return (
    <div className="main_push">
      {/* <div className="bold">Push Application Group</div>
      <div className="para">
        Select a platform, scan a QR code or open a URL, enroll your devices.
      </div> */}
      <Heading heading="Push Application Group" para="Select a platform, scan a QR code or open a URL, enroll your devices."/>
      <div className="push_content">
        <div className="title">Push Application Group</div>
        <div className="group">
          <label>Group</label>
          <select className="select_group">
            <option selected>Select Group</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div className="group_2">
          <div className="group">
            <label>Application</label>
            <select className="select_application">
              <option selected>Select Group</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <div className="group">
            <label>Application</label>
            <select className="select_application">
              <option selected>Select Group</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        </div>

        <div className="centre_group">
          <div className="group_3">
            <label>Action</label>
            <select className="select_group">
              <option selected>Select Group</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        </div>
        <div className="buttons">
      <Link style={{textDecoration:'none'}} to='/Tablegroup'><button style={{ background: "#00c8c0", color: "white" }}>Save</button></Link>  
        <button style={{ background: "#161c32", color: "white" }}>
          Cancel
        </button>
      </div>
      </div>
    </div>
  );
};

export default Pushgroup;
