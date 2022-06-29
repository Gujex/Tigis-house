import React from 'react';
import Header from "./components/header/Header";
import TopBar from "./components/footer/topBar";
import Homepage from "./components/homepage/Homepage";
import BottomFooter from "./components/footer/bottomFooter";

const App = () => {
    return (
        <>
            <TopBar/>
            <div>
                <Header/>
                <Homepage/>
                <BottomFooter />
            </div>
        </>

    );
};

export default App;