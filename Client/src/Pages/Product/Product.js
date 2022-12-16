import React, { useState,useEffect } from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios';
import './Product.css'
import PopularOne from '../../Images/PopularOne.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Grid } from "swiper";
import { Link,useNavigate,createSearchParams } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";



export const Product = () =>{
    const [product, setProduct] = useState([])

    const [currentPage, setCurrentPage] = useState(1); // Keep track of the current page
    const itemsPerPage = 8; // The number of items to display per page
    // Use the currentPage and itemsPerPage to get the slice of data to display
    const currentItems = product.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`/routes/getProduct`); 
              console.log(res)
              setProduct(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

      
    return(
        <div className='product'>
            <Navbar/>
                <div className='filterContainer'>
                    <h1 className='filterHOne'>Browse By</h1>
                    <input className='filterInput'></input>
                    <div className='filterButtonSearchContainer'>
                    <button className='filterSearchButton'>Search</button>
                    </div>
                    <div className='filterButtonClearContainer'>
                    <button className='filterClearButton'>Clear All</button>
                    </div>
                    {/* <h3>Categories</h3> */}
                </div>

                <div>
                </div>

                
                <div className='productContainer'>
                    {currentItems.map((getProduct) => (
                        <div className='imageContainer ' key={getProduct.id}>
                            <img src={PopularOne} className="image"/>
                            <Link to="/productsDetails" state={{ product:getProduct }}>{getProduct.productName}</Link>
                            <h3>{getProduct.productPrice}</h3>
                        </div>  
                    ))}

                    <div>
                        {currentPage > 1 && (
                        <button onClick={() => setCurrentPage(currentPage - 1)}>
                            Previous
                        </button>
                        )}
                        {currentPage < product.length / itemsPerPage && (
                        <button onClick={() => setCurrentPage(currentPage + 1)}>
                            Next
                        </button>
                        )}
                    </div>
                </div>
            <Footer/>
        </div>
    )
}