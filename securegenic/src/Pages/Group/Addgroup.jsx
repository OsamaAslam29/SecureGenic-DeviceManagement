import React from "react";
import "./Addgroup.scss";
import { BsFillBellFill } from "react-icons/bs";
const Addgroup = () => {
  return (
    <div className="add_group">
      <div className="title">Add Group</div>

      <div className="para">
        Select a platform, scan a QR code or open a URL, enroll your devices.
      </div>

      <div className="notice">
        <BsFillBellFill className="bell" /> <b>Important Notice:</b> Upload File
        must be in CSV and format should be as follows in this example file{" "}
        <b style={{ color: "yellow", cursor: "pointer" }}> Click here </b> to
        download.
      </div>

      <div className="group">
        <label>Group</label>
        <input type="text" placeholder="Enter group name" />
      </div>
      <div className="file">
        <label>Upload Device</label>
        <input type="file" />
      </div>

      <div className="buttons">
        <button style={{ background: "#00c8c0", color: "white" }}>Save</button>
        <button style={{ background: "#161c32", color: "white" }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Addgroup;
