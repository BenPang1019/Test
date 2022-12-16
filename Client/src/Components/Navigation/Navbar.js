import React from 'react'
import '../Navigation/Navbar.css'
import { Link } from 'react-router-dom'
import Cart from '../../Images/Cart.svg'
 
export default function NavBar() {
  return (
    <div className='navbar'>
      <div className='header-container'>
        <h1 className='header'>uniview</h1>   
        <img src={Cart} className="icon"/>
      </div>
      <ul className='list-container'>
        <li className='list-items first-list-items'>
          <Link to='/' className='list-items-link'>Home</Link>
        </li>
        <li className='list-items'>
          <Link to='/about' className='list-items-link'>About Us</Link>
        </li>
        <li className='list-items'>
          <Link  className='list-items-link'>Products</Link>
        </li>
        <li className='list-items'>
          <Link className='list-items-link'>Blog</Link>
        </li>
        <li className='list-items'>
          <Link className='list-items-link'>Jobs</Link>
        </li>
        <li className='list-items'>
          <Link to='/cms' className='list-items-link'>CMS</Link>
        </li>
        <li className='list-items'>
          <Link to='/pids' className='list-items-link'>PIDS</Link>
        </li>
        <li className='list-items'>
          <Link className='list-items-link'>Support</Link>
        </li>
      </ul>
    </div>
  )
}
