import React from 'react'
import Heading from '../../Components/0-Atoms/Heading/Heading'

const Location = () => {
  return (
      <div className="location_page" style={{ width:"-webkit-fill-available" , background:"rgb(246, 249, 252)"}}>
        <Heading heading="Devices Location" para="Locate your device on Map"/>
          
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d54420.81442316565!2d74.30598727480658!3d31.51589460217912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d31.5158262!2d74.3410067!4m0!5e0!3m2!1sen!2s!4v1656506562842!5m2!1sen!2s"style={{  width:"-webkit-fill-available", height:"100vh" , border:"none"  }} allowFullScreen="" loading="lazy"referrerolicy="no-referrer-when-downgrade"></iframe>
          </div>
    
      </div>
  )
}

export default Location
