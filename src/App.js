import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/Homepage";

const App = () => {
    return (
        <>
            <Footer/>
            <div className="px-5">
                <Header/>
                <Homepage/>
            </div>
        </>

    );
};

export default App;