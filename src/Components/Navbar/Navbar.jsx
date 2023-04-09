import React from 'react';
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
const Navbar=()=>{
    return (
        <div className="n-wrapper">
          <div className="n-left">
            <div className="n-name">Sudhanshu</div>
            <Toggle/>
          </div>
          <div className="n-right">
             <div className="n-list">
               <ul style={{listStyleType: 'none'}}>
                  <li className='home'>Home</li>
                  <li className='Services'>Services</li>
                  <li className='Portfolio'>Portfolio</li>
                  <li className='Testimonial'>Testimonial</li>
               </ul>
              </div> 
          </div>
            <button className="button  n-button">
                <a href="tel:6398934092"></a>Contact
            </button>
        </div>  
    )
}
export default Navbar;