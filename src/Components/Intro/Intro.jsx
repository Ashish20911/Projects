import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv  from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { useContext } from "react";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
       <div className="i-left">
        <div className="i-name">
          <span style= {{color: darkMode? 'white':''}}>Hi! I Am </span>
          <span>Sudhanshu Narayan </span>
          <span style= {{color: darkMode? 'white':''}}>Frontend Developer</span>
          <span>I'm having basic level of experience in web designing and development,having craving to learn new skills and upgrade.</span>
        </div>
        <button className="button  i-button">Hire me</button>
        <div className="  i-icons">
          <a className='social git' href='https://github.com/Ashish20911'><img  src={Github} alt=""/></a>
          <a className='social lin' href='https://www.linkedin.com/in/sudhanshu-narayan-94117a244/'><img src={LinkedIn} alt=""/></a>
          <a className='social inst' href='https://www.instagram.com/silent_soul_1109/ '><img  src={Instagram} alt=""/></a>
        </div>
       </div>
       <div className="i-right">
       <img src={Vector1} alt=""/>
       <img src={Vector2} alt=""/>
       <img src={boy} alt=""/>
       <img src={glassesimoji} alt=""/>
       <div className='fl1' style={{top: '4%', left: '55%'}}>
         <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
       </div>
       <div className='.fl2' style={{top: '69%', left: '6.5%'}}>
       <FloatingDiv image={thumbup} txt1='Best' txt2='Designer'/>
       </div>
       <div className="blur" style={{background: "rgb(236 210 255)"}}></div>
       <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-6rem'}}></div>
       </div>
    </div>
  )
}

export default Intro;