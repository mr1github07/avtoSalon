'use client'
import React from 'react'
import Image from 'next/image'
import car from "../images/6.jpg"   
import '../css/Popular.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Popular () {
  return (
    <div className='popular'>
      <div className='popular_top'>
        <h1>Popular Makes</h1>
        <div className='pop_btns'>
          <a href='#!' className='popular_btn'>
            Audi
          </a>
          <a href='#!' className='popular_btn'>
            BMW
          </a>
          <a href='#!' className='popular_btn'>
            Cadillac
          </a>
          <a href='#!' className='popular_btn'>
            Ferrari
          </a>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1400: {
            slidesPerView:  3,
            spaceBetween: 40
          },
          1900: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        modules={[Navigation]}
        className='mySwiper'
      >
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiperPopCard'>
          <div className='feat_card'>
            <Image src={car} alt='a' className='featured_img' />
            <div className='featCard_bottom'>
              <h3 className='featCard_name'>BMW 8-serie 2-door coupe grey</h3>
              <h4 className='featCard_price'>$4000</h4>
              <div className='featCard_box'>
                <p className='featCard_year'>2021</p>
                <p className='featCard_auto'>Automatic</p>
                <p className='featCard_pet'>Petrol</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
