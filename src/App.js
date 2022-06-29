import React from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/Homepage";

const App = () => {
    return (
        <>
            <Footer/>
            <div>
                <Header/>
                <Homepage/>
            </div>
        </>

    );
};

export default App;