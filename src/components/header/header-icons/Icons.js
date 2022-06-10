import React from 'react';
import {BsSearch} from "react-icons/bs";
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";

const Icons = () => {
    return (
        <ul className="d-flex list-unstyled col-lg-5 justify-content-end">
            <li className='nav_item m-2'><BsSearch size={28}/></li>
            <li className='nav_item m-2'><AiOutlineUser size={30}/></li>
            <li className='nav_item m-2'><AiOutlineHeart size={30}/></li>
            <li className='nav_item m-2'><AiOutlineShoppingCart size={30}/></li>
        </ul>
    );
};

export default Icons;