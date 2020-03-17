import React, { Component } from 'react';
import './Header.css';
class Header extends Component
 {
    render()
    {
        return(
                <div className="header">
                   <div className="msit-logo"></div>
                   <div className="title-login">MSIT Seminar Hall Schedular </div>
                </div>  
              )
    }
 }
export default Header;         