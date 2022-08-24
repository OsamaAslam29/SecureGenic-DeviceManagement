// ********** All imports ***********
import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ApplicationCard.scss'
import Heading from '../../../Components/0-Atoms/Heading/Heading'
// ********** Body of application starts***********
const ApplicationCard = () => {
  return (
    <div className='application_card'>
      <div className="application_container">
        <Heading heading="Application Management" para="Manage your mobile application on your devices." />
        <div className="application_button">

          <button>
          <Link to="/Alert" style={{ textDecoration: "none" }}>
            <button><FaPlus /><div className="text">Add Application</div></button>
          </Link>
            
          </button>

        </div>
      </div>

    </div>
  )
}

export default ApplicationCard
