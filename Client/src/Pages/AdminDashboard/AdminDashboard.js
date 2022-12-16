import React, { useState } from 'react'
import '../AdminDashboard/AdminDashboard.css'
import Write from '../../Images/Write.png'
import ProfileIcon from '../../Images/ProfileIcon.svg'
import { Link, useNavigate } from "react-router-dom";

export const AdminDashboard = () => {

  const navigate = useNavigate();

  const uplaod = () =>{
    navigate('/adminDashboard/upload')
  }

  const update = () =>{
    navigate('/')
  }

  const remove = () =>{
    navigate('/')
  }

  return (
    <body className='adminDashboard'>
      <h3 className='headerOne'>Welcome to Admin Dashboard</h3>
      <img className='icon' src={ProfileIcon} />
      <h4 className='headerTwo'>Your Tools</h4>
      <div className='function'>
        <button onClick={uplaod}><img src={Write} className="image"/></button>
        <h2>Upload Product</h2>
      </div>
      <div className='function'>
        <button onClick={update}><img src={Write} className="image"/></button>
        <h2>Update Product</h2>
      </div>
      <div className='function'>
        <button onClick={remove}><img src={Write} className="image"/></button>
        <h2>Delete Product</h2>
      </div>
    </body>
  )
}


