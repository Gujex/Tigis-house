import React from 'react';
import logo from '../../images/logos/Logo.png'
import "./header.css"
import Icons from "./header-icons/icons";
const Header = () => {
    return (
        <div>
            <nav className=" px-5 d-flex align-items-center justify-content-between w-100 border-bottom flex-wrap">
                <ul className="d-flex list-unstyled col-lg-5 ">
                    <li className='nav_item m-2'>Home</li>
                    <div className="dropdown">
                        <li className='products_parent dropbtn'>Products</li>
                        <ul className="dropdown-content products_list " id="to-show">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                    <li className='nav_item m-2'>About</li>
                    <li className='nav_item m-2'>Blog</li>
                </ul>
                <div className="col-lg-2">
                    <img width="auto" height={120} className="h-5 " alt="logo" src={logo}/>
                </div>
               <Icons />
            </nav>
        </div>
    );
};
export default Header;