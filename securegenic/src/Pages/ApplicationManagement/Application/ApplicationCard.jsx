import React from 'react'
import { FaPlus } from 'react-icons/fa';
import './ApplicationCard.scss'
import Heading from '../../../Components/0-Atoms/Heading/Heading'

const ApplicationCard = () => {
  return (
    <div className='application_card'>
        <Heading heading="Application Management" para="Manage your mobile application on your devices."/>
        <div className="application_button">
            <button>
                <div className="icon"><FaPlus/> </div>
                <div className="text">Add Application</div>
            </button>
        </div>
    </div>
  )
}

export default ApplicationCard
