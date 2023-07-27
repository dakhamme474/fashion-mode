import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faPinterest, faSnapchat, faYoutube } from "@fortawesome/free-brands-svg-icons";
import discover from "../assets/images/cards/discover.png";
import express from "../assets/images/cards/express.png";
import mastercard from "../assets/images/cards/mastercard.png";
import paypal from "../assets/images/cards/paypal.png";
import visa from "../assets/images/cards/visa.png";
export const Footer = () => {
    return (
        <>
            <footer>
                <div className="element-foot">
                    <div className="fot-one">
                        <h1>GET IN TOUCH</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci ducimus voluptate culpa? Temporibus? call on (+212644156337)</p>
                        <div className="icone-footer">

                        <a href="https://web.facebook.com/profile.php?id=100011073520913" className="icone-sous" target="blank"><FontAwesomeIcon icon={faFacebook}  /></a>
                        <a href="https://www.instagram.com/amine_dakhamme_/" className="icone-sous" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.pinterest.com/" className="icone-sous" target="blank"><FontAwesomeIcon icon={faPinterest} /></a>
                        <a href="https://www.snapchat.com/" className="icone-sous" target="blank"><FontAwesomeIcon icon={faSnapchat}  /></a>
                        <a href="https://www.youtube.com/" className="icone-sous" target="blank"><FontAwesomeIcon icon={faYoutube}   /></a>
                        </div>
                    </div>
                    <div className="links"><h1>LINKS</h1>
                    <p>Searsh</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Returns</p>
                    </div>
                    <div className="links"><h1>LINKS</h1>
                    <p>Searsh</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Returns</p>
                    </div>
                </div>
                <div className="pay">
                <img src={paypal} alt="" />
                <img src={visa} alt="" />
                <img src={mastercard} alt="" />
                <img src={express} alt="" />
                <img src={discover} alt="" />
                
                </div>
                <p className="copyright">copyright © all rights reserved</p>
            </footer>
        </>
    );
};