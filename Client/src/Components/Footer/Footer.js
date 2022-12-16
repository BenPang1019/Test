import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';

import Facebook from '../../Images/Facebook.svg'
import Instagram from '../../Images/Instagram.svg'
import Tiktok from '../../Images/Tiktok.svg'
import Whatsapp from '../../Images/Whatsapp.svg'
import Youtube from '../../Images/Youtube.svg'


export default function Footer() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

  return (
    <div className='footer'>
        <div className='container-one'>
            <h1>Quick Links</h1>
            <Link className='list-items-one'>Home</Link>
            <br/>
            <Link className='list-items-two'>About Us</Link>
            <br/>
            <Link className='list-items-three'>Products</Link>
            <br/>
            <Link className='list-items-four'>CMS</Link>
            <br/>
            <Link className='list-items-five'>Support</Link>
            <br/>
            <Link className='list-items-six'>Terms of Use</Link>
            <br/>
            <Link className='list-items-seven'>Warranty</Link>
            <br/>
            <Link className='list-items-eight'>Privacy Policy</Link>
        </div>

        <div className='container-two'>
            <h1>Contact</h1>
            <a href='/'><img src={Tiktok}  className="icon-one"/></a>
            <a href='/'><img src={Youtube} className="icon"/></a>
            <a href='/'><img src={Instagram} className="icon"/></a>
            <a href='/'><img src={Facebook} className="icon"/></a>
            <a href='/'><img src={Whatsapp} className="icon"/></a>

            <h1>Address</h1>
            <p className='container-two-p'>
                109, JALAN PASAR PUDU 55100<br/>
                &nbsp;&nbsp;&nbsp;KUALA LUMPUR, 55100 WILAYAH<br/>
            </p>
            <p className='container-two-p-p'>
                PERSEKUTUAN, Wilayah<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persekutuan Kuala Lumpur
            </p>
        </div>

        <div className='container-three'>
            <h1>Follow Us</h1>
            <p className='container-three-p'>011-2043 2729</p>

            <h1 className='container-three-h'>Opening Hours</h1>
            <p className='container-three-p-p'>
                Mon - Fri <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00a.m. - 6:00p.m.<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sat & Sun:Closed
            </p>
        </div>

        <div className='container-four'>
            <h1>Locate Us</h1>
            <div className='containerMap'>
            <iframe className='googlemap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4074664030372!2d101.61831431530922!3d2.9843040549747974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb57e80b63a17%3A0x524990299697c1df!2s%E2%AD%90WDA%20Technology%20-%20Digital%20Marketing%20in%20Malaysia%20%7C%20Social%20Media%20Marketing%20%7C%20Website%20Design!5e0!3m2!1sen!2smy!4v1667899386837!5m2!1sen!2smy" ></iframe>
            </div>
        </div>

        <div className='container-five'>
            Copyright © 2022 Uni View Solution Sdn Bhd
        </div>
    </div>
  )
}