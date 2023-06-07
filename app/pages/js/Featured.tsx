import React, { useEffect } from 'react'
import Image from 'next/image'
import car from "../images/6.jpg"
import "../css/Featured.css"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import axios from 'axios'
import url from './Host'

export default function Featured() {
  const [ cars, setCars ] = React.useState([])
  const [ price, setPrice ] = React.useState([])

  useEffect(() => {
    axios.get(`${url}/api/cars_get/`).then(res => {
      setCars(res.data)
    // console.log(res.data, 'fgkhl;');
    })
    // var s = cars[0].sale
    // var p = cars[0].price
    // if (s == 0) {
    //     setPrice(p)
    // } else {
    //     var f = p-(p*s/100)
    //     setPrice(f)
    // }
    
  }, []);

  return (
        <div className='featured'>
            <h5 className='featured_info'>Handy picked</h5>
            <h2 className='featured_title'>Featured Listings</h2>
            <div className="featured_body">
                <div className="featured_left">
                    <Image src={car} alt='a' className='featured_img' />
                    <div className="featured_bottom">
                        <h3 className='featured_name'>{cars[0].name}</h3>
                        <div className="featured_box">
                            <p className='feat_year'>2021</p>
                            <p className='feat_auto'>{cars[0].gearbox.name}</p>
                            <p className="feat_pet">{cars[0].fuel_sort.name}</p>
                            <p className='feat_p'>{cars[0].sale}</p>
                            <h4 className='feat_price'>{price}.sum</h4>
                        </div>
                    </div>
                </div>
                <div className="featured_right">
                    <div className="feat_card">
                        <Image src={car} alt='a' className='featured_img' />
                        <div className="featCard_bottom">
                            <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
                            <h4 className='featCard_price'>$4000</h4>
                            <div className="featCard_box">
                                <p className='featCard_year'>2021</p>
                                <p className='featCard_auto'>Automatic</p>
                                <p className="featCard_pet">Petrol</p>
                            </div>
                        </div>
                    </div>
                    <div className="feat_card">
                        <Image src={car} alt='a' className='featured_img' />
                        <div className="featCard_bottom">
                            <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
                            <h4 className='featCard_price'>$4000</h4>
                            <div className="featCard_box">
                                <p className='featCard_year'>2021</p>
                                <p className='featCard_auto'>Automatic</p>
                                <p className="featCard_pet">Petrol</p>
                            </div>
                        </div>
                    </div>
                    <div className="feat_card">
                        <Image src={car} alt='a' className='featured_img' />
                        <div className="featCard_bottom">
                            <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
                            <h4 className='featCard_price'>$4000</h4>
                            <div className="featCard_box">
                                <p className='featCard_year'>2021</p>
                                <p className='featCard_auto'>Automatic</p>
                                <p className="featCard_pet">Petrol</p>
                            </div>
                        </div>
                    </div>
                    <div className="feat_card">
                        <Image src={car} alt='a' className='featured_img' />
                        <div className="featCard_bottom">
                            <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
                            <h4 className='featCard_price'>$4000</h4>
                            <div className="featCard_box">
                                <p className='featCard_year'>2021</p>
                                <p className='featCard_auto'>Automatic</p>
                                <p className="featCard_pet">Petrol</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobileFeat_card">
                    <div className="feat_card">
                        <Image src={car} alt='a' className='featured_img' />
                        <div className="featCard_bottom">
                            <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
                            <h4 className='featCard_price'>$4000</h4>
                            <div className="featCard_box">
                                <p className='featCard_year'>2021</p>
                                <p className='featCard_auto'>Automatic</p>
                                <p className="featCard_pet">Petrol</p>
                            </div>
                        </div>
                    </div>
                    <div className="feat_card">
                        <Image src={car} alt='a' className='featured_img' />
                        <div className="featCard_bottom">
                            <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
                            <h4 className='featCard_price'>$4000</h4>
                            <div className="featCard_box">
                                <p className='featCard_year'>2021</p>
                                <p className='featCard_auto'>Automatic</p>
                                <p className="featCard_pet">Petrol</p>
                            </div>
                        </div>
                    </div>
                    <div className="feat_card">
                        <Image src={car} alt='a' className='featured_img' />
                        <div className="featCard_bottom">
                            <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
                            <h4 className='featCard_price'>$4000</h4>
                            <div className="featCard_box">
                                <p className='featCard_year'>2021</p>
                                <p className='featCard_auto'>Automatic</p>
                                <p className="featCard_pet">Petrol</p>
                            </div>
                        </div>
                    </div>
                    <div className="feat_card">
                        <Image src={car} alt='a' className='featured_img' />
                        <div className="featCard_bottom">
                            <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
                            <h4 className='featCard_price'>$4000</h4>
                            <div className="featCard_box">
                                <p className='featCard_year'>2021</p>
                                <p className='featCard_auto'>Automatic</p>
                                <p className="featCard_pet">Petrol</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feat_bottom">
                <div className="feat_left">
                    <p>Follow Us</p>
                    <a href='#' className="iconBox">
                        <FaFacebookF className='icon' />
                    </a>
                    <a href='#' className="iconBox">
                        <FaTwitter className='icon' />
                    </a>
                    <a href='#' className="iconBox">
                        <FaInstagram className='icon' />
                    </a>
                </div>
                <p className='feat_tit'>Follow Us</p>
                <button className='Btnbody feat_btn'>View News</button>
            </div>
        </div>
    )
}
