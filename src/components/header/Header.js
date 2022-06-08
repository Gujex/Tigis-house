import React from 'react';
import logo from '../../images/logos/Logo.png'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
const Header = () => {
    return (
        <div>
            <nav className="d-flex align-items-center justify-content-between ">
                <div ><img width={200} height={200} className="h-5" alt="logo" src={logo} /></div>
                <ul  className="d-flex list-unstyled  ">
                    <li className='nav_item m-2'><BsSearch size={30}/></li>
                    <li className='nav_item m-2'><AiOutlineUser size={30}/></li>
                    <li className='nav_item m-2'><AiOutlineHeart size={30}/></li>
                    <li className='nav_item m-2'><AiOutlineShoppingCart size={30}/></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;