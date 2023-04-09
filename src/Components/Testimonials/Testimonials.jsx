import React from 'react';
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import {Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
const Testimonials = () => {
    const clients=[
         {img: profilePic1,
         review:"jksdgfioelklwfnflksflksbsmnsnssbsbsbmsmmsdkscjksdjkbkjcksdcbsmbmlkssdg"},
         {img: profilePic2,
            review:"jksdgfioelklwfnflksflksbsmnsnssbsbsbmsmmsdkscjksdjkbkjcksdcbsmbmlkssdg"},
         {img: profilePic3,
            review:"jksdgfioelklwfnflksflksbsmnsnssbsbsbmsmmsdkscjksdjkbkjcksdcbsmbmlkssdg"},             
         {img: profilePic4,
            review:"jksdgfioelklwfnflksflksbsmnsnssbsbsbmsmmsdkscjksdjkbkjcksdcbsmbmlkssdg"} 
        ]
  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span className='testh'>Clients always get </span>
            <span className='testh'>Exceptional Work </span>
            <span className='testh'> from me...</span>
            <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:"skyblue"}}></div>
        </div>
        <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable:true}}>
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className='testimonial'>
                        <img src={client.img} alt=""/>
                        <span className='review'>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper> 
    </div>
  )
}

export default Testimonials;