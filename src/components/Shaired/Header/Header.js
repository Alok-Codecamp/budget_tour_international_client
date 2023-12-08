import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadSideMask, faHeadset, faPhone, faUser,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import support from './support.png'
const Header = () => {
    return (
        <div className='header-container'>
                <div className='top-menu'>
                        <a className='call-1'><FontAwesomeIcon icon={faPhone} className='fa-phone'
                            size='sm' />IND Toll Free: +8801738472661</a>
                        <a className='call-2'>
                            <FontAwesomeIcon icon={faPhone} className='fa-phone'
                                size='sm' />UK Toll Free: +8801303312974</a>
                        <a className='care'>
                            <img className='support-logo' src={support}/>
                           We Care</a>
                           <a className='login'>
                    <FontAwesomeIcon icon={faUser} className='login-logo' />
                        <Link className='login-button' to='/login'>Login</Link>
                        <FontAwesomeIcon className='caretDown' icon={faCaretDown} size="sm"  />
                    </a>
            </div>
           <h1>hello </h1>
        </div>
    );
};

export default Header;