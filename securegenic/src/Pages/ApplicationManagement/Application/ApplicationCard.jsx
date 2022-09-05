// ********** All imports ***********
import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ApplicationCard.scss'
import { BsLockFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import Heading from '../../../Components/0-Atoms/Heading/Heading'
// ********** Body of application starts***********
const ApplicationCard = () => {
  return (
    <div className='application_card'>
      <Heading heading="Application Management" para="Manage your mobile application on your devices." />
      <div className="application_container">
        <div className="application_button">
          <button className='shadow'>
            <Link to="/Add" style={{ textDecoration: "none" }}>
              <button><FaPlus /><div className="text">Add Application</div></button>
            </Link>
          </button>
          
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
    </div>
  )
}

export default ApplicationCard
