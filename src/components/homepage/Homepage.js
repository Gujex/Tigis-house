import React from 'react';
import Slider from "./slider/Slider";
import DemandedProductsSlider from "./DemandedProductsSlider/DemandedProductsSlider";

const Header = () => {
    return (
        <>
            <Slider/>
            <DemandedProductsSlider />
        </>
    );
};

export default Header;