import React from 'react'
import styled from 'styled-components';
import Logo from './cwh.svg'
import { Link } from "react-router-dom";
import './header.css'

function Header() {
    return (
        <HeaderCom className='shadow-sm fixed-top'>
            <img alt='' src={Logo} className='logo_' style={{width:'80px', margin: 0}} />
            <div className='px-1'>
                <Link to='/'>
                    <i className="fa icon fa-tv text-dark mx-1 btn" style={{fontSize: "30px", margin: 0}}></i>
                </Link>
                
                <Link to='/question'>
                    <i className="fa icon fa-pencil-square-o text-dark mx-1 btn" style={{fontSize: "30px", margin: 0}}></i>
                </Link>
                <Link to='/profile'>
                    <i className="fa icon fa-user-o text-dark btn" style={{fontSize: "30px",  margin: 0}}></i>
                </Link>
            </div>
        </HeaderCom>
    )
}

export default Header;

const HeaderCom = styled.div`
    background-color: white;
    padding: 13px 20px;
    margin-bottom : 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
