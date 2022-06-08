import React from 'react';
import Header from "./components/header/Header";
import {Button} from "react-bootstrap";
import {FaGithub} from "react-icons/fa";

const App = () => {
    return (
        <div className="">
            <Header />
            <FaGithub />
        </div>
    );
};

export default App;