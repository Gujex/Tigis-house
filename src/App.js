import React from 'react';
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <>
            <Footer/>
            <div className="px-5">
                <Header/>
                <Slider/>
            </div>
        </>

    );
};

export default App;