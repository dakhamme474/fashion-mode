import React, { useState } from "react";
import headingpage from "../../assets/images/headingpages.jpg";
import items1 from "../../assets/images/item1.jpg";
import items2 from "../../assets/images/item2.jpg";
import items3 from "../../assets/images/item3.jpg";

export const Panier = () => {
    let [price , setPrice] = useState(19)
    let [count , setCount] = useState(1)
    const xadd = () =>{
        
        setCount(count + 1)
        setPrice(price + 19)
    }
    const xmince = () =>{
        setCount(count - 1)
        setPrice(price - 19)
    }
    let [count1 , setCount1] = useState(1)
    const xadd1 = () =>{
        setCount1(count1 + 1)

    }
    const xmince1 = () =>{
        setCount1(count1 - 1)
    }
    let [count2 , setCount2] = useState(1)
    const xadd2 = () =>{
        setCount2(count2 + 1)
    }
    const xmince2 = () =>{
        setCount2(count - 1)
    }
    return (
        <>
            <section className="section-panier">
                <div className="heading-page"><h1>PANIER</h1></div>
                <div className="font-product">
                    <div><h1>PRODUCT</h1></div>
                    <div className="p-q"><h1>PRICE</h1>
                    <h1>QUANTITY</h1></div>
                    <div><h1>TOTAL</h1></div>
                </div>
                <div className="all-card-product">
                    <div className="produit">
                        <div className="pic-item"><img src={items1} alt="" />
                            <p className="text-gray">Jacket Jean </p></div>
                        <div className="price-quanty"><p className="text-gray">$19.00</p>
                            <div className="quantity"><button onClick={xmince}>-</button> <p>{count}</p> <button onClick={xadd}>+</button></div>

                        </div>
                        <div><p className="text-gray">${price}</p></div>

                    </div>
                    <div className="produit">
                        <div className="pic-item"><img src={items2} alt="" />
                            <p className="text-gray">Cartable Noir </p></div>
                        <div className="price-quanty"><p className="text-gray">$19.00</p>
                            <div className="quantity"><button onClick={xmince1}>-</button> <p>{count1}</p> <button onClick={xadd1}>+</button></div>

                        </div>
                        <div><p className="text-gray nine">$19.00</p></div>

                    </div>
                    <div className="produit">
                        <div className="pic-item"><img src={items3} alt="" />
                            <p className="text-gray">Jean  Women </p></div>
                        <div className="price-quanty"><p className="text-gray">$19.00</p>
                            <div className="quantity"><button  onClick={xmince2}>-</button> <p>{count2}</p> <button onClick={xadd2}>+</button></div>

                        </div>
                        <div><p className="text-gray">$19.00</p></div>

                    </div>
                </div>
            </section>
        </>
    );
};
