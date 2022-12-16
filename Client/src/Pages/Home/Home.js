import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import ImageOne from '../../Images/ImageOne.svg'
import ImageTwo from '../../Images/ImageTwo.svg'
import ImageThree from '../../Images/ImageThree.svg'
import ImageFour from '../../Images/ImageFour.svg'
import Experience from '../../Images/Experience.svg'
import Quality from '../../Images/Quality.svg'
import Professional from '../../Images/Professional.svg'
import Stars from '../../Images/Reviews.svg'
import PopularOne from '../../Images/PopularOne.svg'
import PopularTwo from '../../Images/PopularTwo.svg'
import PopularThree from '../../Images/PopularThree.svg'
import NewOne from '../../Images/NewOne.svg'
import NewTwo from '../../Images/NewTwo.svg'
import NewThree from '../../Images/NewThree.svg'
import Search from '../../Images/Search.svg'

import '../Home/Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useLocation, useSearchParams } from 'react-router-dom'

import Background from '../../Images/HomeBackGround.svg'

export const Home = () => {

  // const location = useLocation();
  // console.log(location.state.product.productName)

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  
  return (
    <div className='home'>
      <Navbar/>
          <div className='container-one'>
            <img src={Background} className='image'/>
            <h1 className='container-one-h'>One Place</h1>
            <h1 className='container-one-h-h'>for all your security solution</h1>
            <h1 className='container-one-h-h-h'>Enabling a safer society <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and smarter living</h1>
          </div>

          <div className='container-card'>
            <Swiper
              navigation={true}
              pagination={true}
              loop={true}
              slidesPerView={1}
              slidesPerGroup={1}
              allowTouchMove={false}
              modules={[Navigation, Pagination]}
            >
            <SwiperSlide>
              <div className='card'>
                <img src={ImageOne} />
                <h3 className='card-h'>IP PBX Phone System</h3>
              </div>
              <div className='card'>
                <img src={ImageFour} />
                <h3 className='card-h'>Alarm Security System</h3>
              </div>
              <div className='card'>
                <img src={ImageTwo} />
                <h3 className='card-h'>Solar System Solution</h3>
              </div>
              <div className='card'>
                <img src={ImageThree} />
                <h3 className='card-h'>Gate System</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img src={ImageOne} />
                <h3 className='card-h'>IP PBX Phone System</h3>
              </div>
              <div className='card'>
                <img src={ImageFour} />
                <h3 className='card-h'>Alarm Security System</h3>
              </div>
              <div className='card'>
                <img src={ImageTwo} />
                <h3 className='card-h'>Solar System Solution</h3>
              </div>
              <div className='card'>
                <img src={ImageThree} />
                <h3 className='card-h'>Gate System</h3>
              </div>
            </SwiperSlide>
            <div className='empty-container'></div>
            </Swiper>
          </div>

          <div className='containerThree'>
            <h1 className='containerThree-h'>Uni View Solution Sdn Bhd</h1>
            <p className='containerThree-p'>
              is a well-established home Security System Supplier in Malaysia Founded in 2016, we care about<br/>
              providing the best security systems to meet the evolving needs of modern society to advance safety
            </p>
            <div className='container-image'>
              <img src={Experience} />
              <h3 className='container-image-h'>Experienced</h3>
              <p className='container-image-p'>Step by step guide from <br/>experienced professional</p>
            </div>
            <div className='container-image'>
              <img src={Quality} />
              <h3 className='container-image-h'>High Quality</h3>
              <p className='container-image-p'>All kind of security tech from<br/> high-quality brands</p>
            </div>
            <div className='container-image'>
              <img src={Professional} />
              <h3 className='container-image-h'>Professional</h3>
              <p className='container-image-p'>Provides many solutions to<br/> meet specific needs</p>
            </div>
            <div>
            <button className='containerThree-button'>Explore</button>
            </div>
          </div>

          <div style={{ backgroundColor:'#205696' }}>
          <div className='containerFour'>
            <h1 className='containerFourHeader'>Customer Reviews</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={2}
                slidesPerGroup={1}
                loop={true}
                navigation={true}                               
                modules={[Navigation]} 
                allowTouchMove={false}
              >
              <SwiperSlide>
              <div className='containerFourCard'>
                  <img src={Stars} />
                  <p className='containerFourPrgOne'>
                    Jz installed both cctv n security lock,  excellent services, speedy n professional technical teams, <br/>explained in detail during the installation....
                  </p>
                  <p className='containerFourPrgTwo'>Wong Yoke Leng</p>
                  <p className='containerFourPrgThree'>2 months ago</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerFourCard'>
                  <img src={Stars} />
                  <p className='containerFourPrgOne'>
                    Jz installed both cctv n security lock,  excellent services, speedy n professional technical teams, <br/>explained in detail during the installation....
                  </p>
                  <p className='containerFourPrgTwo'>Wong Yoke Leng</p>
                  <p className='containerFourPrgThree'>2 months ago</p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerFourCard'>
                  <img src={Stars} />
                  <p className='containerFourPrgOne'>
                    Jz installed both cctv n security lock,  excellent services, speedy n professional technical teams, <br/>explained in detail during the installation....
                  </p>
                  <p className='containerFourPrgTwo'>Wong Yoke Leng</p>
                  <p className='containerFourPrgThree'>2 months ago</p>
              </div>
              </SwiperSlide>
            </Swiper>
          </div>
          </div>

          <div className='containerFive'>
            <h1 className='containerFiveHeader'>Popular Products</h1>
            <div className='containerFiveCard'>
              <img src={PopularOne} />
              <p className='containerFivePrg'>ZKTeco HBL400 <br/>Smart Lock</p>
            </div>
            <div className='containerFiveCard'>
              <img src={PopularTwo} />
              <p className='containerFivePrg'>Voom Backup <br/>Battery 12v7AH</p>
            </div>
            <div className='containerFiveCard'>
              <img src={PopularThree} />
              <p className='containerFivePrg'>ZKTeco TS2000<br/> Pro Tripod Tur...</p>
            </div>
            <div className='containerFiveCardMore'>
              <ol start="4">
                <li>
                  <Link className='containerFiveCardMorePrg'>Hikvision DS-PK LCD...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>ZKTeco SF300 IP Fin... </Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>CCTV DVR Recorde...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>ZKTeco FBL200 Seri...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>Solar Garden Light</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>Reolink Go IP Camer...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>VGATE-68 Stainless...</Link>
                </li>
              </ol>
              </div>
              <div>
              <Link className='More'>More {'>'}</Link>
              </div>
          </div>

          <div className='containerFive'>
            <h1 className='containerFiveHeaderNew'>Whats' New ?</h1>
            <div className='containerFiveCard'>
              <img src={NewOne} />
              <p className='containerFivePrgNew'>The Perks Of <br/> Using Smart <br/> Door Lock</p>
            </div>
            <div className='containerFiveCard'>
              <img src={NewTwo} />
              <p className='containerFivePrgNew'>Coax Cable: 5 <br/> Benefits It <br/> Brings</p>
            </div>
            <div className='containerFiveCard'>
              <img src={NewThree} />
              <p className='containerFivePrgNew' >Top 5 <br/> Amusement<br/>  Park Turnstile...</p>
            </div>
            <div className='containerFiveCardMore'>
              <ol start="4">
                <li>
                  <Link className='containerFiveCardMorePrg'>Benefits Of Central...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>Features & Benefits...  </Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>What Metal Detector...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>Popular Places To Vis...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>Best CCTV Repair, H...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>Features & 5 Advant...</Link>
                </li>
                <li>
                  <Link className='containerFiveCardMorePrg'>Coax Cable: 5 Benefi...</Link>
                </li>
              </ol>
              </div>
              <div>
              <Link className='More'>More {'>'}</Link>
              </div>
          </div>

        
          <div className='containerSix'>
            <h1 className='containerSixHeader'>What Are You Searching For?</h1>
            <Swiper
              direction={"vertical"}
              pagination={pagination}
              modules={[Pagination]}
              loop={true}
              slidesPerView={1}
              style={{ height: 520 }}
              className="mySwiper"
            >
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Search} />
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 >IP PBX Phone System</h1>
                  VSH Technology provide brand IP PHONE, it equipped IP PBX PHONE SYSTEM. As an example, COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, etc.<br/><br/>
                  Apart from this, Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers... Read More
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Search} />
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 >IP PBX Phone System 2</h1>
                  VSH Technology provide brand IP PHONE, it equipped IP PBX PHONE SYSTEM. As an example, COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, etc.<br/><br/>
                  Apart from this, Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers... Read More
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Search} />
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 >IP PBX Phone System 3</h1>
                  VSH Technology provide brand IP PHONE, it equipped IP PBX PHONE SYSTEM. As an example, COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, etc.<br/><br/>
                  Apart from this, Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers... Read More
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Search} />
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 >IP PBX Phone System 4</h1>
                  VSH Technology provide brand IP PHONE, it equipped IP PBX PHONE SYSTEM. As an example, COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, etc.<br/><br/>
                  Apart from this, Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers... Read More
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Search} />
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 >IP PBX Phone System 5</h1>
                  VSH Technology provide brand IP PHONE, it equipped IP PBX PHONE SYSTEM. As an example, COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, etc.<br/><br/>
                  Apart from this, Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers... Read More
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Search} />
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 >IP PBX Phone System 6</h1>
                  VSH Technology provide brand IP PHONE, it equipped IP PBX PHONE SYSTEM. As an example, COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, etc.<br/><br/>
                  Apart from this, Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers... Read More
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Search} />
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 >IP PBX Phone System 7</h1>
                  VSH Technology provide brand IP PHONE, it equipped IP PBX PHONE SYSTEM. As an example, COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, etc.<br/><br/>
                  Apart from this, Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers... Read More
                </p>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='containerSixCard'>
                <img src={Search} />
                <div className='prgCotainer'>
                <p className='containerSixCardPrg'>
                  <h1 >IP PBX Phone System 8</h1>
                  VSH Technology provide brand IP PHONE, it equipped IP PBX PHONE SYSTEM. As an example, COOVOX-U30, X1S Enterprise IP Phone and X1SP Enterprise IP Phone. Our IP Phone System have features like Flexible Installation Mode, Support EHS Headset Free Your Hands, Enhanced HD Audio Communication, Third-party Software Integrations, Call Recording, Caller ID, Call Screening, Music on Hold, Voicemail, etc.<br/><br/>
                  Apart from this, Automated Attendants are perhaps one of the most recognizable and essential of all VoIP business phone features. It allows incoming calls to be transferred to the correct extension without the requirement for a receptionist. Not only that, IP Phone even have features Custom Ringback. A custom ringback refers to what your inbound callers... Read More
                </p>
                </div>
              </div>
              </SwiperSlide>
              </Swiper>
          </div>
      <Footer/>
    </div>
  )
}
