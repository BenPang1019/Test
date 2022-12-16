import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import '../About/About.css'

import background from '../../Images/AboutBackground.svg'
import backgroundTwo from '../../Images/AboutBackgroundTwo.svg'
import Repairing from '../../Images/Repairing.svg'
import Delivery from '../../Images/Delivery.svg'
import Warranty from '../../Images/Warranty.svg'

export const About = () => {
    return(
        <div className='about'>
            <Navbar/>
                <div className='containerOne'>
                    <img src={background} className="image"/>
                    <h1 className='containerOneHOne'>uniview</h1>
                    <h1 className='containerOneHTwo'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;has provided and distributed <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a wide range of security <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;systems to Malaysians for <br/> more than 6 years</h1>
                    <h1 className='containerOneHThree'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;founded in 2016 to help new <br/> generation improve their life style. We <br/> &nbsp;&nbsp;&nbsp;focused to provide high quality and <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;excellent service in security and <br/> &nbsp;&nbsp;surveillance field. Technologies grow <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rapidly every day and challenging <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;world of security system. <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and smarter living</h1>
                </div>

                <div className='containerTwo'>
                    <div className='marginTest'>
                        <h1 className='containerTwoHOne'>100+</h1>
                        <h1 className='containerTwoHOne'>50+</h1>
                        <h1 className='containerTwoHOne'>1K+</h1><br/>
                    </div>
                    <div className='margin'>
                        <h3 className='containerTwoHTwo'>employees</h3>
                        <h3 className='containerTwoHTwo'>partners</h3>
                        <h3 className='containerTwoHTwo'>product</h3>
                    </div>
                </div>

                <div className='containerThree'>
                    <h1 className='containerThreeHOne'>Everything Is About You</h1>
                    <p className='containerThreePOne'>Our goal is to give clients the highest-quality goods and services possible while upholding their expectations. We are enthusiastic to provide safety and prevention by providing the most cutting-edge security products, as well as to continually increase client satisfaction with our array of capabilities to forge lasting business relationships.</p>
                </div>

                <div className='imageContainer'>
                    <img src={backgroundTwo} className="image"/>
                </div>

                <div className='containerFour'>
                    <h1 className='containerFourHOne'>Repair, Set Up & Install Service</h1>
                    <h3 className='containerFourHTwo'>Repair & Reboot Your Old Security System Or Install The New Ones</h3>
                </div>

                <div className='containerFive'>
                    <div className='containerImage'>
                    <img src={Repairing} />
                    <h3 className='containerImageH'>Repairing</h3>
                    <p className='containerImageP'>We offer Repair service with <br/>or without Warranty</p>
                    </div>
                    <div className='containerImage'>
                    <img src={Delivery} />
                    <h3 className='containerImageH'>Delivery</h3>
                    <p className='containerImageP'>We offer delivery service for <br/>your products by Lalamove & Courier</p>
                    </div>
                    <div className='containerImage'>
                    <img src={Warranty} />
                    <h3 className='containerImageH'>Warranty</h3>
                    <p className='containerImageP'>We offer warranty check for<br/> your products</p>
                    </div>
                    <div>
                    <button className='containerFiveButton'>Explore</button>
                </div>
            </div>
            <Footer/>
        </div>
    )

}