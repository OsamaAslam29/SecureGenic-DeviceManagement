import React, { useState } from "react";
import "./Group.scss";
import { FiPlusSquare } from "react-icons/fi";
import { BsUnlockFill } from "react-icons/bs";
import { BsLockFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Heading from "../../Components/0-Atoms/Heading/Heading";
const Group = () => {
  return (
   <>
     <div className="main_group">
      <Heading heading="Group" para="The device groups feature allows you to organize your devices into groups."/>
      <div className="buttons">
          <Link to="/Addgroup" style={{ textDecoration: "none" }}>
            <button><FiPlusSquare /> Add Group</button>
          </Link>
          <Link to="/Pushgroup" style={{ textDecoration: "none" }}>
            <button><FiPlusSquare /> Push Application Group</button>
          </Link>
      </div>

      <div className="card_main">
        <div className="card">
          <div className="card_title">
            Group Name:
            <div className="name">Fahad</div>
          </div>

          <div className="card_content">
            <div className="card_date">
              Date and Time
              <div className="date">2-06-2022 15:24</div>
            </div>
            <div className="card_list">
              Device List
              <div className="view">View Details</div>
            </div>
            <div className="icons">
              <BsLockFill className="lock" />
              <AiFillDelete className="del" />
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Group;
