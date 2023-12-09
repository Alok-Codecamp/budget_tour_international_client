import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faUser,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import support from './support.png'
import user from '../../Login/user.png'
const Header = () => {
    let [loginClick, setLoginClick] = useState(false);
    const HandleLoginClick =()=>{
        if(loginClick===false){
            setLoginClick(true)
            console.log("show");
        }
        else{
            setLoginClick(false);
            console.log("hide");
        }

    }
    return (
        <div className='header-container'>
                <div className='top-menu'>
                        <a className='call-1' href='#'><FontAwesomeIcon icon={faPhone} className='fa-phone'
                            size='sm' />IND Toll Free: +8801738472661</a>
                        <a className='call-2' href='#'>
                            <FontAwesomeIcon icon={faPhone} className='fa-phone'
                                size='sm' />UK Toll Free: +8801303312974</a>
                        <a className='care' href='#'>
                            <img className='support-logo' src={support}/>
                           We Care</a>
                           <a onClick={HandleLoginClick} className='login' href='#'>
                    <FontAwesomeIcon icon={faUser} className='login-logo' />
                        <span className='login-button'>Login</span>
                        <FontAwesomeIcon className='caretDown' icon={faCaretDown} size="sm"  />
                    </a>
                    <div className='login-dropdown' style={{visibility:loginClick?"visible":"hidden"}}>
                           <div className='user-details'>
                           <img className='login-profile-pic' src={user} alt="profile" /><br/>
                           <button  className='main-login-button'>Login</button>
                           <div className='new-user'>
                            <span className='register'>New user?</span><a className='register-button' href='#'>register</a>
                            </div>
                            </div>
                           <div className='user-controle'>
                           <p><Link className='user-controle-link-button' to="/">Manage Booking</Link></p>
                            <p><Link className='user-controle-link-button' to="/">Cancelation</Link></p>
                            <p><Link className='user-controle-link-button' to='/'>Profile</Link></p>
                           </div>
                          
                           
                    </div>
            </div>
            <nav className='main-menu'>
            <a href="#">India Tour Packages</a>
            <a href="#">International Tour Packages</a>
            <a href="#">Hotels</a>
            <a href="#">Transport</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
            </nav>
           
        </div>
    );
};

export default Header;