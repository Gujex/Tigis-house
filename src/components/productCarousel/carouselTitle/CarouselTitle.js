import React from 'react';
import "./carouselTitle.css"

const CarouselTitle = () => {
    return (
        <div className="pt-5 text-center mt-25">
            <p style={{letterSpacing: '0.3em'}} className="sub_title mt-5 text-uppercase fs-12 opacity-75 fw-600 font-monospace ">Tigis Shop</p>
            <h1 className=" mt-3 mb-3" style={{fontFamily: 'Marcellus'}}>Customer beauty essentials</h1>
            <p className="sub_title opacity-50">Removes all traces of dirt, makeup & sunscreen.</p>
        </div>
    );
};
export default CarouselTitle;