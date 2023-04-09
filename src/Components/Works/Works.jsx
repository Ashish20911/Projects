import React from 'react';
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Works = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        <div className="awesome">
                <span style= {{color: darkMode? 'white':''}}>Works for all these</span>
                <span>Brands & Clients</span>
                <span className='wr'>
                    Lorem ispum is simpley dummy text of printing of printing lorem
                    <br/>
                    ispum is simpley dummy text of printing
                    <br/>
                    ispum is simpley dummy text of printing text of printing
                    <br/>
                    Loremispum is simpley dummy text
                </span>
                <button className="button s-button">Hire me</button>
                <div className= "blur s-blur1 " style={{background: "#ABF1FF94"}}></div>
            </div>
            <div className='w-rig'>
                <div className='w-maincir'>
                   <div className='w-seccir'>
                      <img src={Upwork} alt=""/>
                    </div>
                    <div className='w-seccir'>
                      <img src={Fiverr} alt=""/>
                    </div>
                    <div className='w-seccir'>
                      <img src={Amazon} alt=""/>
                    </div>
                    <div className='w-seccir'>
                      <img src={Shopify} alt=""/>
                    </div>
                    <div className='w-seccir'>
                      <img src={Facebook} alt=""/>
                    </div>
                </div>
                <div className='w-backcir bluecir'></div>
                <div className='w-backcir yellowcir'></div>
            </div>
    </div>
  )
}

export default Works;