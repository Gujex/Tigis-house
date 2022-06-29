import React from 'react';
import {FiFacebook, } from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";
import {HiOutlineMail, HiOutlineLocationMarker} from "react-icons/hi";

const TopBar = () => {
    return (
        <div  className="bg-danger ">
            <div className="col-lg-3 col-md-3 col-sm-3 text-lg-left px-5 d-flex justify-content-between align-items-center h-100 w-100">
                <div >
                    <a className="text-decoration-none text-light" href="https://www.facebook.com/Tigissakhli" target="_blank"><FiFacebook  color="white" size={20}/></a>
                    <a className="text-light text-decoration-none" href="https://www.instagram.com/tigissakhli/" target="_blank"><AiOutlineInstagram className="m-lg-2" color="white" size={20}/></a>
                </div>
                <div >
                    <span className="text-decoration-none m-lg-4 text-light" ><HiOutlineMail className='m-lg-2' color="white" size={20}/> tigishome@gmail.com</span>
                    <span className="text-light text-decoration-none"><HiOutlineLocationMarker className='m-lg-2' color="white" size={20}/>     Odzisi 1812 Dusheti, Georgia</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;