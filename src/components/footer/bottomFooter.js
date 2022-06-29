import React from 'react';
import {FiFacebook} from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";

const BottomFooter = () => {
    return (
        <footer className="w-100 h-25  d-flex p-5 justify-content-around" style={{background: '#434842'}}>
            <div className="footerElement text-secondary">
                <h4 className="text-light ">თიგის სახლი</h4>
                <div className="mt-4">
                    <strong>
                        <p> ოძისი 1812 დუშეთი, საქართველო</p>
                        <p>ტელ: 557 26 92 95</p>
                        <p>Gmail: tigishome@gmail.com</p>
                    </strong>
                    <div className="d-flex">
                        <a className="text-decoration-none text-light" href="https://www.facebook.com/Tigissakhli"
                           target="_blank"><FiFacebook color="white" size={20}/></a>
                        <a className="text-light text-decoration-none" href="https://www.instagram.com/tigissakhli/"
                           target="_blank"><AiOutlineInstagram color="white" size={20}/></a>
                    </div>
                </div>
            </div>
            <div className="footerElement text-secondary ">
                <h4 className="text-light">ძირითადი ინფორმაცია</h4>
                <div className="mt-4">
                    <strong>
                        <p>ჩვენს შესახებ</p>
                        <p>Privacy Policy</p>
                    </strong>
                </div>
            </div>
            <div className="footerElement text-secondary">
                <h4 className="text-light ">კატეგორიები</h4>
                <div className="mt-4">
                    <strong>
                        <p>Product 1</p>
                        <p>Product 2</p>
                        <p>Product 3</p>
                        <p>Product 4</p>
                    </strong>
                </div>

            </div>
        </footer>
    );
};

export default BottomFooter;