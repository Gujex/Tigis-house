import React from 'react';
import logo from '../../images/logos/Logo.png'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
const Header = () => {
    return (
        <div>
            <nav className=" px-5 d-flex align-items-center justify-content-between w-100 border-bottom flex-wrap">
                <ul  className="d-flex list-unstyled col-lg-5 ">
                    <li className='nav_item m-2'>Home</li>
                    <li className='nav_item m-2'>Products</li>
                    <li className='nav_item m-2'>About</li>
                    <li className='nav_item m-2'>Blog</li>
                </ul>
                <div className="col-lg-2">
                <img width="auto" height={120} className="h-5 " alt="logo" src={logo} />
                </div>
                <ul  className="d-flex list-unstyled col-lg-5 justify-content-end">
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