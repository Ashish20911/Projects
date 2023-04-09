import React from 'react';
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card  from "../Card/Card";
import Resume from './20bec108.Sudhanshu.pdf';
import { themeContext } from "../../Context";
import { useContext } from "react";
const Services = () =>{
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="services">
            <div className="awesome">
                <span style= {{color: darkMode? 'white':''}}>My Awesome</span>
                <span>Skills</span>
                <span>Lorem ispum is simpley dummy text of printing of printing lorem<br/>ispum is simpley dummy text of printing</span>
                <a href={Resume}download><button className="button s-button">Download Resume</button></a>
                <div className= "blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            <div className="cards ">
               <div className='card1' style={{left:'52rem', top:'53.5rem'}}>
                 <Card  emoji={HeartEmoji} heading={'Design'} detail={"Figma, Sketch, Photoshop, Abobe, Adobe xd"}/>
               </div> 
               <div className='card2' style={{left:'35rem', top:'65rem'}}>
                 <Card emoji={Glasses} heading={'Developer'} detail={"HTML, CSS, JavaScript, React"}/>
               </div> 
               <div className='card3' style={{left:'50rem', top:'71rem'}}>
                 <Card emoji={Humble} heading={'DSA'} detail={"Array, LinkedList, tree, Queue, Stack"}/>
               </div> 
               <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}
export default Services;

