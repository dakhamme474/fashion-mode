
import React, { useEffect, useState } from "react";
import item1 from "../../assets/images/item1.jpg";
import item2 from "../../assets/images/item2.jpg";
import item3 from "../../assets/images/item3.jpg";
import item4 from "../../assets/images/item4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export const Product = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });

    };

    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section className="section-product">
                <div className="heading-page"><h1>PANIER</h1>
                    <p>New Arrival Men Collection</p>
                </div>
                <div className="page-product">
                    <div className="all-categorie">
                        <div>
                            <h1>Categorie</h1>
                            <p>All</p>
                            <p>Women</p>
                            <p>Men</p>
                            <p>Kids</p>
                            <p>Accessoire</p>
                        </div>
                        <div>
                            <h1>Filter</h1>
                            <div><input type="text" placeholder="       search products..." /></div>
                        </div>
                    </div>
                    <div className="mark-the-all">
                        <div className="add-to"><p>Nombre de product search:15All</p></div>
                        <div className="categorie-row">
                            <div className="car-product">
                                <div className="img-to-product"><img src={item1} alt="" /></div>
                                <div className="info-to-product">
                                    <p>Denim Jacket Blue</p>
                                    <p>$92.50</p>
                                </div>
                            </div>
                            <div className="car-product">
                                <div className="img-to-product"><img src={item2} alt="" /></div>
                                <div className="info-to-product">
                                    <p>Denim Jacket Blue</p>
                                    <p>$92.50</p>
                                </div>
                            </div>
                            <div className="car-product">
                                <div className="img-to-product"><img src={item3} alt="" /></div>
                                <div className="info-to-product">
                                    <p>Denim Jacket Blue</p>
                                    <p>$92.50</p>
                                </div>
                            </div>
                        </div>
                        <div className="categorie-row">
                            <div className="car-product">
                                <div className="img-to-product"><img src={item3} alt="" /></div>
                                <div className="info-to-product">
                                    <p>Denim Jacket Blue</p>
                                    <p>$92.50</p>
                                </div>
                            </div>
                            <div className="car-product">
                                <div className="img-to-product"><img src={item1} alt="" /></div>
                                <div className="info-to-product">
                                    <p>Denim Jacket Blue</p>
                                    <p>$92.50</p>
                                </div>
                            </div>
                            <div className="car-product">
                                <div className="img-to-product"><img src={item2} alt="" /></div>
                                <div className="info-to-product">
                                    <p>Denim Jacket Blue</p>
                                    <p>$92.50</p>
                                </div>
                            </div>
                        </div>
                        <div className="categorie-row">
                            <div className="car-product">
                                <div className="img-to-product"><img src={item2} alt="" /></div>
                                <div className="info-to-product">
                                    <p>Denim Jacket Blue</p>
                                    <p>$92.50</p>
                                </div>
                            </div>
                            <div className="car-product">
                                <div className="img-to-product"><img src={item3} alt="" /></div>
                                <div className="info-to-product">
                                    <p>Denim Jacket Blue</p>
                                    <p>$92.50</p>
                                </div>
                            </div>
                            <div className="car-product">
                                <div className="img-to-product"><img src={item1} alt="" /></div>
                                <div className="info-to-product">
                                    <p>Denim Jacket Blue</p>
                                    <p>$92.50</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {showScrollToTop && (

                    <FontAwesomeIcon icon={faAnglesUp} className="scroll-to-top" onClick={handleScrollToTop} />
                )}
            </section>
        </>
    );
};