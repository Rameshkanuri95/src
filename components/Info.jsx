/* eslint-disable no-unused-vars */
import React from 'react'
import photo from '../assets/photo.png';
const Info = () => {
  return (
    <div>
      <img className='Info-photo' src={photo} alt="photo" />
      <h1 className='Info-candiatename'>Laura Smith</h1>
      <h3 className='Info-designation'>Frontend Developer</h3>
      <span className='Info-websitename'>laurasmith.website</span>
      <div className='Info-socialbuttons'>
        <button className='Info-email Info-button'>Email</button>
        <button className='Info-linkdin Info-button'>Linkdin</button>
      </div>
    </div>
  )
}

export default Info
