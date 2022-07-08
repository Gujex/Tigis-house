import React from 'react';
import Header from "./components/header/Header";
import TopBar from "./components/footer/topBar";
import Homepage from "./components/homepage/Homepage";
import BottomFooter from "./components/footer/bottomFooter";
import ProductCarousel from "./components/productCarousel/carousel/productCarousel";
const App = () => {
    return (
        <>
            <TopBar/>
            <div>
                <Header/>
                <Homepage/>
                <ProductCarousel/>
                <BottomFooter />
            </div>
        </>

    );
};

export default App;